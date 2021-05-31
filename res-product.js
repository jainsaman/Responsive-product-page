var x = window.innerWidth;

function openNav(){
    if(x > 768){
        document.getElementById("mysidenav").style.width = "25%";
    } else {
        document.getElementById("mysidenav").style.width = "50%";
        console.log('Hello');
    }
}

function closeNav(){
    document.getElementById("mysidenav").style.width = "0";
}

var buttons = document.getElementsByClassName("sizebut");
for(let i=0 ; i<6 ; i++){
    buttons[i].addEventListener('click', function(){
        buttons[i].classList.toggle('active');
    });
};
