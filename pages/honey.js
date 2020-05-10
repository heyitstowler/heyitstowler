// import React, { useState, useEffect } from 'react'
import Head from 'next/head'
// import axios from 'axios'
import Layout from '../components/layout'
import Container from '../components/container'
import Heading from '../components/Heading'
import data from '../lib/honey-data'
import InstagramTileGrid from '../components/InstagramMasonryGrid'

export default function Honey() {
  // const [data, setData] = useState({})
  // useEffect(() => {
  //   axios.get('/api/instagram').then(({ data: fetchData }) => {
  //     setData(fetchData)
  //   })
  // }, [])
  const { images = [] } = data
  return (
    <Layout preview={false}>
      <Head>
        <title>Honey - heyitstowler</title>
      </Head>
      <Container>
        <Heading rank={1}>Honey</Heading>
        <section>
          <InstagramTileGrid images={images} />
        </section>
      </Container>
    </Layout>
  )
}
