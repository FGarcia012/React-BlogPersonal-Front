import React from 'react';
import { DashboardPage } from './pages/dashboard';
import { CoursePage } from './pages/course';
import { PublicationPage } from './pages/publication';
import { PublicationDetailPage } from './pages/publication';
import { FilteredPublicationsPage } from './pages/publication/FilteredPublicationsPage';
import { CommentPage } from './pages/comment';

export const routes = [
  { path: '/*', element: <DashboardPage /> },
  { path: '/courses', element: <CoursePage /> },
  { path: '/publications', element: <PublicationPage /> },
  { path: '/publications/filter', element: <FilteredPublicationsPage /> },
  { path: '/publications/:publicationId', element: <PublicationDetailPage /> },
  { path: '/comments', element: <CommentPage /> },
];