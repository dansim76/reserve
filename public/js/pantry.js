$(document).ready(function() {

  // Adding event listeners for deleting, editing, and adding inventory
  // $(document).on("click", "button.type", toggleCustomerType);

  // Our initial inventory array
  var storeNames = [];
  var inventory = [];


  // function getInventory() {
  //   $.get("/api/all", function(data) {
  //     inventory = data;
  //     console.log(inventory);
  //   });
  // };

  // getInventory();

  // only add store usernames to array if not existing in array
  function getStoreNames() {
    $.get("/api/all", function(data) {
      inventory = data;
      for (var i = 0; i < inventory.length; i++) {
        var newName = inventory[i].username;
        if (storeNames.indexOf(newName) === -1) {
          storeNames.push(newName)
        }
      }

      var groceryTable = $('<table></table>').addClass('grocery-table');
      $('.grocery-container').append(groceryTable);

      for (var i = 0; i < storeNames.length; i++) {
        var groceryRow = $('<tr></tr>').addClass('store-name').attr('id', storeNames[i]).text(storeNames[i]);
        $('.grocery-table').append(groceryRow);
      }

    //   var row = $('<tr></tr>').addClass('inventory-row');
    //   $('.grocery-container').append(row);

    //   for (var i = 0; i < inventory.length; i++) {



    //     inventory[i].username
    //     $('#'+inventory[i].username).append
    //   }


    // })

    console.log(storeNames);
    });
  };

  getStoreNames();

  // // This function grabs inventory from the database and updates the view
  function getInventory() {
    $.get("/api/all", function(data) {
      inventory = data;
      console.log(inventory);

      for (var i = 0; i < inventory.length; i++) {
        var userName = inventory[i].username;
        var item = inventory[i].item;
        var quantity = inventory[i].quantity;
        var expirationDate = inventory[i].expiration;
        var newExpDate = expirationDate.slice(0,10);
        var selectButton = $('<button>').attr("class", "button").text("Select Item");
        var allVars = (item + " " + quantity + " " + newExpDate);
        var allVarsRow = $('<tr></tr>').attr("id", "appendButton" + i).text(allVars);

        $('#'+inventory[i].username).append(allVarsRow);
        $('#appendButton'+i).append(selectButton);
      };
    });
  };

  getInventory();

  // Toggles complete status
  // function toggleCustomerType(event) {
  //   event.stopPropagation();
  //   var inventory = $(this).parent().data("inventory");
  //   inventory.grocery = !inventory.grocery;
  //   updateTodo(inventory);
  // }

  // This function updates inventory in our database
  // function updateInventory(inventory) {
  //   $.ajax({
  //     method: "PUT",
  //     url: "/api/inventory",
  //     data: inventory
  //   }).then(getInventory);
  // }


  //   $newInputRow.find("button.delete").data("id", inventory.id);
  //   $newInputRow.find("input.edit").css("display", "none");
  //   $newInputRow.data("inventory", inventory);
  //   if (inventory.grocery) {
  //     $newInputRow.find("span").css("text-decoration", "line-through");
  //   }
  //   return $newInputRow;
  // }

});