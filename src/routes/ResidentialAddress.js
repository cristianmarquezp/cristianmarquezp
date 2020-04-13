import React from 'react'
import BasicForm from './BasicForm'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { updateNumbAddr, updateNameAddr, updateCity, updateProvince, updateCode, addNew, streetNumErr, cityErr, streetNameErr, codeErr, isHidden } from "./redux/index";
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
let hiddenProv = false;
function ResidentialAddress(props) {
    const numRef = useRef(null);
    const nameRef = useRef(null);
    const cityRef = useRef(null);
    const provinceRef = useRef(null);
    const codeRef = useRef(null);
    const empTypeRef = useRef(null);

    const nextPage = '/PropertyAddress';


    const showBackBtn = false;

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
               
                if (!numbExpReg.test(value)) {
                    props.streetNumErr("Should be a number");
                    nomostrart = true;
                } else {
                    props.streetNumErr("");
                    nomostrart = false;
                }

                break;
            case "city":

                if (!cityExpReg.test(value)) {
                    props.cityErr("Min 3 characters and max 20 characters");
                    nomostrart = true;
                } else {
                    props.cityErr("");
                    nomostrart = false;
                }
                break;
            case "streetName":
                
                if (!streetNameExpReg.test(value)) {
                    props.streetNameErr("only letters are allowed")
                    nomostrart = true;
                } else {
                    nomostrart = false;
                    props.streetNameErr("");
                }
                break;
            case "code":
                //!numbExpReg.test(value) ? props.codeErr("Should be a number") : props.codeErr("");
                if (!numbExpReg.test(value)) {
                    props.codeErr("Should be a number")
                    nomostrart = true;
                } else {
                    props.codeErr("");
                    nomostrart = false;
                }

                break;
            default:
                break;
        }
    }

    function handleChangeEmpType(e) {
        e.preventDefault();
        const { name, value } = e.target;

        switch (value) {
            case "Retired":
                props.isHidden(true);
                nomostrart = true;
                hiddenProv = true;
                break;

            case "Student":
                props.isHidden(true);
                nomostrart = true;
                hiddenProv = true;
                break;

            case "Employed":
                props.isHidden(false);
                nomostrart = false;
                hiddenProv = false;
                break;
            default:
                break;
        }

    }

    return (
        <div>
            <h1>Residential Address</h1>
            {/* <h1>Residential Address</h1>
            <p>Street Number - {props.streetNumber}</p>
            <p>Street Name   - {props.streetName}</p>
            <p>City          - {props.city}</p>
            <p>province      - {props.province}</p>
            <p>code          - {props.code}</p>
            <p>additional    - {props.additional} - {props.additional.length}</p>
           <p>Individual    - {props.additional[3]</p>*/}

            <div className="employment Type">
                <label htmlFor="empType"> Select employment type </label>
                <select id="empType"
                    className=""
                    name="empType"
                    ref={empTypeRef}
                    onChange={handleChangeEmpType}
                >
                    <option value="Employed">Employed</option>
                    <option value="Retired">Retired</option>
                    <option value="Student">Student</option>

                </select>
            </div>
            {props.hidden ?
                <small className="error" >Customer not employed, you cannot continue</small> :
                ""
            }

            <BasicForm
                eventoBoton={unaFuncion}
                handleChange={handleChange}
                numRef={numRef}
                nameRef={nameRef}
                cityRef={cityRef}
                provinceRef={provinceRef}
                codeRef={codeRef}
                showBackBtn={showBackBtn}
                streetNumError={props.streetNumError}
                streetNameError={props.streetNameError}
                cityError={props.cityError}
                codeError={props.codeError}
                hidden={props.hidden}
                hiddenProv={hiddenProv}
                steetNumber={props.streetNumber}

            ></BasicForm>

            <Link to={nextPage}>
                <div className="nextButton">
                    <button
                        onClick={nextFunction}
                        disabled={nomostrart}> Next </button>
                </div>
            </Link>


        </div>

    )
}


const mapStateToProps = state => {
    return {
        streetNumber: state.residential.streetNumber,
        streetName: state.residential.streetName,
        city: state.residential.city,
        province: state.residential.province,
        code: state.residential.code,
        additional: state.residential.additional,
        streetNumError: state.residential.streetNumError,
        cityError: state.residential.cityError,
        streetNameError: state.residential.streetNameError,
        codeError: state.residential.codeError,
        hidden: state.residential.hidden,
    }
}

const mapDispatchToProps = dispatch => {
    return {

        updateNumbAddr: (newNumAddr) => dispatch(updateNumbAddr(newNumAddr)),
        updateNameAddr: (newAddr) => dispatch(updateNameAddr(newAddr)),
        updateCity: (newCity) => dispatch(updateCity(newCity)),
        updateProvince: (newProvince) => dispatch(updateProvince(newProvince)),
        updateCode: (newCode) => dispatch(updateCode(newCode)),
        addNew: (additional) => dispatch(addNew(additional)),
        streetNumErr: (error) => dispatch(streetNumErr(error)),
        cityErr: (error) => dispatch(cityErr(error)),
        streetNameErr: (error) => dispatch(streetNameErr(error)),
        codeErr: (error) => dispatch(codeErr(error)),
        isHidden: (error) => dispatch(isHidden(error)),


    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResidentialAddress);
