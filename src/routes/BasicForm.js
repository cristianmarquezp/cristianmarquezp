import React from 'react';
import '../App.css';

import { connect } from 'react-redux';
import { updateNumbAddr } from "./redux/index";


function BasicForm(props) {

    function handleSubmit(e) {
        e.preventDefault();
    }


    return (
        <div>
            <div className="wrapper">
                <div className="form-weapper">
                    <form onSubmit={handleSubmit}>
                        <div className="streetNumber">
                            <label htmlFor="streetNumber"> Street Number </label>
                            <input
                                type="text"
                                className=""
                                placeholder="Street Number"
                                name="streetNumber"
                                ref={props.numRef}
                                onChange={props.handleChange}
                                disabled={props.hidden}

                            />
                            <small className="errorMessage"> {props.streetNumError}</small>
                        </div>
                        <div className="streetName">
                            <label htmlFor="streetName"> Street name </label>
                            <input
                                type="text"
                                className=""
                                placeholder="Street Name"
                                name="streetName"
                                ref={props.nameRef}
                                onChange={props.handleChange}
                                disabled={props.hidden}
                            />
                            <small className="errorMessage"> {props.streetNameError}</small>
                        </div>

                        <div className="city">
                            <label htmlFor="city"> City name </label>
                            <input
                                type="text"
                                className=""
                                placeholder="City Name"
                                name="city"
                                ref={props.cityRef}
                                onChange={props.handleChange}
                                disabled={props.hidden}
                            />
                            <small className="errorMessage"> {props.cityError}</small>
                        </div>

                        <div className="province">
                            <label htmlFor="province"> Select Province </label>
                            <select id="province"
                                className=""
                                name="province"
                                ref={props.provinceRef}
                                disabled={props.hiddenProv}
                                onChange={props.handleChange}>
                                <option value="Alberta">Alberta</option>
                                <option value="Ontario">Ontario</option>
                                <option value="Quebec">Quebec</option>

                            </select>
                        </div>

                        <div className="code">
                            <label htmlFor="code"> Code </label>
                            <input
                                type="text"
                                className=""
                                placeholder="Code"
                                name="code"
                                ref={props.codeRef}
                                onChange={props.handleChange}
                                disabled={props.hidden}
                            />
                            <small className="errorMessage"> {props.codeError}</small>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
}

const mapStateToProps = state => {
    return {
        streetNumber: state.residential.streetNumber,
    }
}

const mapDispatchToProps = dispatch => {
    return {

        updateNumbAddr: (newNumAddr) => dispatch(updateNumbAddr(newNumAddr))

    }
}


export default BasicForm;
