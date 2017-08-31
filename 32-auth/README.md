![cf](http://i.imgur.com/7v5ASc8.png) 32: Authentication and Authorization
===

## Learning Objectives
* students will be able to manage basic and bearer auth on the client side
* students will learn to manage cookies on the client side

## Readings
* read [cookies](https://www.quirksmode.org/js/cookies.html)
* read [http cookie wiki](https://en.wikipedia.org/wiki/HTTP_cookie)

## Cookies
* cookies are key/value pairs that can store text
* they are meant to be a reliable place to store stateful information on the browser
* cookies provide us with more control over this state by allowing us with the option to provide an expiration date
  * the browser will automatically expire the cookie at the defined time

## Webpack Constants
  * **Overview**
    * constants are configured in our `webpack.config.js` file and can be used throughout our application
    * they are useful for information that we should keep unexposed to the user, such as an secret key or staging/production logging

  * **Example**
  ``` javascript
  let plugins = [
    new ExtractTextPlugin('bundle.css'),
    new HTMLPlugin({
      template: `${__dirname}/app/index.html`
    }),
    new webpack.DefinePlugin({
      // __API_URL__ is a webpack constant that is used to point our client at the right API, depending on the environment
      __API_URL__: JSON.stringify(process.env.API_URL),
    }),
  ];
  ```
