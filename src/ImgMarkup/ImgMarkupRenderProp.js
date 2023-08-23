
import React from 'react'
import PropTypes from 'prop-types'
import ImgMarkupCanvas from './ImgMarkupCanvas'
import useImgMarkup from '../hooks/useImgMarkup'


const ImgMarkupRenderProp = ({
  children,
  imgSrc,
  imgStyles,
  onSave,
  defaultValues,
  encoderType,
  encoderOptions,
}) => {
  const {
    bind,
    activeColor,
    activeStrokeWidth,
    activeType,
    activeFontSize,
    setActiveColor,
    setActiveStrokeWidth,
    setActiveType,
    setActiveFontSize,
    undo,
    save,
    deletePath,
    activePathId,
    imgMarkupModifiers
  } = useImgMarkup({
    onSave,
    defaultValues,
    encoderType,
    encoderOptions,
  })

  return (
    <>
      <ImgMarkupCanvas imgSrc={imgSrc} imgStyles={imgStyles} {...bind} />
      {
        children?.({
          activeColor,
          activeStrokeWidth,
          activeType,
          activeFontSize,
          setActiveColor,
          setActiveStrokeWidth,
          setActiveType,
          setActiveFontSize,
          undo,
          save,
          deletePath,
          activePathId,
          imgMarkupModifiers,
        })
      }
    </>
  )
}

ImgMarkupRenderProp.propTypes = {
  children: PropTypes.func,
  imgSrc: PropTypes.string,
  imgStyles: PropTypes.object,
  onSave: PropTypes.func,
  defaultValues: PropTypes.object,
  encoderType: PropTypes.string,
  encoderOptions: PropTypes.number,
}

ImgMarkupRenderProp.defaultProps = {
  children: () => {},
  imgSrc: '',
  imgStyles: {},
  onSave: () => {},
  defaultValues: undefined,
  encoderType: 'jpg',
  encoderOptions: 0.8,
}

export default ImgMarkupRenderProp