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

      for (var i = 0; i < storeNames.length; i++) {

        var groceryRow = $('<tr></tr>').addClass('store-name').attr('id', storeNames[i]).text(storeNames[i]);
        $('.grocery-table').append(groceryRow);

        var titleRow = $('<tr></tr>').addClass('title-row');
        titleRow.append("<td> " + "Item " + "</td>");
        titleRow.append("<td> " + "Quantity " + "</td>");
        titleRow.append("<td> " + "Expiration " + "</td>");
        return titleRow
      }

      for (var i = 0; i < inventory.length; i++) {
        var storeName = inventory[i].user.name;
        var expirationDate = inventory[i].expiration;
        var newExpDate = expirationDate.slice(0,10);

        var newTr = $("<tr>");
        newTr.data("inventory", data)
        $('#'+inventory[i].user.name).attr("id", id);
        $('#'+inventory[i].user.name).append("<td>" + inventory[i].item + "</td>");
        $('#'+inventory[i].user.name).append("<td>" + inventory[i].quantity + "</td>");
        $('#'+inventory[i].user.name).append("<td>" + newExpDate + "</td>");
        return newTr;
      };

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
          console.log(storeNames);
      });
  };

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