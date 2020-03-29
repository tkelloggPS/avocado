Rails.application.routes.draw do
  root to: "pages#home"

  get "/app", to: "pages#app"
  get '/auth/:provider/callback', to: 'sessions#create'
  get '/quickbooks', to: 'quickbooks#show'
end
