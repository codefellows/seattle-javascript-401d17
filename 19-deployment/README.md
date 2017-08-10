![cf](http://i.imgur.com/7v5ASc8.png) 19: Production Deplyoment
===

## Resources
* read [multer docs](https://github.com/expressjs/multer)
* create [AWS account](https://aws.amazon.com/)

## Learning Objectives
* students will be able to deploy their application on Heroku
* students will be able to create staging and production pipelines
* students will be able to configure TravisCI to run their tests on all pushes to GitHub
* students will be able to configure Coveralls to check their code coverage rate
* students will be able to identify common issues during the deployment process

## Overview
#### TravisCI
* create and configure a `.travis.yml` file that will be used to tell TravisCI to run your npm `test` and `lint` scripts
* example `.travis.yml`

``` javascript
  language: node_js
  node_js:
    - 'stable'
  services:
    - mongodb
  addons:
    apt:
      sources:
        - ubuntu-toolchain-r-test
      packages:
        - gcc-4.8
        - g++-4.8
  env:
    - CXX=g++-4.8
  sudo: required
  before_script: npm i
  script:
    - npm test
    - npm run lint
```

#### Heroku Deployment
- enable your repository to work with TravisCI
  - *note: you may have to sync your account for TravisCI to show the repo as an option*
- add your environment variables to TravisCI by clicking on the **Settings** option in the **More options** dropdown
- log into the Heroku dashboard
- create a new app
- create a staging app *(ex: cfgram-staging)*
- click on the **Resources** tab
- in the **Add-ons** section, type *mongo* and choose the mLab option and associated free price plan
  - *note: you will need to provide a credit card with Heroku to do this - even with the free option*
- click on the **Settings** tab
- click on the **Reveal Config Vars** button and add your environment variables
  - *note: you do not need to add the MONGODB_URI variable as this was added by Heroku when you provisioned the DB - there's also no need to add a PORT, Heroku will handle this for you*
- click on the **Deploy** tab
- create a new pipeline called **staging**
- click the button to connect your application to GitHub
- in the **Automatic deploys** field, click the checkbox to **Wait for CI to pass before deploy**, choose **staging** as your deployment branch *(you'll need to already have a `staging` branch pushed to GitHub)* and click the button to **Enable Automatic Deploys**
- **repeat** the following steps to create a production pipeline
  - *note: be sure to name the application "myapp-production", add it to a production pipeline, and enable automatic deploys to deploy to your `master` branch*
