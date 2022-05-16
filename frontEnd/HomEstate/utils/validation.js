import validator from "is_js";

const checkEmpty = (val, key) => {
    if(Number.isInteger(val)){
        if(val===0){
            return `${key}`;
         }
         else{
             return '';
         }
        
    }else{
        if (validator.empty(val.trim())) {
            return `${key}`;
        } else {
            return '';
        }
    }
    
}

const checkMinLength = (val, minLength, key) => {
    if(Number.isInteger(val)){
        if((val.toString().trim().length < minLength)||(val==0)){

            return `Please enter valid ${key}`
         }
         else{
             console.log(typeof(val));
             return '';
         }
        
    }else{
        if (val.trim().length < minLength) {
            return `Please enter valid ${key}`
        } 
        else {
            
            return '';
        }
    }
    
   
}

export default function (data) {
    const { 
        ownername, 
        name, 
        email, 
        password,
        contactnumber,
        location,
        price,
        area,
        city,
        state,
        description
    } = data

    if (ownername !== undefined) {
        let emptyValidationText = checkEmpty(ownername, 'Please enter your user ownername')
        if (emptyValidationText !== '') {
            return emptyValidationText;
        } else {
            let minLengthValidation = checkMinLength(ownername, 3, 'ownername')
            if (minLengthValidation !== '') {
                return minLengthValidation
            }
        }
    }

    if (contactnumber !== undefined) {
        let emptyValidationText = checkEmpty(contactnumber, 'Please enter your contact number')
        if (emptyValidationText !== '') {
            return emptyValidationText;
        } else {
            let minLengthValidation = checkMinLength(contactnumber, 10, 'contact number')
            if (minLengthValidation !== '') {
                return minLengthValidation
            }
        }
    }

    if (email !== undefined) {
        let emptyValidationText = checkEmpty(email, 'Please enter your email')
        if (emptyValidationText !== '') {
            return emptyValidationText;
        } else {
            if (!validator.email(email)) {
                return 'Please enter valid email'
            }
        }
    }

    if (location !== undefined) {
        let emptyValidationText = checkEmpty(location, 'Please enter your Address')
        if (emptyValidationText !== '') {
            return emptyValidationText;
        } else {
            let minLengthValidation = checkMinLength(location, 3, 'Address')
            if (minLengthValidation !== '') {
                return minLengthValidation
            }
        }
    }

    if (price !== undefined) {
        let emptyValidationText = checkEmpty(price, 'Please enter the price')
        if (emptyValidationText !== '') {
            return emptyValidationText;
        } else {
            let minLengthValidation = checkMinLength(price, 1, 'price')
            if (minLengthValidation !== '') {
                return minLengthValidation
            }
        }
    }

    if (area !== undefined) {
        let emptyValidationText = checkEmpty(area, 'Please enter the area')
        if (emptyValidationText !== '') {
            return emptyValidationText;
        } else {
            let minLengthValidation = checkMinLength(area, 1, 'area')
            if (minLengthValidation !== '') {
                return minLengthValidation
            }
        }
    }

    

    if (city !== undefined) {
        let emptyValidationText = checkEmpty(city, 'Please enter your city')
        if (emptyValidationText !== '') {
            return emptyValidationText;
        } else {
            let minLengthValidation = checkMinLength(city, 3, 'city')
            if (minLengthValidation !== '') {
                return minLengthValidation
            }
        }
    }
    if (state !== undefined) {
        let emptyValidationText = checkEmpty(state, 'Please enter your state')
        if (emptyValidationText !== '') {
            return emptyValidationText;
        } else {
            let minLengthValidation = checkMinLength(state, 2, 'state')
            if (minLengthValidation !== '') {
                return minLengthValidation
            }
        }
    }

    if (description !== undefined) {
        let emptyValidationText = checkEmpty(description, 'Please enter your description')
        if (emptyValidationText !== '') {
            return emptyValidationText;
        } else {
            let minLengthValidation = checkMinLength(description, 4, 'description')
            if (minLengthValidation !== '') {
                return minLengthValidation
            }
        }
    }

    if (name !== undefined) {
        let emptyValidationText = checkEmpty(name, 'Please enter your user name')
        if (emptyValidationText !== '') {
            return emptyValidationText;
        } else {
            let minLengthValidation = checkMinLength(name, 3, 'name')
            if (minLengthValidation !== '') {
                return minLengthValidation
            }
        }
    }

    


    if (password !== undefined) {
        let emptyValidationText = checkEmpty(password, 'Please enter your password')
        if (emptyValidationText !== '') {
            return emptyValidationText;
        } else {
            let minLengthValidation = checkMinLength(password, 6, 'password')
            if (minLengthValidation !== '') {
                return minLengthValidation
            }
        }
    }

}