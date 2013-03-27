var Song = Backbone.Model.extend({
  initialize: function(song){
    // debugger;
    this.set('selectedSong', song);
  },
  //alerts the rest - triggers to songs.js
  play: function(){
    this.trigger('play', this);

  },

  addToPlayList: function(){
      this.trigger('addToPlayList', this);
  }

});
