
import AppDispatcher from "../dispatcher/AppDispatcher";
import AppConstants from "../constants/AppConstants";
const AppActions  = {



    changeLocale: function(lang){

        AppDispatcher.dispatch({
            actionType: AppConstants.CHANGE_LOCALE,
            locale: lang
        });

    }


};

export default AppActions;
