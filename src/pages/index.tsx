import React from 'react'

import Head from 'next/head'

import { Header, SecondSection } from '@/components'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <main>
        <Header />
        <SecondSection />
      </main>
    </>
  )
}
