module Serializers
  module Quickbooks
    class User
      def initialize(user_info)
        @user_info = user_info
      end

      def name
        "#{user_info['givenName']} #{user_info['familyName']}"
      end

      def email
        user_info["email"]
      end

      def phone_number
        user_info["phoneNumber"]
      end

      def birth_date
        "01/10/1980"
      end

      def street
        user_info["address"]["streetAddress"]
      end

      def zip
        user_info["address"]["postalCode"]
      end

      def city
        user_info["address"]["locality"]
      end

      def state
        user_info["address"]["region"]
      end

      def us_citizen
        user_info["address"]["country"] == "US"
      end

      def to_h
        {
          name: name,
          phone_number: phone_number,
          us_citizen: us_citizen,
          birth_date: birth_date,
          street: street,
          zip: zip,
          city: city,
          state: state,
          email: email,
        }
      end

      private

      def find_value_in_name_value(name_value)
        pair = user_info["NameValue"].find { |p| p["Name"] == name_value }
        return unless pair

        pair["Value"]
      end

      def user_info
        @user_info || {}
      end
    end
  end
end
