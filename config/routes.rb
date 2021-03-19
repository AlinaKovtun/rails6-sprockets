Rails.application.routes.draw do
  resources :books
  resources :users
  get "/list", to: "users#list"
end
