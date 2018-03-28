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
            quanitity: $("#cannedfruit").val().trim(),
            expiration: $("#cannedfruitexp").val().trim()
        },
        cannedsauce = {
            item: "Canned Sauce",
            quanitity: $("#cannedsauce").val().trim(),
            expiration: $("#cannedsauceexp").val().trim()
        },
        cannedsoup = {
            item: "Canned Soup",
            quanitity: $("#cannedsoup").val().trim(),
            expiration: $("#cannedsoupexp").val().trim()
        },
        freshmeat = {
            item: "Fresh Meat",
            quanitity: $("#freshmeat").val().trim(),
            expiration: $("#freshmeatexp").val().trim()
        },
        freshveg = {
            item: "Fresh Vegetables",
            quanitity: $("#freshveg").val().trim(),
            expiration: $("#freshvegexp").val().trim()
        },
        freshfruit = {
            item: "Fresh Fruit",
            quanitity: $("#freshfruit").val().trim(),
            expiration: $("#freshfruitexp").val().trim()
        },
        water = {
            item: "Water",
            quanitity: $("#water").val().trim(),
            expiration: $("#waterexp").val().trim()
        },
        juice = {
            item: "Juice",
            quanitity: $("#juice").val().trim(),
            expiration: $("#juiceexp").val().trim()
        },
        soda = {
            item: "Soda",
            quanitity: $("#soda").val().trim(),
            expiration: $("#sodaexp").val().trim()
        },
        pasta = {
            item: "Pasta",
            quanitity: $("#pasta").val().trim(),
            expiration: $("#pastaexp").val().trim()
        },
        wholegrain = {
            item: "Whole Grains (Rice, Quinoa, Etc)",
            quanitity: $("#wholegrain").val().trim(),
            expiration: $("#wholegrainexp").val().trim()
        },
        cereal = {
            item: "Cereal",
            quanitity: $("#cereal").val().trim(),
            expiration: $("#cerealexp").val().trim()
            //storeid: $(this).storeid
        },
    ]);

    console.log(allInventory);

    var pushInventory = [];

    // function pushArray() {
    //   for (var i = 0; i < allInventory.length; i++) {
    //       if ((allInventory[i].quantity !== "") && (allInventory[i].expiration !== "")) {
    //           pushInventory.push(allInventory[i]);
    //       };
    //   };
    // };
    // pushArray ();

    // console.log(pushInventory);
    function pushArray() {
      for (var i = 0; i < allInventory.length; i++) {
          if ((allInventory[i].quantity !== "") && (allInventory[i].expiration !== "")) {
            $.post("/api/inventories", allInventory[i]);
          };
      };
    };
  
    // $.post("/api/inventories", pushInventory);
        
  pushArray();
  
  })

});



