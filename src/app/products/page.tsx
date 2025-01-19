import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { CategorySection } from '@/components/sections/CategorySection'
import React from 'react'

const page = () => {
  return (
    <div className="flex flex-col min-h-screen">
    <Header />
    <main className="flex-grow">

    <CategorySection/>
    </main>
    <Footer/>
    </div>
  )
}

export default page