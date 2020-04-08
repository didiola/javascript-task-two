/**
 * @author Didola
 * @description Interest calculator that calculates multiple of interest at a go
 */

const data = [
  {
    principal: 2500,
    time: 1.8
  },
  {
    principal: 1000,
    time: 5
  },
  {
    principal: 3000,
    time: 1
  },
  {
    principal: 2000,
    time: 3
  },
]

/**
 * @type Function
 * @param {array} data 
 * @description Calculates interest based on the data given
 */
const interestCalculator = (data) => {
  /**
   * @type number
   * @description rate used in calculating interest 
   */
  let rate;
  /**
   * @description holds the values for interest data
   * @type Array
   */
  let interestData = [];
  // iterate through the data given and set rate for each item in the data
  data.map((items) => {
    if (items.principal >= 2500 && items.time > 1 < 3) {
      rate = 3
    } else if (items.principal >= 2500 && items.time >= 3) {
      rate = 4
    } else if (items.principal < 2500 || items.time <= 1) {
      rate = 2
    } else {
      rate = 1
    }
    // calculate interest based on given data and assign it to variable interest
    let interest = (items.principal * rate * items.time) / 100
    // add rate to the item object
    items.rate = rate;
    // add the calculated interest to the item object
    items.interest = interest;
    // add all the items objects into the interestData to form an array
    interestData.push(items)
  })
  console.log(interestData);
  // return the interestData array
  return interestData;
}

console.log(interestCalculator(data))