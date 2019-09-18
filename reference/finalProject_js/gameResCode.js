function startup(){
	let tab = window.location.href.split("?");
	
	if(tab[1] && performance.navigation.type !=1){
		openContent(tab[1]);
        homeHandler();
	}
	else if(sessionStorage.oldTab){
		openContent(sessionStorage.oldTab);
        homeHandler();
	}
	else{
		openContent("home");
        homeHandler();
	}
}

function openContent(tabName) {
    let x = $(".content");
    for (let i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
    }
    document.getElementById(tabName).style.display = "block";
    
    x = $(".navButton");
     for (let i = 0; i < x.length; i++) {
        x[i].classList.remove("active"); 
    }
                           // '#'+tabName+"Button"
                          //  `#${tabName}Button`
    $(`${tabName}Button`).className += " active";
     sessionStorage.setItem("oldTab", tabName);
}

function homeHandler(){
    getChangelog();
    showSlides(slideIndex);
}

//Change log handler
function getChangelog(){
    $(".changelog").html("Change log:<br><br>");
    $.ajax({
        url: "changelog.txt" , 
        success:function(data){
            let log = data.split("\n");
            for(let i = log.length - 1; i >= 0; i--){
                $(".changelog").append(log[i] + "<br><br>");
            }
        },
        error: function(jqXHR, exception){
            $(".changelog").append("Changelog.txt could not be read.<br><br>Check developer console.");
        }
    })
}

//Slideshow handler

var slideIndex = 1;
function plusSlides(n){
    showSlides(slideIndex += n);
}
function showSlides(n){
    let slides = $(".slide");
    if(n > slides.length){
        slideIndex = 1;
    }
    if(n < 1){
        slideIndex = slides.length;
    }
    for(let i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    
    slides[slideIndex-1].style.display = "block";
}

//min inclusive, max exclusive
function getRandom(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max-min)) + min;
}
