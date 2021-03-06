# React Img Markup

Library for creating markup on images

![Alt Text](./img-markup.gif)

## How to use

Install package:

```
npm i react-img-markup
```

&nbsp;
Import `ImgMarkup` component:

```
import ImgMarkup from 'react-img-markup'
```

&nbsp;
Pass `imgSrc` prop to `ImgMarkup`, use children with render prop structure:

```
<ImgMarkup imgSrc='https://i.imgur.com/rbXZcVH.jpeg'>
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
</ImgMarkup>
```

&nbsp;
## ImgMarkup props

- `imgSrc` (string, required) - the src of the image you would like to add markup to.
- `imgStyles` (obj, optional) - styles passed to the image.
- `onSave` (func, optional) - callback invoked when image is saved. Will pass the uri as parameter: `(uri) => {}`.
- `encoderType` (string, optional) - determines the format the file will be saved as. default is `jpg` but also accepts `png`.
- `encoderOptions` (number, optional) - A number between `0` and `1` indicating image quality on save. The default is `0.8`.
- `defaultValues` (obj, optional) - pass options to give `ImgMarkup` default state values when component mounts.
  - `type` (string) - value for markup type. Includes: `rect`, `ellipsis`, `line`, `arrow`, and `text`.
  - `color` (string) - value for markup color. Can be any CSS color name, hex, or rgba.
  - `strokeWidth` (number) - value for markup stroke width. Accepts any numerical value.
  - `fontSize` (number) - value for markup font size. Accepts any numerical value.
  - `text` (string) - value for default text shown to user when text element is first created.

&nbsp;
## ImgMarkup render prop values

- `activeType` (string) - state. The active markup type. Options are: `rect`, `ellipsis`, `line`, `arrow`, and `text`.
- `activeColor` (string) - state. The markup active color state.
- `activeStrokeWidth` (number) - state. The markup active stroke width.
- `activeFontSize` (number) - state. The markup active stroke font size.
- `setActiveType` (func) - sets state. will set the `activeType` state. Options are: `rect`, `ellipsis`, `line`, `arrow`, and `text`.
- `setActiveColor` (func) - sets state. Will set `activeColor` state. Accepts string values.
- `setActiveStrokeWidth` (func) - sets state. Will set `activeStrokeWidth` state. Accepts number values.
- `setActiveFontSize` (func) - sets state. Will set `activeFontSize` state. Accepts number values.
- `undo` (func) - will undo the last markup element the user created.
- `deletePath` (func) - pass a path id to delete desired path: `deletePath(id)`.
- `save` (func) - saves the image with the markup. Will pass the uri to `onSave` when this function is called. Will also return uri if asynchronously await the call.
- `activePathId` (string) - state. The id of `activePath`.
- `imgMarkupModifiers` (obj) - react `ref`. Assign this `ref` to an element that wraps your modification elements to not lose the selected state when changing shape/text settings.

&nbsp;
### Contributions appreciated!

```
git clone
npm i
npm run start
```

:)

&nbsp;
This library was kick-started using [react-npm-package-boilerplate](https://github.com/flexdinesh/react-npm-package-boilerplate).
