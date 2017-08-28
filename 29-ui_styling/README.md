![cf](http://i.imgur.com/7v5ASc8.png) 29: UI Styling & Component Testing
===

## Learning Objectives
* students will be able to use SCSS to create component based and modular CSS styles
* students will be able to *generally* conform to the SMACCS principles for creating base, layout, and theme containers for their application styles
* students will be able to create and use global SCSS variables for reusable styles

## Resources
* [sass getting started guide](http://sass-lang.com/guide)

## Overview
* SCSS is a variation of SASS, which stands for "syntactically awesome stylesheets"
  * SCSS gives us the ability to do the following things with our CSS styles
    * creation of modular css "partials"
    * nesting of CSS rules
    * ability to import partials into/from other partial files
    * ability to create functional CSS components and mixins
    * ability to use math operators in CSS
* SCSS partials are often modularized to fit the following structure:
  - **style**
    - **lib**
      - **base**
        - `_base.scss`
        - `_reset.scss`
      - **theme**
        - `_vars.scss`
      - **layout**
        - `_header.scss`
        - `_footer.scss`
        - `_content.scss`
  - **component**
    - **my-component-dir**
      - `_my-component-dir.scss`
    - **another-component-dir**
      - `_another-component-dir.scss`

## Testing (components)
###### enzyme
* **enzyme** is a utility designed to ease the **testing of react components**
* it has a jQuery like api that helps interacting with components and provides several methods for compiling/rendering
* `shallow(<Component />)` - shallow rendering is useful to test a component without indirectly asserting behavior of child components
* `render(<Component />)` - static rendering is used to render components to static html (text) and analyze the resulting HTML structure
* `mount(<Component />)` - full rendering is ideal when your components interact with DOM APIs
