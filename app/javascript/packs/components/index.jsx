import React from "react"
import Detail from "./detail"
import EligibilityForm from "./eligibility_form"
import NotEligible from "./not_eligible"
import Notice from "./notice"
import Provider from "./provider"
import { Container } from 'semantic-ui-react'

export default () => {
  return (
    <Container>
      <EligibilityForm />
      <Detail />
      <NotEligible />
      <Notice message="success" />
      <Notice message="failure" />
      <Provider />
    </Container>
  )
}
