# CODE-KATA-Shopping-Cart

## Usage

**Installation:** `npm install`

**Testing:** `npm test`

**CLI:** `node main.js [input]`

```terminal
$ node main.js DABA
140
```

## Process

1. Set up repository for Node.js development
2. Set up Mocha and folder structure for testing and running
3. Add code to handle basic pricing
4. Modify code to read and price items
5. Apply discounts after counting items

## Notes

* Ignores any characters that do not have an associated cost
* All discounts are applied after counting

To implement this kata, I chose to use Node.js as it is the development environment I am most familiar with. I used Test-Driven Development to ensure that my code was working as expected, and which allowed me to experiment with different calculation methods.

The code expects the entire input to be available at once, and for it to be able to fit in memory. Hence, this code would not be able to support an input stream, or extremely large orders. To calculate the price, the items are first counted, and then priced according to any discount rules. In this way, we can also count the number of discounts applied, which can be used, for example, for display on a supermarket receipt. 
