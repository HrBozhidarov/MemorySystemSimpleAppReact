import React from 'react';
import { ToastContainer } from 'react-toastify';

import Routing from './main-routing.component';
import Footer from './components/footer/footer.component';
import Header from './components/header/header.component';

import AuthProvider from './shared/auth-provider';

import './app.css';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="container-fluid d-flex flex-column sticky-footer-wrapper">
      <AuthProvider>
        <ToastContainer autoClose={2000} />
        <Header />
        <main className="flex-fill">
          <Routing />
        </main>
        <Footer />
      </AuthProvider>
    </div>
  );
}

export default App;
