import { createHashRouter } from 'react-router-dom'
import { MainLayout } from './layouts/MainLayout'
import { HomePage } from '../pages/HomePage'
import { JoinPage } from '../pages/JoinPage'
import { ManifestoPage } from '../pages/ManifestoPage'
import { NotFoundPage } from '../pages/NotFoundPage'
import { PillarPage } from '../pages/PillarPage'
import { PillarsPage } from '../pages/PillarsPage'
import { ProjectsPage } from '../pages/ProjectsPage'
import { QuestsPage } from '../pages/QuestsPage'

export const router = createHashRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'quests', element: <QuestsPage /> },
      { path: 'pillars', element: <PillarsPage /> },
      { path: 'pillars/:slug', element: <PillarPage /> },
      { path: 'projects', element: <ProjectsPage /> },
      { path: 'manifesto', element: <ManifestoPage /> },
      { path: 'join', element: <JoinPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
])
