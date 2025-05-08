import React from 'react';
import { DashboardPage } from './pages/dashboard';
import { CoursePage } from './pages/course';
import { PublicationPage } from './pages/publication';
import { CommentPage } from './pages/comment';

export const routes = [
  { path: '/*', element: <DashboardPage /> },
  { path: '/courses', element: <CoursePage /> },
  { path: '/publications', element: <PublicationPage /> },
  { path: '/comments', element: <CommentPage /> },
];