import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Single from './pages/single/Single';
import New from './pages/new/New';
import List from './pages/list/List';
import { useContext } from "react";
import { AuthContext } from './component/context/AuthContext';


import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";  
import { productInputs, userInputs } from './formSource';
function App() {

const {currentUser} = useContext(AuthContext)

const RequireAuth = ({children})=>{
  return currentUser ? (children) : <Navigate to="/login"/>;
}

console.log(currentUser)
  return (
<div className="App">
<BrowserRouter>
    <Routes>
      <Route path="/">
      <Route path="login" element={<Login />} />
      <Route index element={<RequireAuth><Home /></RequireAuth>}/>
        

        <Route path="users">
          <Route index element={<RequireAuth><List /></RequireAuth>} />
          <Route path=":userId" element={<RequireAuth><Single /></RequireAuth>} />
          <Route path="new" element={<New inputs={userInputs} title="Add New GSO"/>} />
        </Route>

        <Route path="product">
          <Route index element={<List/>} />
          <Route path=":productId" element={<Single/>} />
          <Route path="new" element={<New inputs={productInputs} title="Add New Branch"/>} />
        </Route>

      </Route>
    </Routes>
  </BrowserRouter>,
</div>
  );
}

export default App;
