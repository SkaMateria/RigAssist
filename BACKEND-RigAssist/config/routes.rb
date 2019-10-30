Rails.application.routes.draw do
  resources :animations
  resources :projects
  resources :users
  # Update routes 
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
