import {showMessage} from "react-native-flash-message";

export const showError = (message) => {
    showMessage({
        type: 'danger',
        icon: 'danger',
        message
    })
}

