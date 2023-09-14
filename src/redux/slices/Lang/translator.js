import { vi } from './data/vi';
import { en } from './data/en';

export const translate = (key, language) => {
    let langData = {};

    if(language === 'EN'){
        langData = en;
    } else if(language === 'VI'){
        langData = vi;
    }

    return langData[key];
}
