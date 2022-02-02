const countInput= document.getElementById("countInput")
const increaseButton= document.getElementById("increase")
const decreaseButton= document.getElementById("decrease")
const starCountElement= document.getElementById("star-count")
const body= document.getElementById("body")
const sound= document.getElementById("sound")
const menu = document.getElementById("menu");
const lyrics = document.getElementById("lyrics");

menu.addEventListener("click", ()=>{
    lyrics.classList.toggle("active")
})


let counter=0;

const checkCount=()=>{
    if (counter <= 0) {
      decreaseButton.disabled = true;
      sound.pause()
    } else {
      decreaseButton.disabled = false;
      sound.play()

    }
}

if(counter<=0){
    decreaseButton.disabled=true;
}
else{
    decreaseButton.disabled=false;
    
}

function render (){
    starCountElement.textContent=counter
}

render()


let starsCount=1;
const addStars=()=>{
    const star= document.createElement("div")
    star.classList.add("stars")
    if(starsCount%2===1){
        star.classList.add("biggerStars")
    }
    star.id = `star-${starsCount}`;
    const randomNumber1 = Math.floor(Math.random() * 300)+10;
    const randomNumber2 = Math.floor(Math.random() * 99)+1;
    console.log(randomNumber1)
    body.appendChild(star)
    const selectedStar = document.getElementById(`star-${starsCount}`);
    selectedStar.style.setProperty("top",`${randomNumber1}px`)
    selectedStar.style.setProperty("left",`${randomNumber2}vw`)
    
    starsCount++;

}

const removeStar=()=>{
   body.lastChild.remove()
   
}

increaseButton.addEventListener("click", ()=>{
    counter++;
        addStars()
    
    checkCount()
    render()
})

decreaseButton.addEventListener("click", () => {
  counter--;
  checkCount()
  removeStar()
  render();
});
