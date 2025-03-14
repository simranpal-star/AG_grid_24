var columnDefs = [
    {headerName: "Make", field: "make", sortable: true, filter: true },
    {headerName: "Model", field: "model", sortable: true, filter: true },
    {headerName: "Price", field: "price", sortable: true, filter: true }

  ];
      
  // specify the data
  var rowData = [
    {make: "Toyota", model: "Celica", price: 35000},
    {make: "Ford", model: "Mondeo", price: 32000},
    {make: "Porsche", model: "Boxter", price: 72000}
  ];
      
  // let the grid know which columns and what data to use
  var gridOptions = {
    columnDefs: columnDefs,
    rowData: rowData
  };
  
  // setup the grid after the page has finished loading
  document.addEventListener('DOMContentLoaded', function() {
      var gridDiv = document.querySelector('#myGrid');
      new agGrid.Grid(gridDiv, gridOptions);
  });