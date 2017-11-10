import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Home } from './home/Home.react'
export class AppRouter extends React.Component<any, any> {
    render() {
        return (
            <BrowserRouter>
                <Route path="/" component={Home} />
            </BrowserRouter>
        )
    }
}