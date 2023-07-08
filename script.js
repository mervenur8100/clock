function rotateHands() {
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
  
    var hourHand = document.getElementById("hour");
    var minuteHand = document.getElementById("minute");
    var secondHand = document.getElementById("second");
  
    var hourRotation = (hour % 12) * 30 + (minute / 60) * 30; // 12 saat = 360 derece
    var minuteRotation = (minute / 60) * 360; // 60 dakika = 360 derece
    var secondRotation = (second / 60) * 360; // 60 saniye = 360 derece
  
    hourHand.style.transform = "rotate(" + hourRotation + "deg)";
    minuteHand.style.transform = "rotate(" + minuteRotation + "deg)";
    secondHand.style.transform = "rotate(" + secondRotation + "deg)";
  }
  
  // Saat her saniyede bir güncellenir
  setInterval(rotateHands, 1000);
  
