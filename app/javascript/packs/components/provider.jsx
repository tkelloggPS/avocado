import React, { useState } from "react"
import {
  Segment,
  Header,
  Button,
  List
} from "semantic-ui-react"

export default () => {
  const [provider, setProvider] = useState("")

  const handleSubmitQb = async () => {
    window.location.href = '/auth/quickbooks_oauth2/'
  }

  return (
    <Segment className="left aligned">

      <Header as="h3">Loan Details</Header>

      <List>
        <List.Item>
          <List.Header>Loan Terms</List.Header>
          <List.Description>
            Once approved, can take a little or as much for the loan as you like
            3.75% interest rate, up to 30 years to repay, no payments for the first 12 months, no early prepayment penalty fees. Another source: 2.75% for nonprofits
          </List.Description>
        </List.Item>
        <List.Item>
          <List.Header>Eligible use of loan money </List.Header>
          <List.Description>
            Regular operating expenses (e.g. payroll costs, utilities)
            Fixed costs (e.g. rent, money owed to businesses or freelancers)
            Does NOT qualify: new projects, expansions
          </List.Description>
        </List.Item>
        <List.Item>
          <List.Header>What you need</List.Header>
          <List.Description>
            Most recent business income tax forms
            Information on all fixed debts
            Personal financial information for EACH principal owning 20% or more of the business
          </List.Description>
        </List.Item>
      </List>

      <Button onClick={handleSubmitQb}>QuickBooks</Button>
    </Segment>
  )
}
