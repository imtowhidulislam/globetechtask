const outPlanet1 = document.querySelector('.out-planet-1');
const outPlanet2 = document.querySelector('.out-planet-2');
const innPlanet1 = document.querySelector('.inn-planet-1');
const innPlanet2 = document.querySelector('.inn-planet-2');
const deepPlanet1 = document.querySelector('.deep-planet-1');
const deepPlanet2 = document.querySelector('.deep-planet-2');
const circleContainer = document.querySelector('.circle_container');
console.log(circleContainer);


circleContainer.addEventListener('mouseover', () => {
    console.log('hello');
    outPlanet1.classList.add('out-planet1-open');
    outPlanet1.classList.remove('out-planet1-close');

    outPlanet2.classList.add('out-planet2-open');
    outPlanet2.classList.remove('out-planet2-close');

    innPlanet1.classList.add('inn-planet1-open');
    innPlanet1.classList.remove('inn-planet1-close');
    
    innPlanet2.classList.add('inn-planet2-open');
    innPlanet2.classList.remove('inn-planet2-close');
    
    deepPlanet1.classList.add('deep-planet1-open');
    deepPlanet1.classList.remove('deep-planet1-close');

    deepPlanet2.classList.add('deep-planet2-open');
    deepPlanet2.classList.remove('deep-planet2-close');
})
circleContainer.addEventListener('mouseleave', () => {
    console.log('hi');
    outPlanet1.classList.remove('out-planet1-open');
    outPlanet1.classList.add('out-planet1-close');
    
    outPlanet2.classList.remove('out-planet2-open');
    outPlanet2.classList.add('out-planet2-close');
    
    innPlanet1.classList.remove('inn-planet1-open');
    innPlanet1.classList.add('inn-planet1-close');
    
    innPlanet2.classList.remove('inn-planet2-open');
    innPlanet2.classList.add('inn-planet2-close');

    deepPlanet1.classList.remove('deep-planet1-open');
    deepPlanet1.classList.add('deep-planet1-close');

    deepPlanet2.classList.remove('deep-planet2-open');
    deepPlanet2.classList.add('deep-planet2-close');

})


