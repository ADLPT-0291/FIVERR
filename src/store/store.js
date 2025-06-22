import {configureStore} from '@reduxjs/toolkit';
import { TestTube } from 'lucide-react';
import { userReducer } from './user.slice';

export const store = configureStore({
    reducer: {
        // Add your reducers here
        temp(state = {c:1}) {
            return state;
        },
        userReducer,
    },
});