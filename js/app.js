$(document).ready(function() {
    $('.link-foto').magnificPopup({type:'image'});

    $('.link-video').magnificPopup({type:'iframe'});

});


document.getElementById('links').onclick = function (event) {
    event = event || window.event
    var target = event.target || event.srcElement
    var link = target.src ? target.parentNode : target
    var options = { index: link, event: event }
    var links = this.getElementsByTagName('a')
    blueimp.Gallery(links, options)
  }


