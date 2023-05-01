Rails.application.routes.draw do
  get '/parks', to: 'parks#get_parks'
  resources :parks
end
