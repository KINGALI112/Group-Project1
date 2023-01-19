window.addEventListener("load", function(){
    setTimeout(
        function open(event){
            document.querySelector(".popup").style.display = "block";
        },
        2000 
    )
});

document.querySelector("#close").addEventListener("click", function(){
    document.querySelector(".popup").style.display = "none";
});


/*   __       ___       __   ___     __                 ___  __  
\ / /  \ |  |  |  |  | |__) |__     |__) |     /\  \ / |__  |__)
 |  \__/ \__/  |  \__/ |__) |___    |    |___ /~~\  |  |___ |  \
*/
// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var vidFB1;
var vidFB2;
var vidFB3;

var vidUB1;
var vidUB2;
var vidUB3;

var vidLB1;
var vidLB2;
var vidLB3;

var vidWC1;
var vidWC2;
var vidWC3;

function onYouTubeIframeAPIReady() {
    // var = new YT.Payer('id in html', {video parameters})
    vidFB1 = new YT.Player('vidFB1', {
        height: '390',
        width: '640',
        videoId: 'GViX8riaHX4',
        playerVars: {
            'playsinline': 1
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });

    vidFB2 = new YT.Player('vidFB2', {
        height: '390',
        width: '640',
        videoId: 'sinkIlViPG8',
        playerVars: {
            'playsinline': 1
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });

    vidFB3 = new YT.Player('vidFB3', {
        height: '390',
        width: '640',
        videoId: 'rI_6l992GrA',
        playerVars: {
            'playsinline': 1
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });

    vidUB1 = new YT.Player('vidUB1', {
        height: '390',
        width: '640',
        videoId: 'UEWEYeJGkLM',
        playerVars: {
            'playsinline': 1
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });

    vidUB2 = new YT.Player('vidUB2', {
        height: '390',
        width: '640',
        videoId: 'gy4vx4wQGDE',
        playerVars: {
            'playsinline': 1
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });

    vidUB3 = new YT.Player('vidUB3', {
        height: '390',
        width: '640',
        videoId: 'zZ8tWnE8kzQ',
        playerVars: {
            'playsinline': 1
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
    
    vidLB1 = new YT.Player('vidLB1', {
        height: '390',
        width: '640',
        videoId: '0zhvUV1bAVQ',
        playerVars: {
            'playsinline': 1
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });

    vidLB2 = new YT.Player('vidLB2', {
        height: '390',
        width: '640',
        videoId: '-2DkbkIyq5c',
        playerVars: {
            'playsinline': 1
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });

    vidLB3 = new YT.Player('vidLB3', {
        height: '390',
        width: '640',
        videoId: 'WGA_ctAMkMk',
        playerVars: {
            'playsinline': 1
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });

    vidWC1 = new YT.Player('vidWC1', {
        height: '390',
        width: '640',
        videoId: '2pLT-olgUJs',
        playerVars: {
            'playsinline': 1
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });

    vidWC2 = new YT.Player('vidWC2', {
        height: '390',
        width: '640',
        videoId: '2MoGxae-zyo',
        playerVars: {
            'playsinline': 1
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });

    vidWC3 = new YT.Player('vidWC3', {
        height: '390',
        width: '640',
        videoId: '31BiQiXk8jQ',
        playerVars: {
            'playsinline': 1
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
    // event.target.playVideo();
    if (event.data == YT.PlayerState.PLAYING) {
        stopVideo();
    }
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
        // setTimeout(stopVideo, 6000);
        done = true;
    }
}
function stopVideo() {
    player.stopVideo();
}
// End of code for youtube player

/* __   __   __   __        ___                __   __  
  / _` /  \ /  \ / _` |    |__      |\/|  /\  |__) /__` 
  \__> \__/ \__/ \__> |___ |___     |  | /~~\ |    .__/ 
*/

// Declare map as a global variable
var map;

// use google maps api built-in mechanism to attach dom events
google.maps.event.addDomListener(window, "load", function () {
    // create map
    var map = new google.maps.Map(document.getElementById("map_div"), {
        center: new google.maps.LatLng(33.808678, -117.918921),
        zoom: 14,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    // create infowindow (which will be used by markers)
    var infoWindow = new google.maps.InfoWindow();

    // marker creater function (acts as a closure for html parameter)
    function createMarker(options, html) {
        var marker = new google.maps.Marker(options);
        if (html) {
            google.maps.event.addListener(marker, "click", function () {
                infoWindow.setContent(html);
                infoWindow.open(options.map, this);
            });
        }
        return marker;
    }

    // add markers to map
    var marker0 = createMarker({
        position: new google.maps.LatLng(33.808678, -117.918921),
        map: map,
        icon: "http://1.bp.blogspot.com/_GZzKwf6g1o8/S6xwK6CSghI/AAAAAAAAA98/_iA3r4Ehclk/s1600/marker-green.png"
    }, "<h1>Marker 0</h1><p>This is the home marker.</p>");

    var marker1 = createMarker({
        position: new google.maps.LatLng(33.818038, -117.928492),
        map: map
    }, "<h1>Marker 1</h1><p>This is marker 1</p>");

    var marker2 = createMarker({
        position: new google.maps.LatLng(33.803333, -117.915278),
        map: map
    }, "<h1>Marker 2</h1><p>This is marker 2</p>");
});
// End of code for google maps