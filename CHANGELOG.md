# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## 1.0.8
### Added
- encoderType prop allows user to specify the file type on save, options for both jpg and png.

## 1.0.7
### Added
- save function will now asynchronously return an object with the uri as a property inside.
### Fixed
- reletive positioned containers will now not throw off handle position.
- bug that made app crash unless passing default text value was passed has now been fixed.

## 1.0.1
### Added
- added `imgMarkupModifiers` as a param coming from the children render prop function. Assign this value to a ref that wraps your state modifiers to prevent losing "active" state when modifying shape/text elements.
- can now support default text user sees when first creates text element on image. Pass ImgMarkup `defaultValues` prop that has `text` as a property on the object passed.

