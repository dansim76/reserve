$(document).ready(function(){
  $('.datepicker').datepicker(
    {
      format: 'mm/dd/yyyy',
      startDate: new Date(),
      autoclose: true,
    },
  );

    function insertGrocery(event) {
    event.preventDefault();
        var inventory = {
            item: 'Canned Chicken',
            quanitity: $("#cannedchicken").val().trim(),
            expiration: $("#cannedchickenexp").val().trim()
        };

        var cannedveg = {
            quanitity: $("#cannedveg").val().trim(),
            expiration: $("#cannedvegexp").val().trim()
        };

        var cannedfruit = {
            quanitity: $("#cannedfruit").val().trim(),
            expiration: $("#cannedfruitexp").val().trim()
        };

        var cannedsauce = {
            quanitity: $("#cannedsauce").val().trim(),
            expiration: $("#cannedsauceexp").val().trim()
        };

        var cannedsoup = {
            quanitity: $("#cannedsoup").val().trim(),
            expiration: $("#cannedsoupexp").val().trim()
        };

        var freshmeat = {
            quanitity: $("#freshmeat").val().trim(),
            expiration: $("#freshmeatexp").val().trim()
        };

        var freshveg = {
            quanitity: $("#freshveg").val().trim(),
            expiration: $("#freshvegexp").val().trim()
        };

        var freshfruit = {
            quanitity: $("#freshfruit").val().trim(),
            expiration: $("#freshfruitexp").val().trim()
        };

        var water = {
            quanitity: $("#water").val().trim(),
            expiration: $("#waterexp").val().trim()
        };

        var juice = {
            quanitity: $("#juice").val().trim(),
            expiration: $("#juiceexp").val().trim()
        };

        var soda = {
            quanitity: $("#soda").val().trim(),
            expiration: $("#sodaexp").val().trim()
        };

        var pasta = {
            quanitity: $("#pasta").val().trim(),
            expiration: $("#pastaexp").val().trim()
        };

        var wholegrain = {
            quanitity: $("#wholegrain").val().trim(),
            expiration: $("#wholegrainexp").val().trim()
        };

        var cereal = {
            quanitity: $("#cereal").val().trim(),
            expiration: $("#cerealexp").val().trim()
        };

    $.post("/api/todos", groceryList, getGroceryList);

  }
});