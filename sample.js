createLazyLoadData();
var pageCountDropdown = document.getElementById('pageCountDropdown');
var pageSizeCheckbox = document.getElementById('pageSizeCheckbox');
var rtlCheckbox = document.getElementById('rtlCheckbox');
var biggerModeCheckbox = document.getElementById('biggerModeCheckbox');
var grid = new ej.grids.Grid({
    dataSource: lazyLoadData.slice(0,500),
    allowPaging: true,
    allowFiltering: true,
    pageSettings: { pageSize: 5, pageSizes: true, pageCount: 40 },
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
};

biggerModeCheckbox.onclick = function() {
  var isBiggerMode = biggerModeCheckbox.checked;
    if (isBiggerMode) {
      grid.element.classList.add('e-bigger');
      grid.enableAdaptiveUI = true;
      grid.element.querySelector('.e-gridpager').ej2_instances[0].refresh();
    } else {
      grid.element.classList.remove('e-bigger');
      grid.enableAdaptiveUI = false;
      grid.element.querySelector('.e-gridpager').ej2_instances[0].refresh();
    }
};

pageCountDropdown.addEventListener('change', function() {
  var pageCount = parseInt(pageCountDropdown.value);
    grid.pageSettings.pageCount = pageCount;
});