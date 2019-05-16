import {VALIDATE_FORM} from "../../constants/constants";


export default function correctlyForm(state = false, action) {
    if (action.type===VALIDATE_FORM){
        if(action.author.trim() && action.text.trim() && action.bigText.trim() && action.agree){
            return true;
        }
    }
    return false;
}
