createLazyLoadData();
var pageCountCheckbox = document.getElementById('pageCountCheckbox');
var pageCountDropdown = document.getElementById('pageCountDropdown');
var pageSizeCheckbox = document.getElementById('pageSizeCheckbox');
var rtlCheckbox = document.getElementById('rtlCheckbox');
var biggerModeCheckbox = document.getElementById('biggerModeCheckbox');
var grid = new ej.grids.Grid({
    dataSource: lazyLoadData.slice(0,500),
    allowPaging: true,
    pageSettings: { pageSize: 5, pageSizes: true, pageCount: 40 },
    allowGrouping: true,
    dataSource: lazyLoadData.slice(0,500),
    height: 200,
    columns: [
    { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
    { field: 'ProductName', headerText: 'Product Name', width: 160 },
    { field: 'ProductID', headerText: 'Product ID', textAlign: 'Right', width: 120 },
    { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
    { field: 'CustomerName', headerText: 'Customer Name', width: 160 }
],
    }
);
grid.appendTo('#Grid');

pageSizeCheckbox.onclick = function() {
  var pageSizeEnabled = pageSizeCheckbox.checked;
    grid.pageSettings.pageSizes = pageSizeEnabled;
};

rtlCheckbox.onclick = function() {
  var isRTL = rtlCheckbox.checked;
    grid.enableRtl = isRTL;
    grid.refresh();
};

biggerModeCheckbox.onclick = function() {
  var isBiggerMode = biggerModeCheckbox.checked;
    if (isBiggerMode) {
      grid.element.classList.add('e-bigger');
    } else {
      grid.element.classList.remove('e-bigger');
    }
};

pageCountCheckbox.onclick = function() {
  if (!pageCountCheckbox.checked) {
      grid.pageSettings.pageCount = 10;
  } else {
    grid.pageSettings.pageCount = parseInt(pageCountDropdown.value); 
  }
};

pageCountDropdown.addEventListener('change', function() {
  var pageCount = parseInt(pageCountDropdown.value);
    grid.pageSettings.pageCount = pageCount;
});