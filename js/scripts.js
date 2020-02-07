

// instead of hard coding artist and album names, let's use jQuery to populate the buttons with code

var albumData = [
  {
    artist: 'Sublime',
    album: 'self-titled',
    albumCoverUrl: 'https://www.udiscovermusic.com/wp-content/uploads/2019/07/Sublime-self-titled-third-album-cover-820.jpg'
  },
  {
    artist: 'Weezer',
    album: 'Blue Album',
    albumCoverUrl: 'https://upload.wikimedia.org/wikipedia/en/7/70/Weezer_-_Blue_Album.png'
  },
  {
    artist: 'Metallica',
    album: 'Black Album',
    albumCoverUrl: 'https://www.nuclearblast.de/static/articles/112/112686.jpg/400x400.jpg'
  },
  {
    artist: 'The Beatles',
    album: 'White Album',
    albumCoverUrl: 'https://oldies-cdn.freetls.fastly.net/i/boxart/w340/a-z/r/ro-beatc10.jpg?v=2'
  },
]

// data types

albumData.forEach(function(album) {
  var html = `
    <div class="album-list-item" data-album-cover="${album.albumCoverUrl}">
     <p class="artist-name">${album.artist}</p>
     <p class="album-name">${album.album}</p>
    </div>
  `
  $('#album-list').append(html)
})

// I had to move this so the click listener is not registered until the
// album-list-item elements are appended to the page
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

// number
var number = 0

// string
var name = 'Chris'

// boolean
var rainy = true


console.log(number, typeof number)
console.log(name, typeof name)
console.log(rainy, typeof rainy)

// use the ! operator to negate a boolean

console.log('opposite of rainy', !rainy)

console.log('add 5', number + 5)
var someNewNumber = number + 5

console.log('someNewNumber, before loop', someNewNumber)

// loops can run code several times

var timesToRun = 10

for (var i = 0; i < timesToRun; i++) {
  // the code in here will run until the clause in the middle is no longer true
  console.log('inLoop', someNewNumber)
  someNewNumber = someNewNumber + 100
}

console.log('after loop', someNewNumber)


// arrays

var arrayOfStrings = ['Chris', 'Foo', 'Desk', 'NYU', 'Water Bottle']

var arrayOfNumbers = [27, 405, 31]

console.log('log the array', arrayOfStrings)

// you can reference things by their index
console.log('get the 3rd item in the array', arrayOfStrings[2])

// loop over the array using forEach()
arrayOfStrings.forEach(function(string) {
  console.log(string)
})

console.log('mix things from two arrays', arrayOfStrings[3], arrayOfNumbers[2])

// template literal
var myCombinedString = `This combines the string ${arrayOfStrings[1]} and the number ${arrayOfNumbers[0]}`

arrayOfStrings.forEach(function(string) {
  console.log(`This is going to write the same template with ${string} each time`)
  $()

})
