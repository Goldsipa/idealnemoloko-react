import React from 'react';
const videoUrl = 'https://res.cloudinary.com/syplemstudio/video/upload/v1545838086/idealnemoloko/Ideal_Nemoloko_20.mp4';

const WhySlideVideo = (props) => (
  <div className="swiper-slide">
    <div className="why-video">
      <video controls>
        <source src={ videoUrl } type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  </div>
);

export default WhySlideVideo;