const inputEl = document.querySelector("#textarea-input");
const countCharEl = document.querySelector(".char-count");
const RemainingCharEl = document.querySelector(".total-char");
const ErrorEl = document.querySelector("#error-text");
const hiddenEl = document.querySelector(".hidden"); 

inputEl.addEventListener("keyup", () => {
    charCount();
});

function charCount() {
    let maxLength = parseInt(inputEl.getAttribute("maxlength"));
    let currentLength = inputEl.value.length;
    let remaining = maxLength - currentLength;

    countCharEl.innerHTML = currentLength;
    RemainingCharEl.innerHTML = remaining;
    if(maxLength <= currentLength){
           
     
        hiddenEl.style.display = "block";

    }
    else{
         hiddenEl.style.display = "none";
    }
   

   
}
