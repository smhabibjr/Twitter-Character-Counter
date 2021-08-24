function countChar(textArea) {
  var totalText = textArea.value.length;
  document.getElementById('typed-characters').innerHTML= (totalText);
  document.getElementById("remainingText").innerHTML = (255 - totalText);
}


document.querySelector("#btn-counter").addEventListener("click" , function () {
  let copyText = document.querySelector(".text-input");
  copyText.select();
  document.execCommand("copy");
  document.querySelector("#btn-counter").innerHTML = "Copied";
})