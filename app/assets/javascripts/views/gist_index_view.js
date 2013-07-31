GT.Views.GistsIndex = Backbone.View.extend({
  initialize: function(data){
    this.collection = data.collection,
    this.favorites = data.favorites
  },

  events: {
    "click button.create-gist": "newGistForm",
    "submit form.new-gist": "submitGistForm"
  },

  render: function(){
    var that = this;
    this.$el.html(JST["gists/index"]());
    this.collection.each(function(gist){
      var gistDetail = new GT.Views.GistDetail({model: gist, favorites: that.favorites});
      that.$("ul").append(gistDetail.render().$el);
    });

    return this;
  },

  newGistForm: function(event){
    event.preventDefault();
    var that = this;
    $(event.target).addClass('hide')
    $(event.target).parent().prepend(JST["gists/form"]());
    return this
  },


  submitGistForm: function(event){
    event.preventDefault();
    var that = this;
    this.collection.create({
      title: "input[name='title']", body: "input[name='body']"
    } , { success: function(){
      $(event.target).removeClass('hide');
      $(event.target).remove();
      }
    })
    return this;
  }
});