$(document).ready(function(){
  $('.datepicker').datepicker({
      format: 'mm/dd/yyyy',
      startDate: new Date(),
      autoclose: true,
    });

  $("#submit").on("click", function() {
    event.preventDefault();
    var allInventory = ([
        cannedchicken = {
            item: "Canned Tuna, Chicken, Salmon, or Other",
            quantity: $("#cannedchicken").val().trim(),
            expiration: $("#cannedchickenexp").val().trim()
        },
        cannedveg = {
            item: "Canned Vegetables",
            quantity: $("#cannedveg").val().trim(),
            expiration: $("#cannedvegexp").val().trim()
        },
        cannedfruit = {
            item: "Canned Fruit",
            quantity: $("#cannedfruit").val().trim(),
            expiration: $("#cannedfruitexp").val().trim()
        },
        cannedsauce = {
            item: "Canned Sauce",
            quantity: $("#cannedsauce").val().trim(),
            expiration: $("#cannedsauceexp").val().trim()
        },
        cannedsoup = {
            item: "Canned Soup",
            quantity: $("#cannedsoup").val().trim(),
            expiration: $("#cannedsoupexp").val().trim()
        },
        freshmeat = {
            item: "Fresh Meat",
            quantity: $("#freshmeat").val().trim(),
            expiration: $("#freshmeatexp").val().trim()
        },
        freshveg = {
            item: "Fresh Vegetables",
            quantity: $("#freshveg").val().trim(),
            expiration: $("#freshvegexp").val().trim()
        },
        freshfruit = {
            item: "Fresh Fruit",
            quantity: $("#freshfruit").val().trim(),
            expiration: $("#freshfruitexp").val().trim()
        },
        water = {
            item: "Water",
            quantity: $("#water").val().trim(),
            expiration: $("#waterexp").val().trim()
        },
        juice = {
            item: "Juice",
            quantity: $("#juice").val().trim(),
            expiration: $("#juiceexp").val().trim()
        },
        soda = {
            item: "Soda",
            quantity: $("#soda").val().trim(),
            expiration: $("#sodaexp").val().trim()
        },
        pasta = {
            item: "Pasta",
            quantity: $("#pasta").val().trim(),
            expiration: $("#pastaexp").val().trim()
        },
        wholegrain = {
            item: "Whole Grains (Rice, Quinoa, Etc)",
            quantity: $("#wholegrain").val().trim(),
            expiration: $("#wholegrainexp").val().trim()
        },
        cereal = {
            item: "Cereal",
            quantity: $("#cereal").val().trim(),
            expiration: $("#cerealexp").val().trim()
            //storeid: $(this).storeid
        },
    ]);

    console.log(allInventory);

    var pushInventory = [];

    function pushArray() {
      for (var i = 0; i < allInventory.length; i++) {
          if ((allInventory[i].quantity !== "") && (allInventory[i].expiration !== "")) {
            $.post("/api/inventories", allInventory[i]);
          };
      };
    };

    pushArray();

    function clear() {
      $(".createActivityBox").empty();
      $(".createActivityBox").text("Thank you for donating!");
    }

    clear();

  })

});
