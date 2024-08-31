// document.getElementById("man").onclick = function () {
//     alert("Photo clicked");
// }

//The above code can be also written as below
//  document.getElementById("man").addEventListener("click", function () {
//      alert("Photo clicked");
//  }, false)

 //attachevent listener
//  document.getElementById("owl").addEventListener("click", function (e) {
//      //alert("Owl clicked");
//      console.log(e);
//  }, false)

 //type of event
//  
//  document.getElementById("owl").addEventListener("click", function (e) {
//     //alert("Owl clicked");
//     console.log(e.type);
// }, false)

//timestamp
// document.getElementById("owl").addEventListener("click", function (e) {
//     //alert("Owl clicked");
//     console.log(e.timeStamp);
// }, false)

//defaultPrevent
// document.getElementById("owl").addEventListener("click", function (e) {
//     //alert("Owl clicked");
//     console.log(e.defaultPrevented);
// }, false)

//target
// document.getElementById("owl").addEventListener("click", function (e) {
//     //alert("Owl clicked");
//     console.log(e.target);
// }, false)

//toElement
// document.getElementById("owl").addEventListener("click", function (e) {
//     //alert("Owl clicked");
//     console.log(e.toElement);
// }, false)

//srcElement
// document.getElementById("owl").addEventListener("click", function (e) {
//     //alert("Owl clicked");
//     console.log(e.srcElement);
// }, false)

//currentTarget
// document.getElementById("owl").addEventListener("click", function (e) {
//     //alert("Owl clicked");
//     console.log(e.currentTarget);
// }, false)

//clientX
// document.getElementById("owl").addEventListener("click", function (e) {
//     //alert("Owl clicked");
//     console.log(e.clientX);
// }, false)

//clientY
// document.getElementById("owl").addEventListener("click", function (e) {
//     //alert("Owl clicked");
//     console.log(e.clientY);
// }, false)

//screenX
// document.getElementById("owl").addEventListener("click", function (e) {
//     //alert("Owl clicked");
//     console.log(e.screenX);
// }, false)

//screenY
// document.getElementById("owl").addEventListener("click", function (e) {
//     //alert("Owl clicked");
//     console.log(e.screenY);
// }, false)

//pageX , pageY
// document.getElementById("owl").addEventListener("click", function (e) {
//     //alert("Owl clicked");
//     console.log(e.pageX);
//     console.log(e.pageY);
// }, false)

//keycode, ctrlKey, shiftKey, altKey
// document.getElementById("owl").addEventListener("click", function (e) {
//     //alert("Owl clicked");
//     console.log(e.keyCode);
//     console.log(e.ctrlKey);
//     console.log(e.shiftKey);
//     console.log(e.altKey);
// }, false)

//eventPropagation
// document.getElementById("owl").addEventListener("click", function (e) {
//     alert("Owl clicked");
//     console.log(e.eventPhase);
//     e.stopPropagation();
// }, false)

// document.getElementById("#list").addEventListener("click", function (e) {
//     console.log("clicked inside the ul");
// }, false)
// document.getElementById("#man").addEventListener("click", function (e) {
//     e.preventDefault();
//     console.log("clicked inside the ul");
// }, false)

// document.getElementById("#ut").addEventListener("click", function (e) {
//     console.log("ut clicked");

//     //e.stopPropagation();
// })

// document.getElementById("google").addEventListener("click", function (e) {
//     e.preventDefault();
//     console.log("google clicked");
   
// }, false)



document.querySelector('#list').addEventListener('click', function (e) {
    //console.log(e.target.parentNode);
    console.log(e.target.tagName);
    if (e.target.tagName === 'IMG') {
        console.log(e.target.id);
        let removeIt = e.target.parentNode;
        removeIt.remove();
    }
    //let removeIt = e.target.parentNode;
    //removeIt.remove();
    //removeIt.parentNode.removeChild(removeIt);
}, false)

