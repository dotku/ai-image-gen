import React from "react";
import { Route, Routes } from "react-router-dom";
import GenerateImagePage from "./pages/GenerateImagePage";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Analytics
const firebaseConfig = {
  apiKey: "AIzaSyDGB6qDFIZiqKkHFq4n0PDtwV4IgDAxVsM",
  authDomain: "auth-2e62f.firebaseapp.com",
  projectId: "auth-2e62f",
  storageBucket: "auth-2e62f.appspot.com",
  messagingSenderId: "548319390831",
  appId: "1:548319390831:web:715349f73577738117b19a",
  measurementId: "G-Q37KRLKL19"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  return (
    <Routes>
      <Route path="/" element={<GenerateImagePage app={app} />} />

      <Route path="/edit-image" element={<GenerateImagePage />} />
    </Routes>
  );
}

export default App;
