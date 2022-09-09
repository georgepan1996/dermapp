import React, { useContext, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { auth , onAuthStateChanged} from './src/firebase/config';
import { AdminProvider } from './src/contexts/AdminContext';
import NotLoggedStack from './src/navigation/stackScreens/NotLoggedStack';
import LoggedStack from './src/navigation/stackScreens/LoggedStack';
import { Provider } from 'react-redux';
import {store} from "./src/redux/store";

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState();
    onAuthStateChanged(auth, (user) => {
        user ? setIsLoggedIn(true) : setIsLoggedIn(false);
    });

    return (
        <Provider store={store}>
            {/*<AdminProvider>*/}
                <NavigationContainer>
                    {isLoggedIn === false ? <NotLoggedStack /> : <LoggedStack />}
                </NavigationContainer>
            {/*</AdminProvider>*/}
        </Provider>
    );
};

export default App
