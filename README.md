# React Img Markdown

Library for creating markdown on images

![Alt Text](./img-markdown.gif)

## How to use

install package:
```
npm i react-img-markdown
```

&nbsp;
import ImgMarkdown component:
```
import ImgMarkdown from 'react-img-markdown'
```

&nbsp;
pass imgSrc prop to ImgMarkdown, use children as render-props:
```
<ImgMarkdown imgSrc='https://i.imgur.com/rbXZcVH.jpeg'>
  {({ activeColor, setActiveColor }) => (
    <>
      <label htmlFor="color">Color:</label>
      <select name='color' value={activeColor} onChange={(e) => setActiveColor(e.target.value)}>
        <option value='red'>red</option>
        <option value='green'>green</option>
        <option value='blue'>blue</option>
        <option value='orange'>orange</option>
      </select>
    </>
  )}
</ImgMarkdown>
```

## ImgMarkdown props
- `imgSrc` (string, required) - the src of the image you would like to add markdown to.
- `imgStyles` (obj, optional) - styles passed to the image
- `onSave` (func, optional) - callback invoked when img saved. Will pass the uri as param: `(uri) => {}`
- `defaultValues` (obj, optional) - pass options to give ImgMarkdown default state values when component mounts.
  - `type` (string) - value for markdown type. includes: 'rect', 'ellipsis', 'line', 'arrow', 'text'.
  - `color` (string) - value for markdown color. can be any css-colorname, hex, rgba
  - `strokeWidth` (number) - value for markdown stroke width. accepts any numerical value.
  - `fontSize` (number) - value for markdown font size. accepts any numerical value.


## ImgMarkdown render prop values
- `activeType` (string) - state. the active markdown type. options are: 'rect', 'ellipsis', 'line', 'arrow', 'text'.
- `activeColor` (string) - state. The markdown active color state.
- `activeStrokeWidth` (number) - state. the markdown active stroke width.
- `activeFontSize` (number) - state. the markdown active stroke font size.
- `setActiveType` (func) - sets state. will set the `activeType` state. options are: 'rect', 'ellipsis', 'line', 'arrow', 'text'.
- `setActiveColor` (func) - sets state. Will set `activeColor` state. accepts string vals.
- `setActiveStrokeWidth` (func) - sets state. Will set `activeStrokeWidth` state. accepts number vals.
- `setActiveFontSize` (func) - sets state. Will set `activeFontSize` state. accepts number vals.
- `undo` (func) - will undo the last markdown element the user created.
- `deletePath` (func) - pass a path id to delete desired path: `deletePath(id)`
- `save` (func) - saves the image with the markdown. will pass the uri to onSave when this function is called.
- `activePathId` (string) - state. the activePath's id.


### contributions appreciated!
```
git clone
npm i
npm run start
```
:)

&nbsp;
this library was kick-started using [react-npm-package-boilerplate](https://github.com/flexdinesh/react-npm-package-boilerplate)
