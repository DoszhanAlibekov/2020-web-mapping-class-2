// when something with class album-list-cover is clicked, run some code
$('.album-list-item').on('click', function() {
	// pull out the album cover url from the element's attributes
	var albumCoverUrl = $(this).attr('data-album-cover')
  // log the album cover url to the console
  console.log(albumCoverUrl)

  // clear the initial text from the div with id album-art
  $('#album-art').empty()

  // set the background-image of the div with id album-art to url(...)
  // I use a string literal to concatenate 'url(' + albumCoverUrl + ')'

  $('#album-art').css('background-image', `url(${albumCoverUrl})`)
})
