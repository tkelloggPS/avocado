module Serializers
  module Quickbooks
    class QueryResponse
      def initialize(query_info)
        @query_info = query_info
      end

      def response
        @query_info["QueryResponse"]
      end
    end
  end
end
