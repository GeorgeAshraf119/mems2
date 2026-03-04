let memes = []
fetch("https://api.imgflip.com/get_memes")
.then(function(response){
    return response.json()
})
.then(function(data){
    memes = data.data.memes
})
let button = document.getElementById("showMemeBtn")

button.onclick = function(){
    let input = document.getElementById("numberInput")
    let number = input.value
    let container = document.getElementById("memeContainer")
    
    if(number >= 1 && number <= 100 && memes.length > 0){
        let meme = memes[number - 1]
        let memeName = meme.name
        let memeUrl = meme.url
        
        container.innerHTML = "<h5>" + memeName + "</h5>" +"<img src='" + memeUrl + "' class='img-fluid rounded'>"
    } else {
        container.innerHTML = "Enter number between 1 and 100"
    }
}