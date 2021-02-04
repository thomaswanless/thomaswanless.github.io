

function changePreview(previewName){
  var previewText = document.getElementById("previewText");
  var previewImage = document.getElementById("previewImage");
  var gallery = document.getElementById("gallery");
  var button1 = document.getElementById("button1");
  var button2 = document.getElementById("button2");
  var previewSwap = previewName;
  gallery.style.opacity = "0";
  setTimeout(function(){
    var previewText = document.getElementById("previewText");
    var previewImage = document.getElementById("previewImage");
    var button1 = document.getElementById("button1");
    var button2 = document.getElementById("button2");
    if (previewName == "JackPerks"){
      previewText.innerHTML = "Jack Perks Wildlife Media";
      previewImage.src = "img/JackPerks.png";
      button1.style.fill = "white";
      button2.style.fill = "transparent";
    }

    if (previewName == "TomWanless"){
      previewText.innerHTML = "Tom Wanless Music"
      previewImage.src = "img/TomWanless.png";
      button1.style.fill = "transparent";
      button2.style.fill = "white";
    }

  }, 500);
  setTimeout(function(){
    var gallery = document.getElementById("gallery");
    gallery.style.opacity = "1";
  },600);
}
