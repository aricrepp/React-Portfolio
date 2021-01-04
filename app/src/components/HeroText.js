import React from 'react';
import './styles/HeroText.css';

let TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    let i = this.loopNum % this.toRotate.length;
    let fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span className="wrap">'+this.txt+'</span>';

    let that = this;
    let delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    let elements = document.getElementsByClassName('typewrite');
    for (let i=0; i<elements.length; i++) {
        let toRotate = elements[i].getAttribute('data-type');
        let period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    let css = document.createElement("style");
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #333}";
    document.body.appendChild(css);
};

const HeroText = () => {
    return (
        <section className='herotext-wrapper'>
            <div className='herotext-top'>
                <a href="/#" className="typewrite" data-period="2000" data-type='[ "Hi, I&apos;m Aric Repp.", "I Design With Feeling.", "I Develop with Purpose.", "I Create with Passion.", "Goal: Make the Web Better." ]'>
                    <span className="wrap"></span>
                </a>
            </div>
            <div className='herotext-bottom'>
                <div className='herotext-desc'>
                    <h4>/01</h4>
                    <hr/>
                    <h4>Portfolio</h4>
                    <h5>Work Collection</h5>
                </div>
                <div className='herotext-quote'>
                    <h5>"You got a dream... You gotta protect it. People can't do somethin' themselves, they wanna tell you you can't do it. If you want somethin', go get it. Period."</h5>
                    <h4>- The Pursuit of Happiness</h4>
                </div>
            </div>
            <div className='herotext-callout'>
                <p className='herotext-content'>
                    This portfolio was created using React <span><img alt='react' src="https://img.icons8.com/color/48/000000/react-native.png"/></span> and Firebase <span><img alt='firebase' src="https://img.icons8.com/color/48/000000/firebase.png"/></span>
                </p>
            </div>  
        </section>
    );
}

export default HeroText;