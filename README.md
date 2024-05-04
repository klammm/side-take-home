# Getting Started

- Please read [INSTRUCTIONS.md](https://github.com/reside-eng/take-home-assignment-nextjs-simplyrets/blob/main/INSTRUCTIONS.md)
- For any questions about Next.js, please visit [https://nextjs.org/docs](https://nextjs.org/docs)

# Code and Design Decisions

Kevin Lam -- Side take home assessment 

## Design decisions

#### React Context for listings page state

`providers/coordinates-provider.tsx`

I chose to use [React Context](https://react.dev/reference/react/createContext) in this case because I wanted to have coordinates data available anywhere throughout the listings page. It was to ensure that if coordinates changed when moving the map view, the property listings would re-render with new listings based on the coordinates. 

I could have just done a `useState` on the parent, but I wanted to use React Context in case there was a need for a future feature that wanted to make use of global state.

#### Styled Components for CSS

I chose to use styled components for CSS styling. I like to abstract the CSS logic away from the JSX logic for easier readability. 

#### Favorites 

I chose to use a [Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set) as my data structure to keep track of favorites because I knew that I needed to handle unique data. I heard about it recentlly from a friend and I thought it would be neat to try it out here and it totally works.

## If I had more time

####  Property Listings data based on coordinates

For some reason, I wasn't getting any property data when I called the Simply Rets API with points data. I was making a GET request to this URL:

`https://api.simplyrets.com/properties?points=37.7697,-122.4769`

trying with different points in the query params each time, however I kept getting 0 results every time. 

I added some comments for the fetch request in the hook `useSimplyRets`. 

#### Unit tests

Last TODO was to write more unit tests for the components. I was also getting a ReferenceError with fetch not being undefined, which is common for fetch to be not defined in Node. If I had more time, I would add the polyfill [node-fetch](https://www.npmjs.com/package/node-fetch).  