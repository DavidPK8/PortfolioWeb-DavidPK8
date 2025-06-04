const resumeBtns = document.querySelectorAll('.resume-btn');

resumeBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        const resumeDetails = document.querySelectorAll('.resume-detail');

        resumeBtns.forEach(btn => {
            btn.classList.remove('active');
        });
        btn.classList.add('active');

        resumeDetails.forEach(detail => {
            detail.classList.remove('active');
        });
        resumeDetails[index].classList.add('active');
    });
});

const arrowRight = document.querySelector('.portfolio-box .navigation .arrow-right');
const arrowLeft = document.querySelector('.portfolio-box .navigation .arrow-left');
const imgItem = document.querySelectorAll('.portfolio-detail');

let index = 0;

const activePortfolio = () => {
    const imgSlide = document.querySelector('.portfolio-carousel .img-slide');
    const portfolioDetails = document.querySelectorAll('.portfolio-detail');

    imgSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`

    portfolioDetails.forEach(detail => {
        detail.classList.remove('active');
    });
    portfolioDetails[index].classList.add('active');
}

console.log(imgItem.length - 2);

arrowRight.addEventListener('click', () => {
    if (index < (imgItem.length - 2)) {
        arrowLeft.classList.remove('disabled');
        index++;
    } else {
        index = imgItem.length - 1;
        arrowRight.classList.add('disabled');
    }

    activePortfolio();
});

arrowLeft.addEventListener('click', () => {
    if (index > ((imgItem.length + 1) - imgItem.length)) {
        index--;
         arrowRight.classList.remove('disabled');
    } else {
        index = 0;
        arrowLeft.classList.add('disabled');
    }

    activePortfolio();
}); 