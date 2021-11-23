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

// Add the forEach Function
    data.forEach((dataRow) => {
      let row = tbody.append("tr");
      Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
        cell.text(val);
        }
      );

    });

    function handleClick() {
        // Grab the datetime value from the filter
        let date = d3.select("#datetime").property("value");
        let filteredData = tableData;
      
         // Check to see if a date was entered and filter the
        // data using that date.
        if (date) {
          // Apply `filter` to the table data to only keep the
          // rows where the `datetime` value matches the filter value
          filteredData = filteredData.filter(row => row.datetime === date);
        }
      
         // Rebuild the table using the filtered data
        // @NOTE: If no date was entered, then filteredData will
        // just be the original tableData.
        buildTable(filteredData);
      }
      
      // Attach an event to listen for the form button
      d3.selectAll("#filter-btn").on("click", handleClick);
      
      // Build the table when the page loads
      buildTable(tableData);
