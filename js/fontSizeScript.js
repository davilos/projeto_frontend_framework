const increaseFontButton = document.getElementById('increaseFont');

const increaseFontSize = (element) => {
    const currentSize = parseInt(window.getComputedStyle(element).fontSize);
    const maxSize = 26;
    const newSize = currentSize + 2;

    if (newSize < maxSize) {
        element.style.fontSize = newSize + 'px';
    }
};

increaseFontButton.addEventListener('click', () => {
    setTimeout(() => {
        const elements = document.querySelectorAll('section.member, main');
        elements.forEach(element => {
            const textElements = element.querySelectorAll('*');
            textElements.forEach(element => {
                increaseFontSize(element);
            });
        });
    }, 100);
});
