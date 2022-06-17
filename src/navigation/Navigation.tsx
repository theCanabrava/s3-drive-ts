import React, { useEffect } from 'react';
import {
    Routes,
    Route
} from "react-router-dom";

import { LoginPage, SignUpPage } from '../login';
import { DocumentsPage } from '../documents';
import { NoMatch, AppWrapper, AuthWatcher } from '../wrapper';

const Navigation = () =>
{
    return (
        <AppWrapper>
            <Routes>
                <AuthWatcher/>
                <Route path='/login' element={<LoginPage/>}/>
                <Route path='/sign-up' element={<SignUpPage/>}/>
                <Route path='/drive' element={<DocumentsPage/>}/>
                <Route path="*" element={<NoMatch/>}/>
            </Routes>
        </AppWrapper>
    )
}

export default Navigation;