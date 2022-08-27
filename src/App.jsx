import './App.css'
import Row from "./components/row/Row"
import Banner from "./components/banner/Banner"
import Nav from "./components/nav/Nav"
import Footer from './components/footer/footer'
import categories from "./api"

function App() {
  return (
    <div className="App">
        <Nav />
        <Banner />
        {categories.map((category) => {
          return (
            <Row 
              key={category.name}
              title={category.title}
              path={category.path}
              isLarge={category.isLarge}
            />
          );
        })}
        <Footer />
    </div>
  )
}

export default App;