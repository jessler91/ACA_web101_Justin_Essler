
// window.alert("Welcome to my Tac Page");

var gameMarker = "x"

function changeMarkerToX(){ 
    console.log("The x button was clicked!")

    gameMarker="x"
}

function changeMarkerToO(){ 
    console.log("The O button was clicked!")
    gameMarker = "0"
}

function placeMark(id){ 
    document.getElementById(id).innerHTML=gameMarker
    console.log("wow you made a mark")
}

