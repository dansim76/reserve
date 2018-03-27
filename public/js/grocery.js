$(document).ready(function(){
  $('.datepicker').datepicker(
    {
      format: 'mm/dd/yyyy',
      startDate: new Date(),
      autoclose: true,
  },
);
// $(document).on("click", "button#submit", insertGrocery);
 
//   function insertGrocery(event) {
//     event.preventDefault();
    $("button").on("click", function(event) {
      event.preventDefault();

        var cannedchicken = {
            item:'Canned Chicken',
            quanitity: $("#cannedchicken").val().trim(),
            expiration: $("#cannedchickenexp").val().trim(),
            // createdAt: moment().format("YYYY-MM-DD HH:mm:ss")
        };
        console.log(cannedchicken);

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
    // $.post("/api/todos", groceryList, getGroceryList);

        $.post("/api/inventories", cannedchicken);
        

    
  })

});

// $(document).ready(function() {

//   const picker = datepicker(".datepicker'");

//   // const picker = datepicker(document.querySelector('.datepicker'), {
//   //   position: 'tr', // Top right.
//   //   startDate: new Date(), // This month.
//   //   startDay: 1, // Calendar week starts on a Monday.
//   //   dateSelected: new Date(), // Today is selected.
//   //   minDate: new Date(), // June 1st, 2016.
//   //   maxDate: new Date(2099, 0, 1), // Jan 1st, 2099.
//   //   noWeekends: true, // Weekends will be unselectable.
//   //   formatter: function(el, date) {
//   //     // This will display the date as `1/1/2017`.
//   //     el.value = date.toDateString();
//   //   },
//   //   onSelect: function(instance) {
//   //     // Show which date was selected.
//   //     console.log(instance.dateSelected);
//   //   },
//   //   onShow: function(instance) {
//   //     console.log('Calendar showing.');
//   //   },
//   //   onHide: function(instance) {
//   //     console.log('Calendar hidden.');
//   //   },
//   //   onMonthChange: function(instance) {
//   //     // Show the month of the selected date.
//   //     console.log(instance.currentMonthName);
//   //   },
//   //   customMonths: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
//   //   customDays: ['S', 'M', 'T', 'W', 'Th', 'F', 'S'],
//   //   overlayPlaceholder: 'Enter a 4-digit year',
//   //   overlayButton: 'Go!',
//   //   disableMobile: false // Conditionally disabled on mobile devices.
//   // });
// });


