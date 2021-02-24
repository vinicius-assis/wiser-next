import styled from 'styled-components'
import React from 'react'
import { Title } from '../LoginForm/styled'

type TDisplayMessage = {
  message: string
  action: () => void
}

const MessageWrapper = styled.div`
  width: 311px;
  height: 281px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f5f5ff;
  border-radius: 8px;
  padding-top: 20px;

  & > h1 {
    text-align: center;
    width: 100%;
    line-height: 42px;
  }

  @media (min-width: 768px) {
    width: 100%;
  }
`

const LogoutLink = styled.a`
  color: #a546b8;
  text-decoration: underline;
  cursor: pointer;
  margin-top: auto;
  margin-bottom: 20px;

  &:hover {
    text-decoration: none;
  }
`

const DisplayMessage: React.FC<TDisplayMessage> = ({ message, action }) => (
  <MessageWrapper>
    <Title>
      {message}
      <br></br>
      Seja muito bem vindo.
    </Title>
    <LogoutLink onClick={action}>Logout</LogoutLink>
  </MessageWrapper>
)

export default DisplayMessage
