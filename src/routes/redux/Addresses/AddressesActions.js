
//*****RESIDENTIAL ADDRESS ACTIONS */
export const updateNumbAddr = newAddr =>{
   
    return{
        type: 'UPDATE_NUMB_ADDR',
        payload: newAddr
    }
}

export const updateNameAddr = newAddr =>{
    return{
        type: 'UPDATE_NAME_ADDR',
        payload: newAddr
    }
}
export const updateCity = newCity =>{
    return{
        type: 'UPDATE_CITY',
        payload: newCity
    }
}
export const updateProvince = newProvince =>{
    return{
        type: 'UPDATE_PROVINCE',
        payload: newProvince
    }
}
export const updateCode = newCode =>{
    return{
        type: 'UPDATE_CODE',
        payload: newCode
    }
}

export const isHidden = isHidden =>{
    return{
        type: 'IS_HIDDEN',
        payload: isHidden
    }
}

export const addNew = additional =>{
    return{
        type: 'ADDITION',
        payload: additional
    }
}
export const addNewEmpAddr = newEmpAddr =>{
    return{
        type: 'ADD_NEW_EMPADDR',
        payload: newEmpAddr
    }
}

export const addNewEmpAddrData = newEmpAddrData =>{
    return{
        type: 'ADD_NEW_DATA_EMP_ADDR',
        payload: newEmpAddrData
    }
}

export const streetNumErr = streetNumErr =>{
    return{
        type: 'STREET_NUM_ERR',
        payload: streetNumErr
    }
}

export const streetNameErr = streetNameErr =>{
    return{
        type: 'STREET_NAME_ERR',
        payload: streetNameErr
    }
}


export const cityErr = cityError =>{
    return{
        type: 'CITY_NAME_ERR',
        payload: cityError
    }
}

export const codeErr = codeError =>{
    return{
        type: 'CODE_ERR',
        payload: codeError
    }
}







//*********** PROPERTY ADDRESS ACTIONS*/

export const updateNumbAddrProp = newAddr =>{
   
    return{
        type: 'UPDATE_NUMB_ADDR_PROP',
        payload: newAddr
    }
}

export const updateNameAddrProp = newAddr =>{
    return{
        type: 'UPDATE_NAME_ADDR_PROP',
        payload: newAddr
    }
}
export const updateCityProp = newCity =>{
    return{
        type: 'UPDATE_CITY_PROP',
        payload: newCity
    }
}
export const updateProvinceProp = newProvince =>{
    return{
        type: 'UPDATE_PROVINCE_PROP',
        payload: newProvince
    }
}
export const updateCodeProp = newCode =>{
    return{
        type: 'UPDATE_CODE_PROP',
        payload: newCode
    }
}

export const isHiddenProp = isHidden =>{
    return{
        type: 'IS_HIDDEN_PROP',
        payload: isHidden
    }
}

export const streetNumErrProp = streetNumErr =>{
    return{
        type: 'STREET_NUM_ERR_PROP',
        payload: streetNumErr
    }
}

export const streetNameErrProp = streetNameErr =>{
    return{
        type: 'STREET_NAME_ERR_PROP',
        payload: streetNameErr
    }
}


export const cityErrProp = cityError =>{
    return{
        type: 'CITY_NAME_ERR_PROP',
        payload: cityError
    }
}

export const addNewProp = additional =>{
    return{
        type: 'ADDITION_PROP',
        payload: additional
    }
}
export const addNewEmpAddrProp = newEmpAddr =>{
    return{
        type: 'ADD_NEW_EMPADDR_PROP',
        payload: newEmpAddr
    }
}

export const addNewEmpAddrDataProp = newEmpAddrData =>{
    return{
        type: 'ADD_NEW_DATA_EMP_ADDR_PROP',
        payload: newEmpAddrData
    }
}

export const codeErrProp = codeError =>{
    return{
        type: 'CODE_ERR_PROP',
        payload: codeError
    }
}






//************EMPLOYMENT ADDRESS ACTIONS */

export const updateNumbAddrEmp = newAddr =>{
   
    return{
        type: 'UPDATE_NUMB_ADDR_EMP',
        payload: newAddr
    }
}

export const updateNameAddrEmp = newAddr =>{
    return{
        type: 'UPDATE_NAME_ADDR_EMP',
        payload: newAddr
    }
}
export const updateCityEmp = newCity =>{
    return{
        type: 'UPDATE_CITY_EMP',
        payload: newCity
    }
}
export const updateProvinceEmp = newProvince =>{
    return{
        type: 'UPDATE_PROVINCE_EMP',
        payload: newProvince
    }
}
export const updateCodeEmp = newCode =>{
    return{
        type: 'UPDATE_CODE_EMP',
        payload: newCode
    }
}

export const isHiddenEmp = isHidden =>{
    return{
        type: 'IS_HIDDEN_EMP',
        payload: isHidden
    }
}

export const addNewEmp = additional =>{
    return{
        type: 'ADDITION_EMP',
        payload: additional
    }
}
export const addNewEmpAddrEmp = newEmpAddr =>{
    return{
        type: 'ADD_NEW_EMPADDR_EMP',
        payload: newEmpAddr
    }
}

export const addNewEmpAddrDataEmp = newEmpAddrData =>{
    return{
        type: 'ADD_NEW_DATA_EMP_ADDR_EMP',
        payload: newEmpAddrData
    }
}

export const streetNumErrEmp= streetNumErr =>{
    return{
        type: 'STREET_NUM_ERR_EMP',
        payload: streetNumErr
    }
}

export const streetNameErrEmp = streetNameErr =>{
    return{
        type: 'STREET_NAME_ERR_EMP',
        payload: streetNameErr
    }
}


export const cityErrEmp = cityError =>{
    return{
        type: 'CITY_NAME_ERR_EMP',
        payload: cityError
    }
}

export const codeErrEmp = codeError =>{
    return{
        type: 'CODE_ERR_EMP',
        payload: codeError
    }
}



