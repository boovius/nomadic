Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:update]
  end

  # sessions
  match 'auth/:provider/callback', to: 'sessions#create', via: [:get, :post]
  match 'auth/failure', to: redirect('/'), via: [:get, :post]
  match 'signout', to: 'sessions#destroy', as: 'signout', via: [:get, :post]

  match '*path' => 'ng_view#index', via: [:get, :post]

  root to: 'ng_view#index'
end
