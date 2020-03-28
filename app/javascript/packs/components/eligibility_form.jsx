import React, { useState } from "react"
import { Form, Button } from "semantic-ui-react"
import { Header } from 'semantic-ui-react'

export default ({ setStep }) => {
  const [businessAge, setBusinessAge] = useState(false)
  const [businessSize, setBusinessSize] = useState(false)
  const [businessType, setBusinessType] = useState(false)

  const handleSubmit = () => {
    const valid = [businessAge, businessType, setBusinessSize].every(v => v)

    if (valid) {
      setStep(2)

    } else {

    }
  }

  return (
    <Form onSubmit={handleSubmit} className="ui segment">
      <Header as="h2">Eligibility</Header>

      <Form.Group inline>
        <label>Has your business been around for more than 1 year?</label>
        <Form.Radio
          label="True"
          checked={businessAge === true}
          value={true}
          onClick={() => setBusinessAge(true)}
        />
        <Form.Radio
          label="False"
          checked={businessAge === false}
          value={false}
          onClick={() => setBusinessAge(false)}
        />
      </Form.Group>

      <Form.Group inline>
        <label>Does your business have less than 500 employees?</label>
        <Form.Radio
          label="True"
          checked={businessSize === true}
          value={true}
          onClick={() => setBusinessSize(true)}
        />
        <Form.Radio
          label="False"
          checked={businessSize === false}
          value={false}
          onClick={() => setBusinessSize(false)}
        />
      </Form.Group>

      <Form.Group inline>
        <label>Does your business exclude marijuana, gambling or adult entertainment?</label>
        <Form.Radio
          label="True"
          checked={businessType === true}
          value={true}
          onClick={() => setBusinessType(true)}
        />
        <Form.Radio
          label="False"
          checked={businessType === false}
          value={false}
          onClick={() => setBusinessType(false)}
        />
      </Form.Group>
      <Button type='submit'>Submit</Button>
    </Form>
  )
}
