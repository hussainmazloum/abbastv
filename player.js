
fetch("dada.json")

  .then((response) => { if (!response.ok) {throw new Error(`HTTP error! status: ${response.status}`);} return response.json(); })
    
  .then((jsonData) => { 
const channelList = document.getElementById("channels");
const video = document.getElementById("video");
const channelName = document.getElementById("channelName");

let hls;

/* --------------------------------------------------------------*/


jsonData.forEach((channel) => {
  const div = document.createElement("div");
  div.className = "channel";
  div.innerText = channel.name;
  div.innerHTML = `<img src="${channel.icon}" style="width:60px;">${channel.name}`;


  div.onclick = () => {
    playStream(channel.url, channel.name);
  };

  channelList.appendChild(div);

 function playStream( url, name) {
  /* channelName.innerText = `${name}`; */
 channelName.innerHTML = `<img src="${channel.icon}" style="width:35px;margin-right:8px;">${channel.name}`;
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
  
})

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







/* const playlist = [
  { name: "Almanar", url: "https://edge.fastpublish.me/live/index.m3u8" },
  {
    name: "Al ittihad",
    url: "https://live.alittihad.tv:444/ittihad/index.m3u8",
  },

  {
    name: "Al Mayadeen",
    url: "https://mdnlv.cdn.octivid.com/almdn/smil:mpegts.stream.smil/chunklist_b2700000.m3u8",
  },

  {
    name: "Al alam",
    url: "https://live1.alalam.ir/live/Alalam/index.m3u8",
  },

  {
    name: "Al jazeera",
    url: "https://live-hls-web-aja.getaj.net/AJA/01.m3u8",
  },

  {
    name: "Al jazeera direct",
    url: "https://live-hls-web-ajm.getaj.net/AJM/04.m3u8",
  },

  {
    name: "Al arabi 1",
    url: "https://live.kwikmotion.com/alaraby1live/alaraby_abr/alaraby1publish/alaraby1_source/chunks.m3u8",
  },

  {
    name: "Russia today",
    url: "https://rt-arb.rttv.com/live/rtarab/playlist_4500Kb.m3u8",
  },

  {
    name: "Almasira",
    url: "https://live.cdnbridge.tv/Almasirah/Almasirah_all/Almasirah/Almasirah_1080p/chunks.m3u8",
  },

  {
    name: "Almasira direct",
    url: "https://live2.cdnbridge.tv/AlmasirahMubasher/Mubasher_All/MubasherLive/Mubasher_1080p/chunks.m3u8",
  },

  {
    name: "TRT",
    url: "https://tv-trtarabi.medya.trt.com.tr/master_1080.m3u8",
  },

  {
    name: "Phalastine Today",
    url: "https://live.paltodaytv.com/paltv/live/chunklist.m3u8",
  },

  {
    name: "Al Hiwar",
    url: "https://mn-nl.mncdn.com/alhiwar_live/smil:alhiwar.smil/chunklist_b3128000.m3u8",
  },

  {
    name: "France 24",
    url: "https://live.france24.com/hls/live/2037222-b/F24_AR_HI_HLS/master_5000.m3u8",
  },

  {
    name: "Al sirat",
    url: "https://softverse.b-cdn.net/Assirat/assiratobs/chunklist_w1223338841.m3u8",
  },

  {
    name: "Al iman",
    url: "https://svs.itworkscdn.net/alimanlive/imantv.smil/playlist.m3u8",
  },

  {
    name: "IFilm arabic",
    url: "https://live.presstv.ir/hls/ifilmar_4_482/index.m3u8",
  },

  {
    name: "Al sharq discovery",
    url: "https://svs.itworkscdn.net/asharqdiscoverylive/asharqd.smil/asharqdiscoverypublish/asharqd_source/chunks_dvr.m3u8",
  },

  {
    name: "Al sharq doc",
    url: "https://svs.itworkscdn.net/asharqdocumentarylive/asharqdocumentary.smil/asharqdocumentarypublish/asharqdocumentary_720p/chunks_dvr.m3u8",
  },

  {
    name: "DW TV",
    url: "https://dwamdstream103.akamaized.net/hls/live/2015526/dwstream103/index.m3u8",
  },

  {
    name: "MBC",
    url: "https://shd-gcp-live.lg.mncdn.com/live/bitmovin-mbc-1/15cf99af5de54063fdabfefe66adc075/index.m3u8",
  },

  {
    name: "MBC-2",
    url: "http://lunar.pm:8080/live/LynnB23/34yfqEW7mHvY/132149.m3u8",
  },

  {
    name: "MBC 3",
    url: "https://shd-gcp-live.lg.mncdn.com/live/bitmovin-mbc-3-usa/5d58265a862a476dc7f97694addb5ded/index.m3u8",
  },

  {
    name: "MBC 4",
    url: "https://shd-gcp-live.lg.mncdn.com/live/bitmovin-mbc-4/24f134f1cd63db9346439e96b86ca6ed/index.m3u8",
  },

  {
    name: "MBC 5",
    url: "https://shd-gcp-live.lg.mncdn.com/live/bitmovin-mbc-5/ee6b000cee0629411b666ab26cb13e9b/index.m3u8",
  },

  {
    name: "MBC iraq",
    url: "https://shd-gcp-live.akamaized.net/live/bitmovin-mbc-iraq/e38c44b1b43474e1c39cb5b90203691e/index.m3u8",
  },

  {
    name: "MBC Bollywood",
    url: "https://shd-gcp-live.lg.mncdn.com/live/bitmovin-mbc-bollywood/546eb40d7dcf9a209255dd2496903764/index.m3u8",
  },

  {
    name: "MBC Misr Drama",
    url: "https://shd-gcp-live.lg.mncdn.com/live/bitmovin-mbc-masr-drama/567b703c19ede6598222de81b0e4508b/index.m3u8",
  },

  {
    name: "MBC Drama",
    url: "https://shd-gcp-live.lg.mncdn.com/live/bitmovin-mbc-drama/2c28a458e2f3253e678b07ac7d13fe71/index.m3u8",
  },

  {
    name: "MBC Drama +",
    url: "https://shd-gcp-live.lg.mncdn.com/live/bitmovin-mbc-plus-drama/e37251ec2aac8f6c98f75cd0fa37cd28/index.m3u8",
  },

  {
    name: "MBC misr 1",
    url: "https://shd-gcp-live.lg.mncdn.com/live/bitmovin-mbc-masr/956eac069c78a35d47245db6cdbb1575/index.m3u8",
  },

  {
    name: "MBC misr 2",
    url: "https://shd-gcp-live.lg.mncdn.com/live/bitmovin-mbc-masr-2/754931856515075b0aabf0e583495c68/index.m3u8",
  },

  { name: "MBC action", url: "http://185.9.2.18/chid_378/mono.m3u8" },

  {
    name: "MBC Drama egypt",
    url: "https://shd-gcp-live.lg.mncdn.com/live/bitmovin-mbc-masr-drama/567b703c19ede6598222de81b0e4508b/index.m3u8",
  },

  {
    name: "Tele liban",
    url: "https://cdn.catiacast.video/abr/ed8f807e2548db4507d2a6f4ba0c4a06/playlist.m3u8",
  },

  {
    name: "Future",
    url: "https://live.kwikmotion.com/futurelive/ftv.smil/playlist.m3u8",
  },

  {
    name: "OTV",
    url: "https://otv.hibridcdn.net/otv/tv_abr/playlist.m3u8",
  },

  {
    name: "MTV",
    url: "https://hms.pfs.gdn/v1/broadcast/mtv/playlist.m3u8",
  },

  {
    name: "RED tv",
    url: "https://live.kwikmotion.com/redtvlive/redtv.smil/playlist.m3u8",
  },
  {
    name: "Al arabi 2",
    url: "https://live.kwikmotion.com/alaraby2live/alaraby2.smil/alaraby2publish/alaraby2_source/chunks.m3u8",
  },

  {
    name: "Roya kids",
    url: "https://playlist.fasttvcdn.com/pl/ptllxjd03j6g9oxxjdfapg/roya-kids-originals/playlist.m3u8",
  },

  {
    name: "Tom & Jerry",
    url: "https://live20.bozztv.com/giatvplayout7/giatv-208314/playlist.m3u8",
  },

  {
    name: "Ch4teen kids",
    url: "https://1a-1791.com/live/t34ch9px/slot-23/la7z-lzef_1080p/chunklist_DVR.m3u8",
  },

  {
    name: "Maraya kids",
    url: "https://live.kwikmotion.com/smckidslive/tjkids1/chunks.m3u8",
  },

  {
    name: "MBC 3",
    url: "https://shd-gcp-live.lg.mncdn.com/live/bitmovin-mbc-3-usa/5d58265a862a476dc7f97694addb5ded/index.m3u8",
  },

  {
    name: "Taha Kids",
    url: "https://stream.starmenajo.com/hls/app/live/ts:fhd.m3u8",
  },

  {
    name: "KidsToon Goggle",
    url: "https://amg01329-otterainc-toongoggles-samsungau-ad-4c.amagi.tv/playlist/amg01329-otterainc-toongoggles-samsungau/playlist.m3u8",
  },

  {
    name: "ABC Kids",
    url: "https://c.mjh.nz/abc-kids.m3u8",
  },

  {
    name: "Animation Classic",
    url: "https://linear-899.frequency.stream/dist/cineverse/899/hls/master/playlist.m3u8",
  },

  {
    name: "Spacetoon",
    url: "https://shd-gcp-live.edgenextcdn.net/live/bitmovin-spacetoon/d8382fb9ab4b2307058f12c7ea90db54/index.m3u8",
  },

  {
    name: "Cartoon Calssic",
    url: "https://streams2.sofast.tv/v1/master/611d79b11b77e2f571934fd80ca1413453772ac7/d5543c06-5122-49a7-9662-32187f48aa2c/manifest.m3u8",
  },

  {
    name: "Zoomoo kids",
    url: "https://zoomoo-samsungau.amagi.tv/playlist1080p.m3u8",
  },

  {
    name: "Karbalaa Quran",
    url: "https://ktvlive.online/stream/hls/ch1.m3u8",
  },

  {
    name: "Karbalaa Doc",
    url: "https://ktvlive.online/stream/hls/ch3.m3u8",
  },

  {
    name: "Al gadeer",
    url: "https://sd343444.vodu.store:3356/live/Alghadeer/tracks-v1a1/mono.m3u8",
  },

  {
    name: "Al sharqia iraq",
    url: "https://5d94523502c2d.streamlock.net/home/mystream/chunklist_w1516467122.m3u8",
  },

  {
    name: "Al sharqia news",
    url: "https://5d94523502c2d.streamlock.net/alsharqiyalive/mystream/chunklist_w122808259.m3u8",
  },

  {
    name: "Phalastine Today",
    url: "https://live.paltodaytv.com/paltv/live/chunklist.m3u8",
  },

  { name: "Ajyal", url: "http://htvajyal.mada.ps:8888/ajyal/index.m3u8" },

  {
    name: "Mix Hollywood",
    url: "https://ml-pull-hwc.myco.io/MixTV/hls/MixTV_H264-720p.m3u8?pkg_media=video&pkg_hm=index.m3u8&pkg_svc=1&pkg_vcodec=avc1",
  },

  {
    name: "MBC Movies Action",
    url: "https://shls-live-ak.akamaized.net/out/v1/46079e838e65490c8299f902a7731168/index_2.m3u8",
  },

  {
    name: "MBC Movies Thriller",
    url: "https://shls-live-ak.akamaized.net/out/v1/f6d718e841f8442f8374de47f18c93a7/index_1.m3u8",
  },

  {
    name: "Hala London",
    url: "https://halalondon-live.ercdn.net/halalondon/halalondon_1080p.m3u8",
  },

  {
    name: "Roya_tv",
    url: "https://royatv-live.daioncdn.net/royatv/royatv.m3u8",
  },
  {
    name: "Roya_Comedy",
    url: "https://playlist.fasttvcdn.com/pl/toa2uuhhygheuly7xtuqrg/roya-comedy/playlist/0.m3u8",
  },
  {
    name: "Roya_Drama",
    url: "https://playlist.fasttvcdn.com/pl/a2le4pbpa6rpzv147haf4w/drama/playlist/0.m3u8",
  },
  {
    name: "Roya_Masrahyyat",
    url: "https://playlist.fasttvcdn.com/pl/toa2uuhhygheuly7xtuqrg/masrahyyat/playlist/0.m3u8",
  },
  {
    name: "Roya_Adel_Imam",
    url: "https://playlist.fasttvcdn.com/pl/toa2uuhhygheuly7xtuqrg/adel-imam-movies/playlist/0.m3u8",
  },
  {
    name: "Roya_Al_Hayba",
    url: "https://playlist.fasttvcdn.com/pl/toa2uuhhygheuly7xtuqrg/alhayba/playlist/0.m3u8",
  },
  {
    name: "Roya_Maraya",
    url: "https://playlist.fasttvcdn.com/pl/toa2uuhhygheuly7xtuqrg/maraya/playlist/0.m3u8",
  },
  {
    name: "Roya_Action",
    url: "https://playlist.fasttvcdn.com/pl/toa2uuhhygheuly7xtuqrg/action/playlist/0.m3u8",
  },
  {
    name: "Roya_Shamyeh",
    url: "https://playlist.fasttvcdn.com/pl/toa2uuhhygheuly7xtuqrg/by2ah-shamyeh/playlist/0.m3u8",
  },
  {
    name: "Roya_Ayman_Zaydan",
    url: "https://playlist.fasttvcdn.com/pl/toa2uuhhygheuly7xtuqrg/ayman-zaydan/playlist/0.m3u8",
  },
  {
    name: "Roya Alzaeem",
    url: "https://playlist.fasttvcdn.com/pl/toa2uuhhygheuly7xtuqrg/alzaeem/playlist/0.m3u8",
  },
  {
    name: "Roya Alqubbeh",
    url: "https://playlist.fasttvcdn.com/pl/toa2uuhhygheuly7xtuqrg/haret-alqubbeh/playlist/0.m3u8",
  },
  {
    name: "Roya Nadine_Njaim",
    url: "https://playlist.fasttvcdn.com/pl/toa2uuhhygheuly7xtuqrg/nadinenjaim/playlist/0.m3u8",
  },
  {
    name: "Roya_Kitchen",
    url: "https://playlist.fasttvcdn.com/pl/toa2uuhhygheuly7xtuqrg/roya-kitchen/playlist/0.m3u8",
  },
  {
    name: "Roya_Doc",
    url: "https://playlist.fasttvcdn.com/pl/toa2uuhhygheuly7xtuqrg/documentaries/playlist/0.m3u8",
  },
  {
    name: "Roya_Kids_org",
    url: "https://playlist.fasttvcdn.com/pl/ptllxjd03j6g9oxxjdfapg/roya-kids-originals/playlist/0.m3u8",
  },
  {
    name: "Roya_Adventure",
    url: "https://playlist.fasttvcdn.com/pl/toa2uuhhygheuly7xtuqrg/roya-adventures/playlist/0.m3u8",
  },
  {
    name: "Roya_Palestine",
    url: "https://playlist.fasttvcdn.com/pl/toa2uuhhygheuly7xtuqrg/roya-palestine/playlist/0.m3u8",
  },

  {
    name: "Roya atfal",
    url: "https://playlist.fasttvcdn.com/pl/ptllxjd03j6g9oxxjdfapg/roya-kids/playlist/0.m3u8",
  },
  {
    name: "Roya kids sang",
    url: "https://playlist.fasttvcdn.com/pl/ptllxjd03j6g9oxxjdfapg/roya-kids-songs/playlist/0.m3u8",
  },
  {
    name: "Roya kids stories",
    url: "https://playlist.fasttvcdn.com/pl/ptllxjd03j6g9oxxjdfapg/roya-kids-stories/playlist/0.m3u8",
  },

  {
    name: "Hadra Alabbasia",
    url: "https://1a-1791.com/live/za4hy30t/live-hls/ld7k-iigm/chunklist_i1_DVR.m3u8",
  },
  {
    name: "Ch4teen 1",
    url: "https://1a-1791.com/live/v0xi25uh/slot-157/6s6y-csu9/chunklist_DVR.m3u8",
  },

  {
    name: "Ch4teen 2",
    url: "https://1a-1791.com/live/tv3qa28c/slot-17/e7ag-228w_1080p/chunklist_DVR.m3u8",
  },

  {
    name: "Ch4teen 3",
    url: "https://1a-1791.com/live/v0xi25uh/slot-157/6s6y-csu9/chunklist_DVR.m3u8",
  },

  {
    name: "Ch4teen 4",
    url: "https://1a-1791.com/live/3fms19g4/slot-65/ke2z-iqrs_1080p/chunklist_DVR.m3u8",
  },

  {
    name: "Ch4teen 5",
    url: "https://1a-1791.com/live/gi29le7p/slot-157/35oe-gawg/chunklist.m3u8",
  },

  {
    name: "Ch4teen 6",
    url: "https://1a-1791.com/live/v0xi25uh/slot-63/lcqg-dk1b_1080p/chunklist_DVR.m3u8",
  },

  {
    name: "Ch4teen Quran",
    url: "https://1a-1791.com/live/v0xi25uh/slot-63/lcqg-dk1b_1080p/chunklist_DVR.m3u8",
  },

  {
    name: "Ch4teen clip",
    url: "https://1a-1791.com/live/dn14c9xg/slot-3/2pwm-0dlb_1080p/chunklist_DVR.m3u8",
  },

  {
    name: "Ch4teen doc",
    url: "https://1a-1791.com/live/d5a20b4d/slot-31/w2ub-37w6_1080p/chunklist_DVR.m3u8",
  },

  {
    name: "Wild Nature",
    url: "https://dhiy0zcig7ty1.cloudfront.net/scheduler/scheduleMaster/491.m3u8",
  },

  {
    name: "Love Nature",
    url: "https://aegis-cloudfront-1.tubi.video/6d6d0f24-8445-4b4c-bdf6-44f9e38beaa4/playlist.m3u8",
  },

  {
    name: "NRK Kids 3",
    url: "https://nrk-live-no.akamaized.net/nrksuper/muxed.m3u8",
  },

  {
    name: "NRK Kids",
    url: "https://nrk-live-no.akamaized.net/nrksuper/sc-gaFEEA/m523_index.m3u8?adap=large",
  },
  {
    name: "NRK 1",
    url: "https://nrk-live-no.akamaized.net/nrk1/sc-gaFEEA/m534_index.m3u8?adap=large",
  },
  {
    name: "NRK 2",
    url: "https://nrk-live-no.akamaized.net/nrk2/sc-gaFEEA/m523_index.m3u8",
  },
  {
    name: "NRK 3",
    url: "https://nrk-live-no.akamaized.net/nrk3/sc-gaFEEA/m523_index.m3u8",
  },

  {
    name: "TV 2",
    url: "http://fomo.re/play/rtK-w3ixnEErMLG2SOXbzEB7frLPi_-3LeQsm3JBoeLgZXqA3RCoynpVrVZz0Naw/m3u8",
  },

  {
    name: "Bein Sport",
    url: "https://dc1644a9jazgj.cloudfront.net/beIN_Sports_Xtra_Espanol.m3u8",
  },
  
  
] */



