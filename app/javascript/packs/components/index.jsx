import React, { useState } from "react"
import { Container, Step } from 'semantic-ui-react'

import Verification from "./verification"
import Provider from "./provider"
import Download from "./download"

export default () => {
  const [step, setStep] = useState(1)

  const activeStep = () => {
    switch (step) {
      case 1:
        return <Verification setStep={setStep} step={step} />
      case 2:
        return <Provider setStep={setStep} step={step} />
      case 3:
        return <Download setStep={setStep} step={step} />
      default:
        return <Verification setStep={setStep} step={step} />
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
      {/* <Button disabled={step === 1} onClick={() => setStep(step - 1)}>Back</Button> */}
    </Container>
  )
}
