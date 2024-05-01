import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import TabsSection from '@/Components/TabSection';
import MainContent from '@/Components/MainContent';
import Layout from '@/Layouts/Layout';
const Welcome = () => {
  return (
    <Layout>
      <TabsSection/>
      <MainContent/>
    </Layout>
  )
}

export default Welcome