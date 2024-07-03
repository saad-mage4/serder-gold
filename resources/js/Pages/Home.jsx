import GoldGuide from '@/Components/GoldGuide'
import GoldPricesNews from '@/Components/GoldPricesNews'
import MainContent from '@/Components/MainContent'
import NewsSection from '@/Components/NewsSection'
import React from 'react'

export default function Home() {
  return (
    <>
      <MainContent/>
      <GoldGuide />
      <GoldPricesNews />
      <NewsSection/>
    </>
  )
}
