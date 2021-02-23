See the app in action -> [tv-pedia-2021](https://tv-pedia-2021.vercel.app/)

## About the app
The app uses the free version API of [TV Maze](https://www.tvmaze.com/api).
Provides the functionality to lookup a TV show, see information about it -
overview of all it's episodes and episode details.

## Things to improve
- Add more color or improve the design
- Add more information for both the show and the episodes
  - Maybe integrate the Episode details page in the Show details page
- Add filtering options (genre, year, cast)
- Create lists like favorites or seen 
- Improve the bradcrumbs
- Add more tests
- Refactor/Reuse styled components
- Refactoring:
  - `EpisodeDetails` and `ShowDetails` share quite a bit of code
    - Extract one reusable component that will serve to display the details:
      for a show or an
    - Extract the fetch functionality in a reusable hook

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
