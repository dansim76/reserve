$(document).ready(function() {
  // Getting username from URL
  var patharr =  window.location.pathname.split('/');
  var id = patharr[patharr.length-1];

  // Getting references to the name input and author container, as well as the table body
  var groceryPrepend = $("thead");
  var groceryContainer = $(".grocery-container");
  var groceryTable = $(".grocery-table");

  var pantryContainer = $(".grocery-container");
  var pantryTable = $(".pantry-table");

  // Adding event listeners to the form to create a new object, and the button to delete
  // an Author
  // $(document).on("click", ".delete-author", handleDeleteButtonPress);

  // Getting the intiial list of Authors
  // getGroceryStores();
  getInventoryList();
  getPantryList();

  // Function for creating a new list row for authors
  function createInventoryRow(inventoryData) {
    // Slice expiration date
    var expirationDate = inventoryData.expiration;
    var newExpDate = expirationDate.slice(0,10);
    var newTr = $("<tr>").attr("id", inventoryData.id)

    if (inventoryData.reserved === null) {
      var selectButton = $("<button>").text("Select").attr({
        class: "select-button",
        id: inventoryData.id
      });
      newTr.data("inventory", inventoryData);
      newTr.append("<td>" + inventoryData.user.name + "</td>");
      newTr.append("<td>" + inventoryData.item + "</td>");
      newTr.append("<td> " + inventoryData.quantity + "</td>");
      newTr.append("<td>" + newExpDate + "</td>");
      newTr.append(selectButton);
      return newTr;
    }
  };

  function createPantryRow(inventoryData) {
    // Slice expiration date
    var expirationDate = inventoryData.expiration;
    var newExpDate = expirationDate.slice(0,10);

    var newTr = $("<tr>").attr("id", inventoryData.id);
    if ((inventoryData.reserved != null) && (inventoryData.pantryname === id)) {
      var selectButton = $("<button>").text("Select").attr({
        class: "select-button",
        id: inventoryData.id
        });
      newTr.data("inventory", inventoryData);
      newTr.append("<td>" + inventoryData.user.name + "</td>");
      newTr.append("<td>" + inventoryData.item + "</td>");
      newTr.append("<td> " + inventoryData.quantity + "</td>");
      newTr.append("<td>" + newExpDate + "</td>");
      newTr.append(selectButton);
      return newTr;
    }
  };

  // Retreives SQL data and creates variable inventoryData push to createInventoryRow
  function getInventoryList() {
    $.get("/api/inventories", function(data) {
      var rowsToAdd = [];
      // var dataArray = [];
      for (var i = 0; i < data.length; i++) {
        rowsToAdd.push(createInventoryRow(data[i]));
      };
      renderInventoryList(rowsToAdd);
    });
  }

  // Retreives SQL data and creates variable inventoryData push to createPantryRow
  function getPantryList() {
    $.get("/api/inventories", function(data) {
      var rowsToAdd = [];
      // var dataArray = [];
      for (var i = 0; i < data.length; i++) {
        rowsToAdd.push(createPantryRow(data[i]));
      };
      renderPantryList(rowsToAdd);
    });
  }


  // Renders inventory to the page
  function renderInventoryList(rows) {
    groceryTable.children().not(":last").remove();
    groceryContainer.children(".alert").remove();
    if (rows.length) {
      groceryTable.prepend(rows);
    }
    else {
      renderEmpty();
    }
  };

    // Renders inventory to the page
  function renderPantryList(rows) {
    pantryTable.children().not(":last").remove();
    pantryContainer.children(".alert").remove();
    if (rows.length) {
      pantryTable.prepend(rows);
    }
    else {
      renderEmpty();
    }
  };

  // Function for handling what to render when there are no authors
  function renderEmpty() {
    var alertDiv = $("<div>");
    alertDiv.addClass("alert alert-danger");
    alertDiv.text("You must create an Author before you can create a Post.");
    groceryContainer.append(alertDiv);
  }

  // Function for handling what happens when the delete button is pressed
  // function handleDeleteButtonPress() {
  //   var listItemData = $(this).parent("td").parent("tr").data("inventoryData.user.name");
  //   var id = listItemData.id;
  //   $.ajax({
  //     method: "DELETE",
  //     url: "/api/inventories/" + id
  //   })
  //     .then(getStores);
  // }
  // }
})
