const increaseFontButton = document.getElementById('increaseFont');
const textElements = document.querySelectorAll('*');
const maxSize = 32;

const increaseFontSize = () => {
    textElements.forEach(element => {
        const currentSize = parseInt(window.getComputedStyle(element).fontSize);
        const newSize = currentSize + 2;

        if (newSize < maxSize) {
            element.style.fontSize = newSize + 'px';

        }
    });
};

increaseFontButton.addEventListener('click', increaseFontSize);

