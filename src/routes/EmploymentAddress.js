import React from 'react'
import BasicForm from './BasicForm'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { updateNumbAddrEmp, updateNameAddrEmp, updateCityEmp, updateProvinceEmp, updateCodeEmp, addNewEmpAddrEmp, addNewEmpAddrDataEmp, streetNumErrEmp, cityErrEmp, streetNameErrEmp, codeErrEmp } from "./redux/index";
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


function EmploymentAddress(props) {

    const numRef = useRef(null);
    const nameRef = useRef(null);
    const cityRef = useRef(null);
    const provinceRef = useRef(null);
    const codeRef = useRef(null);
    const nextPage = '/summary';
    const backPage = '/PropertyAddress';
    const showBackBtn = true;



    const numRef2 = useRef(null);
    const nameRef2 = useRef(null);
    const cityRef2 = useRef(null);
    const provinceRef2 = useRef(null);
    const codeRef2 = useRef(null);



    let references = [

    ];


    function nextFunction() {
        props.updateNumbAddr(numRef.current.value);
        props.updateNameAddr(nameRef.current.value);
        props.updateCity(cityRef.current.value);
        props.updateProvince(provinceRef.current.value);
        props.updateCode(codeRef.current.value);

        if (props.newEmpAddr.length >= 1) {
            console.log("Guardando nueva direccion");

props.addNewEmpAddrData([numRef2.current.value, nameRef2.current.value, cityRef2.current.value, provinceRef2.current.value, codeRef2.current.value ]);


        }



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
                    props.streetNumErrEmp("Should be a number");
                    nomostrart = true;
                } else {
                    props.streetNumErrEmp("");
                    nomostrart = false;
                }

                break;
            case "city":

                if (!cityExpReg.test(value)) {
                    props.cityErrEmp("Min 3 characters and max 20 characters");
                    nomostrart = true;
                } else {
                    props.cityErrEmp("")
                    nomostrart = false;
                }

                break;
            case "streetName":

                if (!streetNameExpReg.test(value)) {
                    props.streetNameErrEmp("only letters are allowed")
                    nomostrart = true;
                } else {
                    props.streetNameErrEmp("");
                    nomostrart = false;

                }
                break;
            case "code":

                if (!numbExpReg.test(value)) {
                    props.codeErrEmp("Should be a number")
                    nomostrart = true;
                } else {
                    props.codeErrEmp("");
                    nomostrart = false;
                }

                break;
            default:
                break;
        }
    }

    function addNewElements() {
        props.addNewEmpAddr('');

        if (props.newEmpAddr.length >= 1) {
            console.log("Guardando nueva direccion");
            props.addNewEmpAddrData([numRef2.current.value, nameRef2.current.value, cityRef2.current.value, provinceRef2.current.value, codeRef2.current.value]);

            setTimeout(() => {
                references = props.newEmpAddrData
                console.log(references);
            }, 1000);
        }


    }

    return (
        <div>
            <h1>Employment Address</h1>
            { /*<h1>Employment Address</h1>
            <p>Street Number - {props.streetNumber}</p>
            <p>Street Name   - {props.streetName}</p>
            <p>City          - {props.city}</p>
            <p>province      - {props.province}</p>
            <p>code          - {props.code}</p>
            <p>New Emp Addr  - {props.newEmpAddr} - {props.newEmpAddr.length}</p>
           <p>New Addresses - {props.newEmpAddrData} - Total new addresses: - {props.newEmpAddrData.length} - {props.newEmpAddrData[0]}</p>*/}
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

            ></BasicForm>


            <button onClick={addNewElements}>Add Previous employment address</button>
            {
                props.newEmpAddr.map((element, index) => {
                    return (
                        <div key={index}>
                            {/*<input value = {element} type="text"/>*/}

                            <BasicForm
                                numRef={numRef2}
                                nameRef={nameRef2}
                                cityRef={cityRef2}
                                provinceRef={provinceRef2}
                                codeRef={codeRef2}            
                               

                            >
                            </BasicForm>
                        </div>
                    )
                })
            }
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


        </div>
    )
}

const mapStateToProps = state => {
    return {
        streetNumber: state.employment.streetNumber,
        streetName: state.employment.streetName,
        city: state.employment.city,
        province: state.employment.province,
        code: state.employment.code,
        newEmpAddr: state.employment.newEmpAddr,
        newEmpAddrData: state.employment.newEmpAddrData,
        streetNumError: state.employment.streetNumError,
        cityError: state.employment.cityError,
        streetNameError: state.employment.streetNameError,
        codeError: state.employment.codeError,
        hidden: state.property.hidden,
    }
}

const mapDispatchToProps = dispatch => {
    return {

        updateNumbAddr: (newNumAddr) => dispatch(updateNumbAddrEmp(newNumAddr)),
        updateNameAddr: (newAddr) => dispatch(updateNameAddrEmp(newAddr)),
        updateCity: (newCity) => dispatch(updateCityEmp(newCity)),
        updateProvince: (newProvince) => dispatch(updateProvinceEmp(newProvince)),
        updateCode: (newCode) => dispatch(updateCodeEmp(newCode)),
        addNewEmpAddr: (newEmpAddr) => dispatch(addNewEmpAddrEmp(newEmpAddr)),
        addNewEmpAddrData: (newEmpAddrData) => dispatch(addNewEmpAddrDataEmp(newEmpAddrData)),
        streetNumErrEmp: (error) => dispatch(streetNumErrEmp(error)),
        cityErrEmp: (error) => dispatch(cityErrEmp(error)),
        streetNameErrEmp: (error) => dispatch(streetNameErrEmp(error)),
        codeErrEmp: (error) => dispatch(codeErrEmp(error)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(EmploymentAddress);