class Api::V1::SessionsController < ApplicationController
	before_action :authorize, only: :login
	respond_to :json

	def login
		user_token = User.generate_access_token
		
		if @requestor.update_attributes(access_token: user_token)
			render json: @requestor
		end
	end

	private
		def authorize
			@requestor = User.authenticate(params[:email], params[:password])

			unless @requestor
				render json: { status: 'unauthorized', message: 'The Employee email or password you entered is invalid.' }, status: 401
			end
		end
end
