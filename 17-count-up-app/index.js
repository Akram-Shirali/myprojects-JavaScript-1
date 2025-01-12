const counters = document.querySelectorAll('.counter');

counters.forEach((counter) => {
    counter.innerText = 0;

    function getCount () {
        const target = +counter.dataset.target;
        const count = +counter.innerText;
        const increment = target / 300;

        if(count < target) {
            counter.innerText = `${Math.ceil(count + increment)}`;
            setTimeout(getCount, 12)
        }else{
            counter.innerText = target;
        }
    }

    window.addEventListener('scroll' , () => {
        const scrollHeight = window.pageYOffset;
        const sectionCon = document.querySelector(".container");
        const sectionConHeight = sectionCon.clientHeight;

        if(scrollHeight >= sectionConHeight - 1){
            getCount();
        }
    });
});