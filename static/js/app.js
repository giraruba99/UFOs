// import the data from data.js
const tableData = data;

// reference the HTML table using d3 (it is a JavaScript library)
// here, we are declaring variable, tbody and use d3.select to tell JS to look for the <tbody> tage in HTML
var tbody = d3.select("tbody")

// now let's create a function (good practice to name a function on what it does)
// It's good practice to clear the existing data first to give ourselves a clean slate to work with
// The line we'll use to clear the data is tbody.html("");
function buildTable(data) {
    tbody.html("");
}