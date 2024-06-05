import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { ThemeProvider } from '@mui/material/styles';
import { customTheme } from './utils/index.ts';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { PRIVATE_PATH, PUBLIC_PATH } from './routes/path.ts';
import PublicRoutes from './layout/PublicRoutes.tsx';
import ProtectedRoutes from './layout/ProtectedRoutes.tsx';
import App from './App.tsx';
import SignUp from './modules/sign-up/index.tsx';
import SignIn from './modules/sign-in/index.tsx';
import { AuthCtxProvider } from './context/index.tsx';
import { TaskCtxProvider } from './context/task.tsx';

const routes = createBrowserRouter([
  {
    element: <PublicRoutes />,
    children: [
      {
        path: PUBLIC_PATH.SIGNIN,
        element: <SignIn />
      },
      {
        path: PUBLIC_PATH.SIGNUP,
        element: <SignUp />
      }
    ]
  },

  {
    path: PRIVATE_PATH.DASHBOARD,
    element: <ProtectedRoutes children={<App />} />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={customTheme}>
      <AuthCtxProvider>
        <TaskCtxProvider>
          <RouterProvider router={routes} />
        </TaskCtxProvider>
      </AuthCtxProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
