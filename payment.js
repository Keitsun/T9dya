function opennav(){
    document.getElementById("mobile-menu").style.width = "100%"
}

function closenav(){
    document.getElementById("mobile-menu").style.width = "0"
}






/* Card.js plugin by Jesse Pollak. https://github.com/jessepollak/card */

$('form').card({
    container: '.card-wrapper',
    width: 280,

    formSelectors: {
        nameInput: 'input[name="first-name"], input[name="last-name"]'
    }
});