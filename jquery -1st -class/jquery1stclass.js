   //jquery (text ahh touch panuna colour change aagum) background colour change
$(document).ready(function(){
    $("p").on({
        mouseenter:function(){
            $(this).css("background-color","lightgray");
        },
        mouseleave:function(){
            $(this).css("background-color","lightblue");
        },
        click:function(){
            $(this).css("background-color","yellow");
        }
    });
});


//jquery (mouse point panum pothu alert msg show aagum) pop up 
     $(document).ready(function(){
        $("#p1").mouseenter(function(){
            alert("you entered p1!");
        });
     });


///jquery (table  la odd number la irukura row ahh colour change aagum) table row colour change
  $(document).ready(function(){
    $("tr:odd").css("background-color","pink");
  });

//   button click panum pothu  list la (hide and show)aagurathu 
     $(document).ready(function(){
        $("ul li:first").hide();
        $("button").click(function(){
            $("ul li:first").show();
        });
     });



     ///


     