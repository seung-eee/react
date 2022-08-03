import { PlusOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
import { useCallback } from 'react';
import { useState } from 'react';

const PostImages = ({ images }) => {

  const [showImagesZoom, setShowImagesZoom] = useState(false);
  const onZoom = useCallback(() => {
    setShowImagesZoom(true);
  }, [])

  if (images.length === 1) {
    return (
      <>
        <img roloe="presentation" src={images[0].src} alt={images[0].src} onClick={onZoom} />
      </>
    )
  }

  if (images.length === 2) {
    return (
      <>
        <img roloe="presentation" style={{ width: '50%', display: 'inline-block' }} src={images[0].src} alt={images[0].src} onClick={onZoom} />
        <img roloe="presentation" style={{ width: '50%', display: 'inline-block' }} src={images[1].src} alt={images[1].src} onClick={onZoom} />
      </>
    )
  }

  return (
    <>
      <div>
        <img roloe="presentation" style={{ width: '50%', display: 'inline-block' }} src={images[0].src} alt={images[0].src} onClick={onZoom} />
        <div role="presentation" style={{ display: 'inline-block', width: '50%', textAlign: 'center', verticalAlign: 'middle' }} onClick={onZoom}>
          <PlusOutlined />
          <br />
          {images.length - 1}개의 사진 더 보기
        </div>
      </div>
    </>
  )

};

PostImages.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object),
}

export default PostImages;