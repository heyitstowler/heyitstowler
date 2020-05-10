import React from 'react'
import Head from 'next/head'
import Layout from '../components/layout'
import Container from '../components/container'
import Heading from '../components/Heading'
import ComingSoon from '../components/ComingSoon'

export default function BoardGames() {
  return (
    <Layout preview={false}>
      <Head>
        <title>Karaoke - heyitstowler</title>
      </Head>
      <Container>
        <Heading rank={1}>Karaoke</Heading>
        <ComingSoon />
      </Container>
    </Layout>
  )
}
