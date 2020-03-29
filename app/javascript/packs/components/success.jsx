import React from "react"
import { Segment, Header, Button } from "semantic-ui-react"

export default ({ setStep, step }) => (
  <Segment>
    <Header as="h1">Success!</Header>

    <p>We've generated an application for you below. You can download this file and submit to
      <a href="https://www.sba.gov/funding-programs/disaster-assistance"> SBA</a>
    </p>
  </Segment>
)
