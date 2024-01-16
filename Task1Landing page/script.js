var header= document.getElementById("header");
            var ms= document.getElementById("PORSCHE");
            var ml= document.getElementById("LAMBO");
            var ma= document.getElementById("ASTON-MARTIN");
            var mc= document.getElementById("McLaren");
            var m3= document.getElementById("AUDI");
            var mx= document.getElementById("BMW");
            var my= document.getElementById("MERCEDES");
            var model= document.getElementById("model");
            var mph= document.getElementById("mph");
            var speed= document.getElementById("speed");
            var range= document.getElementById("range");

            ms.onclick=function(){
                header.style.backgroundImage="url(https://images.unsplash.com/photo-1596392536132-3052ab8a97f6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"
                model.innerHTML="PORSCHE";
                mph.innerHTML="1.2s";
                speed.innerHTML="400 mph";
                range.innerHTML="400 mi";
            }
            ml.onclick=function(){
                header.style.backgroundImage="url(https://images.unsplash.com/photo-1570280406792-bf58b7c59247?q=80&w=2062&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"
                model.innerHTML="Lamborghini Aventador S";
                mph.innerHTML="1.8s" ;
                speed.innerHTML="300 mph";
                range.innerHTML="279 mi"
            }
            ma.onclick=function(){
                header.style.backgroundImage="url(https://images.unsplash.com/photo-1570280406792-bf58b7c59247?q=80&w=2062&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"
                model.innerHTML="Volante Black-Bronze Satin";
                mph.innerHTML="1.3";
                speed.innerHTML="350 mph";
                range.innerHTML="307 mi";
                alert("Coming Soon!");
                }
            ma.onclick=function(){
                header.style.backgroundImage="url(https://images.unsplash.com/photo-1625437102832-c612670e3d2f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"
                model.innerHTML="Volante Black-Bronze Satin";
                mph.innerHTML="1.1s";
                speed.innerHTML="350 mph";
                range.innerHTML="307 mi";
                alert("Coming Soon!");
                }
            mc.onclick=function(){
                header.style.backgroundImage="url(https://images.unsplash.com/photo-1615394695852-da39a8df9bf1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"
                model.innerHTML="McLaren 570S";
                mph.innerHTML="1.4s";
                speed.innerHTML="390 mph";
                range.innerHTML="207 mi"
                // alert("Coming Soon!");
                    }


            m3.onclick=function(){
                header.style.backgroundImage="url(https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)";
                model.innerHTML="AUDI";
                mph.innerHTML="1.7s";
                speed.innerHTML="350 mph";
                range.innerHTML="500 mi";
            }
            mx.onclick=function(){
                header.style.backgroundImage="url(https://images.unsplash.com/photo-1556800572-1b8aeef2c54f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)";
                model.innerHTML="BMW";
                mph.innerHTML="2.5s";
                speed.innerHTML="420 mph";
                range.innerHTML="450 mi";
            }
            my.onclick=function(){
                header.style.backgroundImage="url(https://images.unsplash.com/photo-1616612164847-3069f142e232?q=80&w=1940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)";
                model.innerHTML="MERCEDES";
                mph.innerHTML="3.5s";
                speed.innerHTML="450 mph";
                range.innerHTML="350 mi";
            }