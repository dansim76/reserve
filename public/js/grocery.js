$(document).ready(function(){
  $('.datepicker').datepicker(
    {
      format: 'mm/dd/yyyy',
      startDate: new Date(),
      autoclose: true,
  },
  
  );
})

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


