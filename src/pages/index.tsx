import React from 'react'
import Head from 'next/head'
import Container from '../components/Container'
import FormLogin from '../components/LoginForm'
import ContentWrapper from '../components/ContentWrapper'
import RecoverPassword from '../components/RecoverPassword'
import Layer from '../components/Layer'
import ImageContainer from '../components/ImageContainer'

import { GetServerSideProps, InferGetStaticPropsType } from 'next'
import { fetchUsers } from '../api/service'

const Home: React.FC = ({
  data
}: InferGetStaticPropsType<typeof getServerSideProps>) => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Container>
        <ImageContainer>
          <Layer />
        </ImageContainer>
        <ContentWrapper>
          <FormLogin data={data} />
          <RecoverPassword />
        </ContentWrapper>
      </Container>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await fetchUsers()

  return {
    props: {
      data
    }
  }
}

export default Home
