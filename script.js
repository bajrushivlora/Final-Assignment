function randomNumber (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


// ---------------------------------------------------------------------------------------------------------


console.log("local storage demo file");

var checkForItems = function(){

  if (!storageAvailable('localStorage')){ return; }

    if(localStorage.getItem('visibility')){
		var visible = localStorage.getItem('visibility');
    console.log(visible);
    document.querySelector(".plate").style.visibility = visible;
    document.querySelector(".plate_2").style.visibility = visible;
    document.querySelector(".plate_3").style.visibility = visible;
    document.querySelector(".plate_4").style.visibility = visible;
    document.querySelector(".plate_5").style.visibility = visible;
    document.querySelector(".plate_6").style.visibility = visible;
    document.querySelector(".plate_7").style.visibility = visible;
    document.querySelector(".plate_8").style.visibility = visible;
    }

    if(localStorage.getItem('width')){
      var theWidth = localStorage.getItem('width');
      console.log(theWidth);
      document.querySelector(".plate").style.width = theWidth + 'vw';
      document.querySelector(".plate_2").style.width = theWidth + 'vw';
      document.querySelector(".plate_3").style.width = theWidth + 'vw';
      document.querySelector(".plate_4").style.width = theWidth + 'vw';
      document.querySelector(".plate_5").style.width = theWidth + 'vw';
      document.querySelector(".plate_6").style.width = theWidth + 'vw';
      document.querySelector(".plate_7").style.width = theWidth + 'vw';
      document.querySelector(".plate_8").style.width = theWidth + 'vw';
    }

    if(localStorage.getItem('height')){
      var theHeight = localStorage.getItem('height');
      console.log(theHeight);
      document.querySelector(".plate").style.height = theHeight + 'vw';
      document.querySelector(".plate_2").style.height = theHeight + 'vw';
      document.querySelector(".plate_3").style.height = theHeight + 'vw';
      document.querySelector(".plate_4").style.height = theHeight + 'vw';
      document.querySelector(".plate_5").style.height = theHeight + 'vw';
      document.querySelector(".plate_6").style.height = theHeight + 'vw';
      document.querySelector(".plate_7").style.height = theHeight + 'vw';
      document.querySelector(".plate_8").style.height = theHeight + 'vw';
    }

    if(localStorage.getItem('translateX')){
      var translateX = localStorage.getItem('translateX');
      console.log(translateX);
      document.querySelector(".plate").style.transform = 'translateX' + '(' + translateX + 'vw' + ')';
      document.querySelector(".plate_2").style.transform = 'translateX' + '(' + translateX + 'vw' + ')';
      document.querySelector(".plate_3").style.transform = 'translateX' + '(' + translateX + 'vw' + ')';
      document.querySelector(".plate_4").style.transform = 'translateX' + '(' + translateX + 'vw' + ')';
      document.querySelector(".plate_5").style.transform = 'translateX' + '(' + translateX + 'vw' + ')';
      document.querySelector(".plate_6").style.transform = 'translateX' + '(' + translateX + 'vw' + ')';
      document.querySelector(".plate_7").style.transform = 'translateX' + '(' + translateX + 'vw' + ')';
      document.querySelector(".plate_8").style.transform = 'translateX' + '(' + translateX + 'vw' + ')';
    }

    if(localStorage.getItem('translateY')){
      var translateY = localStorage.getItem('translateY');
      console.log(translateY);
      document.querySelector(".plate").style.transform = 'translateY' + '(' + translateY + 'vw' + ')';
      document.querySelector(".plate_2").style.transform = 'translateY' + '(' + translateY + 'vw' + ')';
      document.querySelector(".plate_3").style.transform = 'translateY' + '(' + translateY + 'vw' + ')';
      document.querySelector(".plate_4").style.transform = 'translateY' + '(' + translateY + 'vw' + ')';
      document.querySelector(".plate_5").style.transform = 'translateY' + '(' + translateY + 'vw' + ')';
      document.querySelector(".plate_6").style.transform = 'translateY' + '(' + translateY + 'vw' + ')';
      document.querySelector(".plate_7").style.transform = 'translateY' + '(' + translateY + 'vw' + ')';
      document.querySelector(".plate_8").style.transform = 'translateY' + '(' + translateY + 'vw' + ')';
    }

    if(localStorage.getItem('opacity')){
      var hidden = localStorage.getItem('opacity');
      console.log(hidden);
    }

    if(localStorage.getItem('scale')) {
      var scale = localStorage.getItem('scale');
      console.log(scale);
      document.querySelector(".plate").style.transform = 'scale' + '(' + scale + ')';
      document.querySelector(".plate_2").style.transform = 'scale' + '(' + scale + ')';
      document.querySelector(".plate_3").style.transform = 'scale' + '(' + scale + ')';
      document.querySelector(".plate_4").style.transform = 'scale' + '(' + scale + ')';
      document.querySelector(".plate_5").style.transform = 'scale' + '(' + scale + ')';
      document.querySelector(".plate_6").style.transform = 'scale' + '(' + scale + ')';
      document.querySelector(".plate_7").style.transform = 'scale' + '(' + scale + ')';
      document.querySelector(".plate_8").style.transform = 'scale' + '(' + scale + ')';
    }

    if(localStorage.getItem('saturate')) {
      var saturation = localStorage.getItem('saturate');
      console.log(saturation);
      document.querySelector(".plate").style.filter = 'saturate' + '(' + saturation + ')';
      document.querySelector(".plate_2").style.filter = 'saturate' + '(' + saturation + ')';
      document.querySelector(".plate_3").style.filter = 'saturate' + '(' + saturation + ')';
      document.querySelector(".plate_4").style.filter = 'saturate' + '(' + saturation + ')';
      document.querySelector(".plate_5").style.filter = 'saturate' + '(' + saturation + ')';
      document.querySelector(".plate_6").style.filter = 'saturate' + '(' + saturation + ')';
      document.querySelector(".plate_7").style.filter = 'saturate' + '(' + saturation + ')';
      document.querySelector(".plate_8").style.filter = 'saturate' + '(' + saturation + ')';
    }
}

// ---------------------------------------------------------------------------------------------------------



var saveUserInfo = function(){

	document.querySelector(".flexbox-buttons_start").addEventListener('click', displayFood);
    function displayFood() {
      var newVisible = 'visible';
      localStorage.setItem('visibility', newVisible);
      document.querySelector(".plate").style.visibility = newVisible;
      document.querySelector(".plate_2").style.visibility = newVisible;
      document.querySelector(".plate_3").style.visibility = newVisible;
      document.querySelector(".plate_4").style.visibility = newVisible;
      document.querySelector(".plate_5").style.visibility = newVisible;
      document.querySelector(".plate_6").style.visibility = newVisible;
      document.querySelector(".plate_7").style.visibility = newVisible;
      document.querySelector(".plate_8").style.visibility = newVisible;
  }
 
  document.querySelector(".flexbox-buttons_spoon").addEventListener('click', changeFoodWidthandHeight);
    function changeFoodWidthandHeight() {
    
    var random = randomNumber(-80, 80);
    var randomtwo = randomNumber(-40, 90);
    var randomthree = randomNumber(-10, 50);
    var randomfour = randomNumber(-80, 80);
    var randomfive = randomNumber(-60, 100);
    var randomsix = randomNumber(-100, 30);
    var randomseven = randomNumber(-90, 40);
    var randomeight = randomNumber(-30, 80);


    localStorage.setItem('width', random);
    localStorage.setItem('width', randomtwo);
    localStorage.setItem('width', randomthree);
    localStorage.setItem('width', randomfour);
    localStorage.setItem('width', randomfive);
    localStorage.setItem('width', randomsix);
    localStorage.setItem('width', randomseven);
    localStorage.setItem('width', randomeight);


    document.querySelector(".plate").style.width =  random + "vw";
    document.querySelector(".plate_2").style.width =  randomtwo + "vw";
    document.querySelector(".plate_3").style.width =  randomthree + "vw";
    document.querySelector(".plate_4").style.width =  randomfour + "vw";
    document.querySelector(".plate_5").style.width =  randomfive + "vw";
    document.querySelector(".plate_6").style.width =  randomsix + "vw";
    document.querySelector(".plate_7").style.width =  randomseven + "vw";
    document.querySelector(".plate_8").style.width =  randomeight + "vw";

    var random1 = randomNumber(-120, 80);
    var random2 = randomNumber(-60, 40);
    var random3 = randomNumber(-10, 50);
    var random4 = randomNumber(-70, 90);
    var random5 = randomNumber(-10, 20);
    var random6 = randomNumber(-40, 30);
    var random7 = randomNumber(-100, 70);
    var random8 = randomNumber(-60, 50);

    localStorage.setItem('height', random1);
    localStorage.setItem('height', random2);
    localStorage.setItem('height', random3);
    localStorage.setItem('height', random4);
    localStorage.setItem('height', random5);
    localStorage.setItem('height', random6);
    localStorage.setItem('height', random7);
    localStorage.setItem('height', random8);

    document.querySelector(".plate").style.height =  random1 + "vw";
    document.querySelector(".plate_2").style.height =  random2 + "vw";
    document.querySelector(".plate_3").style.height =  random3 + "vw";
    document.querySelector(".plate_4").style.height =  random4 + "vw";
    document.querySelector(".plate_5").style.height =  random5 + "vw";
    document.querySelector(".plate_6").style.height =  random6+ "vw";
    document.querySelector(".plate_7").style.height =  random7 + "vw";
    document.querySelector(".plate_8").style.height =  random8 + "vw";

    var newSaturation = '0.8';
    localStorage.setItem('saturate', newSaturation);
    document.querySelector(".plate").style.filter = 'saturate' + '(' + newSaturation + ')';
    document.querySelector(".plate_2").style.filter = 'saturate' + '(' + newSaturation + ')';
    document.querySelector(".plate_3").style.filter = 'saturate' + '(' + newSaturation + ')';
    document.querySelector(".plate_4").style.filter = 'saturate' + '(' + newSaturation + ')';
    document.querySelector(".plate_5").style.filter = 'saturate' + '(' + newSaturation + ')';
    document.querySelector(".plate_6").style.filter = 'saturate' + '(' + newSaturation + ')';
    document.querySelector(".plate_7").style.filter = 'saturate' + '(' + newSaturation + ')';
    document.querySelector(".plate_8").style.filter = 'saturate' + '(' + newSaturation + ')';
  }

  document.querySelector(".flexbox-buttons_fork").addEventListener('click', moveFood);
    function moveFood() {
      var rand1 = randomNumber(-10, 50);
      var rand2 = randomNumber(-60, 60);
      var rand3 = randomNumber(-30, 70);
      var rand4 = randomNumber(-90, 80);
      var rand5 = randomNumber(-100, 30);
      var rand6 = randomNumber(-70, 20);
      var rand7 = randomNumber(-80, 50);
      var rand8 = randomNumber(-20, 40);

      localStorage.setItem('translateX', rand1);
      localStorage.setItem('translateX', rand2);
      localStorage.setItem('translateX', rand3);
      localStorage.setItem('translateX', rand4);
      localStorage.setItem('translateX', rand5);
      localStorage.setItem('translateX', rand6);
      localStorage.setItem('translateX', rand7);
      localStorage.setItem('translateX', rand8);
      
      document.querySelector(".plate").style.transform = 'translateX' + '(' + rand1 + 'vw' + ')';
      document.querySelector(".plate_2").style.transform = 'translateX' + '(' + rand2 + 'vw' + ')';
      document.querySelector(".plate_3").style.transform = 'translateX' + '(' + rand3 + 'vw' + ')';
      document.querySelector(".plate_4").style.transform = 'translateX' + '(' + rand4 + 'vw' + ')';
      document.querySelector(".plate_5").style.transform = 'translateX' + '(' + rand5 + 'vw' + ')';
      document.querySelector(".plate_6").style.transform = 'translateX' + '(' + rand6 + 'vw' + ')';
      document.querySelector(".plate_7").style.transform = 'translateX' + '(' + rand7 + 'vw' + ')';
      document.querySelector(".plate_8").style.transform = 'translateX' + '(' + rand8 + 'vw' + ')';

      var rand_1 = randomNumber(-40, 50);
      var rand_2 = randomNumber(-90, 20);
      var rand_3 = randomNumber(-70, 90);
      var rand_4 = randomNumber(-20, 30);
      var rand_5 = randomNumber(-50, 100);
      var rand_6 = randomNumber(-10, 20);
      var rand_7 = randomNumber(-100, 10);
      var rand_8 = randomNumber(-100, 10);
      
      localStorage.setItem('translateY', rand_1);
      localStorage.setItem('translateY', rand_2);
      localStorage.setItem('translateY', rand_3);
      localStorage.setItem('translateY', rand_4);
      localStorage.setItem('translateY', rand_5);
      localStorage.setItem('translateY', rand_6);
      localStorage.setItem('translateY', rand_7);
      localStorage.setItem('translateY', rand_8);
      
      document.querySelector(".plate").style.transform = 'translateY' + '(' + rand_1 + 'vw' + ')';
      document.querySelector(".plate_2").style.transform = 'translateY' + '(' + rand_2 + 'vw' + ')';
      document.querySelector(".plate_3").style.transform = 'translateY' + '(' + rand_3 + 'vw' + ')';
      document.querySelector(".plate_4").style.transform = 'translateY' + '(' + rand_4 + 'vw' + ')';
      document.querySelector(".plate_5").style.transform = 'translateY' + '(' + rand_5 + 'vw' + ')';
      document.querySelector(".plate_6").style.transform = 'translateY' + '(' + rand_6 + 'vw' + ')';
      document.querySelector(".plate_7").style.transform = 'translateY' + '(' + rand_7 + 'vw' + ')';
      document.querySelector(".plate_8").style.transform = 'translateY' + '(' + rand_8 + 'vw' + ')';

      var newSaturation = '0.6';
      localStorage.setItem('saturate', newSaturation);
      document.querySelector(".plate").style.filter = 'saturate' + '(' + newSaturation + ')';
      document.querySelector(".plate_2").style.filter = 'saturate' + '(' + newSaturation + ')';
      document.querySelector(".plate_3").style.filter = 'saturate' + '(' + newSaturation + ')';
      document.querySelector(".plate_4").style.filter = 'saturate' + '(' + newSaturation + ')';
      document.querySelector(".plate_5").style.filter = 'saturate' + '(' + newSaturation + ')';
      document.querySelector(".plate_6").style.filter = 'saturate' + '(' + newSaturation + ')';
      document.querySelector(".plate_7").style.filter = 'saturate' + '(' + newSaturation + ')';
      document.querySelector(".plate_8").style.filter = 'saturate' + '(' + newSaturation + ')';
  }

  document.querySelector(".flexbox-buttons_knife").addEventListener('click', moveFood);
  function moveFood() {
    var newSaturation = '0.4';
  localStorage.setItem('saturate', newSaturation);
  document.querySelector(".plate").style.filter = 'saturate' + '(' + newSaturation + ')';
  document.querySelector(".plate_2").style.filter = 'saturate' + '(' + newSaturation + ')';
  document.querySelector(".plate_3").style.filter = 'saturate' + '(' + newSaturation + ')';
  document.querySelector(".plate_4").style.filter = 'saturate' + '(' + newSaturation + ')';
  document.querySelector(".plate_5").style.filter = 'saturate' + '(' + newSaturation + ')';
  document.querySelector(".plate_6").style.filter = 'saturate' + '(' + newSaturation + ')';
  document.querySelector(".plate_7").style.filter = 'saturate' + '(' + newSaturation + ')';
  document.querySelector(".plate_8").style.filter = 'saturate' + '(' + newSaturation + ')';
  }

  document.querySelector(".flexbox-buttons_clean").addEventListener('click', warpFood);
  function warpFood() {
    var newScale = '0.1';
    localStorage.setItem('scale', newScale);
    document.querySelector(".plate").style.transform = 'scale' + '(' + newScale + ')';
    document.querySelector(".plate_2").style.transform = 'scale' + '(' + newScale + ')';
    document.querySelector(".plate_3").style.transform = 'scale' + '(' + newScale + ')';
    document.querySelector(".plate_4").style.transform = 'scale' + '(' + newScale + ')';
    document.querySelector(".plate_5").style.transform = 'scale' + '(' + newScale + ')';
    document.querySelector(".plate_6").style.transform = 'scale' + '(' + newScale + ')';
    document.querySelector(".plate_7").style.transform = 'scale' + '(' + newScale + ')';
    document.querySelector(".plate_8").style.transform = 'scale' + '(' + newScale + ')';

    var newSaturation = '0.2';
    localStorage.setItem('saturate', newSaturation);
    document.querySelector(".plate").style.filter = 'saturate' + '(' + newSaturation + ')';
    document.querySelector(".plate_2").style.filter = 'saturate' + '(' + newSaturation + ')';
    document.querySelector(".plate_3").style.filter = 'saturate' + '(' + newSaturation + ')';
    document.querySelector(".plate_4").style.filter = 'saturate' + '(' + newSaturation + ')';
    document.querySelector(".plate_5").style.filter = 'saturate' + '(' + newSaturation + ')';
    document.querySelector(".plate_6").style.filter = 'saturate' + '(' + newSaturation + ')';
    document.querySelector(".plate_7").style.filter = 'saturate' + '(' + newSaturation + ')';
    document.querySelector(".plate_8").style.filter = 'saturate' + '(' + newSaturation + ')';
  }

  document.querySelector(".flexbox-buttons_done").addEventListener('click', hideFood);
    function hideFood() {

      var newHidden = 'hidden';
      localStorage.setItem('visibility', newHidden);
      document.querySelector(".plate").style.visibility = newHidden;
      document.querySelector(".plate_2").style.visibility = newHidden;
      document.querySelector(".plate_3").style.visibility = newHidden;
      document.querySelector(".plate_4").style.visibility = newHidden;
      document.querySelector(".plate_5").style.visibility = newHidden;
      document.querySelector(".plate_6").style.visibility = newHidden;
      document.querySelector(".plate_7").style.visibility = newHidden;
      document.querySelector(".plate_8").style.visibility = newHidden;
    }
}


// ---------------------------------------------------------------------------------------------------------


window.addEventListener('DOMContentLoaded', function(){
	checkForItems();
	saveUserInfo(); 
});






    // for each .plate_, we need to save its specific randomNumber width and height
    /*
      
    .plate
    [
      [random(2,20), random(2,20)],
      [random(2,20), random(2,20)],
      [random(2,20), random(2,20)],
      [random(2,20), random(2,20)],
      [random(2,20), random(2,20)],
      [random(2,20), random(2,20)],
      [random(2,20), random(2,20)]
    ]

    // convert array into string using JSON.stringify()
    // convert into object using JSON.parse()
    
    */