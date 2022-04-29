img="";
        status="";
        objects= [];
        function setup(){
            canvas=createCanvas(640,420);
            canvas.center();
            objectDetector=ml5.objectDetector('cocossd',modelLoaded);
            document.getElementById("status").innerHTML="Status:Detecting Objects";
        }
        function modelLoaded(){
            console.log("ModelLoaded")
            status=true;
            objectDetector.detect(img, gotResult);
        
        }
        
        function gotResult(error,results)
        {
            if(error){
                console.log(error);
        
            }
            console.log(results);    
            objects=results;
        }
        function preload(){
            img=loadImage('5.jpeg');
        
        }
        
        function draw()
        {
            image(img,0,0,640,420);
          if(status !="")
         {
        for(i = 0;i <objects.length; i++ ){
            document.getElementById("status").innerHTML="Status: Object Detected";
        
            fill("#a83e32");
            percent=floor(objects[i].confidence*100);
            text(objects[i].label+""+percent+"%",objects[i].x+15,objects[i].y+15);
            noFill();
            stroke("#a83e32");
            rect(objects[i].x,objects[i].y, objects[i].width,objects[i].height);
          }
         }
        }