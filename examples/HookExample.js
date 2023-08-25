import React, { useState } from 'react';

import { ImgMarkupCanvas, useImgMarkup } from '../src/index';

// will generate random image
const src = "https://source.unsplash.com/random/400x400?sig=incrementingIdentifier"

const CONTAINER_STYLES = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '70vh',
  position: 'relative',
}

const HookExample = () => {
  const [loading, setLoading] = useState(true)

  const markupDefaultValues = {
    color: '#0af',
    fontSize: 40,
    strokeWidth: 4,
    type: 'arrow',
    text: 'insert text!',
  }

  const onSave = (uri) => console.log({ uri })

  const onImgLoad = () => setLoading(false)

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
    onImgLoad,
    defaultValues: markupDefaultValues,
  })

  return (
    <div style={CONTAINER_STYLES}>
      {
        loading
          && <p>loading...</p>
      }
      <ImgMarkupCanvas imgSrc={src} imgStyles={{ height: 400 }} {...bind} />
      <div style={{ marginTop: 10 }} ref={imgMarkupModifiers} >
        <label htmlFor="type">Type:</label>
        <select name='type' value={activeType} onChange={(e) => setActiveType(e.target.value)}>
          <option value='line'>line</option>
          <option value='arrow'>arrow</option>
          <option value='rect'>rect</option>
          <option value='ellipse'>ellipse</option>
          <option value='text'>text</option>
        </select>

        <label htmlFor="color">Color:</label>
        <select name='color' value={activeColor} onChange={(e) => setActiveColor(e.target.value)}>
          <option value='red'>red</option>
          <option value='green'>green</option>
          <option value='#0af'>blue</option>
          <option value='orange'>orange</option>
        </select>

        <label htmlFor='stroke-width'>width</label>
        <input name='stroke-width' type='number' value={activeStrokeWidth} onChange={e => setActiveStrokeWidth(e.target.value)} />

        <label htmlFor='font-size'>font size</label>
        <input name='font-size' type='number' value={activeFontSize} onChange={e => setActiveFontSize(e.target.value)} />


        <button onClick={save}>save</button>
        <button onClick={undo}>undo</button>
        {
          activePathId
            ? <button onClick={() => deletePath(activePathId)}>delete</button>
            : null
        }
      </div>
    </div>
  )
}

export default HookExample;
