Rails.application.routes.draw do
	
  devise_for :users
	namespace :api do
		namespace :v1 do
			post 'sessions/login', to: 'sessions#login', as: :sessions_login
		end
	end
end
