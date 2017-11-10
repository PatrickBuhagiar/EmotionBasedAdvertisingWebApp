// Import React and React DOM
import React from 'react'
import { render } from 'react-dom'
// Import
const { AppContainer } = require('react-hot-loader')
import { AppRouter } from './views/AppRouter.react'

// Tell Typescript that there is a global variable called module - see below
declare var module: { hot: any };

// Get the root element from the HTML
const rootEl = document.getElementById('app');

// And render our App into it, inside the HMR App ontainer which handles the hot reloading
render(
    <AppContainer>
        <AppRouter />
    </AppContainer>,
    rootEl
);

// Handle hot reloading requests from Webpack
if (module.hot) {
    module.hot.accept('./views/AppRouter.react', () => {
        // If we receive a HMR request for our App container, then reload it using require (we can't do this dynamically with import)
        const NextApp = require('./views/AppRouter.react').default;

        // And render it into the root element again
        render(
            <AppContainer>
                <NextApp />
            </AppContainer>,
            rootEl
        );
    })
}

