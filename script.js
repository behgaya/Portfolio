var isContracted = false;

function contractElements() {
    var buttons = document.querySelectorAll('.contractable-button');
    var initialValue = 6;

    if (!isContracted) {    
        buttons.forEach(button => {
            button.style.transform = `translateX(${initialValue}vw)`;
            initialValue +=4.8;
        });
        setTimeout(() => {
            buttons.forEach(button => {
                button.style.opacity = '0';
            });
        }, 500)
    } else {
        buttons.forEach(button => {
            button.style.transform = 'translateX(0)';
            button.style.opacity = '1';
        });

    }

    isContracted = !isContracted;
}


function setActiveButton(button) {
    var buttons = document.querySelectorAll('.section-portfolio__button');

    buttons.forEach(function(btn) {
        btn.classList.remove('section-portfolio__active-button');
    });

    button.classList.add('section-portfolio__active-button');
}


var currentButton = null;
function changeImages(fileName) {
    if(currentButton != fileName){
        var images = document.querySelectorAll('.section-portfolio__list-image');

        images.forEach(function(image, index) {
            var newImageUrl = `images/portfolio-${fileName}-${index + 1}.jpg`;
            image.style.opacity = '0'; // Fade out the image
            setTimeout(function() {
                image.src = newImageUrl;
                image.style.opacity = '1'; // Fade in the new image
            }, 500);
        });
        currentButton = fileName;
    }


}
