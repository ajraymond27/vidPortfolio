import { useEffect, useState } from 'react'
import Head from 'next/head'
import Video from '../components/TestVideo'

const client = require('contentful').createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
})

function HomePage() {
  async function fetchEntries() {
    const entries = await client.getEntries()
    if (entries.items) return entries.items
    console.log(`Error getting Entries for ${contentType.name}.`)
  }

  const [videos, setVideos] = useState([])

  useEffect(() => {
    async function getVideos() {
      const allVideos = await fetchEntries()
      setVideos([...allVideos])
    }
    getVideos()
  }, [])

  return (
    <>
      <Head>
        <title>Next.js + Contentful</title>
        <link
          rel="stylesheet"
          href="https://css.zeit.sh/v1.css"
          type="text/css"
        />
      </Head>
      {videos.length > 0
        ? videos.map(p => (
            <Video
              name={v.fields.name}
              coverImage={v.fields.coverImage}
              url={v.fields.url}
              type={v.fields.type}
              client={v.fields.client}
            />
          ))
        : null}
    </>
  )
}

export default HomePage