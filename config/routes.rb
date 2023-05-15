Rails.application.routes.draw do
  
  resources :publics, only:[:index, :create, :show, :update, :destroy]
  resources :user_parks, only:[:index, :create, :show, :update, :destroy]
  resources :users, only:[:index, :create, :update, :destroy]
  # resources :parks

  get '/parks', to: 'parks#get_parks'

  # Login custom route - KL
  post "/login", to: "sessions#create"
  
end
