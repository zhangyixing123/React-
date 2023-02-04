import Login from '../pages/Login/Login';
import Resign from '../pages/Resign/Resign';
import Home from '../pages/Home/Home';
import { Navigate } from 'react-router-dom';

const router = [
    {
        path:'/login',
        element:<Login/>,
    },
    {
        path:'/resign',
        element:<Resign/>,
    },
    {
        path:'/home',
        element:<Home/>,
        children:[
            {
                path:'page1',
                element:'<Page1>',
            },
            {
                path:'page2',
                element:'<Page2>',
            },

    ]
    },
    {
        path:'/',
        element:<Navigate to='/login' />,
    }
];

export default router;