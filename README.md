# React Img Markup

React pattern based library for creating markup on images.

![Alt Text](./img-markup.gif)

## Installation & Usage

Install package:

```
npm i react-img-markup
```
or 
```
yarn add react-img-markup
```
&#13;&nbsp;
&#13;&nbsp;
*Note: `react-img-markup` supports a hooks API and a render-props model API. Scroll futher down the page if you're looking for the render-props documentation.

&#13;&nbsp;
### Hook API
New to react-img-markup version 2, hooks api allow for a more easily controllable pattern that does not rely on component nesting.

Import `useImgMarkup` hook and `ImgMarkupCanvas` component from library:

```
import { useImgMarkup, ImgMarkupCanvas } from 'react-img-markup';
```

&#13;&nbsp;
Call the `useImgMarkup` hook to initialize the logic for your image annotations, destructure `bind` from the return value of the hook.
```
const { bind } = useImgMarkup()
```

&#13;&nbsp;
Insert component `ImgMarkupCanvas` into your React JSX and insert `bind` using spread operator syntax. This will assign the hook logic to the correct instance of `ImgMarkupCanvas`.
```
<ImgMarkupCanvas {...bind} />
```

&#13;&nbsp;
Now pass the image src directly to `ImgMarkupCanvas` via `imgSrc` prop.
```
<ImgMarkupCanvas imgSrc={src} {...bind} />
```
&#13;&nbsp;
Voila! Your image markup should now work with the default settings, though there is a lot more you can customize! Next we will show how the `useImgMarkup` hook allows us to use state values and setters to set different configurations for annotation- in this example, changing the active color.

&#13;&nbsp;
Destructure `activeColor` and `setActiveColor` from the `useImgMarkup` hook.
```
const {
  bind,
  activeColor,
  setActiveColor,
} = useImgMarkup()
```

&#13;&nbsp;
You can now use these destructured properties from `useImgMarkup` to control image markup colors via a standard React state-controlled pattern.
```
<>
  <ImgMarkupCanvas imgSrc={src} {...bind} />
  <select
    value={activeColor}
    onChange={(e) => setActiveColor(e.target.value)}
  >
    <option value='red'>red</option>
    <option value='green'>green</option>
    <option value='#0af'>blue</option>
    <option value='orange'>orange</option>
  </select>
</>
```

&#13;&nbsp;
That's the basics! I will give a full and detailed list of the rest of the features react-img-markup supports below. More in-depth examples will be provided in this project's repository.

&#13;&nbsp;
&#13;&nbsp;
#### `useImgMarkup` hook arguments
- `onSave` (func, optional) - callback invoked when image is saved. Will pass the uri as parameter: `(uri) => {}`.
- `onImgLoad` (func, optional) - callback invoked when image has loaded: `() => {}`.
- `encoderType` (string, optional) - determines the format the file will be saved as. default is `"jpg"` but also accepts `"png"`.
- `encoderOptions` (number, optional) - A number between `0` and `1` indicating image quality on save. The default is `0.8`.
- `defaultValues` (obj, optional) - pass options to give `ImgMarkup` default state values when component mounts.
  - `type` (string) - value for markup type. Includes: `"rect"`, `"ellipsis"`, `"line"`, `"arrow"`, and `"text"`. Default: `"rect"`.
  - `color` (string) - value for markup color. Can be any CSS color name, hex, or rgba. Default: `"red"`
  - `strokeWidth` (number) - value for markup stroke width. Accepts any numerical value. Default: `2`
  - `fontSize` (number) - value for markup font size. Accepts any numerical value. Default: `20`
  - `text` (string) - value for default text shown to user when text element is first created. Default: `""`

&#13;&nbsp;
&#13;&nbsp;
#### `useImgMarkup` hook return values
- `activeType` (string) - state. The active markup type. Returned values can be: `"rect"`, `"ellipsis"`, `"line"`, `"arrow"`, and `"text"`.
- `activeColor` (string) - state. The markup active color state.
- `activeStrokeWidth` (number) - state. The markup active stroke width.
- `activeFontSize` (number) - state. The markup active stroke font size.
- `setActiveType` (func) - sets the `activeType` state. State settable options are: `"rect"`, `"ellipsis"`, `"line"`, `"arrow"`, and `"text"`.
- `setActiveColor` (func) - sets the `activeColor` state. Accepts string values.
- `setActiveStrokeWidth` (func) - sets the `activeStrokeWidth` state. Accepts number values.
- `setActiveFontSize` (func) - sets the `activeFontSize` state. Accepts number values.
- `undo` (func) - will undo the last markup element the user created.
- `deletePath` (func) - pass a path id to delete desired path: `deletePath(id)`.
- `save` (func) - saves the image with the markup. Will pass the uri to `onSave` when this function is called. Will also return uri if asynchronously await the call.
- `activePathId` (string) - state. The id of `activePath`. Will be assigned `null` if no paths are active.
- `imgMarkupModifiers` (obj) - react `ref`. Assign this `ref` to an element that wraps your modification elements to not lose the selected state when changing shape/text settings.

&#13;&nbsp;
&#13;&nbsp;
#### `ImgMarkupCanvas` props
- `imgSrc` (string, required) - the src of the image you would like to add markup to.
- `imgStyles` (obj, optional) - styles passed to the image element.


&#13;&nbsp;
&#13;&nbsp;
&#13;&nbsp;
### Render-props API
This pattern replicates the original render-props API structure of `react-img-markup` v1. If you're looking to upgrade to v2 and want to make as few changes as possible, this is the way.

Import `ImgMarkupRenderProp` component from library.

```
import { ImgMarkupRenderProp } from 'react-img-markup';
```

&#13;&nbsp;
Insert the `ImgMarkupRenderProp` component inside your JSX, passing your image src to the prop `imgSrc`.
```
<ImgMarkupRenderProp imgSrc={src} />
```

&#13;&nbsp;
By passing a function as a child of `ImgMarkupRenderProp`, you get access to properties of `ImgMarkupRenderProp` via the child's callback function parameters. In this case, our active color state value and setter.

```
<ImgMarkupRenderProp imgSrc={src}>
  {({ activeColor, setActiveColor }) => (
    <select value={activeColor} onChange={(e) => setActiveColor(e.target.value)}>
      <option value='red'>red</option>
      <option value='green'>green</option>
      <option value='blue'>blue</option>
      <option value='orange'>orange</option>
    </select>
  )}
</ImgMarkupRenderProp>
```

&#13;&nbsp;
&#13;&nbsp;
#### `ImgMarkupRenderProp` props

- `imgSrc` (string, required) - the src of the image you would like to add markup to.
- `imgStyles` (obj, optional) - styles passed to the image.
- `onSave` (func, optional) - callback invoked when image is saved. Will pass the uri as parameter: `(uri) => {}`.
- `onImgLoad` (func, optional) - callback invoked when image has loaded: `() => {}`.
- `encoderType` (string, optional) - determines the format the file will be saved as. default is `"jpg"` but also accepts `"png"`.
- `encoderOptions` (number, optional) - A number between `0` and `1` indicating image quality on save. The default is `0.8`.
- `defaultValues` (obj, optional) - pass options to give `ImgMarkup` default state values when component mounts.
  - `type` (string) - value for markup type. Includes: `"rect"`, `"ellipsis"`, `"line"`, `"arrow"`, and `"text"`. Default: `"rect"`
  - `color` (string) - value for markup color. Can be any CSS color name, hex, or rgba. Default: `"red"`
  - `strokeWidth` (number) - value for markup stroke width. Accepts any numerical value. Default: `2`
  - `fontSize` (number) - value for markup font size. Accepts any numerical value. Default: `20`
  - `text` (string) - value for default text shown to user when text element is first created. Default: `""`

&#13;&nbsp;
&#13;&nbsp;
#### `ImgMarkupRenderProp` render prop parameter values

- `activeType` (string) - state. The active markup type. Returned values can be: `"rect"`, `"ellipsis"`, `"line"`, `"arrow"`, and `"text"`.
- `activeColor` (string) - state. The markup active color state.
- `activeStrokeWidth` (number) - state. The markup active stroke width.
- `activeFontSize` (number) - state. The markup active stroke font size.
- `setActiveType` (func) - sets the `activeType` state. State settable options are: `"rect"`, `"ellipsis"`, `"line"`, `"arrow"`, and `"text"`.
- `setActiveColor` (func) - sets the `activeColor` state. Accepts string values.
- `setActiveStrokeWidth` (func) - sets the `activeStrokeWidth` state. Accepts number values.
- `setActiveFontSize` (func) - sets the `activeFontSize` state. Accepts number values.
- `undo` (func) - will undo the last markup element the user created.
- `deletePath` (func) - pass a path id to delete desired path: `deletePath(id)`.
- `save` (func) - saves the image with the markup. Will pass the uri to `onSave` when this function is called. Will also return uri if asynchronously await the call.
- `activePathId` (string) - state. The id of `activePath`. Will be assigned `null`` if no paths are active.
- `imgMarkupModifiers` (obj) - react `ref`. Assign this `ref` to an element that wraps your modification elements to not lose the selected state when changing shape/text settings.

&#13;&nbsp;
&#13;&nbsp;
&#13;&nbsp;
#### Contributions appreciated!

```
git clone
npm i --legacy-peer-deps
npm run start
```

&#13;&nbsp;
This library was built using [react-npm-package-boilerplate](https://github.com/flexdinesh/react-npm-package-boilerplate) as a boilerplate.
