import Navbar from "./components/Nav";
import Profile from "./components/Profile";
import Signin from "./components/Signin";
import Signup from "./components/Signup";

import { BrowserRouter as Router, Routes, Switch, Link,Route } from 'react-router-dom';



function App() {
  return (
    <div>
      
      <Router>
      <div className="App">
        {/* <Navbar/> */}
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />       
          <Route path="/profile" element={<Profile />} />       
        </Routes>
      </div>
      </Router>
      
    </div>
  );
}

export default App;
