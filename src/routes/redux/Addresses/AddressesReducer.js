
const initialStateResAdd = {
    streetNumber: '',
    streetName: '',
    city: '',
    province: '',
    code: '',
    hidden: false,
    formErrors: false,
    additional : [],
    streetNumError: '',
    cityError: '',
    streetNameError:'',
    codeError: '',
    disabled: true


}

const initialStatePropAdd = {
    streetNumber: null,
    streetName: '',
    city: '',
    province: '',
    code: null,
    hidden: false,
    formErrors: false,
    streetNumError: '',
    cityError: '',
    streetNameError:'',
    codeError: ''

}

const initialStateEmpAdd = {
    streetNumber: 'Direccion empleo',
    streetName: '',
    city: '',
    province: '',
    code: null,
    //hidden: false,
    formErrors: false,
    newEmpAddr:[],
    newEmpAddrData:[],
    streetNumError: '',
    cityError: '',
    streetNameError:'',
    codeError: ''

}

export const ResidentialAddressReducer = (state = initialStateResAdd, action) =>{
    switch(action.type){

         case 'UPDATE_NUMB_ADDR': return {
            ...state,
            streetNumber: action.payload
         }
         case 'UPDATE_NAME_ADDR': return {
            ...state,
            streetName: action.payload
         }
         case 'UPDATE_CITY': return {
            ...state,
            city: action.payload
         } 
         case 'UPDATE_PROVINCE': return {
            ...state,
            province: action.payload
         }  
         case 'UPDATE_CODE': return {
            ...state,
            code: action.payload
         }  
         case 'ADDITION': return {
            ...state,
            additional: [...state.additional,action.payload]
         }
         case 'STREET_NUM_ERR': return {
            ...state,
            streetNumError: action.payload
         }

         case 'STREET_NAME_ERR': return {
            ...state,
            streetNameError: action.payload
         }

         case 'CITY_NAME_ERR': return {
            ...state,
            cityError: action.payload
         }

         case 'CODE_ERR': return {
            ...state,
            codeError: action.payload
         }

         case 'IS_HIDDEN': return {
            ...state,
            hidden: action.payload
         }
     
        default: return state

    }
}

export const PropertyAddressReducer = (state = initialStatePropAdd, action) =>{
    switch(action.type){

         case 'UPDATE_NUMB_ADDR_PROP': return {
            ...state,
            streetNumber: action.payload
         }
         case 'UPDATE_NAME_ADDR_PROP': return {
            ...state,
            streetName: action.payload
         }
         case 'UPDATE_CITY_PROP': return {
            ...state,
            city: action.payload
         } 
         case 'UPDATE_PROVINCE_PROP': return {
            ...state,
            province: action.payload
         }  
         case 'UPDATE_CODE_PROP': return {
            ...state,
            code: action.payload
         }

         case 'IS_HIDDEN_PROP': return {
            ...state,
            hidden: action.payload
         }

         case 'STREET_NUM_ERR_PROP': return {
            ...state,
            streetNumError: action.payload
         }

         case 'STREET_NAME_ERR_PROP': return {
            ...state,
            streetNameError: action.payload
         }

         case 'CITY_NAME_ERR_PROP': return {
            ...state,
            cityError: action.payload
         }

         case 'CODE_ERR_PROP': return {
            ...state,
            codeError: action.payload
         }
    
        default: return state

    }
}

export const EmploymentAddressReducer = (state = initialStateEmpAdd, action) =>{
    switch(action.type){

         case 'UPDATE_NUMB_ADDR_EMP': return {
            ...state,
            streetNumber: action.payload
         }
         case 'UPDATE_NAME_ADDR_EMP': return {
            ...state,
            streetName: action.payload
         }
         case 'UPDATE_CITY_EMP': return {
            ...state,
            city: action.payload
         } 
         case 'UPDATE_PROVINCE_EMP': return {
            ...state,
            province: action.payload
         }  
         case 'UPDATE_CODE_EMP': return {
            ...state,
            code: action.payload
         }
         case 'ADD_NEW_EMPADDR_EMP': return {
            ...state,
            newEmpAddr: [...state.newEmpAddr,action.payload]
         }   
         case 'ADD_NEW_DATA_EMP_ADDR_EMP': return {
            ...state,
            newEmpAddrData: [...state.newEmpAddrData,action.payload]
         } 
         case 'STREET_NUM_ERR_EMP': return {
            ...state,
            streetNumError: action.payload
         }

         case 'STREET_NAME_ERR_EMP': return {
            ...state,
            streetNameError: action.payload
         }

         case 'CITY_NAME_ERR_EMP': return {
            ...state,
            cityError: action.payload
         }  
         
         case 'CODE_ERR_EMP': return {
            ...state,
            codeError: action.payload
         }
        default: return state

    }
}
