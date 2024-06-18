import { Caroulsel, Header } from '../components'
import { CarouseItemWrapper } from '../components/atoms'

export const Home = () => {
  return (
    <>
      <Header />
      <Caroulsel autoSlide>
        <CarouseItemWrapper>
          <img className='w-full' src='src\assets\placeholders\video_placeholder.png' alt='mondongo' />
        </CarouseItemWrapper>
        <CarouseItemWrapper>
          <img className='w-full' src='src\assets\placeholders\video_placeholder.png' alt='mondongo' />
        </CarouseItemWrapper>
      </Caroulsel>
      <Caroulsel autoSlide>
        <CarouseItemWrapper>
          <img className='w-full' src='src\assets\placeholders\video_placeholder.png' alt='mondongo' />
        </CarouseItemWrapper>
        <CarouseItemWrapper>
          <img className='w-full' src='src\assets\placeholders\video_placeholder.png' alt='mondongo' />
        </CarouseItemWrapper>
      </Caroulsel>
    </>
  )
}
