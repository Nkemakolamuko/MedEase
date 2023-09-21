function slideRight(){
    const cards = document.getElementById('article');
    cards.scrollLeft += 300;
}

function slideLeft(){
    const cards = document.getElementById('article');
    cards.scrollLeft -= 300;
}

function right(){
    const cards = document.getElementById('features');
    cards.scrollLeft += 300;
}

function left(){
    const cards = document.getElementById('features');
    cards.scrollLeft -= 300;
}