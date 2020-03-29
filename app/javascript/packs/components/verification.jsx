import React, { useState } from "react"
import { Form, Button, Message, Header, Divider, List, Grid } from "semantic-ui-react"

export default ({ setStep, _ }) => {
  const [businessAge, setBusinessAge] = useState(false)
  const [businessSize, setBusinessSize] = useState(false)
  const [businessType, setBusinessType] = useState(false)
  const [hasFailed, setHasFailed] = useState(false)

  const handleSubmit = () => {
    const valid = businessAge && businessType && businessSize

    if (valid) {
      setStep(2)
    } else {
      setHasFailed(true)
    }
  }

  const doesNotQualify = () => {
    return (
      <Message>
        <Message.Header as='h1'>Unfortunately, you do not qualify for a loan under the terms of the act</Message.Header>
        <Message.Header as='h4'>Please explore additional options that are available to you:</Message.Header>
        <Message.List>
          <Message.Item>Tax credits for sick leave up to $5K</Message.Item>
          <Message.Item>Penalty-free 401 withdrawals up to $100K with repayment in next 3 yrs</Message.Item>
          <Message.Item>Pax taxes late (deadline moved from April 15 to July 15)</Message.Item>
        </Message.List>
      </Message>
    )
  }

  const verification = () => {
    const options = [
      {
        text: 'Yes',
        value: true
      },
      {
        text: 'No',
        value: false
      },
    ]

    return(
      <Form className="ui segment left aligned">
      <Header as="h1">Verify Eligibility</Header>
      <Grid divided='vertically'>
        <Grid.Row columns={2}>
          <Grid.Column>
            Has your business been around for more than 1 year?
          </Grid.Column>
          <Grid.Column width={2}>
            <Form.Dropdown
              selection
              fluid
              options={options}
              onChange={ (_, data) => setBusinessAge(data.value) }
            />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row columns={2}>
          <Grid.Column>
            Does your business have less than 500 employees?
          </Grid.Column>
          <Grid.Column width={2}>
            <Form.Dropdown
              selection
              fluid
              options={options}
              onChange={ (_, data) => setBusinessSize(data.value) }
            />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row columns={2}>
          <Grid.Column>
            Does your business exclude marijuana, gambling or adult entertainment?
          </Grid.Column>
          <Grid.Column width={2}>
            <Form.Dropdown
              selection
              fluid
              options={options}
              onChange={ (_, data) => setBusinessType(data.value) }
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Divider />

      <div className="button-group">
        <Button secondary onClick={handleSubmit}>Verify</Button>
      </div>
    </Form>
   )
  }

  return hasFailed ? doesNotQualify() : verification()
}
