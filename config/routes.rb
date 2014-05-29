Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
  end

  match '*path' => 'ng_view#index', via: [:get, :post]

  root to: 'ng_view#index'

  # sessions
  match 'auth/:provider/callback', to: 'sessions#create', via: [:get, :post]
  match 'auth/failure', to: redirect('/'), via: [:get, :post]
  match 'signout', to: 'sessions#destroy', as: 'signout', via: [:get, :post]
end
