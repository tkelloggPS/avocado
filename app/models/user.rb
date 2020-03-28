class User < ApplicationRecord
  class << self
    def find_or_create_by_auth(auth_data)
      user = User.find_by(uid: auth_data.uid, provider: auth_data.provider)

      user || User.create(auth_data.to_h)
    end
  end
end
