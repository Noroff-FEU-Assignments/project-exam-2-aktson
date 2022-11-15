import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from '@material-tailwind/react';
import { AuthProvider } from './components/context/AuthContext';
import { PostsProvider } from './components/context/PostsContext';
import { ModalProvider } from './components/context/ModalContext';
import { UsersProvider } from './components/context/UsersContext';
import { BrowserRouter } from 'react-router-dom';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en.json'
import { AdminProvider } from './components/context/AdminContext';

TimeAgo.addDefaultLocale(en)

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <AuthProvider>
          <PostsProvider>
            <UsersProvider>
              <AdminProvider>
                <ModalProvider>
                  <App />
                </ModalProvider>
              </AdminProvider>
            </UsersProvider>
          </PostsProvider>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
