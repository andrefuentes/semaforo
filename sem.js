function Semaforo(encendido){
	var semaforo=document.createElement("div");
	semaforo.className= "semaforo";

	var rojo=document.createElement("div");
	rojo.className="rojo";

	var amarillo=document.createElement("div");
	amarillo.className="amarillo";

	var verde=document.createElement("div");
	verde.className="verde";


	if (encendido== 0){ 
		rojo.style.opacity=1.0;
	};
	if  (encendido== 1){
			verde.style.opacity=1.0;
		};
	if ( encendido== 2){
			amarillo.style.opacity=1.0;
		};
	semaforo.appendChild(rojo);
	semaforo.appendChild(amarillo);
	semaforo.appendChild(verde);
return semaforo;

}
function render(mountPoint,component,state){
	mountPoint.innerHTML="";
	mountPoint.appendChild(component(state));
}
 var root=document.getElementById("root");
  var i=0;
 render(root,Semaforo,i);

 var next=document.getElementById("button");

 button.onclick= function(){
 	render(root,Semaforo,i);
 	i++;
 	if( i>2){
 		i=0
 	};
  };
