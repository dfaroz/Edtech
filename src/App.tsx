import { Container } from "react-bootstrap"
import { Route, Routes } from "react-router"
import { Footer } from "./components/molecules/footer"
import { Navbar } from "./components/molecules/navbar"
import { BuyaCourse } from "./pages/buyacourse"
import { Categories } from "./pages/categories"
import { Edtech } from "./pages/edtech"
import { Pricing } from "./pages/pricing"
import { Success } from "./pages/success"

function App() {
  return (
    <div className="bg-primary">
      <Navbar />
      <Container style={{
            backgroundImage: 'url(../public/Group-1.svg)',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: '100%'
        }}>
        <Routes>
          <Route path="/" element={<Edtech />}/>
          <Route path="/buy-a-course" element={<BuyaCourse />}/>
          <Route path="/success" element={<Success />}/>
          <Route path="/categories" element={<Categories />}/>
          <Route path="/pricing" element={<Pricing />}/>
        </Routes>
      </Container>    
      <Footer />
    </div>
  )
}

export default App
