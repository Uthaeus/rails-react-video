Rails.application.routes.draw do
  devise_for :users, path: '', path_names: { sign_in: 'login', sign_out: 'logout' }
  namespace :api do
    namespace :v1 do
      get 'projects/index'
      get 'projects/auth'
      post 'projects/create'
      put 'projects/update'
      get '/show/:id', to: 'projects#show'
      delete '/destroy/:id', to: 'projects#destroy'
    end
  end
  root 'homepage#index'
  get '/*path' => 'homepage#index'
end
