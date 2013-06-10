    
var camaraHit:Camera;

var boton:GameObject;

function Update()
{
	
	Debug.Log(Input.mousePosition.y);
    if (Input.GetMouseButtonDown(0))
    { 
   		
    	
        var hit : RaycastHit;
        if(Physics.Raycast(camaraHit.ScreenPointToRay(Input.mousePosition), hit))
        {
        	 if(Input.mousePosition.x>130 & Input.mousePosition.x<(Screen.width-130) & Input.mousePosition.y<(Screen.height-130)){
        if(hit.collider.tag=="ironman"){
       
         Application.OpenURL("http://www.youtube.com/watch?v=Ke1Y3P9D0Bc");
        }else   if(hit.collider.tag=="carro"){
        
         Application.OpenURL("http://www.porsche.com");
        }else  if(hit.collider.tag=="videourl"){
        	Debug.Log(1);
           Handheld.PlayFullScreenMovie ("bird.mp4", Color.black, FullScreenMovieControlMode.Full);
        }  
        else  if(hit.collider.tag=="videodollar"){
        	Debug.Log(1);
           Handheld.PlayFullScreenMovie ("dollar.mp4", Color.black, FullScreenMovieControlMode.Full);
        }  
        
        }
      
     }
  
    }
  
  }