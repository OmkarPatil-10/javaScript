const buttons = document.querySelectorAll('.button');
// console.log(buttons);
const body = document.querySelector('body')

buttons.forEach( function (button) {
    // console.log(button);
    //adding event listener
    button.addEventListener('click', function (e) {
        // console.log(e);
        // console.log(e.target);
        switch (e.target.id) {
            case "grey":
                body.style.backgroundColor = e.target.id
                break;
            case "white":
                body.style.backgroundColor = e.target.id
                break;
            case "blue":
                body.style.backgroundColor = e.target.id
                break;
            case "yellow":
                body.style.backgroundColor = e.target.id
                break;
            case "purple":
                body.style.backgroundColor = e.target.id
                break;
        
            default:
                break;
        }
    })
    
} );