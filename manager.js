// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var div = document.createElement("DIV");
div.id = "catCollection";
var width = 0;
var height = 0;
var img = document.createElement("IMG");
img.maxHeight = 125;
img.maxWidth = 125;
var table = document.getElementById("catTable");

function displayCatCollection() {
  chrome.storage.sync.get("cats", function(items) {
    var cats_displayed = [];
    var div = document.createElement("DIV");
    div.id = "catCollection";
    var w = 0;
    var h = 100;
    for (var i = 0; i < items["cats"].length; i++) {
      var imgURL = items["cats"][i];
      if (cats_displayed.indexOf(imgURL) == -1) {
        var img = document.createElement("IMG");
        img.src = imgURL;
        var winHeight = window.innerHeight / 3;
        while (img.height != 0 && img.height > winHeight) {
          img.height = img.height / 2;
          img.width = img.width / 2;
        }
        img.bottom = Math.floor(Math.random() * screen.height - 250);;
        img.left = Math.floor(Math.random() * screen.width + 100);
        img.position = "relative";
        div.appendChild(img);

/*
        if (w + 100 > window.innerWidth) {
          w = 0;
          h += 100;
        } else {
          w += 100;
        }
        */
      }
    }
    document.body.appendChild(div);
  });
}

displayCatCollection();
