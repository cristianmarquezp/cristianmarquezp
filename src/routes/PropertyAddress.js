import React from 'react'
import BasicForm from './BasicForm'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { updateNumbAddrProp, updateNameAddrProp, updateCityProp, updateProvinceProp, updateCodeProp, isHiddenProp, streetNumErrProp, streetNameErrProp, cityErrProp, codeErrProp } from "./redux/index";
import { useRef } from 'react'


const numbExpReg = RegExp(
    /^([0-9])*$/
);

const cityExpReg = RegExp(
    /^[\s\S]{3,10}$/
);

const streetNameExpReg = RegExp(
    /^[a-zA-Z_áéíóúñ\s]*$/
);

let nomostrart = false;
let provinceErr = false;

function PropertyAddress(props) {
    const numRef = useRef(null);
    const nameRef = useRef(null);
    const cityRef = useRef(null);
    const provinceRef = useRef(null);
    const codeRef = useRef(null);
    const nextPage = '/EmploymentAddress';
    const backPage = '/ResidentialAddress';


    function nextFunction() {
        props.updateNumbAddr(numRef.current.value);
        props.updateNameAddr(nameRef.current.value);
        props.updateCity(cityRef.current.value);
        props.updateProvince(provinceRef.current.value);
        props.updateCode(codeRef.current.value);
    }

    function unaFuncion() {
        alert("Funcionooo");
        // props.updateNumbAddr(666);
    }

    function handleChange(e) {
        e.preventDefault();
        const { name, value } = e.target;
        switch (name) {
            case "streetNumber":
                //!numbExpReg.test(value) ? props.streetNumErr("Should be a number") : props.streetNumErr("");
                if (!numbExpReg.test(value)) {
                    props.streetNumErr("Should be a number")
                    nomostrart = true;
                } else {
                    props.streetNumErr("")
                    nomostrart = false;
                }
                break;
            case "province":

                if (value === 'Quebec') {
                    props.isHidden(true)
                    provinceErr=true;
                    nomostrart=true;
                } else {
                    props.isHidden(false);
                    provinceErr=false;
                    nomostrart=false;
                }
                break;
            case "city":

                if (!cityExpReg.test(value)) {
                    props.cityErrProp("Min 3 characters and max 20 characters")
                    nomostrart = true;
                } else {
                    props.cityErrProp("");
                    nomostrart = true;
                }
                break;
            case "streetName":
                if (!streetNameExpReg.test(value)) {
                    props.streetNameErrProp("only letters are allowed");
                    nomostrart = true;
                } else {
                    props.streetNameErrProp("");
                    nomostrart = true;
                }
                break;
            case "code":

                if (!numbExpReg.test(value)) {
                    props.codeErrProp("Should be a number")
                    nomostrart = true;
                } else {
                    props.codeErrProp("");
                    nomostrart = false;
                }

                break;
            default:
                break;
        }
    }
    return (
        <div>
            <h1>Property Address</h1>
            {/*<h1>Property Address</h1>
            <p>Street Number - {props.streetNumber}</p>
            <p>Street Name   - {props.streetName}</p>
            <p>City          - {props.city}</p>
            <p>province      - {props.province}</p>
            <p>code          - {props.code}</p>*/}

            <BasicForm
                eventoBoton={unaFuncion}
                handleChange={handleChange}
                numRef={numRef}
                nameRef={nameRef}
                cityRef={cityRef}
                provinceRef={provinceRef}
                codeRef={codeRef}
                streetNumError={props.streetNumError}
                streetNameError={props.streetNameError}
                cityError={props.cityError}
                codeError={props.codeError}
                hidden={props.hidden}


            ></BasicForm>

            <Link to={nextPage}>
                <div className="nextButton">
                    <button
                        onClick={nextFunction}
                        disabled={nomostrart}> Next </button>
                </div>
            </Link>

            <Link to={backPage}>
                <div className="backButton">
                    <button
                        disabled={false}> Back </button>
                </div>
            </Link>

            {
                provinceErr ?
                    <small>You cannot continue, please select another province</small> :
                    ""
            }

        </div>
    )
}


const mapStateToProps = state => {
    return {
        streetNumber: state.property.streetNumber,
        streetName: state.property.streetName,
        city: state.property.city,
        province: state.property.province,
        code: state.property.code,
        streetNumError: state.property.streetNumError,
        hidden: state.property.hidden,
        cityError: state.property.cityError,
        streetNameError: state.property.streetNameError,
        codeError: state.property.codeError


    }
}

const mapDispatchToProps = dispatch => {
    return {

        updateNumbAddr: (newNumAddr) => dispatch(updateNumbAddrProp(newNumAddr)),
        updateNameAddr: (newAddr) => dispatch(updateNameAddrProp(newAddr)),
        updateCity: (newCity) => dispatch(updateCityProp(newCity)),
        updateProvince: (newProvince) => dispatch(updateProvinceProp(newProvince)),
        updateCode: (newCode) => dispatch(updateCodeProp(newCode)),
        isHidden: (error) => dispatch(isHiddenProp(error)),
        streetNumErr: (error) => dispatch(streetNumErrProp(error)),
        cityErrProp: (error) => dispatch(cityErrProp(error)),
        streetNameErrProp: (error) => dispatch(streetNameErrProp(error)),
        codeErrProp: (error) => dispatch(codeErrProp(error)),


    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PropertyAddress)