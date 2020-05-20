
let plus = document.getElementById("plus");
let pause = document.getElementById("pause");
let minus = document.getElementById("minus")
const form = document.getElementById("comment-form");
const like = document.getElementById("heart");

let comments = document.querySelector(".comments");

let sec = 0;
function count (){
    sec++
    let counter = document.getElementById("counter");
    counter.innerText = sec;
 

}
let intervalId = setInterval(count, 1000);

function incsecs () {
   
    console.log("added")
    counter.innerText = sec++;
    console.log(sec);

}
function decSecs(){
    console.log("added")
    counter.innerText = sec--;
    console.log(sec);

}
plus.addEventListener('click', incsecs)
minus.addEventListener('click', decSecs)
let isPause = true;
function stopCounter (){
    if(isPause){
        clearInterval(intervalId);
        pause.innerText = "resume"
        isPause = false;
    } else {
        pause.innerText = "puase"
        intervalId = setInterval(count, 1000);
        isPause = true;
    }
    
  
}

pause.addEventListener('click' , stopCounter);

form.addEventListener('submit', function(e){
e.preventDefault();
let comment = document.getElementById("comment-input").value;
let uList  = document.createElement('ul');
let listItems = document.createElement('li');
comments.appendChild(uList);
uList.appendChild(listItems);
listItems.innerText = comment;
});
let num ;
let likesNum;
let likesUl = document.getElementsByClassName("likes")[0];
function likeHeart (){
    
    if (num === sec){

        likesNum = likesNum + 1;
        likesUl.lastChild.innerHTML = `Like on ${sec} liked ${likesNum}`;
       
       
       

    } else  {
        likesNum = 1;
        let likeItems = document.createElement('li');
        likesUl.appendChild(likeItems);
        likeItems.innerHTML = `Like on ${sec} liked ${likesNum} `

    }
    num = sec;

}
like.addEventListener('click', likeHeart);