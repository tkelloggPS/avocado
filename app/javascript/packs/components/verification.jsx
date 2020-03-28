import React, { useState } from "react"
import { Form, Button, Message, Header, Divider } from "semantic-ui-react"

export default ({ setStep, step }) => {
  const [businessAge, setBusinessAge] = useState(false)
  const [businessSize, setBusinessSize] = useState(false)
  const [businessType, setBusinessType] = useState(false)
  const [hasFailed, setHasFailed] = useState(false)

  const handleSubmit = () => {
    const valid = [businessAge, businessType, setBusinessSize].every(v => v)

    if (valid) {
      setStep(2)
    } else {
      setHasFailed(true)
    }
  }

  const message = () => {
    if (!hasFailed) return

    return (
      <Message>
        <p>Every condition must be true to be eligible</p>
      </Message>
    )
  }

  return (
    <Form onSubmit={handleSubmit} className="ui segment">
      <Header as="h1">Eligibility</Header>

      {message()}

      <div className="ui center aligned padded">
        <Form.Group inline>
          <label>Has your business been around for more than 1 year?</label>
          <Form.Radio label="True" checked={businessAge === true} onClick={() => setBusinessAge(true)} />
          <Form.Radio label="False" checked={businessAge === false} onClick={() => setBusinessAge(false)} />
        </Form.Group>

        <Form.Group inline>
          <label>Does your business have less than 500 employees?</label>
          <Form.Radio label="True" checked={businessSize === true} onClick={() => setBusinessSize(true)} />
          <Form.Radio label="False" checked={businessSize === false} onClick={() => setBusinessSize(false)} />
        </Form.Group>

        <Form.Group inline>
          <label>Does your business exclude marijuana, gambling or adult entertainment?</label>
          <Form.Radio label="True" checked={businessType === true} onClick={() => setBusinessType(true)} />
          <Form.Radio label="False" checked={businessType === false} onClick={() => setBusinessType(false)} />
        </Form.Group>
      </div>

      <Divider />

      <div className="button-group">
        <Button secondary type='submit'>Submit</Button>
        <Button disabled>Back</Button>
      </div>
    </Form>
  )
}
