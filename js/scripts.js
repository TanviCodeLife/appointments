$(document).ready(function() {
$("#detailsform").submit(function(event) {
  event.preventDefault();
  var nameInput = $("input#addName").val();
  var dateInput = $("input#addDate").val();
  console.log(dateInput)
  var startTimeInput = $("input#addStartTime").val();
  console.log(startTimeInput)
  var endTimeInput = $("input#addEndTime").val();
  console.log(endTimeInput);
  var serviceInput = $("select#service").val();
  console.log(serviceInput);
  var detailsInput = $("textarea#details").val();


  $("#modalName").text(nameInput);
  $("#modalDate").text(dateInput);
  $("#modalStartTime").text(startTimeInput);
  $("#modalEndTime").text(endTimeInput);
  $("#modalSpecial").text(detailsInput);
  $("#modalService").text(serviceInput);

  $(".modal").show();


  });

 $("#modalClose").click(function(event){
   $(".modal").hide();

 });

});
