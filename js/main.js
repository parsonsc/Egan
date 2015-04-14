$(".content-item").click(function(){
	$(".case_box").slideDown(600);
});

$("#case_01").click(function(){
	$(".dropdown_02, .dropdown_03, .dropdown_04, .dropdown_05, .dropdown_06").fadeOut(0);
	$(".dropdown_01").fadeIn(500);
});
$("#case_02").click(function(){
	$(".dropdown_01, .dropdown_03, .dropdown_04, .dropdown_05, .dropdown_06").fadeOut(0);
	$(".dropdown_02").fadeIn(500);
});
$("#case_03").click(function(){
	$(".dropdown_01, .dropdown_02, .dropdown_04, .dropdown_05, .dropdown_06").fadeOut(0);
	$(".dropdown_03").fadeIn(500);
});
// $("#case_02").click(function(){
// 	$(".dropdown_01, .dropdown_03, .dropdown_04, .dropdown_05, .dropdown_06").fadeOut(0);
// 	$(".dropdown_02").fadeIn(500);
// });