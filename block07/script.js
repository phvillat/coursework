const introMessage = "You have received this message because you have been chosen to open an important vault. Here is the secret combination:";

const firstCode = 20 + (-10);

const secondCode = 80 / 2;

const thirdCode = 39 + 0;

const fullMessage = `${introMessage} \n${firstCode} - ${secondCode} - ${thirdCode}`;

document.getElementById('showCode').addEventListener('click', function () {
    alert(fullMessage);
});