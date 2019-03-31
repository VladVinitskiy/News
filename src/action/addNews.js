import {ADD_NEWS} from "../constants/constants";

export function addNews(author,text,bigText) {
    return{type:ADD_NEWS,author,text,bigText}
}