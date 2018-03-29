$(document).ready(function() {
  // Our inventory will go inside the inventoryContainer
  var $groceryContainer = $(".grocery-container");

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
      for (var i = 0; i < inventory.length; i++) {
        $('.donated-item').append(inventory[i].item + " " + inventory[i].quantity + " " + inventory[i].expiration + "<br>");
      };
    })
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
