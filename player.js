
fetch("bilder.json")

  .then((response) => { if (!response.ok) {throw new Error(`HTTP error! status: ${response.status}`);} return response.json(); })
    
  .then((jsonData) => { 
const channelList = document.getElementById("channels");
const video = document.getElementById("video");
const channelName = document.getElementById("channelName");

 const playerEl = document.getElementById("player");

let hls;

/* --------------------------------------------------------------*/


jsonData.forEach((channel) => {
  const div = document.createElement("div");
  div.className = "channel";
  div.innerText = channel.name;
  div.innerHTML = `<img src="${channel.icon}" style="width:60px;">${channel.name}`;


  div.onclick = () => {
   playStream(channel.url, channel.name, channel.type);
  };

  channelList.appendChild(div);

 function playStream(url, name, type) {

  channelName.innerHTML = `<img src="${channel.icon}" style="width:35px;margin-right:8px;">${name}`;

  const ytPlayer = document.getElementById("ytPlayer");

  // إخفاء الاثنين أولاً
  video.style.display = "none";
  ytPlayer.style.display = "none";

  if (type === "youtube") {

    // إيقاف HLS إن وجد
    if (hls) {
      hls.destroy();
    }

    ytPlayer.style.display = "block";
    ytPlayer.src = `https://www.youtube.com/embed/${url}?autoplay=1`;

  } else {

    video.style.display = "block";

    if (hls) {
      hls.destroy();
    }

    if (Hls.isSupported()) {
      hls = new Hls({
        enableWorker: true,
        lowLatencyMode: true
      });

      hls.loadSource(url);
      hls.attachMedia(video);

    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = url;
    }
  }
}


});


/* --------------------------------------------------------------*/

function updateClock() {
  const now = new Date();
  const display = now.toLocaleTimeString();
  document.getElementById("clock").textContent = display;
}

// Oppdater klokken hvert sekund
setInterval(updateClock, 1000);


// Initialiser umiddelbart
updateClock();

/* --------------------------------------------------------------*/

function tilbake() {
  window.location.href = "index.html";
}

/* --------------------------------------------------------------*/
  })
