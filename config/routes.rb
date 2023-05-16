Rails.application.routes.draw do
  
  resources :publics, only:[:index, :create, :show, :update, :destroy]
  resources :user_parks, only:[:index, :create, :show, :update, :destroy]
  resources :users, only:[:index, :create, :update, :destroy]
  # resources :parks

  get '/parks', to: 'parks#get_parks'

  # Auth custom routes - KL
  post "/login", to: "sessions#create"
  get "/me", to: "users#show"
  delete "/logout", to: "sessions#destroy"
  
end
