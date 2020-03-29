Rails.application.routes.draw do
  root to: "pages#app"

  get "/app", to: "pages#app"
  get '/auth/:provider/callback', to: 'sessions#create'
  delete '/sign_out', to: 'sessions#destroy'
  get '/quickbooks', to: 'quickbooks#show'
end
