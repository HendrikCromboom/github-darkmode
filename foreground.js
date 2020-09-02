console.log("Foreground is running!");
for (var i = 0; i < document.body.getElementsByTagName("*").length; i++){
    document.body.getElementsByTagName("*")[i].style.backgroundColor = "black"
    document.body.getElementsByTagName("*")[i].style.color = "white"
}
