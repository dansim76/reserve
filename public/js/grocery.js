$(document).ready(function(){
    $('.datepicker').datepicker({
        format: 'mm/dd/yyyy',
        startDate: new Date(),
        autoclose: true,
    });

    // function grabUser(req,res){
    //     console.log("this is user" +req.user.userName);
    // }
    var patharr =  window.location.pathname.split('/');
    var id =patharr[patharr.length-1];
    console.log(id)

    $("#submit").on("click", function() {
        event.preventDefault();
        var allInventory = ([
            cannedchicken = {
                item: "Canned Tuna, Chicken, Salmon, or Other",
                quantity: $("#cannedchicken").val().trim(),
                expiration: $("#cannedchickenexp").val().trim(),
                usertype:"grocery",
                username: id
            },
            cannedveg = {
                item: "Canned Vegetables",
                quantity: $("#cannedveg").val().trim(),
                expiration: $("#cannedvegexp").val().trim(),
                usertype:"grocery",
                username: id
            },
            cannedfruit = {
                item: "Canned Fruit",
                quantity: $("#cannedfruit").val().trim(),
                expiration: $("#cannedfruitexp").val().trim(),
                usertype:"grocery",
                username: id
            },
            cannedsauce = {
                item: "Canned Sauce",
                quantity: $("#cannedsauce").val().trim(),
                expiration: $("#cannedsauceexp").val().trim(),
                usertype:"grocery",
                username: id
            },
            cannedsoup = {
                item: "Canned Soup",
                quantity: $("#cannedsoup").val().trim(),
                expiration: $("#cannedsoupexp").val().trim(),
                userType:"grocery",
                userName: id
            },
            freshmeat = {
                item: "Fresh Meat",
                quantity: $("#freshmeat").val().trim(),
                expiration: $("#freshmeatexp").val().trim(),
                usertype:"grocery",
                username: id
            },
            freshveg = {
                item: "Fresh Vegetables",
                quantity: $("#freshveg").val().trim(),
                expiration: $("#freshvegexp").val().trim(),
                usertype:"grocery",
                username: id
            },
            freshfruit = {
                item: "Fresh Fruit",
                quantity: $("#freshfruit").val().trim(),
                expiration: $("#freshfruitexp").val().trim(),
                usertype:"grocery",
                username: id
            },
            water = {
                item: "Water",
                quantity: $("#water").val().trim(),
                expiration: $("#waterexp").val().trim(),
                usertype:"grocery",
                username: id
            },
            juice = {
                item: "Juice",
                quantity: $("#juice").val().trim(),
                expiration: $("#juiceexp").val().trim(),
                usertype:"grocery",
                username: id
            },
            soda = {
                item: "Soda",
                quantity: $("#soda").val().trim(),
                expiration: $("#sodaexp").val().trim(),
                usertype:"grocery",
                username: id
            },
            pasta = {
                item: "Pasta",
                quantity: $("#pasta").val().trim(),
                expiration: $("#pastaexp").val().trim(),
                usertype:"grocery",
                username: id
            },
            wholegrain = {
                item: "Whole Grains (Rice, Quinoa, Etc)",
                quantity: $("#wholegrain").val().trim(),
                expiration: $("#wholegrainexp").val().trim(),
                usertype:"grocery",
                username: id
            },
            cereal = {
                item: "Cereal",
                quantity: $("#cereal").val().trim(),
                expiration: $("#cerealexp").val().trim(),
                usertype:"grocery",
                username: id
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