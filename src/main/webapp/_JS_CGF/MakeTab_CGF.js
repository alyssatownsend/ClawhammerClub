"use strict";

function MakeTab_CGF() {
  var ele = document.createElement("div");
  var myTab = MakeTab({});

  ele.appendChild(myTab);

  return ele;
}
