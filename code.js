$(document).ready(function(){

                const jest = "<p class='content'>Joe is a very nice fellow, but has always been a little slow. He goes into a store where a salesman is standing on a soapbox in front of a group of people. The salesman is pitching the miracle new invention, the Thermos bottle. He is saying, 'It keeps hot food hot, and cold food cold....' Joe thinks about this a minute, amazed by this new invention that is able to make a decision about which of two different things it is supposed to do depending on what kind of food you put in it. He can't contain his curiosity, he is jumping up and down, waving his arm in the air, saying 'but, but, but, but...' Finally he blurts out his burning question 'But how do it know?'</p>";

                $("#haha").html("<a class='closebtn'>[&times;]</a><h1><span>Programming Jokes</span></h1>"+ jest);

                var win_W = window.innerWidth;
                var win_H = window.innerHeight;

                $("svg").attr("viewBox","0 0 "+win_W+" "+win_H);

                $(window).resize(function(){

                    win_W = window.innerWidth;
                    win_H = window.innerHeight;

                    $("svg").attr("viewBox","0 0 "+win_W+" "+win_H);
                    $("svg").attr("width","100%");
                    $("svg").attr("height","100%");
                });

                let slideIndex;
                let i;
                let slides = document.getElementsByClassName("mySlides");
                let dots = document.getElementsByClassName("demo");
                let captionText = document.getElementById("caption");
                let date = new Date();
                let year = date.getFullYear();

                $("#foot").html("&copy; "+ year +" Mohammad Sheharyar's Page. All rights reserved.");


                $("svg").mouseenter(function(){

                    setTimeout(() => {

                        $("#prompt").fadeIn(500);


                    }, 3000);
                });

                var svgDoc =  document.getElementsByTagName('svg');

                $(".spots").hover(function(){

                    //setTimeout(() => { 
                        
                        if (svgDoc[0].animationsPaused()) {svgDoc[0].unpauseAnimations();}
                        
                        else {svgDoc[0].pauseAnimations();}

                        $(".txt").animate({opacity:"1"});


                    //}, 10000);

                });

                $(".spots").mouseout(function(){

                    $(".txt").animate({opacity:"0"});

                });

                $(".spots").click(function(){

                    $("#prompt").css({"display":"none"});

                });

                $("#info").click(function(){
                    var w = $("#About").width();
                    //get width of About div
                    var h = $("#About").height();
                    //get height of About div

                    $("#gola").addClass("section"); //add .section class to display <p>
                    $("#gola").css({"display":"block","overflow":"auto"}); //change display to block
                    $("#gola").animate({
                      borderRadius:'10px',width:"90%",height:h+"px"}); //animate container to new size
                    $("#gola").html($("#About").html());

                });

                $("#contact").click(function(){
                    //var w = $("#Social").width();
                    //var h = $("#Social").height();

                    $("#gola").addClass("section"); //add .section class to display <p>
                    $("#gola").css({"display":"block","overflow":"hidden"}); //change display to block
                    $("#gola").animate({
                      borderRadius:'10px',width:"200px",height:"170px"}); //animate container to new size
                    $("#gola").html($("#Social").html());

                });


                $("#funnies").click(function(){

                    fetch("https://v2.jokeapi.dev/joke/Programming")
                    .then(res => {
                        return res.json();
                    })
                    .then(data => {

                        if (data.joke != undefined){

                            const markup = `<p class='content'>${data.joke}</p>`;

                            $("#haha").html("<a class='closebtn'>[&times;]</a><h1><span>Programming Jokes</span></h1>"+ markup +"<br/><p class='content'>Courtesy of <a href='https://v2.jokeapi.dev' target='_blank'>JokeAPI</a></p>");
                        }

                    });

                    var w = $("#haha").width();
                    var h = $("#haha").height();

                    $("#gola").addClass("section"); //add .section class to display <p>
                    $("#gola").css({"display":"block","overflow":"auto"}); //change display to block
                    $("#gola").animate({
                      borderRadius:'10px',width:w+"px",height:h+"px"}); //animate container to new size
                    $("#gola").html($("#haha").html());

                });

                $(".demo").hide();

                $("#work").click(function(){

                    $("#gola").addClass("section"); //add .section class to display <p>
                    $("#gola").css({"display":"block","overflow":"auto"}); //change display to block
                    $("#gola").animate({
                      borderRadius:'10px',width:"90%",height:"100%"}); //animate container to new size
                    $("#gola").html($("#Skills").html());

                    slideIndex = 1;
                    for (i = 0; i < slides.length; i++) {
                        slides[i].style.display = "none";
                      }
                    for (i = 0; i < dots.length; i++) {
                        dots[i].className = dots[i].className.replace(" active", "");
                      }

                    slides[0].style.display = "block";
                    dots[0].className += " active";
                    $("#caption").html($(".active").attr("alt"));
                });


                $("#gola").on('click', ".next", function(){

                    slideIndex++;
                    
                    if (slideIndex > 13) {slideIndex = 1;}
                    for (i = 0; i < slides.length; i++) {
                        slides[i].style.display = "none";
                      }
                    for (i = 0; i < dots.length; i++) {
                        dots[i].className = dots[i].className.replace(" active", "");
                      }

                    slides[slideIndex-1].style.display = "block";
                    dots[slideIndex-1].className += " active";
                    $("#caption").html($(".active").attr("alt"));

                });

                $("#gola").on('click', ".prev", function(){

                    slideIndex--;
                    
                    if (slideIndex < 1) {slideIndex = 13;}
                    for (i = 0; i < slides.length; i++) {
                        slides[i].style.display = "none";
                      }
                    for (i = 0; i < dots.length; i++) {
                        dots[i].className = dots[i].className.replace(" active", "");
                      }

                    slides[slideIndex-1].style.display = "block";
                    dots[slideIndex-1].className += " active";
                    $("#caption").html($(".active").attr("alt"));

                });

                $("#gola").on('click', ".closebtn", function(){

                    $("#gola").fadeOut(500);

                });

});