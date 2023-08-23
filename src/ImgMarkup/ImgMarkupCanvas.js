import React from 'react'
import SelectionBox from './SelectionBox'
import PropTypes from 'prop-types'

function ImgMarkupCanvas({
  imgSrc,
  imgStyles,

  svgRef,
  imgRef,

  paths,
  activityState,
  activePathId,

  handleMouseDown,
  handleMouseUp,
  handleTextMouseDown,
  handleTextMouseUp,
  handleEditText,

  x,
  y,
  adjustNW,
  adjustNE,
  adjustSE,
  adjustSW,
  adjustN,
  adjustE,
  adjustS,
  adjustW,
  adjustX1Y1,
  adjustX2Y2,
  moveSelection,
}) {
  return (
    <>
      <svg
        id='svg-board'
        ref={svgRef}
        style={{
          display: 'flex',
          height: imgRef?.current?.getBoundingClientRect?.()?.height,
          width: imgRef?.current?.getBoundingClientRect?.()?.width,
          cursor: activityState === 'create' ? 'crosshair' : 'auto'
        }}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      >
        <image ref={imgRef} xlinkHref={imgSrc} style={{ ...imgStyles }} />
        {Object.keys(paths).map((pathId) => {
          const path = paths[pathId]

          let pathElement


          if (path?.type === 'ellipse') {
            const avgX = (path.x2 + path.x1)/2
            const avgY = (path.y2 + path.y1)/2
  
            const width = Math.abs(path.x2 - path.x1)
            const height = Math.abs(path.y2 - path.y1)
  
            pathElement = (
              <React.Fragment key={pathId}>
                <ellipse cx={`${avgX}`} cy={`${avgY}`} rx={width - (width/2)} ry={height - (height/2)} key={pathId} name={pathId} fill='transparent' stroke={path.color} strokeWidth={`${path.strokeWidth}px`} style={{ cursor: activityState === 'create' ? 'pointer' : 'auto' }} />
              </React.Fragment>
            )
          }

          if (path?.type === 'rect') {
            const left = path.x1 < path.x2 ? path.x1 : path.x2
            const top = path.y1 < path.y2 ? path.y1 : path.y2
  
            const width = Math.abs(path.x2 - path.x1)
            const height = Math.abs(path.y2 - path.y1)
  
            pathElement = (
              <React.Fragment key={pathId}>
                <rect x={left} y={top} width={width} height={height} key={pathId} name={pathId} fill='transparent' stroke={path.color} strokeWidth={`${path.strokeWidth}px`} style={{ cursor: activityState === 'create' ? 'pointer' : 'auto' }} />
              </React.Fragment>
            )
          }

          if (path?.type === 'line') {
            pathElement = (
              <React.Fragment key={pathId}>
                <line x1={path.x1} y1={path.y1} x2={path.x2} y2={path.y2} key={pathId} name={pathId} fill='transparent' stroke={path.color} strokeWidth={`${path.strokeWidth}px`} style={{ cursor: activityState === 'create' ? 'pointer' : 'auto' }} />
              </React.Fragment>
            )
          }

          if (path.type === 'arrow') {
            pathElement = (
              <React.Fragment key={`${pathId}_arrow`}>
                <marker id={`${pathId}_arrowhead_marker`} markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill={path.color} x={path.x1} />
                </marker>
                <line x1={path.x1} y1={path.y1} x2={path.x2} y2={path.y2} key={pathId} name={pathId} fill='transparent' stroke={path.color} strokeWidth={`${path.strokeWidth}px`} style={{ cursor: activityState === 'create' ? 'pointer' : 'auto' }} markerEnd={`url(#${pathId}_arrowhead_marker)`} />
              </React.Fragment>
            )
          }

          if (path?.type === 'text') {
            pathElement = (
              <React.Fragment key={pathId}>
                <text x={path.x1} y={path.y1} fill={path.color} key={pathId} name={pathId} style={{ fontSize: path.fontSize, fontFamily: 'arial', cursor: activePathId === pathId ? 'move' : 'text' }} onMouseDown={() => handleTextMouseDown(pathId)} onMouseUp={handleTextMouseUp}>{path.textContent}</text>
              </React.Fragment>
            )
          }

          return pathElement
        })}
      </svg>
      {
        activityState === 'selected' && paths[activePathId]?.type === 'text'
          ? (
            <textarea
              className='annotations-textarea'
              style={{ position: 'fixed', left: paths[activePathId].pageX1, top: paths[activePathId].pageY1 + 20 }}
              value={paths[activePathId].textContent}
              onChange={handleEditText}
            />
          )
          : null
      }
      {
        activityState === 'selected'
          ? (
            <SelectionBox
              activePath={paths[activePathId]}
              x={x}
              y={y}
              adjustNW={adjustNW}
              adjustNE={adjustNE}
              adjustSE={adjustSE}
              adjustSW={adjustSW}
              adjustN={adjustN}
              adjustE={adjustE}
              adjustS={adjustS}
              adjustW={adjustW}
              adjustX1Y1={adjustX1Y1}
              adjustX2Y2={adjustX2Y2}
              move={moveSelection}
              hideHandles={paths[activePathId]?.type === 'text'}
            />
          )
          : null
      }
    </>
  )
}

ImgMarkupCanvas.propTypes = {
  imgSrc: PropTypes.string,
  imgStyles: PropTypes.object,

  svgRef: PropTypes.oneOfType([
    PropTypes.func, 
    PropTypes.shape({ current: PropTypes.object })
  ]).isRequired,
  imgRef: PropTypes.oneOfType([
    PropTypes.func, 
    PropTypes.shape({ current: PropTypes.object })
  ]).isRequired,

  paths: PropTypes.shape({ pathOrder: PropTypes.array }).isRequired,
  activityState: PropTypes.string.isRequired,
  activePathId: PropTypes.string,

  handleMouseDown: PropTypes.func.isRequired,
  handleMouseUp: PropTypes.func.isRequired,
  handleTextMouseDown: PropTypes.func.isRequired,
  handleTextMouseUp: PropTypes.func.isRequired,
  handleEditText: PropTypes.func.isRequired,


  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  adjustNW: PropTypes.func.isRequired,
  adjustNE: PropTypes.func.isRequired,
  adjustSE: PropTypes.func.isRequired,
  adjustSW: PropTypes.func.isRequired,
  adjustN: PropTypes.func.isRequired,
  adjustE: PropTypes.func.isRequired,
  adjustS: PropTypes.func.isRequired,
  adjustW: PropTypes.func.isRequired,
  adjustX1Y1: PropTypes.func.isRequired,
  adjustX2Y2: PropTypes.func.isRequired,
  moveSelection: PropTypes.func.isRequired,
}

ImgMarkupCanvas.defaultProps = {
  imgSrc: '',
  imgStyles: {},
  activePathId: null,
}

export default ImgMarkupCanvas