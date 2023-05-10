import React from 'react';
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';
import "../../../mixins.scss"
import useFetch from '../../../hooks/useFetch';
import Carousel from '../../../components/carousel/Carousel';


const Upcoming = () => {
  const { data, loading } = useFetch(`/movie/upcoming`);

  return (
    <div className='carouselSection'>
      <ContentWrapper>
        <span className="carouselTitle">Upcoming Movies</span>
      </ContentWrapper>
      <Carousel
        data={data?.results}
        loading={loading} />
    </div>
  );
};

export default Upcoming