/* eslint-disable no-control-regex */
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

const FormLogin = (): JSX.Element => {
  const [emailError, setEmailError] = useState<boolean>(false)
  const [passwordError, setPasswordError] = useState<boolean>(false)
  const emailInput = useRef() as React.MutableRefObject<HTMLInputElement>
  const passwordInput = useRef() as React.MutableRefObject<HTMLInputElement>

  const itIsvalidateEmail = email => {
    // eslint-disable-next-line no-useless-escape
    const emailRegex = /^[a-zA-z0-9\.-]+@[a-zA-z0-9]+\.[a-zA-z0-9]+\.?[a-zA-Z0-9]+$/
    return !emailRegex.test(email)
  }

  const removeError = event => {
    const type = event.target.type
    type === 'password' ? setPasswordError(false) : setEmailError(false)
  }

  const handleSubmit = event => {
    const emailValue = emailInput.current.value
    const passwordValue = passwordInput.current.value
    if (itIsvalidateEmail(emailValue)) {
      event.preventDefault()
      setEmailError(true)
    }
    if (!passwordValue.length) {
      event.preventDefault()
      setPasswordError(true)
    }
  }

  return (
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
      <Button>Entrar</Button>
    </Form>
  )
}

export default FormLogin
