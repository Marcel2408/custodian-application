# Custodian task - Marcel Subirana

Dear Custodian team,

welcome to my version of the tasks application!

The project needs some steps to run properly as described below:

## Get started

Clone the repo:

```bash
$ git clone https://github.com/Marcel2408/custodian-application
$ cd custodian-application
```

I added 2 npm packages in order to develop tests:

[Enzyme](https://www.npmjs.com/package/enzyme)

[@wojtekmaj/enzyme-adapter-react-17](https://www.npmjs.com/package/@wojtekmaj/enzyme-adapter-react-17): well maintained and with many downloads, yet unofficial package to adapt Enzyme to React 17.

Make sure you install them by typing in your terminal:

```bash
$ npm install
```

Now you are ready to start the app using :

```bash
$ npm start
```

The server will run on port 3000 by default.

Alternatively, you can run the tests suits by typing:

```bash
$ npm test
```

## Notes

-   Atomic design principles: I tried to follow the methodology as best as possible, making reusable atoms and molecules, and combining them into organisms. I also created two templates, mainly for the CSS grid that I designed and the dashboard flexbox design.
-   Class components and functional components: I decided to use functional components for atoms and molecules, where no access to state is needed, and then I built the organisms and pages using class components connected to Redux.
-   CSS Grid: I have applied a grid to the page, that for a simple layout like this one it is perhaps not necessary, but just wanted to demonstrate that I know how to use it.
-   CheckboxGroup: is a molecule that groups Input and Label, I didn't include them as separate atoms because they need to be together to make sense.
-   Testing: 
    -   I developed unit tests for some of the components (App, Home, CheckboxGroup). I tried to focus on the behavior more than the implementation details to avoid breaking them on every eventual refactor.
    -   I also developed unit tests for the action creators and the reducer.
    -   Finally, I developed an integration test for the actions and the reducer together.
    -   I didn't intend to test all components but rather demonstrate my knowledge on unit and integration tests. I am actually working on improving this skill, and in this case for instance I never tested Styled-components so it is definitely one of my main points in which I have a lot of room for improvement.
-   Extras: 
    -   I developed the proposed bonus functionality of dividing the view between 'Current tasks' and 'Archived tasks'.
    -   Added the functionality to 'unarchive' the task as well
    -   Styled the hero image to make a scaling effect on hover
    -   Tests: Added tests as discussed in the previous point



Thank you for the opportunity, I had fun and even learned some tricks about Styled-components and testing along the way!



# Welcome !

We have provided you with a project (Tasks app) which already has [Redux](https://redux.js.org/), [React](https://reactjs.org/), [Styled Components](https://github.com/styled-components/styled-components) and a basic Router all set up. <br>
We also have provided you with an example of a Redux action being dispatched (archiveTask). <br>
We left the UI as bare as possible so to give you a fresh start on that part. We however have already provided you with the assets you need: please use the assets in the the `src/assets` folder for the image and the icons. <br><br>

### Setting yourself up

-   Create a new empty repository in your Github account called `custodian-application`.
-   Clone **this** repository to your local machine.
-   Set the new remote url to your new empty `custodian-application` repository ( command : ` git remote set-url origin [URL-OF-custodian-application]`.
-   In order to verify that you have your repository as the Git Url, check with : `git remote -v` .
-   Don't forget to install the dependencies with `npm i` .
-   In the event that you do not have Node v12+ installed on your machine: if you don't have Node installed, we recommend using nvm to install the latest LTS version (run the install script: https://github.com/nvm-sh/nvm#install--update-script, https://itnext.io/nvm-the-easiest-way-to-switch-node-js-environments-on-your-machine-in-a-flash-17babb7d5f1b).

Below are the instructions.

### Please add to this project the following:

-   on the UI side :

Please recreate this UI as closely as you can (ignore any mobile version! We actually have put a wrapper already on the page to hide any UI on mobile.):

![tasks - Desktop UI](https://user-images.githubusercontent.com/26336692/113589994-fac56c80-9629-11eb-80aa-30cb23187353.jpg)

-   on the functionality side :

Toggle the completion status of the task (completed - outstanding ) with a redux action.
Don't forget to change the UI of the completion status accordingly on the task card (see UI above).
That's it. You don't have to worry about any other functionality (unless if you would like to do anything else as a bonus, see below - not required.).

-   bonus _(Note: this is by no means required.)_

If you'd like to add anything, feel free to do it! It is completely up to you.

You could for example display the current tasks separately from the archived tasks, like so :

![image](https://user-images.githubusercontent.com/26336692/113590593-c3a38b00-962a-11eb-9eef-647df29c22d5.png)

Or you could test your code. Or hook up any other form functionality!

Have fun!

Once done, please send us the link to your repository (`custodian-aplication`) - and please send us the access to it, if the repository you created is set to private.

If you have any questions, feel free to email Nathalia at : nathalia.rus@custodian.club and she will come back to you ASAP!

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
