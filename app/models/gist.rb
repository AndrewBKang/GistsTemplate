class Gist < ActiveRecord::Base
  attr_accessible :body, :title, :user_id

  belongs_to :user
  has_many :favorites
  has_many :favorite_users, through: :favorites, foreign_key: :user_id
end
