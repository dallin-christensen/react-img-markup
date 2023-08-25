# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## 2.0.0
### Added
- Updated library to use a modern react hook api pattern.

## 1.1.0
### Changed
- Updated package dependencies.
### Fixed
- Fixed NPM vulnerabilities.

## 1.0.10
### Fixed
- Arrow heads will no longer be a different color from their body when user changes fill color.

## 1.0.9
### Added
- encoderOptions prop allows a number between `0` and `1` indicating image quality on save. The default is `0.8`.

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

