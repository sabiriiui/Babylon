import React from "react";
import * as Locale from '../constants/LanguageConstants';


export const getLocale = (language) => {
    if (language == "Arabic") {
        return Locale.ArabicLocale;
    } else {
        return Locale.EnglishLocale;
    }
}

