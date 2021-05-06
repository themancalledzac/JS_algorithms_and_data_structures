function binarySearch(arr, num) {
  let left = 0;
  let right = arr.length - 1;
  let middle = Math.floor((left + right) / 2);

  while (arr[middle] !== num && left <= right) {
    if (arr[middle] > num) right = middle - 1;
    else left = middle + 1;
    middle = Math.floor((left + right) / 2);
  }
  return arr[middle] === num ? middle : -1;
}

console.log(binarySearch([1, 2, 3, 5, 6, 7, 9, 10, 11, 13, 14, 15, 16], 13));

// [
//   "Alabama",
//   "Alaska",
//   "American Samoa",
//   "Arizona",
//   "Arkansas",
//   "California",
//   "Colorado",
//   "Connecticut",
//   "Delaware",
//   "District of Columbia",
//   "Federated States of Micronesia",
//   "Florida",
//   "Georgia",
//   "Guam",
//   "Hawaii",
//   "Idaho",
//   "Illinois",
//   "Indiana",
//   "Iowa",
//   "Kansas",
//   "Kentucky",
//   "Louisiana",
//   "Maine",
//   "Marshall Islands",
//   "Maryland",
//   "Massachusetts",
//   "Michigan",
//   "Minnesota",
//   "Mississippi",
//   "Missouri",
//   "Montana",
//   "Nebraska",
//   "Nevada",
//   "New Hampshire",
//   "New Jersey",
//   "New Mexico",
//   "New York",
//   "North Carolina",
//   "North Dakota",
//   "Northern Mariana Islands",
//   "Ohio",
//   "Oklahoma",
//   "Oregon",
//   "Palau",
//   "Pennsylvania",
//   "Puerto Rico",
//   "Rhode Island",
//   "South Carolina",
//   "South Dakota",
//   "Tennessee",
//   "Texas",
//   "Utah",
//   "Vermont",
//   "Virgin Island",
//   "Virginia",
//   "Washington",
//   "West Virginia",
//   "Wisconsin",
//   "Wyoming",
// ];
