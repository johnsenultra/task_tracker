import { BrowserRouter, Route, Routes } from "react-router-dom"
import LandingPage from "./pages/LandingPage.jsx"
import Header from "./components/Header.jsx"
import Signin from "./pages/auth/Signin.jsx"
import Singup from "./pages/auth/Signup.jsx"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<LandingPage />} />
            <Route path="signin" element={<Signin />} />
            <Route path="signup" element={<Singup />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
