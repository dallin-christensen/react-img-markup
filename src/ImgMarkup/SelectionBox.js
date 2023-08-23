import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const handleStyles = {
  width: 10,
  height: 10,
  backgroundColor: 'white',
  border: '1px solid black',
  zIndex: 6,
  position: 'absolute',
}


const SelectionBox = ({
  activePath,
  x,
  y,
  adjustNW,
  adjustNE,
  adjustSW,
  adjustSE,
  adjustN,
  adjustE,
  adjustS,
  adjustW,
  adjustX1Y1,
  adjustX2Y2,
  move,
  hideHandles,
}) => {

  const [isDragging, setIsDragging] = useState('')
  const [dragRelationaryPositions, setDragRelationaryPositions] = useState({
    x1: 0,
    y1: 0,
    x2: 0,
    y2: 0,
  })

  useEffect(() => {
    switch (isDragging) {
      case 'annotation-nw':
        adjustNW()
        break

      case 'annotation-ne':
        adjustNE()
        break

      case 'annotation-sw':
        adjustSW()
        break

      case 'annotation-se':
        adjustSE()
        break

      case 'annotation-n':
        adjustN()
        break

      case 'annotation-e':
        adjustE()
        break

      case 'annotation-s':
        adjustS()
        break

      case 'annotation-w':
        adjustW()
        break

      case 'annotation-x1-y1':
        adjustX1Y1()
        break

      case 'annotation-x2-y2':
        adjustX2Y2()
        break

      case 'selection-box':
        move(dragRelationaryPositions)
        break
    
      default:
        break
    }
  }, [x, y, isDragging])

  useEffect(() => {
    window.addEventListener('mouseup', handleMouseUp)

    return () => window.removeEventListener('mouseup', handleMouseUp)
  }, [])


  if (!activePath) return null


  const leftX = activePath.pageX1 < activePath.pageX2 ? activePath.pageX1 : activePath.pageX2
  const rightX = activePath.pageX1 > activePath.pageX2 ? activePath.pageX1 : activePath.pageX2

  const topY = activePath.pageY1 < activePath.pageY2 ? activePath.pageY1 : activePath.pageY2
  const bottomY = activePath.pageY1 > activePath.pageY2 ? activePath.pageY1 : activePath.pageY2


  const calculateDragRelationaryPositions = () => {
    const relationaryPos = {
      x1: activePath.x1 - x,
      y1: activePath.y1 - y,
      x2: activePath.x2 - x,
      y2: activePath.y2 - y,
    }
    setDragRelationaryPositions(relationaryPos)
  }

  const handleMouseDown = (e) => {
    calculateDragRelationaryPositions()
    setIsDragging(e.target.id)
  }

  const handleMouseUp = () => {
    setIsDragging('')
  }

  const isLineType = activePath?.type === 'line' || activePath?.type === 'arrow'


  return (
    <>
      <div
        id='selection-box'
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        style={{
          position: 'fixed',
          left: leftX,
          top: topY,
          width: rightX - leftX,
          height: bottomY - topY,
          zIndex: 5,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'move',
        }}
      >
        {
          !hideHandles && !isLineType
            ? (
              <>
                <div id='annotation-nw' className='resize-handle' style={{ ...handleStyles, top: '-5px', left: '-5px', cursor: 'nwse-resize' }} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} />
                <div id='annotation-n' className='resize-handle' style={{ ...handleStyles, top: '-5px', cursor: 'ns-resize' }} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} />
                <div id='annotation-ne' className='resize-handle' style={{ ...handleStyles, top: '-5px', right: '-5px', cursor: 'nesw-resize' }} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} />
        
                <div id='annotation-w' className='resize-handle' style={{ ...handleStyles, left: '-5px', cursor: 'ew-resize' }} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} />
                <div id='annotation-e' className='resize-handle' style={{ ...handleStyles, right: '-5px', cursor: 'ew-resize' }} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} />
        
                <div id='annotation-sw' className='resize-handle' style={{ ...handleStyles, bottom: '-5px', left: '-5px', cursor: 'nesw-resize' }} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} />
                <div id='annotation-s' className='resize-handle' style={{ ...handleStyles, bottom: '-5px', cursor: 'ns-resize' }} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} />
                <div id='annotation-se' className='resize-handle' style={{ ...handleStyles, bottom: '-5px', right: '-5px', cursor: 'nwse-resize' }} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} />
              </>
            )
            : null
        }
      </div>
      {
        !hideHandles && isLineType
          ? (
            <>
              <div
                id={'annotation-x1-y1'}
                className='resize-handle'
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                style={{
                  ...handleStyles,
                  top: activePath.pageY1 - 6,
                  left: activePath.pageX1 - 6,
                  cursor: 'move',
                  position: 'fixed'
                }}
              />
              <div
                id={'annotation-x2-y2'}
                className='resize-handle'
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                style={{
                  ...handleStyles,
                  top: activePath.pageY2 - 6,
                  left: activePath.pageX2 - 6,
                  cursor: 'move',
                  position: 'fixed'
                }}
              />
            </>
          )
          : null
      }
    </>
  )
}

SelectionBox.propTypes = {
  activePath: PropTypes.object.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  adjustNW: PropTypes.func.isRequired,
  adjustNE: PropTypes.func.isRequired,
  adjustSW: PropTypes.func.isRequired,
  adjustSE: PropTypes.func.isRequired,
  adjustN: PropTypes.func.isRequired,
  adjustE: PropTypes.func.isRequired,
  adjustS: PropTypes.func.isRequired,
  adjustW: PropTypes.func.isRequired,
  adjustX1Y1: PropTypes.func.isRequired,
  adjustX2Y2: PropTypes.func.isRequired,
  move: PropTypes.func.isRequired,
  hideHandles: PropTypes.bool,
}

SelectionBox.defaultProps = {
  hideHandles: false,
}

export default SelectionBox