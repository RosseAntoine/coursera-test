/*
 *  Copyright (c) 2015 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */

// 'use strict';

// var errorElement = document.querySelector('#errorMsg');
// var video = document.querySelector('video');

// Put variables in global scope to make them available to the browser console.
var constraints = window.constraints = {
  audio: false,
  video: true
};

function handleSuccess(stream) {
  var videoTracks = stream.getVideoTracks();
  console.log('Got stream with constraints:', constraints);
  console.log('Using video device: ' + videoTracks[0].label);
  stream.oninactive = function() {
    console.log('Stream inactive');
  };
  window.stream = stream; // make variable available to browser console
  // video.srcObject = stream;
}

// function handleError(error) {
//   if (error.name === 'ConstraintNotSatisfiedError') {
//     errorMsg('The resolution ' + constraints.video.width.exact + 'x' +
//         constraints.video.width.exact + ' px is not supported by your device.');
//   } else if (error.name === 'PermissionDeniedError') {
//     errorMsg('Permissions have not been granted to use your camera and ' +
//       'microphone, you need to allow the page access to your devices in ' +
//       'order for the demo to work.');
//   }
//   errorMsg('getUserMedia error: ' + error.name, error);
// }

// function errorMsg(msg, error) {
//   // errorElement.innerHTML += '<p>' + msg + '</p>';
//   if (typeof error !== 'undefined') {
//     console.error(error);
//   }
// }




function handleError(error) {
  console.log('navigator.getUserMedia error: ', error);
}

function gotDevices(deviceInfos) {
  // Handles being called several times to update labels. Preserve values.
  // var values = selectors.map(function(select) {
  //   return select.value;
  // });
  // selectors.forEach(function(select) {
  //   while (select.firstChild) {
  //     select.removeChild(select.firstChild);
  //   }
  // });
  for (var i = 0; i !== deviceInfos.length; ++i) {
    var deviceInfo = deviceInfos[i];
    var option = document.createElement('option');
    option.value = deviceInfo.deviceId;
    if (deviceInfo.kind === 'videoinput') {
      var deviceId = deviceInfo.deviceId;
      // break;
    }
  }

  var constraints = {
    video: {
      deviceId: {exact: deviceId}
    }
  };

  navigator.mediaDevices.getUserMedia(constraints);

  // selectors.forEach(function(select, selectorIndex) {
  //   if (Array.prototype.slice.call(select.childNodes).some(function(n) {
  //     return n.value === values[selectorIndex];
  //   })) {
  //     select.value = values[selectorIndex];
  //   }
  // });
}

navigator.mediaDevices.enumerateDevices().then(gotDevices).catch(handleError);

