
// Column definitions
const columnDefs = [
    { headerName: "ID", field: "id", sortable: true, filter: true },
    { headerName: "Name", field: "name", sortable: true, filter: true },
    { headerName: "Age", field: "age", sortable: true, filter: true }
];

// Grid options
const gridOptions = {
    columnDefs: columnDefs,
    rowData: null, // Data will be set after fetching from the API
    pagination: true, // Enable pagination
    paginationPageSize: 10 // Number of rows per page
};

// Fetch data from the API
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
        const dataWithAge = data.map(user => ({
            ...user,
            age: Math.floor(Math.random() * 30) + 20  // Add random ages between 20 and 50
        }));
        gridOptions.api.setRowData(dataWithAge);
    })
    .catch(error => console.error('Error fetching data:', error));

// Wait for the DOM to be loaded before initializing the grid
document.addEventListener('DOMContentLoaded', function() {
    const eGridDiv = document.querySelector('#myGrid');
    new agGrid.Grid(eGridDiv, gridOptions);
});
