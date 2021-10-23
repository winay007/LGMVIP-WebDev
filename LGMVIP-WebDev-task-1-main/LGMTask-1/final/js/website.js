let img_hover = document.getElementById("img_hover");
let show = document.getElementById("show");
img_hover.addEventListener("onmouseover", () => {
  console.log("vinay");

  if (show.style.opacity == -16) {
    show.style.opacity = 100;
  } else {
    show.style.opacity = 100;
  }
});

// for image gallary
window.onload = function () {
  // load thumbnails
  photo = document.querySelectorAll(".photo-item");
  photoLength = photo.length;
  for (i = 0; i < photoLength; i++) {
    photoW = photo[i].naturalWidth;
    photoH = photo[i].naturalHeight;
    if (photoW >= photoH) {
      photo[i].style.height = "100px";
    } else {
      photo[i].style.width = "100px";
    }
  }
  conentW = photoLength * 115;
  document.getElementById("photo-container").style.width = conentW + "px";

  // load first photo
  firstPhoto = document.querySelectorAll(".photo-item");
  firstPhoto = firstPhoto[0];
  firstPhotoUrl = firstPhoto.src;
  firstPhotoAlt = firstPhoto.alt;
  document.getElementById("photo-display").innerHTML =
    '<img src="' + firstPhotoUrl + '" id="selected-photo" alt="">';
  document.getElementById("commentary").innerHTML = firstPhotoAlt;
};
marginL = 0;
function leftRight(obj) {
  spaceLeft = document.getElementById("photo-container").style.marginLeft;
  spaceLeft = spaceLeft.replace("px", null);
  spaceLeft = parseInt(spaceLeft);
  step = 300;
  totalLength = document.querySelectorAll(".photo-item").length;
  totalLength *= -115;
  objId = obj.id;
  if (objId == "left") {
    if (spaceLeft >= -step) {
      marginL = 0;
    } else {
      marginL += step;
    }
  }
  if (objId == "right") {
    if (spaceLeft <= totalLength + 500 + step) {
      marginL = totalLength + 500;
    } else {
      marginL -= step;
    }
  }
  document.getElementById("photo-container").style.marginLeft = marginL + "px";
}
function viewPhoto(obj) {
  objUrl = obj.src;
  objAlt = obj.alt;
  document.getElementById("photo-display").innerHTML =
    '<img src="' + objUrl + '" id="selected-photo" alt="">';
  document.getElementById("commentary").innerHTML = objAlt;
  console.log(objAlt);
}
$(function () {
  $("#thumbnail li").click(function () {
    var thisIndex = $(this).index();

    if (thisIndex < $("#thumbnail li.active").index()) {
      prevImage(thisIndex, $(this).parents("#thumbnail").prev("#image-slider"));
    } else if (thisIndex > $("#thumbnail li.active").index()) {
      nextImage(thisIndex, $(this).parents("#thumbnail").prev("#image-slider"));
    }

    $("#thumbnail li.active").removeClass("active");
    $(this).addClass("active");
  });
});

var width = $("#image-slider").width();

function nextImage(newIndex, parent) {
  parent
    .find("li")
    .eq(newIndex)
    .addClass("next-img")
    .css("left", width)
    .animate({ left: 0 }, 600);
  parent
    .find("li.active-img")
    .removeClass("active-img")
    .css("left", "0")
    .animate({ left: -width }, 600);
  parent.find("li.next-img").attr("class", "active-img");
}
function prevImage(newIndex, parent) {
  parent
    .find("li")
    .eq(newIndex)
    .addClass("next-img")
    .css("left", -width)
    .animate({ left: 0 }, 600);
  parent
    .find("li.active-img")
    .removeClass("active-img")
    .css("left", "0")
    .animate({ left: width }, 600);
  parent.find("li.next-img").attr("class", "active-img");
}

/* Thumbails */
var ThumbailsWidth = ($("#image-slider").width() - 18.5) / 7;
$("#thumbnail li").find("img").css("width", ThumbailsWidth);

let btn_contact = document.getElementById("btn_contact");
btn_contact.addEventListener("click", () => {
  alert(" Thank you for your respnose !! Your respnose has been submited");
});

const topLink = document.querySelector(".top-link");
window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  console.log(scrollHeight);
  if (scrollHeight > 500) {
    console.log("helo");

    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
});
