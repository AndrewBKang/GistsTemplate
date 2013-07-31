class GistsController < ApplicationController

  respond_to :html, :json

  def index
    @gists = Gist.all
    @favorites = current_user.favorites
    @data = {gists: @gists, favorites: @favorites}
    respond_with(@data)
  end

  def create
  end

  def show
  end

end
