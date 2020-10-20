# React Img Markdown

Library for creating markdown on images

![Alt Text](./img-markdown.gif)

## How to use

Install package:

```
npm i react-img-markdown
```

&nbsp;
Import ImgMarkdown component:

```
import ImgMarkdown from 'react-img-markdown'
```

&nbsp;
Pass imgSrc prop to ImgMarkdown, use children as render-props:

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
- `imgStyles` (obj, optional) - styles passed to the image.
- `onSave` (func, optional) - callback invoked when image is saved. Will pass the uri as parameter: `(uri) => {}`.
- `defaultValues` (obj, optional) - pass options to give `ImgMarkdown` default state values when component mounts.
  - `type` (string) - value for markdown type. Includes: `rect`, `ellipsis`, `line`, `arrow`, and `text`.
  - `color` (string) - value for markdown color. Can be any CSS color name, hex, or rgba.
  - `strokeWidth` (number) - value for markdown stroke width. Accepts any numerical value.
  - `fontSize` (number) - value for markdown font size. Accepts any numerical value.

## ImgMarkdown render prop values

- `activeType` (string) - state. The active markdown type. Options are: `rect`, `ellipsis`, `line`, `arrow`, and `text`.
- `activeColor` (string) - state. The markdown active color state.
- `activeStrokeWidth` (number) - state. The markdown active stroke width.
- `activeFontSize` (number) - state. The markdown active stroke font size.
- `setActiveType` (func) - sets state. will set the `activeType` state. Options are: `rect`, `ellipsis`, `line`, `arrow`, and `text`.
- `setActiveColor` (func) - sets state. Will set `activeColor` state. Accepts string values.
- `setActiveStrokeWidth` (func) - sets state. Will set `activeStrokeWidth` state. Accepts number values.
- `setActiveFontSize` (func) - sets state. Will set `activeFontSize` state. Accepts number values.
- `undo` (func) - will undo the last markdown element the user created.
- `deletePath` (func) - pass a path id to delete desired path: `deletePath(id)`.
- `save` (func) - saves the image with the markdown. Will pass the uri to `onSave` when this function is called.
- `activePathId` (string) - state. The id of `activePath`.

### Contributions appreciated!

```
git clone
npm i
npm run start
```

:)

&nbsp;
This library was kick-started using [react-npm-package-boilerplate](https://github.com/flexdinesh/react-npm-package-boilerplate).
