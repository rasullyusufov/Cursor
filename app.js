const cursor = document.getElementById('cursor');
const doira = document.getElementById('doira')
const scor = document.getElementById('scor')
const dcor = document.getElementById('dcor')

document.addEventListener('mousemove', function (e) {
    let x = e.clientX
    let y = e.clientY
    let coor = `${x} , ${y}`
    cursor.style.top = y + 'px';
    cursor.style.left = x + 'px';
    scor.innerText = `Sichqonchaninig joylashuvi Websaytning tepa tarafdan ${y}px chap tarafdan ${x}px ga teng.`

})

document.addEventListener('mousedown', function doiraYurishi(e) {
    let doitaX = e.clientX;
    let doiraY = e.clientY;
    doira.style.marginTop = doiraY + 'px';
    doira.style.marginLeft = doitaX + 'px';
    dcor.innerText = `Doiraning joylashuvi Websaytning tepa tarafdan ${doiraY}px chap tarafdan ${doitaX}px ga teng.`

})



