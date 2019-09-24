import {VALIDATE_FORM} from "../constants/constants";

export function validateForm(author,text,description,agree) {
    return {
        type: VALIDATE_FORM,
        author,
        text,
        description,
        agree
    }
}