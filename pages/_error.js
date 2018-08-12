import { Component } from 'react';

class Error extends Component {

    static getInitialProps({ res, err }) {
        const statusCode = res ? res.statusCode : err ? err.statusCode : null;
        return { statusCode }
    }

    render () {
        return (
            <div>
                {
                    this.props.statusCode
                ? `An error ${this.props.statusCode} occurred on server`
                    : `That's embarrassing! We don't have the page you're looking for.`
                }
            </div>
        )
    }
}

export default Error;