import useSWR from 'swr'
import Link from 'next/link'
import React from 'react'
import ReactPlayer from 'react-player'
import { groq } from 'next-sanity'
import { client } from '@/sanity/lib/client'

const fetcher = async (query:any) => await client.fetch(query)

export default function ReactAudioPlayer() {
  const query = groq`*[_type=='audioFile']{...}`
  const { data, error } = useSWR(query, fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  console.log(data)

  // component code...
}
