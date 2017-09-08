![cf](http://i.imgur.com/7v5ASc8.png) 36: Google OAuth
====

## Learning Objectives
* students will be able to add Google OAuth to a MERN stack application

## Resources
* skim [OAuth wiki](https://en.wikipedia.org/wiki/OAuth)
* read [OAuth2 simplified](https://aaronparecki.com/oauth-2-simplified/)
* skim [Google OAuth2 Docs](https://developers.google.com/identity/protocols/OAuth2)
* skim [Google OAuth Server Side](https://developers.google.com/identity/protocols/OAuth2WebServer)
* skim [Google Openid Docs](https://developers.google.com/identity/protocols/OpenIDConnect)

## Overview
#### OAUTH2.0
* OAuth is an open standard for access delegation
* it serves as a way to give users the ability to grant application access to services, without giving the applications their respective password

##### Access Code
* first the client needs to grant the application permission
* to do this you need to give an anchor tag that will take them to the related service's authorization page
* the anchor tag should pass the following information through a query string to the authorization server
  * `response_type=code` indicates that your server wants to receive an authorization code
  * `client_id=<your client id>` tells the authorization server which app the user is granting access to
  * `redirect_uri=<your redirect uri>` tells the auth server which server endpoint to redirect to
  * `scope=<list of scopes>` tells the auth server what you want the user to give access to
  * `state=<anything you want>` a place where you can store info to pass to your server if you want

##### Access Token
* if the user grants access to the application, the auth server will redirect to your redirect URI callback with a code
* once you have a code you can exchange it for an access token by making a POST request to the authorization server and providing the following information
  * `grant_type=authorization_code`
  * `code=<the code your recieved`
  * `redirect_uri=REDIRECT_URI` must be same as the redirect URI your client provided
  * `client_id=<your client id>` tells the auth server which application is making the requests
  * `client_secret=<your client secret>` authenticates that the application making the request is the application registered with the `client_id`
* once you get an Access Token, you can use it to make API calls to the service on behalf of that user
