// double check height is working
function setTimelineStyle() {
    let screenWidth = window.innerWidth;
    let screenHeight = window.innerHeight;
    document.getElementById('timeline').style.setProperty('width', `${screenWidth}px`);
    document.getElementById('timeline').style.setProperty('height', `${screenHeight}px`);
}
setTimelineStyle();

// if screen changes
window.addEventListener('resize', function () {
    let screenWidth = window.innerWidth;
    let screenHeight = window.innerHeight;
    document.getElementById('timeline').style.setProperty('width', `${screenWidth}px`);
    document.getElementById('timeline').style.setProperty('height', `${screenHeight}px`);
}, true);