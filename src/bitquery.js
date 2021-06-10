import axios from 'axios';

// const query = `
// query ($token: String) {
//   ethereum(network: bsc) {
//     dexTrades(
//       options: {limit: 100000, asc: "timeInterval.minute"}
//       baseCurrency: {is: $token}
//       quoteCurrency: {is: "0xe9e7cea3dedca5984780bafc599bd69add087d56"}
//     ) {
//       timeInterval {
//         minute(count: 15)
//       }
//       high: quotePrice(calculate: maximum)
//       low: quotePrice(calculate: minimum)
//       open: minimum(of: block, get: quote_price)
//       close: maximum(of: block, get: quote_price)
//     }
//   }
// }
// `;

const query = `
query ($token: String) {
  ethereum(network: bsc) {
    dexTrades(options: {asc: "timeInterval.minute"}, 
      baseCurrency: {is: $token}, 
      quoteCurrency: {is: "0xe9e7cea3dedca5984780bafc599bd69add087d56"}) {
      timeInterval {
        minute(count: 15)
      }

    
      baseCurrency {
        symbol
        address
      }
      baseAmount
      quoteCurrency {
        symbol
        address
      }
      quoteAmount
      
      trades: count
      quotePrice
      
      high: quotePrice(calculate: maximum)
      low: quotePrice(calculate: minimum)
      median: quotePrice(calculate: median)

      open: minimum(of: block get: quote_price)
      close: maximum(of: block get: quote_price)
  
    }
  }
}
`;

export const ohlc = (token) => axios.post('https://graphql.bitquery.io/', {
    query,
    variables: { token }
});