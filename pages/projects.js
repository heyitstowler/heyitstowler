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
        <title>Projects - heyitstowler</title>
      </Head>
      <Container>
        <Heading rank={1}>Projects</Heading>
        <ComingSoon />
      </Container>
    </Layout>
  )
}
