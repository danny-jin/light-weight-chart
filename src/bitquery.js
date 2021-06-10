import axios from 'axios';

const query = `
query ($token: String) {
  ethereum(network: bsc) {
    dexTrades(
      options: {asc: "timeInterval.day"}
      exchangeName: {is: "Pancake"}
      baseCurrency: {is: $token}
      quoteCurrency: {is: "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c"}
      tradeAmountUsd: {gt: 10}
    ) {
      timeInterval {
        day
      }
      high: quotePrice(calculate: maximum)
      low: quotePrice(calculate: minimum)
      open: minimum(of: block, get: quote_price)
      close: maximum(of: block, get: quote_price)
    }
  }
}
`;

export const ohlc = (token) => axios.post('https://graphql.bitquery.io/', {
    query,
    variables: { token }
});