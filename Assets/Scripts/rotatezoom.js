    // A very simplistic car driving on the x-z plane.
	var pos :int = 1;
 	var tranf :Transform;
	var tranf1 :Transform;
	var tranf2 :Transform;
	var tranf3 :Transform;
	var tranf4 :Transform;
	var tranf5 :Transform;
	
	var ee:Vector3 = tranf.localScale;
	var e1:Vector3 = tranf1.localScale;
	var e2:Vector3 = tranf2.localScale;
	var e3:Vector3 = tranf3.localScale;
	var e4:Vector3 = tranf4.localScale;
	var e5:Vector3 = tranf5.localScale;

	
	var z1 :Rect=Rect(Screen.width/2-150,20,300,240);
	var z2 :Rect=Rect(Screen.width/2+50,20,300,240);
	var x1 :Rect=Rect(10,130,200,130);
	var x2 :Rect=Rect(Screen.width-150,130,200,130);
	var y1 :Rect=Rect(10,380,200,130);
	var y2 :Rect=Rect(Screen.width-150,380,200,130);
	var zz1 :Rect=Rect(10,580,200,130);
    var zz2 :Rect=Rect(Screen.width-150,580,200,130);
    var resetb :Rect=Rect(Screen.width-100,Screen.width-130,200,130);
    var xoomu :Rect;
	z1=Rect(-1000,20,100,80);
	z2=Rect(-1000,20,100,80);
	x1=Rect(-1000,250,200,130);
	x2=Rect(-1000,250,200,130);
	y1=Rect(-1000,450,200,130);
	y2 =Rect(-1000,450,200,130);
	zz1=Rect(-1000,650,200,130);
    zz2=Rect(-1000,650,200,130);
       resetb=Rect(-1000,650,200,130);
   
    
    function Start(){
    ee = tranf.localScale;
	e1= tranf1.localScale;
	e2 = tranf2.localScale;
	e3 = tranf3.localScale;
	e4= tranf4.localScale;
	e5= tranf5.localScale;
    
    }
    
   function OnGUI() {
   
   			var myStyl = GUI.skin.GetStyle("Button");
			myStyl.fontSize = 40;
        	if ( GUI.RepeatButton(z1,"Zoom +",myStyl)){
				tranf.localScale +=  Vector3(0.1,0.1,0.1);
				tranf1.localScale +=  Vector3(0.01,0.01,0.01);
				tranf2.localScale +=  Vector3(0.01,0.01,0.01);
				tranf3.localScale +=  Vector3(0.1,0.1,0.1);
				tranf4.localScale +=  Vector3(0.01,0.01,0.01);
				tranf5.localScale +=  Vector3(0.01,0.01,0.01);
				tiempo=-1;
            }
			if (GUI.RepeatButton(z2,"Zoom -")){
				tranf.localScale -=   Vector3(0.1,0.1,0.1);
				tranf1.localScale -=   Vector3(0.01,0.01,0.01);
				tranf2.localScale -=   Vector3(0.01,0.01,0.01);
				tranf3.localScale -=   Vector3(0.1,0.1,0.1);
				tranf4.localScale -=   Vector3(0.01,0.01,0.01);
				tranf5.localScale -=   Vector3(0.01,0.01,0.01);
				tiempo=-1;
			}
			if (GUI.RepeatButton(x1,"X +")){
				tranf.Rotate(5,0,0);
				tranf1.Rotate(5,0,0);
				tranf2.Rotate(5,0,0);
				tranf3.Rotate(5,0,0);
				tranf4.Rotate(5,0,0);
				tranf5.Rotate(5,0,0);
				tiempo=-1;
	
			//tranf1.Rotate(5,0,0);
			}
			if (GUI.RepeatButton(x2,"X -")){
				tranf.Rotate(-5,0,0);
				tranf1.Rotate(-5,0,0);
				tranf2.Rotate(-5,0,0);
				tranf3.Rotate(-5,0,0);
				tranf4.Rotate(-5,0,0);
				tranf5.Rotate(-5,0,0);
				
				tiempo=-1;
		
			//tranf1.Rotate(-5,0,0);
			}
			if (GUI.RepeatButton(y1,"Y +")){
				tranf.Rotate(0,5,0);
				tranf1.Rotate(0,5,0);
				tranf2.Rotate(0,5,0);
				tranf3.Rotate(0,5,0);
				tranf4.Rotate(0,5,0);
				tranf5.Rotate(0,5,0);
				tiempo=-1;
			}
			if (GUI.RepeatButton(y2,"Y -")){
				tranf.Rotate(0,-5,0);
				tranf1.Rotate(0,-5,0);
				tranf2.Rotate(0,-5,0);
				tranf3.Rotate(0,-5,0);
				tranf4.Rotate(0,-5,0);
				tranf5.Rotate(0,-5,0);
				tiempo=-1;
			}
			if (GUI.RepeatButton(zz1,"Z +")){
			tranf.Rotate(0,0,5);
			tranf1.Rotate(0,0,5);
			tranf2.Rotate(0,0,5);
			tranf3.Rotate(0,0,5);
			tranf4.Rotate(0,0,5);
			tranf5.Rotate(0,0,5);
			tiempo=-1;
	
			//tranf1.Rotate(0,0,5);
			}
			if (GUI.RepeatButton(zz2,"Z -")){
			tranf.Rotate(0,0,-5);
			tranf1.Rotate(0,0,-5);
			tranf2.Rotate(0,0,-5);
			tranf3.Rotate(0,0,-5);
			tranf4.Rotate(0,0,-5);
			tranf5.Rotate(0,0,-5);
			
		tiempo=-1;
			//tranf1.Rotate(0,0,-5);
			}
			
			if (GUI.RepeatButton(zz2,"Z -")){
			tranf.Rotate(0,0,-5);
			tranf1.Rotate(0,0,-5);
			tranf2.Rotate(0,0,-5);
			tranf3.Rotate(0,0,-5);
			tranf4.Rotate(0,0,-5);
			tranf5.Rotate(0,0,-5);
			
		tiempo=-1;
			//tranf1.Rotate(0,0,-5);
			}
			
			if (GUI.RepeatButton(resetb,"Reset")){
			tranf.rotation= new Quaternion(0,181,0,tranf.rotation.w);
			tranf1.rotation= new Quaternion(0,270,0,tranf1.rotation.w);
			tranf2.rotation= new Quaternion(0,180,0,tranf2.rotation.w);
			tranf3.rotation= new Quaternion(0,180,0,tranf3.rotation.w);
			tranf4.rotation= new Quaternion(0,180,0,tranf4.rotation.w);
			tranf5.rotation= new Quaternion(0,180,0,tranf5.rotation.w);
			tranf.localScale=ee;
			tranf1.localScale=e1;
			tranf2.localScale=e2;
			tranf3.localScale=e3;
			tranf4.localScale=e4;
			tranf5.localScale=e5;
		
			//tranf1.Rotate(0,0,-5);
			}
			
			
		
    }

var tiempo:float=-1;
var show:int=0;
function Update(){
if (Input.GetMouseButtonDown(0))
    { 
   		Debug.Log((tiempo -Time.time));
    	if((Time.time-tiempo  )<0.3f){
	    	if(show==0){
	    		 z1=Rect(-1000,20,100,80);
				z2=Rect(-1000,20,100,80);
				x1=Rect(-1000,130,200,130);
				x2=Rect(-1000,130,200,130);
				y1=Rect(-1000,380,200,130);
				y2 =Rect(-1000,380,200,130);
				zz1=Rect(-1000,580,200,130);
			    zz2=Rect(-1000,580,200,130);
			    resetb=Rect(-1000,580,200,130);
	    		show=1;
	    	}else{
			    z1=Rect(Screen.width/2-230,20,200,150);
				z2=Rect(Screen.width/2+30,20,200,150);
				x1=Rect(0,250,	130,130);
				x2=Rect(Screen.width-130,250,130,130);
				y1=Rect(0,450,130,130);
				y2 =Rect(Screen.width-130,450,130,130);
				zz1=Rect(0,650,130,130);
			    zz2=Rect(Screen.width-130,650,130,130);
			     resetb =Rect(Screen.width/2-100,Screen.height-130,200,130);
	    		show=0;
	    	}
    	}
    	   tiempo = Time.time;

}}