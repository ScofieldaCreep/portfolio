import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { galleryImages } from '@/data';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

export default function Gallery() {
  return (
    <div className="h-[550px] sm:h-[650px] md:h-full 2xl:h-[750px] w-full">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{
          clickable: true
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false
        }}
        className="mySwiper rounded-2xl"
      >
        {galleryImages.map((img) => (
          <SwiperSlide key={img.id}>
            <Image
              src={img.src}
              alt=""
              layout="fill"
              className="object-cover w-full h-full object-left-top"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

