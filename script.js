const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"]

sounds.forEach(sound=>{
    playSound(sound)
})
function playSound(sound){
    //document.createElement -- creates element
    const button = document.createElement("button") //creates button
    button.classList.add("btn") //adds btn classname
    button.innerText = sound    //adds text to button with classname btn
    button.addEventListener("click", ()=>{
        stopSounds()
        document.getElementById(sound).play()
    })
    const divElement = document.getElementById("buttons")
    divElement.appendChild(button)  //adds btn button to buttons div
}
function stopSounds(){
    sounds.forEach(sound=>{
        document.getElementById(sound).pause()
        document.getElementById(sound).currentTime = 0
    })
}
