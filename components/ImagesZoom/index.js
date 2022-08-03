import PropTypes from 'prop-types';
import Slick from 'react-slick';
import { useState } from 'react';
import { Overlay, Global, Header, CloseBtn, ImgWrapper, Indicator, SlickWrapper } from './styles';

const ImagesZoom = ({ images, onClose }) => {

  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <Overlay>
      <Global />
      <Header>
        <h1>상세 이미지</h1>
        <CloseBtn onClick={onClose}>X</CloseBtn>
      </Header>
      <SlickWrapper>
        <div>
          <Slick
            // 몇번째부터 슬라이드로 보여줄건지
            initialSlide={0}
            // 현재 슬라이드가 몇인지
            afterChange={(slide) => setCurrentSlide(slide)}
            // 무한반복
            infinite
            // 화살표 사라짐
            arrows={false}
            // 한번에 하나씩만 보이도록
            slidesToShow={1}
            // 한번에 하나씩만 넘기도록
            slidesToScroll={1}
          >
            {images.map((v) => (
              <ImgWrapper key={v.src}>
                <img src={v.src} alt={v.src}></img>
              </ImgWrapper>
            ))}
          </Slick>
          {/* 총 몇 장의 사진 중에서 몇 번째 사진을 보고 있는지 */}
          <Indicator>
            <div>
              {currentSlide + 1}
              {' '}
              /
              {images.length}
            </div>
          </Indicator>
        </div>
      </SlickWrapper>
    </Overlay>
  )
};

ImagesZoom.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ImagesZoom;