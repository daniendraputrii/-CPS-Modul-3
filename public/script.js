// api url
const api_url = "https://api.thingspeak.com/channels/2072967/feeds.json?api_key=PVMJNFKMJP72SPPB&results=1";
// masukan url sesuai dengan format <ChannelID>, <ReadAPIKeys> yang ada di Thingspeak, tanpa menggunakan < >

setInterval(() => {
  fetch(api_url)
    .then((hasil) => hasil.json())
    .then((res) => {
      var field = JSON.stringify(res.feeds[0]);
      var obj = JSON.parse(field);
      document.getElementById("Celsius").innerHTML = obj.field1;
    });
}, 1000);
