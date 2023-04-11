let submitBtn = document.querySelector('button');
let input = document.querySelectorAll('input');
let errorMsg = document.getElementsByClassName('errorMsg');
let errorIcon = document.getElementsByClassName('errorIcon');


submitBtn.addEventListener("click", function() {
  for (let i = 0; i < input.length; i++) {
    if(input[i].value === "") {
      input[i].style.marginBottom = "0";
      input[i].style.border = "1px solid rgb(211, 0, 0)";
      errorMsg[i].style.display = "block";
      errorIcon[i].style.display = "block";
    } else {
      input[i].style.marginBottom = "18px";
      input[i].style.border = "1px solid #ccc";
      errorMsg[i].style.display = "none";
      errorIcon[i].style.display = "none";
    }
  }
  checkIt();
})

function checkIt(){
  let email = input[2].value;
  let exptext = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
    if(exptext.test(email)==false){
      //이메일 형식이 알파벳+숫자@알파벳+숫자.알파벳+숫자 형식이 아닐경우			
      input[2].style.marginBottom = "0";
      input[2].style.border = "1px solid rgb(211, 0, 0)";
      errorMsg[2].style.display = "block";
      errorIcon[2].style.display = "block";
    }
  }