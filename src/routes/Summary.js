import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'


function summary(props) {

const backPage = '/EmploymentAddress';   
    return (
        <div>
            <h1>Summary</h1>
            <h2>Residential Address</h2>
            <p>Street Number - {props.streetNumberRes}</p>
            <p>Street Name   - {props.streetNameRes}</p>
            <p>City          - {props.cityRes}</p>
            <p>province      - {props.provinceRes}</p>
            <p>code          - {props.codeRes}</p>

            <h2>Property Address</h2>
            <p>Street Number - {props.streetNumberProp}</p>
            <p>Street Name   - {props.streetNameProp}</p>
            <p>City          - {props.cityProp}</p>
            <p>province      - {props.provinceProp}</p>
            <p>code          - {props.codeProp}</p>

            <h2>Employment Address</h2>
            <p>Street Number - {props.streetNumberEmp}</p>
            <p>Street Name   - {props.streetNameEmp}</p>
            <p>City          - {props.cityEmp}</p>
            <p>province      - {props.provinceEmp}</p>
            <p>code          - {props.codeEmp}</p>

            <h2>Previous Employment Addresses</h2>
            {
                props.newEmpAddrData.map((element, index) => {
                    return (
                        <div key={index}>
                            
                           <p>Street Number - {element[0]}</p>
                           <p>Street Name   - {element[1]}</p>
                           <p>City          - {element[2]}</p>
                           <p>province      - {element[3]}</p>
                           <p>code          - {element[4]}</p>
                           <hr></hr>
                        </div>
                    )
                })
            }

            <Link to={backPage}>
                <div>
                    <button>Back</button>
                </div> 
            </Link>

        </div>
    )
}
const mapStateToProps = state => {
    return {

        streetNumberRes: state.residential.streetNumber,
        streetNameRes:   state.residential.streetName,
        cityRes:         state.residential.city,
        provinceRes:     state.residential.province,
        codeRes:         state.residential.code,

        streetNumberProp:   state.property.streetNumber,
        streetNameProp:     state.property.streetName,
        cityProp:           state.property.city,
        provinceProp:       state.property.province,
        codeProp:           state.property.code,

        streetNumberEmp: state.employment.streetNumber,
        streetNameEmp:   state.employment.streetName,
        cityEmp:         state.employment.city,
        provinceEmp:     state.employment.province,
        codeEmp:         state.employment.code,
        newEmpAddrData:  state.employment.newEmpAddrData

        
    }
}


export default connect (mapStateToProps) (summary)