module Serializers
  module Oauth
    class Quickbook
      def initialize(auth_hash)
        @auth_hash = auth_hash
      end

      def uid
        auth_hash[:uid]
      end

      def provider
        auth_hash[:provider]
      end

      def token
        credentials[:token]
      end

      def name
        "#{info[:givenName]} #{info[:familyName]}"
      end

      def email
        info[:email]
      end

      def realm_id
        auth_hash[:realm_id]
      end

      def to_h
        {
          uid: uid,
          token: token,
          provider: provider,
          name: name,
          email: email,
          realm_id: realm_id,
        }
      end

      private

      def credentials
        auth_hash[:credentials] || {}
      end

      def info
        auth_hash[:info] || {}
      end

      attr_reader :auth_hash
    end
  end
end
