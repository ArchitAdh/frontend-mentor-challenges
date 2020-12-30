const shareBtn = document.querySelector(".content__icon");
const shareDiv = document.querySelector(".share");

// click share event

shareBtn.addEventListener("click", shareDialog);

function shareDialog() {
  //   shareDiv.style.display = "flex";
  if (shareDiv.style.display === "none") {
    shareDiv.style.display = "flex";
  } else {
    shareDiv.style.display = "none";
  }
}

// test text
