function funClick(){
    var weight = document.getElementById("input").value;
    var e = document.getElementById("planet");
    var value = e.value;
    
    if(weight==0){
        alert("Please enter the weight!!");
    }else{

        var fadeTarget = document.getElementById("planetDiv");
        var fadeEffect = setInterval(function () {
            if (!fadeTarget.style.opacity) {
                fadeTarget.style.opacity = 1;
            }
            if (fadeTarget.style.opacity > 0) {
                fadeTarget.style.opacity -= 0.3;
            } 
            else {
                clearInterval(fadeEffect);
            }
        }, 200);

        //weight on other planet = weight on earth*multiple of earth's gravity
        if(value=='mercury'){
            var w = weight * 0.38;
        }else if(value=='venus'){
            var w = weight* 0.91;
        }else if(value=='earth'){
            var w = weight* 1;
        }else if(value=='mars'){
            var w = weight* 0.38;
        }else if(value=='jupiter'){
            var w = weight* 2.34;
        }else if(value=='saturn'){
            var w = weight* 1.06;
        }else if(value=='uranus'){
            var w = weight* 0.92;
        }else if(value=='neptune'){
            var w = weight* 1.19;
        }

        w=w.toFixed(2);

        setTimeout( function () { 
            var img = document.createElement("img");
            var source = value + ".png"
            img.src = source;
            var div = document.getElementById("pic");
            div.appendChild(img);
            if(value=="saturn"){
                img.style.height="20rem";
                img.style.width="42rem";
            }else{
                img.style.height="20rem";
                img.style.width="20rem";
            }
            document.getElementById("p").innerHTML = "Your weight on " + value + " will be " + w + "kg"; 
        }, 1000);

        document.getElementById("btn").disabled = true;
    }

}