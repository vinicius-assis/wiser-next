import React, { useRef, useState } from 'react'
import {
  Button,
  ErrorMessage,
  Form,
  Input,
  InputWrapper,
  Label,
  Subtitle,
  Title
} from './styled'

import verifyEmail from '../../utils/verifyEmail'
import validateUser from '../../utils/validateUser'
import { TFetchUser } from '../../api/service'
import DisplayMessage from '../DisplayMessage'

const FormLogin = ({ data, action }: TFetchUser): JSX.Element => {
  const [emailError, setEmailError] = useState<boolean>(false)
  const [passwordError, setPasswordError] = useState<boolean>(false)
  const [loginMessage, setLoginMessage] = useState<string>('')
  const [wrongUser, setWrongUser] = useState<boolean>(false)
  const emailInput = useRef() as React.MutableRefObject<HTMLInputElement>
  const passwordInput = useRef() as React.MutableRefObject<HTMLInputElement>

  const removeError = () => {
    setPasswordError(false)
    setEmailError(false)
    setWrongUser(false)
  }

  const cleanStates = () => {
    setLoginMessage('')
    action()
  }

  const handleSubmit = event => {
    const emailValue = emailInput.current.value
    const passwordValue = passwordInput.current.value
    if (verifyEmail(emailValue)) {
      event.preventDefault()
      setEmailError(true)
      return true
    }
    if (!passwordValue.length) {
      event.preventDefault()
      setPasswordError(true)
      return true
    }

    event.preventDefault()
    const user = validateUser({ data, emailValue, passwordValue })
    if (user) {
      setLoginMessage(`Olá ${user.firstname}.`)
      action()
      return true
    }

    setWrongUser(true)
  }

  return (
    <>
      {!!loginMessage && (
        <DisplayMessage message={loginMessage} action={cleanStates} />
      )}
      {!loginMessage && (
        <Form onSubmit={handleSubmit}>
          <Title>Olá, seja bem-vindo!</Title>
          <Subtitle>Para acessar a plataforma, faça seu login.</Subtitle>
          <InputWrapper>
            <Label>E-mail</Label>
            <Input type="email" ref={emailInput} onFocus={removeError} />
            {emailError && <ErrorMessage>Digite um e-mail válido</ErrorMessage>}
          </InputWrapper>
          <InputWrapper>
            <Label>Senha</Label>
            <Input
              type="password"
              maxLength={8}
              ref={passwordInput}
              onFocus={removeError}
            />
            {passwordError && (
              <ErrorMessage>
                A senha deve conter apenas numeros e letras
              </ErrorMessage>
            )}
          </InputWrapper>
          {wrongUser && <ErrorMessage>Senha ou email inválido.</ErrorMessage>}
          <Button>Entrar</Button>
        </Form>
      )}
    </>
  )
}

export default FormLogin
