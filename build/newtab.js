const imageUrl = "https://source.unsplash.com/random/2560x1600"

chrome.storage.local.get(['currentCover', 'initCover'], function (result) {
  if (result.currentCover || result.initCover) {
    if (result.currentCover) {
      setBg(result.currentCover)
    } else if (result.initCover) {
      setBg(result.initCover)
    }
    fetchCurrentCover(false)
  } else {
    fetchCurrentCover(true)
  }
})
function fetchCurrentCover(setImage) {
  fetch(imageUrl)
    .then(response => response.blob())
    .then(blob => {
      var reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onloadend = function () {
        var base64img = reader.result;
        if (setImage) {
          setBg(base64img);
        }
        chrome.storage.local.set({ currentCover: base64img });
      }
    }).catch(err => console.error(err))
}
function setBg(base64img) {
  document.getElementById("cover").style.backgroundImage = "url('" + base64img + "')"
}