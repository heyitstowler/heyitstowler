import React from 'react'
import Head from 'next/head'
import Layout from '../components/layout'
import Container from '../components/container'
import Heading from '../components/Heading'

export default function HomePage() {
  return (
    <Layout preview={false}>
      <Head>
        <title>Hey, it's Towler!</title>
      </Head>
      <Container>
        <Heading rank={1}>Home</Heading>
      </Container>
    </Layout>
  )
}
