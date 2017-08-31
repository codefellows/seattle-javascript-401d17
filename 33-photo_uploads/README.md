![cf](http://i.imgur.com/7v5ASc8.png) 33: Photo Uploads
====

## Learning Objectives
* students will be able to upload images (and other assets) on the client side
* students will be able to use the `FileReader` API to preview files

## Readings
* read [using files in web applications](https://developer.mozilla.org/en-US/docs/Using_files_from_web_applications)
* skim [fileReader.readAsDataURL docs](https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL)

## Previewing Images
* using the HTML5 `FileReader` API, browser applications can now ask users to read local files and then read the contents of those files
* `<input />` tags of a type `file` can retrieve files from the user
  * these files can then be loaded through the `FileReader`
* once a `FileReader` has loaded the contents of a file, it can then be processed as an `ArrayBuffer`, `BinaryString`, `DataURL`, or `Text`
* after a user selects a photo, it can be previewed
  * this is accomplished by loading the contents using a `FileReader` and then passing a `DataURL` into an `<img>` tag
