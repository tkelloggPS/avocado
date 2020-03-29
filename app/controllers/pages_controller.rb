class PagesController < ApplicationController
  def app
    # we do this to preserve the step after the user has signed in because the quickbooks omniauth
    # requires server-to-server auth and cannot use the client
    gon.step = 3 if current_user.present?
  end
end
