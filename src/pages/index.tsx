import React from 'react'
import Head from 'next/head'
import Container from '../components/Container'
import FormLogin from '../components/LoginForm'
import ContentWrapper from '../components/ContentWrapper'
import RecoverPassword from '../components/RecoverPassword'
import Layer from '../components/Layer'
import ImageContainer from '../components/ImageContainer'

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap"
          rel="stylesheet"
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <ImageContainer>
          <Layer />
        </ImageContainer>
        <ContentWrapper>
          <FormLogin />
          <RecoverPassword />
        </ContentWrapper>
      </Container>
    </>
  )
}

export default Home
