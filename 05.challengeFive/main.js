class Playlist {
    constructor (title, artist, genre) {
        this.song = title;
        this.artist = artist;
        this.genre = genre;
    }
    play () {
        console.log ('Now playing ' + this.song);
    }
    pause () {
        return 'Paused';
    }
    shuffle () {
        return 'Shuffle On';
    }
    lookUpGenre () {
        console.log ('Looking for ' + this.genre + 'tunes');
    }
    toString () {
        return `Title: ${this.song}\nBy: ${this.artist}\nGenre: ${this.genre}`;
    }
}

const title = prompt ('What is the song title?');
const artist = prompt ('Who is the artist?');
const genre = prompt ('What is the music genre?');
const newSongAdded = new Playlist(title, artist, genre);
alert(newSongAdded.toString());