$(".searchButton").on("click", function(){  
   // write code to run here
   $(".searchButton").toggleClass("active");
   if ($(".searchButton").hasClass("active")) {

         //do something
      $(".searchBar").css("height", "100vh");
      $("#searchForm").css("opacity", "1");
      $(".searchIcon").removeClass("fa-search").addClass("fa-times");

   }
else {
    //if something else

$(".searchBar").css("height", "0vh");
$(".searchForm").css("opacity", "0");

$(".searchIcon").removeClass("fa-times").addClass("fa-search")
}
});