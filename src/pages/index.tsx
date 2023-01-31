import React from 'react'

import Head from 'next/head'
import { Hero } from '@/components/hero'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Hero />
    </>
  )
}
