import {VALIDATE_FORM} from "../constants/constants";

export function validateForm(author, text, bigText, agree) {
    return {
        type: VALIDATE_FORM,
        author,
        text,
        bigText,
        agree
    }
}