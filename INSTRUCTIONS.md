# Introduction

Hi there 👋,

Thanks for taking the time to complete this brief take-home assignment. _Please
timebox your effort to a maximum of 3 hours._

The goal of this exercise is to evaluate your frontend skills (React, styling,
accessibility, responsive, 3rd-party integration, testing, and more). Feel free
to make any assumptions, simplifications, or other changes to the problems -
**though please state those in your write up (README.md) when you submit this
assignment**. Please use as many libraries as is reasonable, however, please
state your reasoning for such a library so we better understand your thought
process.

The objective of this assignment is to build a simple React application
implementing a property list view using data returned from the SimplyRETS API
and matching the following [Figma design
mockup](https://www.figma.com/file/ueqyfCFkBzg14SAoBUGqaN/Side-Take-Home---Nextjs-SimplyRETS).
SimplyRETS is an API commonly used in real estate and you will need to use it to
retrieve the properties data.

Before getting started, please read this document carefully.

**Good luck 🙃**

# Acceptance criteria

- Create the following page: Property Listings
  - NOTE: This page should be built with the consideration that other pages
    would eventually be added. Not looking for any over-engineering here, simply
    an understanding of how you would structure your application given that bit
    of context.
- Implement the following design:
  - A global sticky header containing the page name
  - A panel on the left that displays a map
  - A panel on the right that displays a list of the property listings available within the map area
    - Output the data from the SimplyRETS API into the list view of properties. Each
      property should at least display the following information:
      - `bedrooms`
      - `bathsFull` + `bathsHalf` (ex: 1 full + 3 half = 2.5)
      - `area` (as Sq Ft)
      - `listPrice`
      - `address`
      - `listDate` (MM/DD/YY)
      - `photo[0]`
      - Favorite state: White outlined heart if not favorited, red heart if
        favorited. _(Heart SVG assets included.)_
    - If the map area changes (zoom, move, etc), the list of property listings should update
  - Use style definitions from Figma when possible
  - Desktop and Mobile screen sizes are provided. All screen widths from 375 to
    1680 should be supported. Intermediate responsive behavior should be
    inferred.
- Get data from the SimplyRETS property endpoint on Property Listings page load
  - cache in local storage
- On the Property Listings page, the user can click the heart to save the mlsId
  associated. Store the saved/favorited properties in the browser local storage.
- Add any tests to satisfy confidence in your application. _Be sure to document
  the types of tests you choose and why_
- Styles can be handled in any manner you choose – i.e. sass, css, emotion,
  etc...
- This application is expected to be built utilizing current patterns and best
  practices of React (i.e. hooks). _Please do not use any other 3rd-party state
  management libraries such as Redux or Mobx._ `react-query` is okay.
- Explain any design decisions (_including items left out due to time
  constraints_) in the README.md file

# What you will be assessed on

- All functional requirements must be satisfied
- The application successfully builds
- The application successfully runs with no console errors or warnings
- Production-like code that must be well coded, clean, and commented
- UI must be responsive and clean
- UI should closely match the mockup.
- Intermediate screen width behavior should be reasonable.
- General understanding of semantic markup and accessibility
- Tests must be passing and meaningful
- General React knowledge

# Submission

Once you are satisfied with your assignment, please publish your code and README
to your personal Git repository and send the repository link to the email our recruiter has
provided. Please do not create a fork or PR in the assignment repository.

# Getting Started

With Node 18.17.0 installed, run the following commands:

```sh
yarn && yarn dev
```

Navigate to `http://localhost:3000/`.

## Maps

You may choose any map provider you wish, but for convenience we have bundled [@react-google-maps/api](https://www.npmjs.com/package/@react-google-maps/api).

Google Maps requires an API key. You may use `AIzaSyCqxqAPlybcdfWGj5SX5kIDG7CmLtPiR58`, which is restricted to localhost.

## What will you find inside this boilerplate

In this boilerplate, you will find:

- A standard [NextJS App](https://nextjs.org/) with some
  provided assets (favorite SVG icons & fonts)
- A `README.md` file to document your comments and design decisions
- Inside the `package.json`, in addition to NextJS dependencies, we've added the
  following packages:
  - `prettier`: simple code formating
  - `bootstrap`: styles reset baseline
  - `@react-google-maps/api`: for rendering google maps

## Design Mockup

For the mockup, use [this Figma
design](https://www.figma.com/file/ueqyfCFkBzg14SAoBUGqaN/Side-Take-Home---Nextjs-SimplyRETS).
Both desktop & mobile are included.

The favorite heart icons are already provided as SVGs in the `/public`
directory. The font used in the mockup, Open Sans, is already included in the app globally.

## SimplyRETS API

SimplyRETS is a platform for developers and agents to build real estate
applications and websites.

Their API uses Basic Authentication, which most HTTP libraries will handle for
you. To use the test data, you can use the api key `simplyrets` and secret
`simplyrets`. Note that these test listings are not live RETS listings but the
data, query parameters, and response bodies will all work the same.

Please use the following endpoint: https://api.simplyrets.com/properties. More
information can found in the [SimplyRETS
documentation](https://docs.simplyrets.com/api/index.html#/Listings/get_properties).
