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

const FormLogin = ({ data }: TFetchUser): JSX.Element => {
  const [emailError, setEmailError] = useState<boolean>(false)
  const [passwordError, setPasswordError] = useState<boolean>(false)
  const [loginSuccessMessage, setLoginSuccessMessage] = useState<string>('')
  const emailInput = useRef() as React.MutableRefObject<HTMLInputElement>
  const passwordInput = useRef() as React.MutableRefObject<HTMLInputElement>

  const removeError = event => {
    const type = event.target.type
    type === 'password' ? setPasswordError(false) : setEmailError(false)
  }

  const handleSubmit = event => {
    const emailValue = emailInput.current.value
    const passwordValue = passwordInput.current.value
    if (verifyEmail(emailValue)) {
      event.preventDefault()
      setEmailError(true)
    }
    if (!passwordValue.length) {
      event.preventDefault()
      setPasswordError(true)
    }

    event.preventDefault()
    const user = validateUser({ data, emailValue, passwordValue })
    setLoginSuccessMessage(`Bem vindo, ${user.firstname}!`)
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
