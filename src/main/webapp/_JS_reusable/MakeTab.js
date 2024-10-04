"use strict";

function MakeTab({
  genreImgObjList = [
    { label: "Old Time", val: "pics/oldTime.jpg" },
    { label: "Bluegrass", val: "pics/bluegrass.png" },
    { label: "Folk", val: "pics/folk.jpg" },
    { label: "Blues", val: "pics/blues.jpeg" },
    { label: "Pop", val: "pics/pop.jpg" },
    { label: "Rock", val: "pics/rock.jgp" },
    { label: "Metal", val: "pics/metal.webp" },
    { label: "Other", val: "pics/other.jpg" },
  ],
  genreImgUrl = "pics/other.jpg",
  songLengthSec = 120,
  songTitle = "Arkansas Traveller",
  tabUrl = "tabs/arkansas_traveller.pdf",
}) {
  var tabObj = document.createElement("div");

  tabObj.genreObjList = genreImgObjList;
  tabObj.imgUrl = genreImgUrl;
  tabObj.length = songLengthSec;
  tabObj.tab = tabUrl;
  tabObj.title = songTitle;

  tabObj.changeLength = function (newLength) {
    tabObj.length += newLength;
  };

  tabObj.setImgUrl = function (newImgUrl) {
    tabObj.imgUrl = newImgUrl;
  };

  tabObj.setTab = function (newTab) {
    tabObj.tab = newTab;
  };

  tabObj.setTitle = function (newTitle) {
    tabObj.title = newTitle;
  };

  tabObj.innerHTML = `
    <div class="tabInfoC"></div> <br/>

    <button class="titleButtonC">Change Title to: </button>
    <input class="titleInputC"></input> <br/><br/>

    <button class="lengthButtonC">Add or Subtract Song Length: </button>
    <input class="minInputC">Minutes</input>
    <input class="secInputC">Seconds</input> <br/> <br/>

    <button class="tabUrlButtonC">Change Tab URL to: </button>
    <input class="tabUrlInputC"></input> <br/> <br/>

    Genre: <select class="genreSelectC">
    </select>

    `;

  var genreSelect = tabObj.getElementsByClassName("genreSelectC")[0];
  var lengthButton = tabObj.getElementsByClassName("lengthButtonC")[0];
  var minInput = tabObj.getElementsByClassName("minInputC")[0];
  var secInput = tabObj.getElementsByClassName("secInputC")[0];
  var tabInfo = tabObj.getElementsByClassName("tabInfoC")[0];
  var tabUrlButton = tabObj.getElementsByClassName("tabUrlButtonC")[0];
  var tabUrlInput = tabObj.getElementsByClassName("tabUrlInputC")[0];
  var titleButton = tabObj.getElementsByClassName("titleButtonC")[0];
  var titleInput = tabObj.getElementsByClassName("titleInputC")[0];


  for (var listEle of genreImgObjList) {
    var opt = document.createElement("option");
    opt.innerHTML = listEle.label;
    opt.value = listEle.val;
    genreSelect.appendChild(opt);
  }

  var display = function () {
    tabInfo.innerHTML = `
    <h3>${tabObj.title}</h3>
    <p>Song Length: ${Math.floor(tabObj.length / 60)} minutes ${
      tabObj.length % 60
    } seconds</p>
    <a href="${tabObj.tab}" target="_blank">Link to Tab!</a>
    `;

    if (tabObj.imgUrl == null) {
      tabInfo.innerHTML += `
        <br/>
        <br/>
        <p>image not available</p>
        <br/>
        `;
    } else {
      tabInfo.innerHTML += `
        <br/>
        <br/>
        <img src="${tabObj.imgUrl}" width="30%"/>
        `;
    }

    genreSelect.value = tabObj.imgUrl;
  };

  display();

  genreSelect.onchange = function () {
    tabObj.setImgUrl(genreSelect.value);
    display();
  };

  lengthButton.onclick = function () {
    tabObj.changeLength(minInput.value * 60 + Number(secInput.value));
    console.log(tabObj.length);
    display();
  };

  tabUrlButton.onclick = function () {
    tabObj.setTab(tabUrlInput.value);
    display();
  };

  
  titleButton.onmouseover = function () {
    tabInfo.classList.add("mouseover");
    display();
  };

  titleButton.onmouseout = function () {
    tabInfo.classList.remove("mouseover");
    display();
  };
  
  titleButton.onclick = function () {
    tabObj.setTitle(titleInput.value);
    display();
  };

  return tabObj;
}
