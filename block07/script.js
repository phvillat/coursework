
const firstCode = 20 + (-10);

const secondCode = 80 / 2;

const thirdCode = 39 + 0;

const fullMessage = `${firstCode} - ${secondCode} - ${thirdCode}`;

document.getElementById('showCode').addEventListener('click', function () {
    alert(fullMessage);
});
