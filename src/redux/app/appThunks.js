import {getAuth} from "../auth/authThunks";
import {initializedSuccess} from "./appActions";

export const initializeApp = () => (dispatch) => {
        const authPrommise = dispatch(getAuth());
        Promise.all([authPrommise])
            .then(() => {
                dispatch(initializedSuccess())
        })
}