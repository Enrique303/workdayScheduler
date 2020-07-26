// current time appended to header
var currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');
var time = $("#currentDay")
time.append(currentTime)

//clicking save button saves to local storage

$(".btn-1").click (function(){
  var schedule1 = $(".schedule1").val()
  localStorage.setItem("schedule1", JSON.stringify(schedule1))
});
$(".btn-2").click(function(){
  var schedule2 = $(".schedule2").val()
  localStorage.setItem("schedule2", JSON.stringify(schedule2))
});
$(".btn-3").click(function(){
  var schedule3 = $(".schedule3").val()
  localStorage.setItem("schedule3", JSON.stringify(schedule3))
});
$(".btn-4").click(function(){
  var schedule4 = $(".schedule4").val()
  localStorage.setItem("schedule4", JSON.stringify(schedule4))
});
$(".btn-5").click(function(){
  var schedule5 = $(".schedule5").val()
  localStorage.setItem("schedule5", JSON.stringify(schedule5))
});
$(".btn-6").click(function(){
  var schedule6 = $(".schedule6").val()
  localStorage.setItem("schedule6", JSON.stringify(schedule6))
});
$(".btn-7").click(function(){
  var schedule7 = $(".schedule7").val()
  localStorage.setItem("schedule7", JSON.stringify(schedule7))
});
$(".btn-8").click(function(){
  var schedule8 = $(".schedule8").val()
  localStorage.setItem("schedule8", JSON.stringify(schedule8))
});
$(".btn-9").click(function(){
  var schedule9 = $(".schedule9").val()
  localStorage.setItem("schedule9", JSON.stringify(schedule9))
});

//clicking save button displays text on to page

function displayTask(){
  schedule1 = localStorage.getItem("schedule1");
  $(".schedule1").text(schedule1);

  schedule2 = localStorage.getItem("schedule2");
  $(".schedule2").text(schedule2);

  schedule3 = localStorage.getItem("schedule3");
  $(".schedule3").text(schedule3);

  schedule4 = localStorage.getItem("schedule4");
  $(".schedule4").text(schedule4);

  schedule5 = localStorage.getItem("schedule5");
  $(".schedule5").text(schedule5);

  schedule6 = localStorage.getItem("schedule6");
  $(".schedule6").text(schedule6);

  schedule7 = localStorage.getItem("schedule7");
  $(".schedule7").text(schedule7);

  schedule8 = localStorage.getItem("schedule8");
  $(".schedule8").text(schedule8);

  schedule9 = localStorage.getItem("schedule9");
  $(".schedule9").text(schedule9);

};
displayTask()