Rails.application.routes.draw do
  resources :publics
  resources :user_parks
  resources :users
  get '/parks', to: 'parks#get_parks'
  resources :parks
end
