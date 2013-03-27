var PlaylistEntryView = Backbone.View.extend({

  tagName: 'tr',
  template: _.template(
    '<td><%= artist %></td><td><%= title %></td> \
    <td> \
      <button type="button" class="remove">Remove From Playlist</button> \
    </td>'
    ),

  events: {
    'click .remove' : function() {
      this.model.removeFromPlayList();
      this.$el.remove();
    },
    'click' : function() {
      this.model.play();
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
