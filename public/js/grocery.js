$(document).ready(function(){
    $('.datepicker').datepicker({
        format: 'mm/dd/yyyy',
        startDate: new Date(),
        autoclose: true,
    });

    var patharr =  window.location.pathname.split('/');
    var id = patharr[patharr.length-1];
    console.log(id)

    $("#submit").on("click", function() {
        event.preventDefault();
        var allInventory = ([
            cannedchicken = {
                item: "Canned Tuna, Chicken, Salmon, or Other",
                quantity: $("#cannedchicken").val().trim(),
                expiration: $("#cannedchickenexp").val().trim(),
                usertype:"grocery",
                username: id,
                pantryname: null
            },
            cannedveg = {
                item: "Canned Vegetables",
                quantity: $("#cannedveg").val().trim(),
                expiration: $("#cannedvegexp").val().trim(),
                usertype:"grocery",
                username: id,
                pantryname: null
            },
            cannedfruit = {
                item: "Canned Fruit",
                quantity: $("#cannedfruit").val().trim(),
                expiration: $("#cannedfruitexp").val().trim(),
                usertype:"grocery",
                username: id,
                pantryname: null,
            },
            cannedsauce = {
                item: "Canned Sauce",
                quantity: $("#cannedsauce").val().trim(),
                expiration: $("#cannedsauceexp").val().trim(),
                usertype:"grocery",
                username: id,
                pantryname: null
            },
            cannedsoup = {
                item: "Canned Soup",
                quantity: $("#cannedsoup").val().trim(),
                expiration: $("#cannedsoupexp").val().trim(),
                userType:"grocery",
                username: id,
                pantryname: null
            },
            freshmeat = {
                item: "Fresh Meat",
                quantity: $("#freshmeat").val().trim(),
                expiration: $("#freshmeatexp").val().trim(),
                usertype:"grocery",
                username: id,
                pantryname: null
            },
            freshveg = {
                item: "Fresh Vegetables",
                quantity: $("#freshveg").val().trim(),
                expiration: $("#freshvegexp").val().trim(),
                usertype:"grocery",
                username: id,
                pantryname: null
            },
            freshfruit = {
                item: "Fresh Fruit",
                quantity: $("#freshfruit").val().trim(),
                expiration: $("#freshfruitexp").val().trim(),
                usertype:"grocery",
                username: id,
                pantryname: null
            },
            water = {
                item: "Water",
                quantity: $("#water").val().trim(),
                expiration: $("#waterexp").val().trim(),
                usertype:"grocery",
                username: id,
                pantryname: null
            },
            juice = {
                item: "Juice",
                quantity: $("#juice").val().trim(),
                expiration: $("#juiceexp").val().trim(),
                usertype:"grocery",
                username: id,
                pantryname: null
            },
            soda = {
                item: "Soda",
                quantity: $("#soda").val().trim(),
                expiration: $("#sodaexp").val().trim(),
                usertype:"grocery",
                username: id,
                pantryname: null
            },
            pasta = {
                item: "Pasta",
                quantity: $("#pasta").val().trim(),
                expiration: $("#pastaexp").val().trim(),
                usertype:"grocery",
                username: id,
                pantryname: null
            },
            wholegrain = {
                item: "Whole Grains (Rice, Quinoa, Etc)",
                quantity: $("#wholegrain").val().trim(),
                expiration: $("#wholegrainexp").val().trim(),
                usertype:"grocery",
                username: id,
                pantryname: null
            },
            cereal = {
                item: "Cereal",
                quantity: $("#cereal").val().trim(),
                expiration: $("#cerealexp").val().trim(),
                usertype:"grocery",
                username: id,
                pantryname: null
            }
        ])

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
            $(".createActivityBox").text("Thank you for donating!").css({"background-color": "#2c3e50", "color": "white","font-size": "200%", "margin": "auto", "width": "50%", "text-align": "center"});
            }

        clear();
    })

});