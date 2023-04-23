import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper as Swipe, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from "swiper"

interface SwiperPropsInterface {
  images: string[]
}

const Swiper = (props: SwiperPropsInterface) => {
  if(!props.images)return <></>
  return (
    <Swipe
      className='swiper'
      spaceBetween={50}
      slidesPerView={1}
      navigation={true}
      modules={[Pagination, Navigation]}
      pagination={{ clickable: true, }}
    >
      <SwiperSlide className='bigScreen slides'><img src={require(`../../../Assets/Images/${props.images[0]}.png`)} alt="" className='projectImages' /></SwiperSlide>
      <SwiperSlide className='slides'><img src={require(`../../../Assets/Images/${props.images[1]}.png`)} alt="" className='projectImages' /></SwiperSlide>
      <SwiperSlide className='slides'><img src={require(`../../../Assets/Images/${props.images[2]}.png`)} alt="" className='projectImages' /></SwiperSlide>
      <SwiperSlide className='slides'><img src={require(`../../../Assets/Images/${props.images[3]}.png`)} alt="" className='projectImages' /></SwiperSlide>
      <SwiperSlide className='slides'><img src={require(`../../../Assets/Images/${props.images[4]}.png`)} alt="" className='projectImages' /></SwiperSlide>
    </Swipe>
  )
}

export default Swiper