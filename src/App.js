var App = Backbone.Model.extend({

  initialize: function(params){
    this.set('currentSong', new Song());
    this.set('playlist', new Playlist());

    params.library.on('play', function(song){
      // debugger;
      this.set('currentSong', song);
    }, this);
// debugger;
    this.get('library').on('addToPlayList', function(song){
      this.get('playlist').add(song);
    }, this);
  }

});
