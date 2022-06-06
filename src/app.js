import Routing from './main-routing.component';
import Footer from './components/footer/footer.component';
import Header from './components/header/header.component';

import './app.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="container-fluid d-flex flex-column sticky-footer-wrapper">
      <Header />
      <main className="flex-fill">
        <Routing />
      </main>
      <Footer />
    </div>
  );
}

export default App;
