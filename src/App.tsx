import React from 'react'
import { Container, Main, Wrapper } from './components'
import { assets } from './assets'

export default function App() {
  const [width, setWidth] = React.useState(window.innerWidth)
  const screenImage = width > 768 ? assets.desktop : assets.mobile

  React.useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <Main className='bg-[#E0E8FF] relative grid place-items-center min-w-full px-[24px]'>
      <img className='absolute top-0' src={screenImage} alt="" />

      <Container className='z-[1] rounded-[20px] overflow-hidden bg-white w-full max-w-[450px] min-h-[567px] sm:min-h-[697px] flex flex-col flex-nowrap items-center font-red-hat gap-[40px] pb-[48px]'>
        <img src={assets.illustrationHero} alt="" />

        <Wrapper className='mx-[24px] sm:mx-[48px] flex flex-col flex-nowrap items-center justify-between flex-grow-[1]'>

          <h1 className='font-black text-[28px] text-[#1F2E55]'>
            Order Summary
          </h1>

          <p className='font-medium text-[15px] sm:text-[16px] text-center text-[#717FA6] px-[5px]'>
            You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!
          </p>

          <Wrapper className='px-[16px] py-[16px] sm:px-[24px] sm:py-[25px] flex flex-nowrap justify-between w-full rounded-[11px] bg-[#F7F9FF]'>
            <div className='relative flex gap-[20px]'>
              <img className='w-[48px] aspect-square' src={assets.iconMusc} alt="Music Icon" />

              <div className='flex flex-col flex-nowrap'>
                <p className='font-black text-[16px] '>
                  Annual Plan
                </p>
                <p className='font-medium text-[16px] text-[#717FA6]'>
                  $59.99/year
                </p>
              </div>
            </div>

            <button className='font-bold text-[13px] sm:text-[14px] text-[#382AE1] hover:text-[#766CF1] border-b hover:border-b-transparent border-b-[#382AE1] self-center leading-[1] transition-all duration-300'>
              Change
            </button>
          </Wrapper>

          <button className='w-full h-[50px] bg-[#382AE1] hover:bg-[#766CF1] transition-all duration-300 text-white rounded-[11px] font-black text-[15px] shadow-[0_20px_20px_0_rgba(56,42,225,0.1903)]'>
            Proceed to Payment
          </button>

          <button className='text-[#717FA6] hover:text-[#1F2E55] font-black text-[15px] transition-all duration-300'>
            Cancel Order
          </button>
        </Wrapper>

      </Container>

    </Main>
  )
}
