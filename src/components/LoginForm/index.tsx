import React from 'react'
import {
  Button,
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
      <Input />
    </InputWrapper>
    <InputWrapper>
      <Label>Senha</Label>
      <Input />
    </InputWrapper>
    <Button>Entrar</Button>
  </Form>
)

export default FormLogin
