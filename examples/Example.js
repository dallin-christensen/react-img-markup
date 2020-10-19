import React from 'react';

import ImgMarkup from '../src/index';


const src = "https://i.imgur.com/rbXZcVH.jpeg"

class Example extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '70vh' }}>
        <ImgMarkup imgSrc={src} imgStyles={{ height: 500 }} onSave={(uri) => console.log({ uri })}>
          {({
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
            activePathId
          }) => (
            <div style={{ marginTop: 10 }}>
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
                <option value='blue'>blue</option>
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
          )}
        </ImgMarkup>
      </div>
    );
  }
}

export default Example;
