import React, { useState } from "react"
import { Form } from "semantic-ui-react"

export default () => {
  const [businessAge, setBusinessAge] = useState(false)
  const [businessSize, setBusinessSize] = useState(false)

  return (
    <Form>
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
    </Form>
  )
}
