/**
 * Created by Admin on 12/28/2016.
 */
import { combineReducers } from 'redux';
import { authReducer} from './auth/auth';
import routes from './routes/routes';

export default combineReducers({
    auth: authReducer,
    routes:routes
});
