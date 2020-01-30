# Hawk Reference App

This project contains an api for managing a hawk species reference database.
The goal of this project is for you to implement the UI screens to manage the hawk reference database.

The UI design is a single page app with two screens. Please
reference the [screen mockups](Hawk%20Reference%20UI%20Mocks.pdf) for the design.

**NOTE:** _The github pdf render is not very good, please download the PDF for proper viewing._

The `ui/` folder contains a stub of the Typescript/React/Redux based UI.

You should fork this project and implement the UI based on the design.
The UI mocks are purposefully low fidelity and should be interpreted for actual component
and view design.

Be creative and demonstrate your UI skills!

## Dependencies

To build and run the api you'll need a have [docker](https://www.docker.com/products/docker-desktop).

## Build API Docker

```
$ docker-compose build
```

## Run API Server

```
$ docker-compose up -d
```

This will run the hawk api on `localhost:8000` and a `postgres` docker for the DB.

Logs from the API server can be viewed by running `docker logs hawkapi -f`.

## Stop API Server

```
docker-compose down
```

## Run UI Proxy

```
npm run proxy
```

## Run UI

```
npm start
```

## Summary

### Completed Items

- Pulls from the provided API. Added an express proxy to deal with CORS.
- Wired in Redux, and the Redux Dev Tools for Chrome
- Interpreted the wires into a card-based UI, and the form for adding more hawks became a modal.
  - I went for a card-based UI to be able to display the pictures, which I think provides a more visually robust result for the end user
- Brought in a Google font and Pure CSS for some light out of the box styling, focused primarily on layout with the hand written styles

### Uncompleted Items

- POST, the form is in and capturing the user's input, there is the start of a redux action, there is a route laid in on the proxy to handle it (untested). Did not get to completing the task after encountering some typing issues with redux when trying to dispatch the `getAllHawks` action after a successful POST.
- Searching, Filtering and Sorting on the primary UI. Again, is responding to user interaction, not doing much else

### Challenges

- I haven't written a React/Redux frontend in a couple years, so I had some catch up reading to do before starting and plenty of Googling throughout the work. I've never written one with TypeScript. I enjoy the benefits of TypeScript in Vue, but the nested generics around the actions were tough to decipher.
- Finding reasonably current, reliable, complete, easy to follow information on writing a Redux store with TypeScript ended up being a bit of trick.

### Theoretical Next Steps

- Obviously, I would have preferred to have completed the POST and added a few birds to this collection via the UI over Postman. I feel I was pretty close and missing something in the typing to make this possible. I saw in the Kotlin and docs that there appeared to be full CRUD routes available.
- Searching, Filtering and Sorting the collection. I feel this could be completed with some utility functions on local state to the `HawkCollection` component with info handed down from `App`.
- Had a few ideas for a `HawkDetail` view
- Convert the `AddHawkForm` to a `HawkForm` that handles creation and editing
- A styling preprocessor like Sass would be an improved dev experience as well
- Would spend more time on accessibility and responsiveness

### UI Screenshots

![main page](screenshot1.png)
![add form page](screenshot2.png)
