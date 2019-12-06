function randomNumber (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


console.log("local storage demo file");
var checkForItems = function(){

  if (!storageAvailable('localStorage')){ return; }
  if(localStorage.getItem('visibility')){
		var visible = localStorage.getItem('visibility');
    console.log(visible);
    
    document.querySelector(".plate").style.visibility = 'visible';
    document.querySelector(".plate_2").style.visibility = 'visible';
    document.querySelector(".plate_3").style.visibility = 'visible';
    document.querySelector(".plate_4").style.visibility = 'visible';
    document.querySelector(".plate_5").style.visibility = 'visible';
    document.querySelector(".plate_6").style.visibility = 'visible';
    document.querySelector(".plate_7").style.visibility = 'visible';
    document.querySelector(".plate_8").style.visibility = 'visible';
    }

    if(localStorage.getItem('transform')){
      var theScale = localStorage.getItem('transform');
      console.log(theScale);

      document.querySelector(".plate").style.transform = "scale(theScale)";
      document.querySelector(".plate_2").style.transform = "scale(theScale)";
      document.querySelector(".plate_3").style.transform = "scale(theScale)";
      document.querySelector(".plate_4").style.transform = "scale(theScale)";
      document.querySelector(".plate_5").style.transform = "scale(theScale)";
      document.querySelector(".plate_6").style.transform = "scale(theScale)";
      document.querySelector(".plate_7").style.transform = "scale(theScale)";
      document.querySelector(".plate_8").style.transform = "scale(theScale)";
}
}


// save the data to the website 
var saveUserInfo = function(){

  // one
	document.querySelector(".flexbox-buttons_start").addEventListener('click', displayFood);
    
    function displayFood() {
      var visible = 'visible';
      localStorage.setItem('visibility', visible);

      document.querySelector(".plate").style.visibility = 'visible';
      document.querySelector(".plate_2").style.visibility = 'visible';
      document.querySelector(".plate_3").style.visibility = 'visible';
      document.querySelector(".plate_4").style.visibility = 'visible';
      document.querySelector(".plate_5").style.visibility = 'visible';
      document.querySelector(".plate_6").style.visibility = 'visible';
      document.querySelector(".plate_7").style.visibility = 'visible';
      document.querySelector(".plate_8").style.visibility = 'visible';
  }

  //two 
  document.querySelector(".flexbox-buttons_spoon").addEventListener('click', resizeFood);
    
  function resizeFood() {
    var theScale = randomNumber(0, 1.8);
    localStorage.setItem('transform', theScale);

    document.querySelector(".plate").style.transform = "scale(theScale)";
    document.querySelector(".plate_2").style.transform = "scale(theScale)";
    document.querySelector(".plate_3").style.transform = "scale(theScale)";
    document.querySelector(".plate_4").style.transform = "scale(theScale)";
    document.querySelector(".plate_5").style.transform = "scale(theScale)";
    document.querySelector(".plate_6").style.transform = "scale(theScale)";
    document.querySelector(".plate_7").style.transform = "scale(theScale)";
    document.querySelector(".plate_8").style.transform = "scale(theScale)";
  }
}


window.addEventListener('DOMContentLoaded', function(){
	checkForItems();
	saveUserInfo(); 
});