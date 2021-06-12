// YOU WILL NEED TO ADD YOUR OWN API KEY IN QUOTES ON LINE 5, EVEN FOR THE PREVIEW TO WORK.
// 
// GET YOUR API HERE https://console.developers.google.com/apis/api


// https://developers.google.com/youtube/v3/docs/playlistItems/list

// https://console.developers.google.com/apis/api/youtube.googleapis.com/overview?project=webtut-195115&duration=PT1H

// <iframe width="560" height="315" src="https://www.youtube.com/embed/qxWrnhZEuRU" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

// https://i.ytimg.com/vi/qxWrnhZEuRU/mqdefault.jpg


$(document).ready(function () {

    var key = "AIzaSyDmGLXYgQOIJIqzNeVN0abN_IperaUyQOk";
    var playlistId = 'PL2fnLUTsNyq7A335zB_RpOzu7hEUcSJbB';
    var URL = 'https://www.googleapis.com/youtube/v3/search';
   


    var options = {
        part: 'snippet',
        key: key,
        maxResults: 50,
        q:`world's best dances`,
        type: 'video'
    }

    loadVids();

    function loadVids() {
        $.getJSON(URL,options, function (data) {
            var id = data.items[0].id.videoId;
            mainVid(id);
            resultsLoop(data);
        });
    }

    function mainVid(id) {
        $('#video').html(`
					<iframe  src="https://www.youtube.com/embed/${id}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
				`);
    }

		
    function resultsLoop(data) {

        $.each(data.items, function (i, item) {

            var thumb = item.snippet.thumbnails.medium.url;
            var title = item.snippet.title;
            var desc = item.snippet.description.substring(0, 100);
            var vid = item.id.videoId;


            $('main').append(`
							<article class="item" data-key="${vid}">

								<img src="${thumb}" alt="" class="thumb">
								<div class="details">
									<h4>${title}</h4>
									<p>${desc}</p>
								</div>

							</article>
						`);
        });
    }

    $('main').on('click', 'article', function () {
        var id = $(this).attr('data-key');
        mainVid(id);
    });


});