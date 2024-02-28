import React from 'react';
import { RouterProvider,BrowserRouter, createBrowserRouter } from 'react-router-dom';
import MainPage from './MainPage';
import Home from './Home';
import Cart from './Cart';

const App = () => {
    const routes = createBrowserRouter([
        {
            path:"/",
            element:<MainPage/>,
            children:[
                {
                    path:'',
                    element:<Home/>
                },
                {
                    path:"Cart",
                    element:<Cart/>
                }
            ]
        }
    ]);

    return (
        <div>
            <RouterProvider router={routes}/>
        </div>
    );
}

export default App;
