import React, { useState } from "react"
import { Container, Step, Statistic } from 'semantic-ui-react'

import Verification from "./verification"
import Provider from "./provider"
import Download from "./download"
import Success from "./success"

const initialStep = gon.step || 1

export default () => {
  const [step, setStep] = useState(initialStep)

  const activeStep = () => {
    switch (step) {
      case 1:
        return <Verification setStep={setStep} step={step} />
      case 2:
        return <Provider setStep={setStep} step={step} />
      case 3:
        return <Download setStep={setStep} step={step} />
      case 4:
        return <Success setStep={setStep} step={step} />
      default:
        return <Verification setStep={setStep} step={step} />
    }
  }

  return (
    <Container className="ui center aligned padded">

      <Statistic>
        <Statistic.Value className="green item">$3,500,000,000</Statistic.Value>
        <Statistic.Label>Available Funds to Small Businesses</Statistic.Label>
      </Statistic>

      <Step.Group ordered>
        <Step active={step === 1} completed={step > 1}>
          <Step.Content>
            <Step.Title>Verify</Step.Title>
            <Step.Description>Determine if your business is eligible</Step.Description>
          </Step.Content>
        </Step>

        <Step active={step === 2} completed={step > 2}>
          <Step.Content>
            <Step.Title>Choose</Step.Title>
            <Step.Description>Choose your accounting provider</Step.Description>
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
    </Container>
  )
}
