import useMousePosition from './useMousePosition'

const useSvgMousePosition = (svgRef) => {
  const { x, y } = useMousePosition()
  const offsetVals = svgRef?.current ? { x: svgRef?.current?.getBoundingClientRect?.()?.left, y: svgRef?.current?.getBoundingClientRect?.()?.top } : { x: 0, y: 0 }

  return { x: x - offsetVals.x, y: y - offsetVals.y, pageX: x, pageY: y }
}

export default useSvgMousePosition