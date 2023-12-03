// selection
function getElements(selection) {
    let element = document.querySelector(selection);

    if (element) {
        return element
    }

    throw new Error(`selector does not exist`)
}


class Counter {
    constructor(element, value) {
        this.counter = element;
        this.value = value
        this.resetBtn = element.querySelector('.reset');
        this.increaseBtn = element.querySelector('.increase');
        this.decreaseBtn = element.querySelector('.decrease');
        this.valueDom = element.querySelector('.counter-value');
        this.valueDom.textContent = this.value

        // bind this to all the functions
        this.increase = this.increase.bind(this);
        this.decrease = this.decrease.bind(this);
        this.reset = this.reset.bind(this);

        this.increaseBtn.addEventListener('click', this.increase);
        this.decreaseBtn.addEventListener('click', this.decrease);
        this.resetBtn.addEventListener('click', this.reset);
    }

    increase() {
        this.value++;
        this.valueDom.textContent = this.value
    }
    decrease() {
        this.value--;
        this.valueDom.textContent = this.value
    }

    reset() {
        this.value = 0;
        this.valueDom.textContent = this.value
    }
}



// objects instance
let firstCounter = new Counter(getElements('.first-counter'), 10);
let secondCounter = new Counter(getElements('.second-counter'), 200);
