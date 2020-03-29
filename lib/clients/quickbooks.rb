module Clients
  class Quickbooks
    def initialize(access_token:, company_id:)
      @access_token = access_token
      @company_id = company_id
    end

    def company_info
      body = get(company_info_resource)
      body["CompanyInfo"]["EmployeeCount"] = employee_count

      Serializers::Quickbooks::Company.new(
        body
      ).to_h
    end

    def user_info
      Serializers::Quickbooks::User.new(
        get(user_info_resource)
      ).to_h
    end

    private

    def get(resource)
      JSON.parse(RestClient.get(resource, default_headers).body)
    end

    def default_headers
      { 
        Authorization: "Bearer #{access_token}",
        Accept: "application/json"
      }
    end

    def employee_count
      body = get(employee_count_resource)

      Serializers::Quickbooks::QueryResponse.new(body).response["totalCount"]
    end

    def company_info_resource
      sandbox_path("/company/#{company_id}/companyinfo/#{company_id}")
    end

    def user_info_resource
      account_sandbox_path("/openid_connect/userinfo")
    end

    def employee_count_resource
      sandbox_path("/company/#{company_id}/query?query=select count(*) from Employee")
    end

    def sandbox_path(path)
      sandbox_url + path
    end

    def account_sandbox_path(path)
      accounts_sandbox_url + path
    end

    def accounts_sandbox_url
      "https://sandbox-accounts.platform.intuit.com/v1"
    end

    def sandbox_url
      "https://sandbox-quickbooks.api.intuit.com/v3"
    end

    attr_reader :access_token, :company_id, :http_client
  end
end

