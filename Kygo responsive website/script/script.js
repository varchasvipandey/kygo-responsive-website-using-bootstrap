$(()=>{

    $(".explore-now").click(()=>{
        $(".main-page").slideUp(500, ()=>{
            $("#navbar").addClass("sticky");
        });
    });

    $(".back-to-main").click(()=>{
        $(".main-page").slideDown(500, ()=>{
            $("#navbar").removeClass("sticky");
        });
    });

    //Sticky navbar
    window.onscroll = function() {myfunction()};

        var navbar = document.getElementById("navbar");
        var sticky = navbar.offsetTop;

        function myfunction(){
          if(window.pageYOffset >= sticky){
            navbar.classList.add("sticky");
          } else{
            navbar.classList.remove("sticky");
        }
    }

});
