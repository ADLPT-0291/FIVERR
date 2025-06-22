import {createSlice} from '@reduxjs/toolkit';

export const USER_FETCH_STATUS = {
    IDLE: "IDLE",
    // skeleton
    fetching: "FETCHING",
    // profile
    success: "SUCCESS",
    //login/ register
    exprired: "EXPRIED",
    };


const userSlice = createSlice({
    name: 'userSlice',
    initialState: {
        user: null,
        userFetchStatus: USER_FETCH_STATUS.IDLE,
    },
    reducers: {
        setUser(state, action) {
            state.user = action.payload;
        },
        resetUser(state) {
            state.user = null;
        },
        setUserFetchStatus(state, action) {
            state.userFetchStatus = action.payload;
        },
    },
});

export const userReducer = userSlice.reducer;
// laasy nhuwxng reducerrs ra bawfng . actions
export const {setUser, setUserFetchStatus} = userSlice.actions;