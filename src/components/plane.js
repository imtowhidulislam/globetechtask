const planeContainer = document.querySelector('.plane_container');
const mainPlaneWrapper = document.querySelector('.main_plane_wrapper');
console.log(planeContainer);

const width = planeContainer.getBoundingClientRect().width;
console.log(width);

mainPlaneWrapper.addEventListener('mouseover',() => {
    planeContainer.classList.add('plane_container-open');
    planeContainer.classList.remove('plane_container-close');
})
mainPlaneWrapper.addEventListener('mouseout',() => {
    planeContainer.classList.remove('plane_container-open');
    planeContainer.classList.add('plane_container-close');

})