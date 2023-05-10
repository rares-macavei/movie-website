import React from 'react';
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';
import "../../../mixins.scss"
import useFetch from '../../../hooks/useFetch';
import Carousel from '../../../components/carousel/Carousel';


const OnAir = () => {
  const { data, loading } = useFetch(`/tv/on_the_air`);

  return (
    <div className='carouselSection'>
      <ContentWrapper>
        <span className="carouselTitle">On Air TV Shows</span>
      </ContentWrapper>
      <Carousel
        data={data?.results}
        loading={loading} />
    </div>
  );
};

export default OnAir