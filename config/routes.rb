Rails.application.routes.draw do
  root to: "pages#home"
  get '/auth/:provider/callback', to: 'sessions#create'
end
