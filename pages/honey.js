import React from 'react'
import Head from 'next/head'
import Layout from '../components/layout'
import Container from '../components/container'
import Heading from '../components/Heading'

export default function BoardGames() {
  return (
    <Layout preview={false}>
      <Head>
        <title>Honey - heyitstowler</title>
      </Head>
      <Container>
        <Heading rank={1}>Honey</Heading>
      </Container>
    </Layout>
  )
}
