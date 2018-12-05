function hideRows (j, filter) {
  var table, tr, td, txtValue;
  table = document.getElementById("ufo-table");
  tr = table.getElementsByTagName("tr");
  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[j];
    if (td) {
      txtValue = td.textContent.toUpperCase();
      console.log(txtValue);
      // When txtValue string matches filter then .indexOf(filter) will
      // return value greater than -1 and the style.display will hide the row.
      // But when equal to -1, style.display will be assigned to 'none'
      // and not hide anything.
      if (txtValue.indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    } 
  }
};

// from data.js
var tableData = data;
var tbody = d3.select("tbody");
  // Loop Through `tableData` 
  tableData.forEach(function(ufoReport) {
  // Append table row for each data line
  var row = tbody.append("tr");
  // Loop through each data element inside 
  // the data line by their key: value
  Object.entries(ufoReport).forEach(function([key, value]) {
    // Append table data cell to the row and 
    // enter each value inside that cell
    // of the data object
    var cell = row.append("td");
    cell.text(value);
  });
});

var filter = [];
// D3 with pure JS to hide row after submitting filter input:
// Select the filter submit button id
// Use D3 to prevent html page to 
// refresh after clicking on filter button
var submit_date = d3.select("#filter-date-btn");
var submit_city = d3.select("#filter-city-btn");
var submit_state = d3.select("#filter-state-btn");
var submit_country = d3.select("#filter-country-btn");
var submit_shape = d3.select("#filter-shape-btn");
// After entering a filter input and click on filter button do...
submit_date.on("click", function(j=0) {
  // Prevent the page from refreshing
  d3.event.preventDefault();
  // Referenced from https://www.w3schools.com/howto/howto_js_filter_table.asp
    // Declare variables 
    var input;
    input = document.getElementById("datetime");
    console.log(input);
    filter = input.value;
    console.log(filter);
    hideRows (j, filter);
});
submit_city.on("click", function(j=1) {
  // Prevent the page from refreshing
  d3.event.preventDefault();
  // Referenced from https://www.w3schools.com/howto/howto_js_filter_table.asp
    // Declare variables 
    var input;
    input = document.getElementById("city");
    console.log(input);
    filter = input.value.toUpperCase();
    console.log(filter);
    hideRows (j, filter);
});
submit_state.on("click", function(j=2) {
  // Prevent the page from refreshing
  d3.event.preventDefault();
  // Referenced from https://www.w3schools.com/howto/howto_js_filter_table.asp
    // Declare variables 
    var input;
    input = document.getElementById("state");
    console.log(input);
    filter = input.value.toUpperCase();
    console.log(filter);
    hideRows (j, filter);
});
submit_country.on("click", function(j=3) {
  // Prevent the page from refreshing
  d3.event.preventDefault();
  // Referenced from https://www.w3schools.com/howto/howto_js_filter_table.asp
    // Declare variables 
    var input;
    input = document.getElementById("country");
    console.log(input);
    filter = input.value.toUpperCase();
    console.log(filter);
    hideRows (j, filter);
});
submit_shape.on("click", function(j=4) {
  // Prevent the page from refreshing
  d3.event.preventDefault();
  // Referenced from https://www.w3schools.com/howto/howto_js_filter_table.asp
    // Declare variables 
    var input;
    input = document.getElementById("shape");
    console.log(input);
    filter = input.value.toUpperCase();
    console.log(filter);
    hideRows (j, filter);
});
 /* ************ no longer needed ******************************************************
    // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  //console.log(tableData);

  var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);

  console.log(filteredData);
  // Loop Through `filteredData` to update table
  filteredData.forEach(function(ufoReportFiltered) {
    // Append table row for each data line
    var row = tbody.append("tr");
    // Loop through each data element inside 
    // the data line by their key: value
    Object.entries(ufoReportFiltered).forEach(function([key, value]) {
      // Append table data cell to the row and 
      // enter each value inside that cell
      var cell = row.append("td");
      cell.text(value);
    });
  });
************************************************************************************** */

