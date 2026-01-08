function bestTimeToBuyAndSellStocks(prices) {
  let min = prices[0];
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] - min > maxProfit) {
      maxProfit = prices[i] - min;
    }

    if (prices[i] < min) {
      min = prices[i];
    }
  }
  return maxProfit;
}

const prices1 = [7, 1, 5, 3, 6, 4];
const result1 = bestTimeToBuyAndSellStocks(prices1);
console.log(`Prices: [${prices1}] → Max Profit: ${result1}`);

const prices2 = [7, 6, 4, 3, 1];
const result2 = bestTimeToBuyAndSellStocks(prices2);
console.log(`Prices: [${prices2}] → Max Profit: ${result2}`);

// const prices = [7, 6, 4, 3, 1];

// Time Complexity  = O(n)
// Space Complexity = O(1)
