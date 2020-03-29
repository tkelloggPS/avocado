class ApplicationController < ActionController::Base
  def mock
    render json: mock_data
  end

  private

  def mock_data
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
      }
    }
  end
end
