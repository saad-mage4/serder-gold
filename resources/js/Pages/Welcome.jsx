import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import TabsSection from '@/Components/TabSection';
import MainContent from '@/Components/MainContent';
import GoldGuide from '@/Components/GoldGuide';
import GoldPricesNews from '@/Components/GoldPricesNews';
import Layout from '@/Layouts/Layout';
import NewsSection from '@/Components/NewsSection';
const Welcome = () => {
  return (
    <Layout>
      <TabsSection/>
      <MainContent/>
      <GoldGuide />
      <GoldPricesNews />
      <NewsSection/>
    </Layout>
  )
}

export default Welcome