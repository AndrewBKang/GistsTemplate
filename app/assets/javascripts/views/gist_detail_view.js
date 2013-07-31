GT.Views.GistDetail = Backbone.View.extend({
  tagName: "li",

  events:{
    "click button.favorite": "toggleFavorite",

  },

  initialize: function(data){
    this.model = data.model,
    this.favorites = data.favorites
  },

  render: function(){
    var that = this;
    var favoriteLabel = "Unfavorite"
    if (_.map(this.favorites,function(fav){return fav['gist_id']}).indexOf(that.model.get("id")) === (-1)){
      favoriteLabel = "Favorite"
    };
    this.$el.html(JST['gists/detail']({model: this.model, favorite: favoriteLabel}));
    return this;
  },

  toggleFavorite: function(event){
    event.preventDefault();
    var that = this;
    var target = $(event.target);
    var gistId = target.attr("data-id");

    if(target.hasClass("favorited")){
      $.ajax({
        url: 'gists/' + gistId + '/favorite.json',
        type: "DELETE",
        success: function (stuff) {
          target.removeClass("favorited");
          target.parent().html(JST['gists/detail']({model: that.model, favorite: "Favorite"}));
        }
      });
    }
    else{
      $.ajax({
        url: 'gists/' + gistId + '/favorite.json',
        type: "POST",
        success: function () {
          target.addClass("favorited");
          target.parent().html(JST['gists/detail']({model: that.model, favorite: "Unfavorite"}));
        }
      });
    };
  }

});