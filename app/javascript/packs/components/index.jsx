import React, { useState } from "react"
import { Container, Step, Button } from 'semantic-ui-react'

import EligibilityForm from "./eligibility_form"
import Provider from "./provider"

export default () => {
  const [step, setStep] = useState(1)

  const activeStep = () => {
    switch (step) {
      case 1:
        return <EligibilityForm setStep={setStep} />
        break;
      case 2:
        return <Provider setStep={setStep} />
      case 3:
        return <Download setStep={setStep} />
      default:
        return <EligibilityForm setStep = { setStep } />
        break;
    }
  }

  return (
    <Container className="ui center aligned padded">
      <Step.Group ordered>
        <Step active={step === 1} completed={step > 1}>
          <Step.Content>
            <Step.Title>Verify</Step.Title>
            <Step.Description>Determine if your business if eligible</Step.Description>
          </Step.Content>
        </Step>

        <Step active={step === 2} completed={step > 2}>
          <Step.Content>
            <Step.Title>Process</Step.Title>
            <Step.Description>Upload accounting details</Step.Description>
          </Step.Content>
        </Step>

        <Step active={step === 3} completed={step > 3}>
          <Step.Content>
            <Step.Title>Download</Step.Title>
            <Step.Description>Print loan application</Step.Description>
          </Step.Content>
        </Step>
      </Step.Group>

      {activeStep()}

      <Button disabled={step === 1} click={() => setStep(step - 1)}>Back</Button>
    </Container>
  )
}
