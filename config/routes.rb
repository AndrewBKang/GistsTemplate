GistsTemplate::Application.routes.draw do
  resources :users, :only => [:new, :create, :show]
  resource :session, :only => [:new, :create, :destroy]

  root :to => "users#new"

  resources :gists do
    resource :favorite, :only => [:create, :destroy]
  end
end
