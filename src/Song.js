var Song = Backbone.Model.extend({
  initialize: function(song){
  },
  //alerts the rest - triggers to songs.js
  play: function(){
    this.trigger('play', this);
  },

  removeFromPlayList: function(){
    this.trigger('removeFromPlayList', this);
  },

  addToPlayList: function(){
      this.trigger('addToPlayList', this);
  }

});
