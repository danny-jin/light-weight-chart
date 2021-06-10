import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { createChart, CrosshairMode } from 'lightweight-charts';

import { ohlc } from "./bitquery";

import './styles.css';

function App() {
  const chartContainerRef = useRef();
  const chart = useRef();
  const resizeObserver = useRef();
  const series = useRef();
  const [tokenAddress, setTokenAddress] = useState('0xd7730681b1dc8f6f969166b29d8a5ea8568616a3');

  useEffect(() => {
    chart.current = createChart(chartContainerRef.current, {
      width: chartContainerRef.current.clientWidth,
      height: chartContainerRef.current.clientHeight,
      layout: {
        backgroundColor: '#253248',
        textColor: 'rgba(255, 255, 255, 0.9)',
      },
      grid: {
        vertLines: {
          color: '#334158',
        },
        horzLines: {
          color: '#334158',
        },
      },
      crosshair: {
        mode: CrosshairMode.Normal,
      },
      priceScale: {
        borderColor: '#485c7b',
      },
      timeScale: {
        borderColor: '#485c7b',
      },
    });

    console.log(chart.current);

    series.current = chart.current.addCandlestickSeries({
      upColor: 'rgba(120, 226, 160, 1)',
      borderVisible: false,
      priceFormat: {
        precision: 6,
        minMove: 0.000001
      }
    });

    

  }, []);

  // Resize chart on container resizes.
  useEffect(() => {
    resizeObserver.current = new ResizeObserver(entries => {
      const { width, height } = entries[0].contentRect;
      chart.current.applyOptions({ width, height });
      setTimeout(() => {
        chart.current.timeScale().fitContent();
      }, 0);
    });

    resizeObserver.current.observe(chartContainerRef.current);

    return () => resizeObserver.current.disconnect();
  }, []);

  useEffect(() => {
    ohlc(tokenAddress).then(function (response) {
      console.log('Response:', response)

      if (response?.data?.data?.ethereum?.dexTrades) {
        const candles = response.data.data.ethereum.dexTrades.map(function (candle) {
          return {
            time: candle.timeInterval?.minute,
            open: Number(candle.open),
            high: Number(candle.high),
            low: Number(candle.low),
            close: Number(candle.close)
          }
        })

        console.log('Candles:', candles)

        series.current.setData(candles)

        chart.current.timeScale().scrollToRealTime();
      }
    });
  }, [tokenAddress])

  return (
    <div className="App">
      <input value={tokenAddress}
             placeholder="BEP20 Token Addresss"
             onChange={(e) => {
               setTokenAddress(e.target.value);
             }}
      />
      <div ref={chartContainerRef} className="chart-container" />
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
