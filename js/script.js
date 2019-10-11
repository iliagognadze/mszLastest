$( document ).ready(function() {

    var videoBox = document.getElementById('videoBox');
    var calcBox = document.getElementById('calcBox');
    var videoButton = document.getElementById('videoBtn');
    var calcButton = document.getElementById('calcBtn');

    videoButton.addEventListener('click', function(){
   		this.classList.add("d-none");
   		calcBox.classList.add("d-none");
   		videoBox.classList.remove("d-none");
   		calcButton.classList.remove("d-none");
   	});	

   	calcButton.addEventListener('click', function(){
   		this.classList.add("d-none");
   		videoBox.classList.add("d-none");
   		calcBox.classList.remove("d-none");
   		videoButton.classList.remove("d-none");
   	});	


});

