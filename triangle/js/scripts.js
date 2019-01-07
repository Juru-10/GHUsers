function f1(fv,sv,tv) {
  var msg1="Your triangle is ";
  var msg2=" triangle.";
  var res=["EQUILATERAL","ISOSCELES","SCALENE","NOT a triangle"];
  var resp;
  if(fv+sv>tv||sv+tv>fv||tv+fv>sv){
    if(fv==sv==tv){
      resp = msg1+res[0]+msg2;
    };
    else if(fv==sv||fv==tv||sv==tv){
      resp = msg1+res[1]+msg2;
    };
    else if(fv!=sv&&sv!=tv&&fv!=tv){
      resp = msg1+res[2]+msg2;
    };
  }
  else if(fv+sv<=tv||sv+tv<=fv||tv+fv<=sv){
    resp =res[3];
  }
  else {
    resp ="Try again";
  }
  var x=document.getElementsById("tr").value;
  document.getElementsById("demo").innerHTML = x;
}
