import React, { Component } from 'react'
import { Button, Card, CardBody, CardImage, CardTitle, CardText } from 'mdbreact';
import { Advert, Props } from './Advert.react'
import { PageHeader } from 'react-bootstrap';
import axios from 'axios';
import client from './client';

export interface State {
    adverts: Props[]
}

export class Home extends React.Component<any, State> {

    constructor() {
        super()

        this.GetAdverts = this.GetAdverts.bind(this)

        this.state = {
            adverts: []
        }
    }

    componentDidMount() {
        this.GetAdverts()
    }

    GetAdverts() {
        client({ method: 'GET', path: 'http://localhost:8080/adverts' })
            .done(response => {
                this.setState({ adverts: response.entity._embedded.adverts })
            })
    }

    private renderAdverts() {
        if (this.state.adverts.length == 0) {
            return <div />
        } else {
            if (this.state.adverts.length == 0) {
                return (<div />)
            } else {
                return this.state.adverts.sort(a => a.counter).reverse().map(ad => {
                    return (
                        <Advert name={ad.name} ageGroup={ad.ageGroup} gender={ad.gender} emotion={ad.emotion} imgURL={ad.imgURL} counter={ad.counter} />
                    )
                })
            }
        }
    }

    render() {
        return (
            <div>
                <h1>Advertiser Portal</h1>
                <h2>Price Per Advert: £2 per appearance (10 seconds)</h2>
                <div className="row flex-row flex-nowrap">
                    {this.renderAdverts()}
                </div>
            </div>
        )
    }
}