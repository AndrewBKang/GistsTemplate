GT.Routers.GistsRouter = Backbone.Router.extend({
  initialize: function(data){
    this.gists = data.gists,
    this.favorites = data.favorites
  },


  routes: {
    "": "index",
    "gists/:id": "detail"
  },

  index: function(){
    console.log(this.favorites)
    var gistIndexView = new GT.Views.GistsIndex({collection: this.gists, favorites: this.favorites});
    $("body").append(gistIndexView.render().$el);
  },

  detail: function(){

  }
})