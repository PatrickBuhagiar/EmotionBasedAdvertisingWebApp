import React from 'react'
import { Image } from 'react-bootstrap'

export class Home extends React.Component<any, any> {
    render() {
        return (
            <div style={{ textAlign: "center", backgroundColor: "#181818" }}>
                <div>
                    <Image src="http://greatunihack.com/images/guh_logo.png" href="http://greatunihack.com/" alt="500x500" style={{ width: "500px" }} circle />
                </div>
                <div>
                    <Image src="https://pre00.deviantart.net/47d2/th/pre/i/2017/115/a/6/rick_and_morty_png_by_lalingla-db72d4x.png" />
                </div>
                <div>
                    <Image src="https://res.cloudinary.com/teepublic/image/private/s--79RqElHn--/t_Preview/b_rgb:191919,c_limit,f_auto,h_313,q_90,w_313/v1496645914/production/designs/1646551_1" />
                </div>
            </div>
        )
    }
}