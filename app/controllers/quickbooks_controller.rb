class QuickbooksController < ApplicationController
  def show
    render json: retrieved_quickbooks_data
  rescue RestClient::Unauthorized
    # handle expired token
    redirect_to "/auth/quickbooks_oauth2"
  rescue
    # something went horribly, horribly wrong
    render json: mock_quickbooks_data
  end

  private

  def quickbooks_client
    @quickbooks_client ||= Clients::Quickbooks.new(
      access_token: current_user.token,
      company_id: current_user.realm_id,
    )
  end

  def mock_quickbooks_data
    {
      company:
      {
        name: "Avocado LLC",
        type: "LLC",
        ein: "12-345678",
        phone_number: "555-555-5555",
        employee_count: "3",
        established_date: "02/10/1999",
        total_payroll: "$6,455.00",
      },
      user:
      {
        name: "Jill Jones",
        phone_number: "555-555-5555",
        us_citizen: true,
        birth_date: "01/10/1980",
        street: "123 Home Street",
        zip: "55555",
        city: "Town",
        state: "California",
        email: "test@example.com",
      }
    }
  end

  def retrieved_quickbooks_data
    {
      company: quickbooks_client.company_info,
      user: quickbooks_client.user_info,
    }
  end
end
