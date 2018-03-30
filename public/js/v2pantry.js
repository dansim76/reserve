$(document).ready(function() {
  // Getting references to the name inout and author container, as well as the table body

  var patharr =  window.location.pathname.split('/');
  var id = patharr[patharr.length-1];
  console.log(id)

  // Getting references to the name inout and author container, as well as the table body
  var groceryPrepend = $("thead");
  var groceryList = $("tbody");
  var groceryContainer = $(".grocery-container");
  var groceryArray = [];

  // Adding event listeners to the form to create a new object, and the button to delete
  // an Author
  // $(document).on("click", ".delete-author", handleDeleteButtonPress);

  // Getting the intiial list of Authors
  getStores();


  // function createGroceryArray(inventoryData) {
  //   var newStore = $("<table>" + "</table>")
  //   newStore.data("inventory", inventoryData);
  //   console.log(inventoryData);
  //   // var groceryTable = $("<table>" + "</table>")
  //   // var groceryName = inventoryData.user.name;
  //   for (var i = 0; i < inventoryData.length; i++) {
  //     if (groceryArray.indexOf(groceryName) === -1) {
  //       groceryArray.push(groceryName)
  //     }
  //   }
  //   console.log(groceryArray);
  // //   // groceryTable.prepend(groceryName)
  // };
  // createGroceryArray();

  // createGroceryRow();

  // Function for creating a new list row for authors
  function createInventoryRow(inventoryData) {
    var expirationDate = inventoryData.expiration;
    var newExpDate = expirationDate.slice(0,10);
    console.log(newExpDate);

    var newTr = $("<tr>");
    newTr.data("inventory", inventoryData);
    newTr.append("<td>" + inventoryData.item + "</td>");
    newTr.append("<td> " + inventoryData.quantity + "</td>");
    newTr.append("<td>" + inventoryData.expiration + "</td>");
    newTr.append("<td>" + inventoryData.id + "</td>");
    return newTr;
  };

  // Function for retrieving authors and getting them ready to be rendered to the page
  function getStores() {
    $.get("/api/inventories", function(data) {
      var rowsToAdd = [];
      // var dataArray = [];
      for (var i = 0; i < data.length; i++) {
        rowsToAdd.push(createInventoryRow(data[i]));
        // dataArray.push(createGroceryArray(data[i]))
      };
      renderStoreList(rowsToAdd);
      // renderStoreList(dataArray);
    });
  }

  // A function for rendering the list of authors to the page
  function renderStoreList(rows) {
    groceryList.children().not(":last").remove();
    groceryContainer.children(".alert").remove();
    if (rows.length) {
      console.log(rows);
      groceryList.prepend(rows);
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
  //   var listItemData = $(this).parent("td").parent("tr").data("author");
  //   var id = listItemData.id;
  //   $.ajax({
  //     method: "DELETE",
  //     url: "/api/inventories/" + id
  //   })
  //     .then(getStores);
  // }
});
