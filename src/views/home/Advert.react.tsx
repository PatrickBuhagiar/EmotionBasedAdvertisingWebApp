import React from 'react'
import { Button, Card, CardBody, CardImage, CardTitle, CardText } from 'mdbreact';
import Select from 'react-select';

export interface Props {
    id?: string,
    counter?: number,
    name?: string,
    ageGroup?: string,
    emotion?: string,
    gender?: string,
    imgURL?: string
}

export class Advert extends React.Component<Props, any> {

    constructor() {
        super()
    }

    render() {
        return (
            <div className="col-3">
                <div className="card">
                    <img className="card-img-top" src={this.props.imgURL} style={{ maxWidth: "400px", maxHeight: "500px" }} alt="Card image cap" />
                    <div className="card-block">
                        <h2 className="card-title">{this.props.name}</h2>
                        <div>
                            <label>Target Emotions  </label><h1 className="badge badge-info" style={{ fontSize: "large" }}>{this.props.emotion}</h1>
                        </div>
                        <div>
                            <label>Target Age Group  </label><h1 className="badge badge-warning" style={{ fontSize: "large" }}>{this.props.ageGroup}</h1>
                        </div>
                        <div>
                            <label>Target Gender  </label><h1 className="badge badge-primary" style={{ fontSize: "large" }}>{this.props.gender}</h1>
                        </div>
                        <br />
                        <div>
                            <label>Frequency of advert   </label><h1 className="badge badge-danger" style={{ fontSize: "large" }}>{this.props.counter}</h1>
                        </div>
                        <div>
                            <label>Total Cost So Far:    </label><h1 className="badge badge-success" style={{ fontSize: "large" }}>£{this.props.counter * 2}</h1>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


}