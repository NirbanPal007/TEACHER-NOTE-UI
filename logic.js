function hide(){
    let elements = document.querySelectorAll('.hidden');
    for (let i =0 ;i < elements.length ; i++){
        elements[i].style.display = "none";
        // console.log(elements[i]);
    }
}
function showall(){
    let elements = document.querySelectorAll('.hidden');
    for (let i =0 ;i < elements.length ; i++){
        elements[i].style.display = "block";
        // console.log(elements[i]);
    }
}
document.getElementById("sub-items").onchange = function() {

    hide();




    if (this.value == 'subject') {
        var optionID=document.getElementById('subject');
        // alert(optionID.value);
        // document.querySelector('.hide').style.display = "block";
        hide();
        showall();
        

    }
    if (this.value == 'english') {
        var optionID=document.getElementById('english');
        // alert(optionID.innerHTML);
        // document.querySelector('.hide').style.display = "none";
        hide();
        var engcard = document.querySelectorAll('.english-card');
        for (let i = 0; i < engcard.length; i++) {
            engcard[i].style.display = "block";
            // console.log(engcard[i]);
          }
    }
    if (this.value == 'maths') {
        var optionID=document.getElementById('maths');
        // alert(optionID.value);
        // document.querySelector('.hide').style.display = "none";
        hide();
        var mathscard = document.querySelectorAll('.maths-card');
        for (let i = 0; i < mathscard.length; i++) {
            mathscard[i].style.display = "block";
            // console.log(engcard[i]);
          }

    }
    if (this.value == 'geography') {
        var optionID=document.getElementById('geography');
        // alert(optionID.value);
        // document.querySelector('.hide').style.display = "none";
        hide();
        var geocard = document.querySelectorAll('.geography-card');
        for (let i = 0; i < geocard.length; i++) {
            geocard[i].style.display = "block";
            // console.log(engcard[i]);
          }

    }
}