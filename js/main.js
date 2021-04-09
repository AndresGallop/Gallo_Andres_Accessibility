(()=> {
    console.log('fired!');


       let  movievideo = document.querySelector(".videomovie"),
            tvshowvideo = document.querySelector(".videotvshow"),
       
            lyrics = document.querySelector(".actuallyrics"),
            Seelyrics = document.querySelector(".audiolyrics"),
            things = document.querySelector(".things"),
            audiosection = document.querySelector(".audiomusic"),

            captions = document.querySelector("span"),
            captionstwo = document.querySelector(".spantwo"),
  
            playbutton = document.querySelector(".fa-play-circle"),
            backbutton = document.querySelector(".fa-backward"),
            forwardbutton = document.querySelector(".fa-forward"),
            undo = document.querySelector(".fa-undo"),

            playbuttontwo = document.querySelector(".fa-play-circletwo"),
            backbuttontwo = document.querySelector(".fa-backwardtwo"),
            forwardbuttontwo = document.querySelector(".fa-forwardtwo"),
            undotwo = document.querySelector(".fa-undotwo"),

            track = movievideo.textTracks,
            tracks = tvshowvideo.textTracks;
        // slider = document.getElementById("slider");
  
  
  
        function showLyrics() {
            lyrics.classList.toggle('show-actuallyrics');
            things.classList.toggle('things-bigger');
            audiosection.classList.toggle('audiomusic-bigger');
            Seelyrics.classList.toggle('audiolyrics-centered');
        
        }

        function captionschange(){
            

            if (captions.innerHTML === "OFF") {
                captions.innerHTML = "ON";
                track[0].mode = 'showing';
              } else {
                captions.innerHTML = "OFF";
                track[0].mode = 'disabled';
              }

              
            //captions.innerHTML.toggle = "ON";
            captions.classList.toggle('captions-on');
        }

        function captionstwochange(){
            

            if (captionstwo.innerHTML === "OFF") {
                captionstwo.innerHTML = "ON";
                tracks[0].mode = 'showing';
              } else {
                captionstwo.innerHTML = "OFF";
                tracks[0].mode = 'disabled';
              }

              
            //captionstwo.innerHTML.toggle = "ON";
            captionstwo.classList.toggle('captions-on');
        }

  
  //MOVIE
  function playandpause(){
  
    if (movievideo.paused) {
  
      console.log("play");
      movievideo.play();
      tvshowvideo.pause();
  }
  
    else {
      movievideo.pause();
      console.log("paused");
  }
  }
  
  function restarVideo (){
  
    movievideo.currentTime = 0;
  }
  
  function forward(){
  
    movievideo.currentTime += 10;
  
  }
  
  function backward(){
  
    movievideo.currentTime -= 10;
  }


  //TVSHOW

  function playandpausetwo(){
  
    if (tvshowvideo.paused) {
  
      console.log("play");
      tvshowvideo.play();
      movievideo.pause();
  }
  
    else {
      tvshowvideo.pause();
      console.log("paused");
  }
  }
  
  function restarVideotwo (){
  
    tvshowvideo.currentTime = 0;
  }
  
  function forwardtwo(){
  
    tvshowvideo.currentTime += 10;
  
  }
  
  function backwardtwo(){
  
    tvshowvideo.currentTime -= 10;
  }
  
  

    Seelyrics.addEventListener('click', showLyrics);

    captions.addEventListener('click', captionschange);
    captionstwo.addEventListener('click', captionstwochange);

    undo.addEventListener("click", restarVideo);
    forwardbutton.addEventListener("click", forward);
    backbutton.addEventListener("click", backward);
    playbutton.addEventListener("click", playandpause);

    undotwo.addEventListener("click", restarVideotwo);
    forwardbuttontwo.addEventListener("click", forwardtwo);
    backbuttontwo.addEventListener("click", backwardtwo);
    playbuttontwo.addEventListener("click", playandpausetwo);
  

  })();
  