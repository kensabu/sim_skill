var scale = {
    x: 1,
    y: 1
},
    zoomFactor = 1,
    stageLeft = 0,
    config = {
        'stageWidth': 1280,
        'stageHeight': 800
    };

var myconfwidth = 1280
var myconfheight = 800

function scaleStage() {
    console.log("scaling....")
    var rootElem = document.getElementById("unity-container");
    scale.x = ((window.innerWidth) / myconfwidth);
    scale.y = ((window.innerHeight) / myconfheight);
    
    // scale.x = 1;
    // scale.y = 1;
    let newScale = scale.x + ', ' + scale.y;
    if (scale.x < scale.y) {
        zoomFactor = scale.x;
        newScale = scale.x + ', ' + scale.x;
    } else {
        zoomFactor = scale.y;
        newScale = scale.y + ', ' + scale.y;
    }
    let newWidth = Number(newScale.split(',')[0]) * myconfwidth;
    let newHeight = Number(newScale.split(',')[1]) * myconfheight;
    let leftPos = (window.innerWidth - newWidth) / 2;
    
    // let topPos = (window.innerHeight - newHeight) / 2;
    // let leftPos = 0;
    let topPos = 0;
    stageLeft = leftPos;
    window.rootLeftElmPos = stageLeft;
    var styleObj = {};
    

    console.log( newScale,leftPos,myconfwidth,myconfheight)

    styleObj = {
        '-webkit-transform': 'scale(' + newScale + ')',
        '-moz-transform': 'scale(' + newScale + ')',
        '-ms-transform': 'scale(' + newScale + ')',
        '-o-transform': 'scale(' + newScale + ')',
        'transform': 'scale(' + newScale + ')',
        '-webkit-transform-origin': 'left top',
        '-moz-transform-origin': 'left top',
        '-ms-transform-origin': 'left top',
        '-o-transform-origin': 'left top',
        'transform-origin': 'left top',
        'position': 'absolute',
        'top': '0px',
        'left': leftPos + 'px',
        'overflow': 'hidden',
        'width': myconfwidth + 'px',
        'height': myconfheight + 'px',
    };
    
    for (var key in styleObj) {
        if (styleObj.hasOwnProperty(key)) {
            
           rootElem.style[key] = styleObj[key]
           
            
        }
    }

    window.zoomFactor = zoomFactor
};
window.onload = scaleStage;
window.addEventListener("resize", scaleStage)




