console.log("local storage demo file");




//check if localstorage items exist 
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
}


// save the data to the website 
var saveUserInfo = function(){

	document.querySelector(".flexbox-buttons_spoon").addEventListener('click', displayFood);
    
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
}


//run functions when you refresh the page 
window.addEventListener('DOMContentLoaded', function(){
	checkForItems();
	saveUserInfo(); 
});