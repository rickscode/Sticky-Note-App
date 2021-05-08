/* 
Find all objects in array of objects with same date as todays date
put matching objects into a new array
display onjects in tasks due today object
*/

// array of objects with dates
var arr = 
    [
    {name:"daisy", date:"2021-05-07"}, 
    {name:"daisy", date:"2021-05-08"},
    {name:"daisy", date:"2021-05-07"},
    {name:"daisy", date:"2021-05-17"}, 
    {name:"daisy", date:"2021-05-18"},
    {name:"daisy", date:"2021-05-05"}
    ]
    

// todays date in string format
var date = new Date();

console.log(date);

// convert string date to yyyy-mm-dd format

function convertDate(date) {
    var yyyy = date.getFullYear().toString();
    var mm = (date.getMonth()+1).toString();
    var dd  = date.getDate().toString();
  
    var mmChars = mm.split('');
    var ddChars = dd.split('');
  
    return yyyy + '-' + (mmChars[1]?mm:"0"+mmChars[0]) + '-' + (ddChars[1]?dd:"0"+ddChars[0]);
  }

  // store new formatted date in variable

  let todayFormatted = convertDate(date);

  console.log(todayFormatted);
  
  let slice = [];
  
  // get index of object with date matching todays date
  
  for(let i = 0; i < arr.length; i++){
  let findTodayDateIndex = [arr.map(function(item) { return item.date; }).indexOf(todayFormatted)];
  
  console.log(findTodayDateIndex)
  
  // slice arr.index 0 into new array
  
  slice.push(arr[findTodayDateIndex])
  
  // 0 2
  console.log(slice)
  
  // splice remove index 0 from array
  arr.splice(findTodayDateIndex, 1);
  
  // only have one object at end of loop
  console.log(arr);
  
  }
  
  
  
  
  
  