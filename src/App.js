import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import ProductAll from "./page/ProductAll";
import Login from "./page/Login";
import PrivateRoute from "./Route/PrivateRoute";

//1.전체상품페이지, 로그인,상품상세페이지
//1-1네비게이션바 만들기  
//2.전체 상품페이지에서는 전체 상품을 볼 수있다.
//3. 로그인 버튼을 누르면 로그인 페이지가 나온다
//4. 상품디테일을 누르면 로그인 페이지가 나온다
//5. 로그인이 되어있을 경우에는 상품 디테일 페이지를 볼 수 있다.
//6. 로그아웃 버튼을 클릭하면 로그아웃이 된다
//7. 로그아웃이 되면 상품디테일 페이지를 볼수 없다 다시로그인 페이지로
//8. 로그인을하면 로그아웃이보이고 로그아웃을하면 로그인이 보인다
//9 상품을 검색할수있다 



function App() {
  let [authenticate, setAuthenticate] = useState(false);
  return (
    <div>
      <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate} />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route
          path="/login"
          element={<Login setAuthenticate={setAuthenticate} />}
        />
        <Route
          path="/product/:id"
          element={<PrivateRoute authenticate={authenticate} />}
        />
      </Routes>
    </div>
  );
}

export default App;
