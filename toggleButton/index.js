function backgroundColor(color){
    //console.log("background black")
    document.body.style.backgroundColor = color
}

//backgroundBlack()

const themeButton = document.getElementById("theme-btn")

themeButton.addEventListener('click', function (){
    //console.log(document.body.style.backgroundColor)
    const currentColor = document.body.style.backgroundColor

    if(!currentColor || currentColor == 'white'){
        backgroundColor('black')
        themeButton.innerText = 'light'
    }else{
        backgroundColor('white')
        themeButton.innerText = 'Dark'
    }
})