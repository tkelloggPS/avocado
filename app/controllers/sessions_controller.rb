# frozen_string_literal: true

class SessionsController < ApplicationController
  def create
    @current_user = User.find_or_create_by_auth(auth_data)

    redirect_to root_path
  end

  protected

  def auth_data
    Serializers::Oauth::Quickbook.new(request.env['omniauth.auth'])
  end
end
