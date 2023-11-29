function crawl() {
    const intro = document.getElementById('crawlText');
    intro.style.visibility = 'visible';

    let distance = intro.offsetHeight;
    let animationDuration = distance * 50;

    intro.style.transform = `translate(-50%, -50%) translateY(${distance}px)`;
    intro.animate([{ transform: `translate(-50%, -50%) translateY(${distance}px)` },
                   { transform: `translate(-50%, -50%) translateY(-${distance}px)` }],
                   { duration: animationDuration, iterations: Infinity });
}

crawl();
