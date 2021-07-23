const imageUrl = "https://source.unsplash.com/random/2560x1600"
chrome.runtime.onInstalled.addListener(function () {
  fetch(imageUrl)
    .then(response => response.blob())
    .then(blob => {
      var reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onloadend = function () {
        var base64img = reader.result;
        chrome.storage.local.set({ initCover: base64img })
      }
    }).catch(err => console.error(err))
});