(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){e.exports=n(39)},38:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var r=n(14),o=n(0),c=n.n(o),a=n(12),i=n.n(a),u=n(2),l=n(13),s=n.n(l),d=function(e){return s.a.post("https://graphql.bitquery.io/",{query:'\nquery ($token: String) {\n  ethereum(network: bsc) {\n    dexTrades(\n      options: {asc: "timeInterval.day"}\n      exchangeName: {is: "Pancake"}\n      baseCurrency: {is: $token}\n      quoteCurrency: {is: "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c"}\n      tradeAmountUsd: {gt: 10}\n    ) {\n      timeInterval {\n        day\n      }\n      high: quotePrice(calculate: maximum)\n      low: quotePrice(calculate: minimum)\n      open: minimum(of: block, get: quote_price)\n      close: maximum(of: block, get: quote_price)\n    }\n  }\n}\n',variables:{token:e}})};n(38);function b(){var e=Object(o.useRef)(),t=Object(o.useRef)(),n=Object(o.useRef)(),a=Object(o.useRef)(),i=Object(o.useState)("0xbf5140a22578168fd562dccf235e5d43a02ce9b1"),l=Object(r.a)(i,2),s=l[0],b=l[1];return Object(o.useEffect)(function(){t.current=Object(u.b)(e.current,{width:e.current.clientWidth,height:e.current.clientHeight,layout:{backgroundColor:"#253248",textColor:"rgba(255, 255, 255, 0.9)"},grid:{vertLines:{color:"#334158"},horzLines:{color:"#334158"}},crosshair:{mode:u.a.Normal},priceScale:{borderColor:"#485c7b"},timeScale:{borderColor:"#485c7b"}}),console.log(t.current),a.current=t.current.addCandlestickSeries({upColor:"rgba(120, 226, 160, 1)",borderVisible:!1,priceFormat:{precision:6,minMove:1e-6}})},[]),Object(o.useEffect)(function(){return n.current=new ResizeObserver(function(e){var n=e[0].contentRect,r=n.width,o=n.height;t.current.applyOptions({width:r,height:o}),setTimeout(function(){t.current.timeScale().fitContent()},0)}),n.current.observe(e.current),function(){return n.current.disconnect()}},[]),Object(o.useEffect)(function(){console.log("current token address: ",s),d(s).then(function(e){var n,r,o;if(console.log("Response:",e),null===e||void 0===e?void 0:null===(n=e.data)||void 0===n?void 0:null===(r=n.data)||void 0===r?void 0:null===(o=r.ethereum)||void 0===o?void 0:o.dexTrades){var c=e.data.data.ethereum.dexTrades.map(function(e){var t;return{time:null===(t=e.timeInterval)||void 0===t?void 0:t.day,open:Number(e.open),high:Number(e.high),low:Number(e.low),close:Number(e.close)}});console.log("Candles:",c),a.current.setData(c),t.current.timeScale().scrollToRealTime()}})},[s]),c.a.createElement("div",{className:"App"},c.a.createElement("input",{value:s,placeholder:"BEP20 Token Addresss",onChange:function(e){b(e.target.value)}}),c.a.createElement("div",{ref:e,className:"chart-container"}))}var m=document.getElementById("root");i.a.render(c.a.createElement(b,null),m)}},[[15,1,2]]]);
//# sourceMappingURL=main.52e6e7bc.chunk.js.map