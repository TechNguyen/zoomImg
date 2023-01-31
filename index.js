const preImg = document.querySelector('#preImg');
const zoomImg = document.querySelector('#zoom-scale');

console.log(preImg, zoomImg);
preImg.addEventListener('mousemove', function (e) {
    // preImg.style.opacity = 
    zoomImg.style.opacity = 1;

    let positionPx = e.x - preImg.getBoundingClientRect().left;
    let positionPy = e.y - preImg.getBoundingClientRect().top;
    let zoom_x = (positionPx / preImg.offsetWidth) * 100;
    let zoom_y = (positionPy / preImg.offsetHeight) * 100;
    zoomImg.style.setProperty('--zoom-x', zoom_x + "%")
    zoomImg.style.setProperty('--zoom-y', zoom_y + "%")
    var transformX = -(zoom_x - 50) / 3
    var transformY = -(zoom_y - 50) /3 ;
    zoomImg.style.transform = `scale(1.5) translateX(${transformX}%) translateY(${transformY}%))`
})


preImg.addEventListener('mouseout', function (params) {
    zoomImg.style.opacity = 0;
})


console.log(preImg.getBoundingClientRect().left);