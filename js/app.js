const colors = ['#00fdff','#08ff08','#ffcf00','#fe1493','#ff5555'];
const span=document.querySelector('.typed_container');
var cursor=0;
let changeColor= () =>{
    if(cursor>=colors.length){
        cursor=0;
    }
    span.style.color=colors[cursor++];
};
var options = {
    strings: ['empower','insipre', 'educate','connect','transform'],
    typeSpeed: 100,
    backSpeed: 50,
    smartBackspace: false,
    loop: true,
    preStringTyped: (arrayPos, self) => changeColor(),
    onLastStringBackspaced: (self) => changeColor()
};


var typed = new Typed('.txt-type', options);