import { Outlet, createBrowserRouter } from 'react-router-dom';
import { PublicLayout, OwnerLayout, CustomerLayout } from '@/layouts';
import HomePage from '../pages/public/HomePage';
import LoginPage from '../pages/public/LoginPage';
import RegisterPage from '../pages/public/RegisterPage';
import PrivateRoute from './PrivateRoute';
import DashboardPage from '../pages/owner/DashboardPage';
import AddPropertyPage from '../pages/owner/AddPropertyPage';
import Profile from '../pages/common/Profile';
import NotFoundPage from '../pages/public/NotFoundPage';
import { ROLES } from '../constants/roles';
import MyBookings from '../pages/customer/MyBookings';
import Bookings from '../pages/owner/Bookings';
export const router = createBrowserRouter([
	{
		path: '/',
		element: <PublicLayout />,
		children: [
			{ index: true, element: <HomePage /> },
			{ path: 'login', element: <LoginPage /> },
			{ path: 'register', element: <RegisterPage /> },
		],
	},
	{
		path: '/owner',
		element: <PrivateRoute allowedRoles={ROLES.OWNER} />,
		children: [
			{
				element: <OwnerLayout />,
				children: [
					{ path: 'dashboard', element: <DashboardPage /> },
					{ path: 'add-property', element: <AddPropertyPage /> },
					{ path: 'bookings', element: <Bookings /> },
					{ path: 'profile', element: <Profile /> },
				],
			},
		],
	},
	{
		path: '/customer',
		element: <PrivateRoute allowedRoles={ROLES.CUSTOMER} />,
		children: [
			{
				element: <CustomerLayout />,
				children: [
					{ path: 'profile', element: <Profile /> },
					{ path: 'my-bookings', element: <MyBookings /> },
				],
			},
		],
	},
	{
		path: '*',
		element: <NotFoundPage />,
	},
]);