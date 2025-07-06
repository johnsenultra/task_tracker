import { BrowserRouter, Route, Routes } from "react-router-dom"
import LandingPage from "./pages/LandingPage.jsx"
import Layout from "./pages/Layout.jsx"
import Signin from "./pages/auth/Signin.jsx"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<LandingPage />} />
            <Route path="signin" element={<Signin />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
