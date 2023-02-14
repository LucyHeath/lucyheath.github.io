import { Box } from '@chakra-ui/react'
import { useState, useRef, useEffect, useCallback } from 'react'

const sliderStyles = {
  height: '100%',
  position: 'relative'
}

const slideStyles = {
  width: '100%',
  height: '100%',
  backgroundPosition: 'center',
  backgroundSize: 'cover'
}

const dotStyle = {
  margin: '0 3px',
  color: 'white',
  margin: '0',
  cursor: 'pointer'
}

const dotContainerStyles = {
  display: 'flex',
  justifyContent: 'center',
  padding: '20px'
}

const leftArrowStyles = {
  position: 'absolute',
  top: '50%',
  transform: 'translate(-200px, -50%)',
  left: '32px',
  fontSize: '45px',
  color: 'white',
  zIndex: 1,
  cursor: 'pointer',
  fontWeight: 'bold'
}

const rightArrowStyles = {
  position: 'absolute',
  top: '50%',
  transform: 'translate(200px, -50%)',
  right: '32px',
  fontSize: '45px',
  color: 'white',
  zIndex: 1,
  cursor: 'pointer',
  fontWeight: 'bold'
}

const slidesContainerStyles = {
  display: 'flex',
  height: '100%',
  transition: 'transform ease-out 0.3s'
}

const slidesContainerOverflowStyles = {
  overflow: 'hidden',
  height: '100%'
}

const ImageSlider = ({ slides, parentWidth }) => {
  const timerRef = useRef(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }
  const goToNext = useCallback(() => {
    const isLastSlide = currentIndex === slides.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }, [currentIndex, slides])
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex)
  }
  const getSlideStylesWithBackground = (slideIndex) => ({
    ...slideStyles,
    backgroundImage: `url(${slides[slideIndex].url})`,
    width: `${parentWidth}px`
  })
  const getSlidesContainerStylesWithWidth = () => ({
    ...slidesContainerStyles,
    width: parentWidth * slides.length,
    transform: `translateX(${-(currentIndex * parentWidth)}px)`
  })

  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current)
    }
    console.log('use EFFECT')
    timerRef.current = setTimeout(() => {
      goToNext()
    }, 2000)

    return () => clearTimeout(timerRef.current)
  }, [goToNext])

  return (
    <Box
      mt={['0em', '2em']}
      borderRadius={['0px', '10px']}
      style={sliderStyles}
    >
      <Box>
        <Box style={leftArrowStyles} onClick={goToPrevious}>
          〈
        </Box>
        <Box style={rightArrowStyles} onClick={goToNext}>
          〉
        </Box>
      </Box>
      <Box style={slidesContainerOverflowStyles}>
        <Box style={getSlidesContainerStylesWithWidth()}>
          {slides.map((_, slideIndex) => (
            <Box
              key={slideIndex}
              style={getSlideStylesWithBackground(slideIndex)}
            >
              {' '}
            </Box>
          ))}
        </Box>
      </Box>
      <Box style={dotContainerStyles}>
        {slides.map((slide, slideIndex) => (
          <Box
            key={slideIndex}
            style={dotStyle}
            fontSize={['8px', '20px']}
            onClick={() => goToSlide(slideIndex)}
            pl="10px"
          >
            &#8413;
          </Box>
        ))}{' '}
      </Box>
    </Box>
  )
}

export default ImageSlider
