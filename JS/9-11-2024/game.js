

function playerOneKeys() {
    Swal.fire("Arrow Keys for Moving and Press D For Fight");

}

function playerTwoKeys() {

}






var leftAmon = 5


window.onkeydown = function() {
    
    console.log(event.keyCode)
    console.log(event.key)
    if(event.keyCode === 39) {
        leftAmon += 15
        document.getElementById('amon').style.left = leftAmon + "px"
    }


    if(event.keyCode === 37) {
        leftAmon -= 15
        document.getElementById('amon').style.left = leftAmon + "px"
    }


    if(event.keyCode === 68) {

        document.getElementById('amon').classList.add('amon-fight')
        document.getElementById('amon').src = './amon-fight.gif'
        setTimeout(() => {
            document.getElementById('amon').src = './amon-stand.gif'
        document.getElementById('amon').classList.remove('amon-fight')

        }, 2000);
    }


}


