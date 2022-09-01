// function makeMessage(){
//     const message = document.createElement("h2");
//     message.innerText = "Why you're not using my website bitch";
//     document.getElementById("message-location").appendChild(message);
// }

// setTimeout(makeMessage, 10000);

// let timerID = setInterval(makeMessage, 1000);
let rockImg = document.getElementById("rockImg")
rockImg.addEventListener('click', rockHappy)
rocklonely();

function rocklonely(){
    setTimeout("rockImg.src = 'https://raw.githubusercontent.com/ryanpcmcquen/headFirstJavascriptCode/master/JS%20examples/chapter01/irock/rock.png';", 5*60*1000);
}

function rockHappy(){
    rockImg.src = 'irock_happy.png'
    setTimeout("rockImg.src = 'https://raw.githubusercontent.com/ryanpcmcquen/headFirstJavascriptCode/master/JS%20examples/chapter01/irock/rock.png';", 5*60*1000);
}