function infoContent() {
  var content = `
    <h2>Info</h2>
    <p>    
        Did you know? The banjo traces back to a lute-like gourd-bodied instrument from west and central Africa.
    </p>
    `;

    var ele = document.createElement("div");
    ele.innerHTML = content;
    return ele;
}
