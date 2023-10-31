import Image from 'next/image'
import HeroSection from './home/HeroSection'
import CalloutSection from './home/CalloutSection'
import Posts from './home/Posts'

export default function Home() {
  return (
      <>
      <div className="container">
        <HeroSection/>
        <Posts/>
      </div>
      <CalloutSection/>
      </>

  )
}
