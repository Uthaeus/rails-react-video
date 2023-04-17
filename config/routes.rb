Rails.application.routes.draw do
  devise_for :users
  namespace :api do
    namespace :v1 do
      get 'projects/index'
      post 'projects/create'
      get '/show/:id', to: 'projects#show'
      delete '/destroy/:id', to: 'projects#destroy'
    end
  end
  root 'homepage#index'
  get '/*path' => 'homepage#index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
