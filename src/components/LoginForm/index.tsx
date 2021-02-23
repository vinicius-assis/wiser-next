import React from 'react'
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

const FormLogin = (): JSX.Element => (
  <Form>
    <Title>Olá, seja bem-vindo!</Title>
    <Subtitle>Para acessar a plataforma, faça seu login.</Subtitle>
    <InputWrapper>
      <Label>E-mail</Label>
      <Input type="email" />
      <ErrorMessage>Digite um e-mail válido</ErrorMessage>
    </InputWrapper>
    <InputWrapper>
      <Label>Senha</Label>
      <Input type="password" />
    </InputWrapper>
    <Button>Entrar</Button>
  </Form>
)

export default FormLogin
