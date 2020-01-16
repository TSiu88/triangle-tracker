function sideCompare(side1, side2, side3) {
  if(Number.isNaN(side1) || Number.isNaN(side2) || Number.isNaN(side3)){
    alert("This is not a triangle. Triangles are defined by numbers");
  }
  else if((side1+side2) <= side3){
    alert("This does not make a triangle (sides too short)")
  }
  else{
    if(side1 === side2) {
      if(side1 === side3){
        alert("This triangle is Equilateral (all sides equal)!");
      }
      else{
        alert("This triangle is Isosceles (2 sides equal)!");
      }
    }
    else if(side1 === side3 || side2 === side3){
      alert("This triangle is Isosceles (2 sides equal)!");
    }
    else{
      alert("This triangle is Scalene (no sides equal)!")
    }
  }
}


$(document).ready(function(){
  $("form").submit(function(event){

  var side1 = parseInt($("#side1").val());
  var side2 = parseInt($("#side2").val());
  var side3 = parseInt($("#side3").val());
  console.log(side2);

  sideCompare(side1, side2, side3);
  
  event.preventDefault();

  });
});