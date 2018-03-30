$(document).ready(function() {

  // Adding event listeners for deleting, editing, and adding inventory
  // $(document).on("click", "button.type", toggleCustomerType);

  var patharr =  window.location.pathname.split('/');
  var id = patharr[patharr.length-1];
  console.log(id)

  // Our initial inventory array
  var storeNames = [];
  var inventory = [];

  // only add store usernames to array if not existing in array

  function createNewRow(data) {
    for (var i = 0; i < inventory.length; i++) {
      var storeName = inventory[i].user.name;
      var expirationDate = inventory[i].expiration;
      var newExpDate = expirationDate.slice(0,10);

      var newTr = $("<tr>");
      newTr.data("inventory", data)
      newTr.attr("id", id);
      newTr.append("<td>" + inventory[i].item + "</td>");
      newTr.append("<td>" + inventory[i].quantity + "</td>");
      newTr.append("<td>" + newExpDate + "</td>");
      return newTr;
    };
  };

  function getData() {
    $.get("/api/inventories", function(data) {
      inventory = data;
      for (var i = 0; i < inventory.length; i++) {
        var newName = inventory[i].user.name;
        if (storeNames.indexOf(newName) === -1) {
          storeNames.push(newName)
        }
      }

      var groceryTable = $('<table></table>').addClass('grocery-table');
      $('.grocery-container').append(groceryTable);

        var rowsToAdd = [];
        for (var i = 0; i < inventory.length; i++) {
          rowsToAdd.push(createNewRow(inventory[i]));
        }
        // renderAuthorList(rowsToAdd);
        // nameInput.val("");
      });
    console.log(storeNames);
  }

      // for (var i = 0; i < inventory.length; i++) {
      //   var storeName = inventory[i].user.name
      //   var userName = inventory[i].username;
      //   var item = inventory[i].item;
      //   var quantity = inventory[i].quantity;
        // var expirationDate = inventory[i].expiration;
        // var newExpDate = expirationDate.slice(0,10);
      //   var selectButton = $('<button>').attr("class", "select-button").attr("id", id).text("Select Item");
      //   var allVars = (item + quantity + newExpDate);
      //   var allVarsRow = $('<tr></tr>').attr("id", "rowNumber" + i).text(allVars);

        // $('#'+inventory[i].user.name).append(allVarsRow);
      //   $('#rowNumber'+i).append(selectButton);

  getData();

  function update() {
    $.get("/api/inventories", function(data) {
      inventory = data;
      inventory.updateAttributes({
        reserved: true,
        pantryname: id
      })
    });
  };


  $(".select-button").on("click", function(event) {
    event.preventDefault();
    update();
  });

});