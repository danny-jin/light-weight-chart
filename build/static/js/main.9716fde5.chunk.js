(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,n,t){e.exports=t(39)},38:function(e,n,t){},39:function(e,n,t){"use strict";t.r(n);var r=t(14),o=t(0),c=t.n(o),i=t(12),u=t.n(i),a=t(2),l=t(13),s=t.n(l),d=function(e){return s.a.post("https://graphql.bitquery.io/",{query:'\nquery ($token: String) {\n  ethereum(network: bsc) {\n    dexTrades(options: {asc: "timeInterval.minute"}, \n      baseCurrency: {is: $token}, \n      quoteCurrency: {is: "0xe9e7cea3dedca5984780bafc599bd69add087d56"}) {\n      timeInterval {\n        minute(count: 15)\n      }\n\n    \n      baseCurrency {\n        symbol\n        address\n      }\n      baseAmount\n      quoteCurrency {\n        symbol\n        address\n      }\n      quoteAmount\n      \n      trades: count\n      quotePrice\n      \n      high: quotePrice(calculate: maximum)\n      low: quotePrice(calculate: minimum)\n      median: quotePrice(calculate: median)\n\n      open: minimum(of: block get: quote_price)\n      close: maximum(of: block get: quote_price)\n  \n    }\n  }\n}\n',variables:{token:e}})};t(38);function m(){var e=Object(o.useRef)(),n=Object(o.useRef)(),t=Object(o.useRef)(),i=Object(o.useRef)(),u=Object(o.useState)("0xd7730681b1dc8f6f969166b29d8a5ea8568616a3"),l=Object(r.a)(u,2),s=l[0],m=l[1];return Object(o.useEffect)(function(){n.current=Object(a.b)(e.current,{width:e.current.clientWidth,height:e.current.clientHeight,layout:{backgroundColor:"#253248",textColor:"rgba(255, 255, 255, 0.9)"},grid:{vertLines:{color:"#334158"},horzLines:{color:"#334158"}},crosshair:{mode:a.a.Normal},priceScale:{borderColor:"#485c7b"},timeScale:{borderColor:"#485c7b"}}),console.log(n.current),i.current=n.current.addCandlestickSeries({upColor:"rgba(120, 226, 160, 1)",borderVisible:!1,priceFormat:{precision:6,minMove:1e-6}})},[]),Object(o.useEffect)(function(){return t.current=new ResizeObserver(function(e){var t=e[0].contentRect,r=t.width,o=t.height;n.current.applyOptions({width:r,height:o}),setTimeout(function(){n.current.timeScale().fitContent()},0)}),t.current.observe(e.current),function(){return t.current.disconnect()}},[]),Object(o.useEffect)(function(){d(s).then(function(e){var t,r,o;if(console.log("Response:",e),null===e||void 0===e?void 0:null===(t=e.data)||void 0===t?void 0:null===(r=t.data)||void 0===r?void 0:null===(o=r.ethereum)||void 0===o?void 0:o.dexTrades){var c=e.data.data.ethereum.dexTrades.map(function(e){var n;return{time:null===(n=e.timeInterval)||void 0===n?void 0:n.minute,open:Number(e.open),high:Number(e.high),low:Number(e.low),close:Number(e.close)}});console.log("Candles:",c),i.current.setData(c),n.current.timeScale().scrollToRealTime()}})},[s]),c.a.createElement("div",{className:"App"},c.a.createElement("input",{value:s,placeholder:"BEP20 Token Addresss",onChange:function(e){m(e.target.value)}}),c.a.createElement("div",{ref:e,className:"chart-container"}))}var b=document.getElementById("root");u.a.render(c.a.createElement(m,null),b)}},[[15,1,2]]]);
//# sourceMappingURL=main.9716fde5.chunk.js.map