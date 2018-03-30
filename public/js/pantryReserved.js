$(document).ready(function() {
  // Getting username from URL
  var patharr =  window.location.pathname.split('/');
  var id = patharr[patharr.length-1];

  // Getting references to the pantry table and container where it is held
  var pantryContainer = $(".pantry-container");
  var pantryTable = $(".pantry-table");

  getPantryList();

  // Function for creating a new list row for each pantry reserved item
  function createPantryRow(inventoryData) {
    // Slice expiration date
    var expirationDate = inventoryData.expiration;
    var newExpDate = expirationDate.slice(0,10);
    var newTr = $("<tr>").attr("id", inventoryData.id)

    // of the data record has the pantry name set to the same as
    if (inventoryData.pantryname === id) {
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

  // Retreives SQL data and creates variable inventoryData pushed into createPantryRow
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

  // Renders inventory to page
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

  // Function for handling what to render when there's no inventory
  function renderEmpty() {
    var alertDiv = $("<div>");
    alertDiv.addClass("alert alert-danger");
    alertDiv.text("Sorry - Nothing to reServe today!");
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
