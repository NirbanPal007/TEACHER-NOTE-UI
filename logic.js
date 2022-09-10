// function for hiding all the cards
function hide(){
    let elements = document.querySelectorAll('.hidden');
    for (let i =0 ;i < elements.length ; i++){
        elements[i].style.display = "none";
    }
}
// function for showing all the cards
function showall(){
    let elements = document.querySelectorAll('.hidden');
    for (let i =0 ;i < elements.length ; i++){
        elements[i].style.display = "block";
    }
}
document.getElementById("sub-items").onchange = function() {
    // hiding all
    hide();
    //for subject
    if (this.value == 'subject') {
        showall();
    }
    // for english
    if (this.value == 'english') {
        var engcard = document.querySelectorAll('.english-card');
        for (let i = 0; i < engcard.length; i++) {
            engcard[i].style.display = "block";
          }
    }
    // for maths
    if (this.value == 'maths') {
        var mathscard = document.querySelectorAll('.maths-card');
        for (let i = 0; i < mathscard.length; i++) {
            mathscard[i].style.display = "block";
          }

    }
    //for geography
    if (this.value == 'geography') {
        var geocard = document.querySelectorAll('.geography-card');
        for (let i = 0; i < geocard.length; i++) {
            geocard[i].style.display = "block";
          }
    }
}