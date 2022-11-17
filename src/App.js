import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Dashboard from './components/dashboard/Dashboard';
import Navbar from './components/layout/Navbar';
import React, { Component } from 'react';


// function App() {
//   return (
//     <BrowserRouter>
//       <div className="App">
//         <Navbar />
//         <Routes>
//           <Route path='/' element={<Dashboard />} />
//         </Routes>
//       </div>  
//     </BrowserRouter> 
//   );
// }

// export default App;

class App extends Component {
  state = {  } 
  render() { 
    return (
      <BrowserRouter>
      //       <div className="App">
      //         <Navbar />
      //         <Routes>
      //           <Route path='/' element={<Dashboard />} />
      //         </Routes>
      //       </div>  
      //     </BrowserRouter> 
    );
  }
}
 
export default App;
