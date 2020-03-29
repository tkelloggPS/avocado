module Serializers
  module Quickbooks
    class Company
      def initialize(company_info)
        @company_info = company_info
      end

      def name
        company_info["CompanyName"]
      end

      def type
        find_value_in_name_value("CompanyType")
      end

      def ein
        company_info["EmployerId"]
      end

      def phone_number
        company_info["PrimaryPhone"]["FreeFormNumber"]
      end

      def employee_count
        company_info["EmployeeCount"]
      end

      def established_date
        company_info["CompanyStartDate"]
      end

      def total_payroll
        # acuster77 FIXME: need to implement a query for this, stub for now
        company_info["TotalPayroll"] || "$6,000.00"
      end

      def to_h
        {
          name: name,
          type: type,
          ein: ein,
          phone_number: phone_number,
          employee_count: employee_count,
          established_date: established_date,
          total_payroll: total_payroll,
        }
      end

      private

      def find_value_in_name_value(name_value)
        pair = company_info["NameValue"].find { |p| p["Name"] == name_value }

        pair["Value"]
      end

      def company_info
        @company_info["CompanyInfo"] || {}
      end
    end
  end
end
