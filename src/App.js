import React from 'react';
import './style.css';
import { Header, Footer, Content } from './components/index';
import {
  Courses,
  Dashboard,
  Doctors,
  Home,
  Hospitals,
  Login,
  News,
  Signup,
} from './pages/index';
export default function App() {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}
