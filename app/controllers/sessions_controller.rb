# frozen_string_literal: true

class SessionsController < ApplicationController
  def create
    user = User.find_or_new_by_auth(auth_data)
    session[:current_user_id] = user.id
    user.token = auth_data.token
    user.save!

    redirect_to quickbooks_path
  end

  protected

  def auth_data
    Serializers::Oauth::Quickbook.new(
      request.env['omniauth.auth'].merge(
        realm_id: params[:realmId]
      )
    )
  end
end
