Rails.application.routes.draw do
  devise_for :users, path: '', path_names: { sign_in: 'login', sign_out: 'logout' }
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
end
