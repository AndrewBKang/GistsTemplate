window.GT = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function(data) {
    var gists = new GT.Collections.Gists(data.gists);
    var favorites = data.favorites
    new GT.Routers.GistsRouter({ gists: gists, favorites: favorites });
    Backbone.history.start();
  }
};
