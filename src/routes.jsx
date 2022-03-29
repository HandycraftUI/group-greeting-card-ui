import { lazy } from 'react'
import React from 'react'
import { Navigate } from 'react-router-dom'

const Login = lazy(() => import('./components/Login/Login'))
const Register = lazy(() => import('./components/Register/Register'))
const ChangePassword = lazy(() => import('./components/ChangePassword/ChangePassword'))
const ForgottenPassword = lazy(() => import('./components/ForgottenPassword/ForgottenPassword'))
const Home = lazy(() => import('./pages/Home'))
const Editor = lazy(() => import('./pages/Editor/Editor'))
const SetupCard = lazy(() => import('./components/SetupCard/SetupCard'))
const TemplateCards = lazy(() => import('./components/ListTemplates/TemplateCards'))
const Profile = lazy(() => import('./components/Profile/Profile'))

const routeConfig = (isLoggedIn) => [
    {
        path: '/',
        element: <Home />,
        isVisibleInFooter: true,
        text: 'Home'
    },
    {
        path: '/auth/login',
        element: !isLoggedIn ? <Login /> : <Navigate to='/' />,
    },
    {
        path: '/auth/register',
        element: !isLoggedIn ? <Register /> : <Navigate to='/' />,
    },
    {
        path: '/editor',
        element: isLoggedIn ? <Editor /> : <Navigate to='/auth/login' />
    },
    {
        path: '/auth/change-password',
        element: isLoggedIn ? <ChangePassword /> : <Navigate to='/' />
    },
    {
        path: '/auth/forgotten-password',
        element: isLoggedIn ? <ForgottenPassword /> : <Navigate to='/auth/login' />
    },
    {
        path: '/setup-card',
        element: isLoggedIn ? <SetupCard /> : <Navigate to='/auth/login' />
    },
    {
        path: '/create-card',
        element: isLoggedIn ? <TemplateCards /> : <Navigate to='/auth/login' />,
        isVisibleInFooter: true,
        text: 'Greeting Cards',
    },
    {
        path: '/auth/profile',
        element: isLoggedIn ? <Profile /> : <Navigate to='/auth/login' />,
        isVisibleInFooter: true,
        text: 'Profile',
    },
    {
        path: '/aboutus',
        element: <Home/>,
        isVisibleInFooter: true,
        text: 'About us',
    }
]

export default routeConfig
