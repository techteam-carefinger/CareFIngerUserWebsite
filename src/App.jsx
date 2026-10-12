import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import Partner from './pages/Partner.jsx'
import Contact from './pages/Contact.jsx'
import Policy from './pages/Policy.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="partner" element={<Partner />} />
        <Route path="contact" element={<Contact />} />
        <Route path="privacy" element={<Policy />} />
        <Route path="terms" element={<Policy />} />
        <Route path="partner-terms" element={<Policy />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
