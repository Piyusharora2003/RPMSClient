import { initializeApp } from "firebase/app";
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import NoPage from './components/NoPage';
import Protected from './components/Protected';
import { getMessaging, onMessage } from "firebase/messaging";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

function App() {
  const app = initializeApp(firebaseConfig);
  const messaging = getMessaging(app);

  onMessage(messaging, (payload) => {
    console.log('Message received. ', payload);
    alert("Message recieved");
  });
  
  return (
    <BrowserRouter>
    <Routes>
        <Route index element={<Home />} />
        <Route path="*" element={<Protected Child = {NoPage} />} />
    </Routes>
    <Outlet/>
  </BrowserRouter>
  );
}

export default App;
