import React, { useState } from 'react'
import HookExample from './HookExample'
import RenderPropExample from './RenderPropExample'

const PATTERN_OPTIONS = {
  HOOK: 'hook',
  RENDER_PROPS: 'render-props',
}

const GLOBAL_STYLES = {
  fontFamily: 'Arial',
  margin: '40px 60px'
}

function Example() {
  const [enabledRenderProp, setEnabledRenderProp] = useState(PATTERN_OPTIONS.HOOK)

  return (
    <div style={GLOBAL_STYLES}>
      <label htmlFor="method">Active Pattern:</label>
      <select name='method' value={enabledRenderProp} onChange={(e) => setEnabledRenderProp(e.target.value)}>
        <option value={PATTERN_OPTIONS.HOOK}>hook</option>
        <option value={PATTERN_OPTIONS.RENDER_PROPS}>render props</option>
      </select>
      <p style={{ margin: 0 }}>* we support both a hook and a render-props based api patterns</p>

      {
        enabledRenderProp === PATTERN_OPTIONS.RENDER_PROPS
          ? <RenderPropExample />
          : <HookExample />
      }      
    </div>
  )
}

export default Example