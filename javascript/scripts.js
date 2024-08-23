button_mais_one = document.getElementById('button_mais_one');
button_menos_one = document.getElementById('button_menos_one');

button_mais_two = document.getElementById('button_mais_two');
button_menos_two = document.getElementById('button_menos_two');

button_mais_three = document.getElementById('button_mais_three');
button_menos_three = document.getElementById('button_menos_three');

button_mais_for = document.getElementById('button_mais_for');
button_menos_for = document.getElementById('button_menos_for');

let post_one = document.getElementById('description_extend_post_one');
let post_two = document.getElementById('description_extend_post_two');
let post_three = document.getElementById('description_extend_post_three');
let post_for = document.getElementById('description_extend_post_for');

posts = [post_one, post_two, post_three, post_for];
buttons_mais = [button_mais_one, button_mais_two, button_mais_three, button_mais_for]
buttons_menos = [button_menos_one, button_menos_two, button_menos_three, button_menos_for]

function lerMais(iBtnMais, iBtnMenos, post){
    buttons_mais[iBtnMais].style.display = "none"
    buttons_menos[iBtnMenos].style.display = "block"
    posts[post].style.display = "block"
}

function lerMenos(iBtnMais, iBtnMenos, post){
    buttons_mais[iBtnMais].style.display = "block"
    buttons_menos[iBtnMenos].style.display = "none"
    posts[post].style.display = "none"
}