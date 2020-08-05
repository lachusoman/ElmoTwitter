# Elmo Twitter App

# Intro

The App is a simple React, Redux, Node.js app written using Typescript. The first step in solving the problem was identifying the nouns that make up the use case. The nouns make the domain model object that consititues the solution.

The app demonstrates a SPA/API communication which is quite a trend in the present day SAAS and other applications. SPA has the advantage that it is served via a webserver or a CDN and the downloaded javascript application runs on user browser to call the remote API. While the client machines can be of low configuration the server is usually designed to scale in accordance with the changing load.

# using app:

from within git cloned ElmoTwitter folder
git clone https://github.com/lachusoman/ElmoTwitter.git

```
$ cd ElmoTwitterServer
$ npm install
$ npm run dev
```

from within git cloned ElmoTwitter folder

```
$ cd ElmoTwitterClient
$ npm install
$ npm start
```

This should bring up the default browser in http://localhost:3000. From here one can use the website.

# Few TODOs:

- Currently the data is loaded from a static json. This will be replaced by a datastore and query operation rather than scan operation will be used for efficient querying.
- profile pictures are stored in source. This will be replaced with something like S3 or other object based storage system for e.g. which can scale as the applicable grows in its popularity.
- The application will have business services and functional services (e.g. to handle certain cross cutting concerns such as security and centralized logging).
- The endpoints will be exposed vis discovery service or other service discovery patterns and not hardcoded inside code since they are likely to change or dynamic ina scalable cloud infrastructure.

# Generally Approach:

If the application could be alloted a few more than two hours I would:

- start off with unit testcases and failing tests, then working on to fix them (TDD/BDD). Assertions to ensure the expected value matches actual values; mocking, stub, spy to test activities such as remote operations (like db calls) or to check the parameters used to call an operation etc. Tools such as chai, mocha, sinon, jest or supertest enable this. One of my previous projects maintained an 85% coverage check in the CI/D pipeline.

- CI/CD is particularly important in a microservice ecosystem. It ensures that any code merged into the master goes through the process of unit testing, build/archive and deployment, integ testing, load testing (if applicable) before being promoted to production environments. Tools such as Bamboo enable this. Now a days even the source code repositories such as Github and Gitlab support CI/CD.

* Many design principles such as SOLID and others have been used here. to name a few:
  Single Responsibility Principle (SRP)
  Interface Segregation Principle(ISP)
  Common Closure Principle(CCP)
  Don't Repeat Yourself (DRY)
  Keep it simple, Stupid (KISS)
