/* eslint-disable no-undef */
/// <reference types="cypress"/>

context('Home Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('Should find a form in Home Page', () => {
    cy.get('form')
  })

  it('Should find a Title with greetings message', () => {
    cy.get('form>h1').contains('Olá, seja bem-vindo!')
  })

  it('Should find a SubTitle with instructions to access the platform.', () => {
    cy.get('form>h3').contains('Para acessar a plataforma, faça seu login.')
  })
  it('Should find a label to input e-mail.', () => {
    cy.get('form>p>label').contains('E-mail')
  })
  it('Should find a input to e-mail.', () => {
    cy.get('input[type=email]')
  })
  it('Should find a label to input password.', () => {
    cy.get('form>p>label').contains('Senha')
  })
  it('Should find a input to password.', () => {
    cy.get('input[type=password]')
  })
  it('Should find a button to submit the form', () => {
    cy.get('button[type=submit]')
  })
  it('Should find a paragraph with message to recover password', () => {
    cy.get('div>p').contains('Esqueceu seu login ou senha? Clique')
  })
  it('Should find a link to recover password inside paragraph', () => {
    cy.get('div>p>a')
  })
  it('Should show email error message when try to submit empty form', () => {
    cy.get('button[type=submit]').click()
    cy.get('span').contains('Digite um e-mail válido')
  })
  it('Should show password error message when try to submit empty password input', () => {
    cy.get('input[type=email]').type('vinicius.assis@teste.com')
    cy.get('button[type=submit]').click()
    cy.get('span').contains('A senha deve conter apenas numeros e letras')
  })
  it('Should show email error message when try to submit form with a invalid email', () => {
    cy.get('input[type=email]').type('vinicius.assis@teste')
    cy.get('input[type=password]').type('1234')
    cy.get('button[type=submit]').click()
    cy.get('span').contains('Digite um e-mail válido')
  })
  it('Should show error message when try to submit form with a unregistred user', () => {
    cy.get('input[type=email]').type('vinicius.assis@teste.com')
    cy.get('input[type=password]').type('1234')
    cy.get('button[type=submit]').click()
    cy.get('span').contains('Senha ou email inválido.')
  })
  it('Should find a greatings message when submit form with a registred user', () => {
    cy.get('input[type=email]').type('email2@wiser.com')
    cy.get('input[type=password]').type('test2')
    cy.get('button[type=submit]').click()
    cy.get('h1').contains('Seja muito bem vindo.')
  })
  it('Should find a link to logout', () => {
    cy.get('input[type=email]').type('email2@wiser.com')
    cy.get('input[type=password]').type('test2')
    cy.get('button[type=submit]').click()
    cy.get('a').contains('Logout')
  })
})
