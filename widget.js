function sendToServer() {
  const inputVal = parseFloat(document.getElementById('setInput').value);
  if (isNaN(inputVal)) {
    document.getElementById('getOutput').value = "Geçersiz sayı!";
    return;
  }

  fetch("http://localhost:3000/calculate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ value: inputVal })
  })
    .then(res => res.json())
    .then(data => {
      document.getElementById('getOutput').value = data.result;
    })
    .catch(err => {
      document.getElementById('getOutput').value = "Sunucu hatası!";
      console.error(err);
    });
}

window.sendToServer = sendToServer;
