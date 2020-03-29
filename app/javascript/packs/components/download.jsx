import React, { useState} from "react"
import { Segment, Header, Button } from "semantic-ui-react"

export default ({ setStep, step }) => {
  const [hasFailed, setHasFailed] = useState(false)

  const handleSubmit = () => {
    // TODO: implement download
    setStep(4)
  }

  const message = () => {
    if (!hasFailed) return

    return <Message><p>You must choose a provider</p></Message>
  }

  return (
    <Segment>
      <Header as="h1">Download Your Application</Header>

      {message()}

      <div className="button-group">
        <Button secondary onClick={handleSubmit}>Download</Button>
        <Button onClick={() => setStep(step - 1)}>Back</Button>
      </div>
    </Segment>
  )
}
