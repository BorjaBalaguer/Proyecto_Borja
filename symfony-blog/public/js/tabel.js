window.onload = function(){
    document.getElementById("valorant").onclick = redirectValorant;
    document.getElementById("runeterra").onclick = redirectRuneterra;
    document.getElementById("tft").onclick = redirectTft;
    document.getElementById("lol").onclick = redirectLol;
    document.getElementById("imgMain").onmouseenter = resaltrar;
    document.getElementById("imgMain").onmouseout = original;
}

function redirectLol(){
    window.location.href = "https://www.leagueoflegends.com/es-es/";
}

function redirectValorant(){
    window.location.href = "https://www.playvalorant.com/es-es";
}

function redirectRuneterra(){
    window.location.href = "https://www.playruneterra.com/es-es/";   
}

function redirectTft(){
    window.location.href = "https://teamfighttactics.leagueoflegends.com/es-es/";
}

function resaltrar(){
    this.style.width = "400px";
    this.style.height = "330px";
    this.style.boxShadow = "0px 10px 20px gold";
}

function original(){
    this.style.width = "370px";
    this.style.height = "300px";
    this.style.boxShadow = "none";
}
