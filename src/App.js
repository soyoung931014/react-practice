
import './App.css';
import React from 'react'
import Sidebar from './Sidebar'
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Hello from './eventpractice'
import Hi from './state/useState'
function App() {
  return (
  
    <BrowserRouter>
    <div className="App">
      <Sidebar />
      <Hello />
     
    <Switch> {/* 스위치를 기준으로 스위치 외부는 브라우저에 보이고 스위치 내부는 url에 따라 각각 다른 페이지들을 보여줌
    만약 Footer가 필요하다면 </Switch>아래에 써주면된다. */}
     
      <Route exact path ='/'>  {/* <Switch></Switch>로 route들을 감싸면 일치하는 첫번째 결과가 보여진다. 이걸
      해결하기 위해서는 exact를 붙여준다. 이러면 링크랑 path랑 완전히 일치할때만 렌더링된다.. */}
        <Home />
      </Route>
      <Route path ='/about'>
        <MyPage />
      </Route>
      <Route path = '/dashboard'>
        <Dashboard />
      </Route>
    </Switch>
    <Hi />
    </div>
    </BrowserRouter>
     
  );
}

export default App;

//home 컴포넌트
function Home() {
  return <h1>Home</h1>
}
// MyPage 컴포넌트
function MyPage() {
  return <h1>MyPage</h1>
}
//Dashboard 컴포넌트
function Dashboard() {
  return <h1>Dashboard</h1>
}
