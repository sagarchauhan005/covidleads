import React, { PropTypes } from 'react';
import Header from "../landing/Header";
import {HeaderNavContainer} from "../landing/HeaderNavContainer";

export class SubmitForm extends React.Component {
    render() {
        return (
            <div>
                <HeaderNavContainer/>
                <div className="container">
                    <div className="row mt-3">
                        <div className="col-md-12">
                            <iframe
                                src="https://docs.google.com/forms/d/e/1FAIpQLSclB4eOZJVcUhLIerlCVJlzpC27EOGwM-E3bg5Ju8iM_CEqvQ/viewform?embedded=true"
                                width="100%" height="2500" frameBorder="0" marginHeight="0" marginWidth="0">Loading…
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SubmitForm;
