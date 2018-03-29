$(document).ready(function() {

  // Adding event listeners for deleting, editing, and adding inventory
  // $(document).on("click", "button.type", toggleCustomerType);

  // Our initial inventory array
  var inventory = [];

  // function to create table for each store and items


  // This function grabs inventory from the database and updates the view
  function getInventory() {
    $.get("/api/all", function(data) {
      inventory = data;
      console.log(inventory);

      // for (var i = 0; i < inventory.length; i++) {
      //   inventory[i] = JSON.stringify(inventory[i]);
      // };

      var groceryTable = $('<table></table>').addClass('grocery-table');
      $('.grocery-container').append(groceryTable);

      var row = $('<tr></tr>').addClass('table-row');
      $('.grocery-container').append(row);

      for (var i = 0; i < inventory.length; i++) {
        var itemColumn = $('<td></td>').text(inventory[i].item);
        var quantityColumn = $('<td></td>').text(inventory[i].quantity);
        var expirationColumn = $('<td></td>').text(inventory[i].expiration);
        var selectButton = $('<button>').attr("class", "button").text("Select Item");
        $('.table-row').append(itemColumn + " " + quantityColumn + " " + expirationColumn + " " + selectButton + "<br>");

      };

      // $('.table-row').append(itemColumn + " " + quantityColumn + " " + selectButton + "<br>");

    });
  };


            //       row = $('<tr></tr>');
            //     for (var j = 0; j < 10; j++) {
            //         var rowData = $('<td></td>').addClass('bar').text('result ' + j);
            //         row.append(rowData);
            //     }
            //     table.append(row);
            // }


  getInventory();

  // function createTable() {
  //   var row = $('<tr></tr>');

  // }

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

  // This function constructs a inventory-item row

  // function writeArray() {
  //   for (var i = 0; i < inventory.length; i++) {
  //     $('.grocery-list').append(inventory[i].item);
  //   };
  // };

  // writeArray();

  // function createNewRow(data) {
  //   for (var i = 0; i < inventory.length; i++) {
  //     var $newInputRow = $(
  //       [
  //         "<li class='list-group-item grocery-container'>",
  //         "<span>",
  //         data,
  //         "</span>",
  //         "<input type='text' class='edit' style='display: none;'>",
  //         "<button class='delete btn btn-default'>x</button>",
  //         "<button class='complete btn btn-default'>✓</button>",
  //         "</li>"
  //       ].join("")
  //     );
  //   };
  // };

  // createNewRow();

  //   $newInputRow.find("button.delete").data("id", inventory.id);
  //   $newInputRow.find("input.edit").css("display", "none");
  //   $newInputRow.data("inventory", inventory);
  //   if (inventory.grocery) {
  //     $newInputRow.find("span").css("text-decoration", "line-through");
  //   }
  //   return $newInputRow;
  // }

});