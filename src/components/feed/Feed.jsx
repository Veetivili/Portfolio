import React from 'react'
import './feed.css'

// import required modules
import { Pagination, Navigation } from "swiper";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

const data = [
  {
    id: 1,
    page: 'Linkedin',
    src: 'https://<linkedin-post-url-here>',
  },
  {
    id: 2,
    page: 'Linkedin',
    src: 'https://<linkedin-post-url-here>',
  },
  {
    id: 3,
    page: 'Linkedin',
    src: 'https://<linkedin-post-url-here>',
  }

]

const Feed = () => {
  return (
    <section id='feed'>
      <h5>Check out new posts from</h5>
      <h2>Linkedin Feed</h2>

      <Swiper className='container feed__container'
      pagination={{
        clickable: true,
      }}
      modules={[Pagination, Navigation]}
      Navigation
      spaceBetween={40}
      slidesPerView={1}>
        {
          data.map(({src}, id) => {
            return (
              <SwiperSlide className='feed'>
                <div className='post-item' key={id}>
                  <iframe title={id} className='post' src={src} width="90%" height="90%" frameborder="0" allowFullScreen=""></iframe>
                </div>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Feed