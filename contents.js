console.log("Top Solution Chrome Extension Loaded");

// every time page loads, click through link and display thumbs up and thumbs down 


let element = Array.prototype.slice.call(document.querySelectorAll("div"));

let thumbsUp;
for (let i = 0; i < element.length; i++) {
    //console.log(element[i])
    if(element[i].className == "review-count up-count"){
       thumbsUp = parseInt(element[i].innerText);  
       console.log("THUMBS: " + thumbsUp);
    

    }
}
function reqListener () {
    console.log(this.responseText);
  }
  
  var oReq = new XMLHttpRequest();
  oReq.addEventListener("load", reqListener);
  oReq.open("GET", "https://www.chegg.com/homework-help/questions-and-answers/find-tension-b-c-q16443405");
  oReq.send();