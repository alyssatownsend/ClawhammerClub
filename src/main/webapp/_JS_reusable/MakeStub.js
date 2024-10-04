"use strict";

function MakeStub() {
  var stub = `
    <div>
        <h3>I am a stub!</h3>
    </div>
    
    `;

    var ele = document.createElement("div");
    ele.innerHTML = stub;

    return ele;
}
