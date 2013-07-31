class FavoritesController < ApplicationController

  respond_to :json

  def create
    @fave = Favorite.new({:user_id => current_user.id, :gist_id => params[:gist_id]})
    @fave.save
    @gist = Gist.new()
    respond_with(@gist)
  end

  def destroy
    @fave = Favorite.find_by_user_id_and_gist_id(current_user.id,params[:gist_id])
    @fave.destroy
    respond_with(@fave)
  end
end
