import { Navigate, createHashRouter } from 'react-router-dom'
import { MainLayout } from './layouts/MainLayout'
import { AboutPage } from '../pages/AboutPage'
import { HomePage } from '../pages/HomePage'
import { NotFoundPage } from '../pages/NotFoundPage'
import { QuestsPage } from '../pages/QuestsPage'

export const router = createHashRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'quests', element: <QuestsPage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'manifesto', element: <Navigate to="/about" replace /> },
      { path: 'projects', element: <Navigate to="/quests" replace /> },
      { path: 'join', element: <Navigate to="/" replace /> },
      { path: 'pillars', element: <Navigate to="/" replace /> },
      { path: 'pillars/:slug', element: <Navigate to="/" replace /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
])
