let user = 'lile5ko';
let url = 'https://lastfm-last-played.biancarosa.com.br/' + user + '/latest-song';
let song = document.querySelector('#song');


    fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then(function (json) {
        if (json['track']['@attr'] && json['track']['@attr']['nowplaying'] === 'true') {
            song.innerHTML = '<a href="' + json['track']['url'] + '">' + json['track']['name'] + ' - ' + json['track']['artist']['#text'] + '</a>';
        } else {
            song.innerHTML = 'Nothing!';
        }
    });
