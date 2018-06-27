$(document).ready(function() {
    $("#owdBtn").on("click", function(){
    	$("#cardInfoTitle").text("OneNature Waste Development (OWD)")
    	$("#cardContent").load("1.html")
    });


    $("#aajBtn").on("click", function(){
    	$("#cardInfoTitle").text("Awareness And Justice")
    	$("#cardContent").load("2.html")
    });

    $("#eftBtn").on("click", function(){
    	$("#cardInfoTitle").text("Eco-Friendly Textiles")
    	$("#cardContent").load("3.html")
    });

    $("#efaBtn").on("click", function(){
    	$("#cardInfoTitle").text("Eco-Friendly Asbestos Cement")
    	$("#cardContent").load("4.html")
    });

});