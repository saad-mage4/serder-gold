import GoldGuide from '@/Components/GoldGuide'
import GoldPricesNews from '@/Components/GoldPricesNews'
import MainContent from '@/Components/MainContent'
import NewsSection from '@/Components/NewsSection'
import HomeLoader from '@/Components/UI/HomeLoader'
import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'

export default function Home() {

    const [loader, setLoader] = useState(true)
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoader(false);
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    if (loader) return <HomeLoader />
  return (
    <>
      <MainContent page="home_main"/>
      <GoldGuide />
      <GoldPricesNews />
      <NewsSection/>
    </>
  )
}
