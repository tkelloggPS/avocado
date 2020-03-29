import React, { useState} from "react"
import {
  Segment,
  Header,
  Button,
  Dimmer,
  Loader,
  Image
} from "semantic-ui-react"
import axios from "axios"

export default ({ setStep, step }) => {
  const [hasFailed, setHasFailed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = () => {
    setHasFailed(false)
    setIsLoading(true)

    axios({
      url: "/quickbooks",
      method: 'GET',
      responseType: 'blob',
    }).then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]))
      const link = document.createElement('a')

      link.href = url
      link.setAttribute('download', 'application.pdf')
      document.body.appendChild(link)
      link.click()

      setIsLoading(false)
      setStep(4)
    }).catch(err => {
      setHasFailed(true)
      setIsLoading(false)
    })
  }

  const message = () => {
    if (!hasFailed) return

    return <Message><p>We could not generate the download. Please try again</p></Message>
  }

  return (
    <Segment>
      <Dimmer active={isLoading} inverted>
        <Loader inverted content='Loading' />
      </Dimmer>

      <Header as="h1">Download Your SBA Loan Application</Header>

      {message()}

      <div className="ui center aligned">
        <Button secondary onClick={handleSubmit}>Download</Button>
      </div>
    </Segment>
  )
}
