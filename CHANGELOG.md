# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## 1.0.2
### Added
- save function will now asynchronously return an object with the uri as a property inside.

## 1.0.1
### Added
- added `imgMarkupModifiers` as a param coming from the children render prop function. Assign this value to a ref that wraps your state modifiers to prevent losing "active" state when modifying shape/text elements.
- can now support default text user sees when first creates text element on image. Pass ImgMarkup `defaultValues` prop that has `text` as a property on the object passed.

