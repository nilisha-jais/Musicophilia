
$(document).ready(function () {

    var key = "AIzaSyB4tHsr-sIZfdQmkX4b06WQKCbbKSMzGvY"; 
    var URL = 'https://www.googleapis.com/youtube/v3/search';

    var options = {
        part: 'snippet',
        key: key,
        maxResults: 50,
        q:'',
        type: 'video'
    }

    loadVids(`world's best dances`);

    function loadVids(q) {
        
        options.q = q;
        $('main').html(``);

        $.getJSON(URL,options, function (data) {
            var id = data.items[0].id.videoId;
            mainVid(id);
            resultsLoop(data);
        });
    }

    function mainVid(id) {
        $('.video__container').html(`
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

    function toggleModal(){
        $('.modal').toggleClass('modal__hidden'); 
        $('.overlay').toggleClass('overlay__hidden'); 
      }

    function stopVideo(){
        $('.video__container iframe').attr('src', $('iframe').attr('src'));
    }

    $('.typeBtn').on('click',function () {
        var category = $(this).text();
        q = `best ${category} dances`;
        loadVids(q);

    });

    $('main').on('click', 'article', function () {
        var id = $(this).attr('data-key');
        mainVid(id);
        toggleModal();
    });
    
    $('.overlay').on('click',function(){
        toggleModal();
        stopVideo();
    });

    $('.modal__closebar').on('click',function(){
        toggleModal();
        stopVideo();
    })


});