# frozen_string_literal: true

Rails.application.config.middleware.use OmniAuth::Builder do
  provider(
    :quickbooks_oauth2,
    ENV['INTUIT_CLIENT_ID'],
    ENV['INTUIT_CLIENT_SECRET'],
    scope: 'com.intuit.quickbooks.accounting openid profile email phone address',
    sandbox: true,
  )
end
