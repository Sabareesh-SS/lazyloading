import {Route,Routes} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar.jsx'
import React,{Suspense,lazy} from 'react'
    

const  Home= lazy(() => import('./pages/Home'));
const  Page1= lazy(() => import('./pages/Page1'));
const  Page2= lazy(() => import('./pages/Page2'));
const  Page3= lazy(() => import('./pages/Page3'));
const  Page4= lazy(() => import('./pages/Page4'));
const  Page5= lazy(() => import('./pages/Page5'));
const  Page6= lazy(() => import('./pages/Page6'));
const  Page7= lazy(() => import('./pages/Page7'));
const  Page8= lazy(() => import('./pages/Page8'));
const  Page9= lazy(() => import('./pages/Page9'));
const  Page10= lazy(() => import('./pages/Page10'));


export default function App() {
  return (
    <div>
      <Navbar />

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/lazyloading" element={<Home />} />
          <Route path="/lazyloading/Page1" element={<Page1 />} />
          <Route path="/lazyloading/Page2" element={<Page2 />} />
          <Route path="/lazyloading/Page3" element={<Page3 />} />
          <Route path="/lazyloading/Page4" element={<Page4 />} />
          <Route path="/lazyloading/Page5" element={<Page5 />} />
          <Route path="/lazyloading/Page6" element={<Page6 />} />
          <Route path="/lazyloading/Page7" element={<Page7 />} />
          <Route path="/lazyloading/Page8" element={<Page8 />} />
          <Route path="/lazyloading/Page9" element={<Page9 />} />
          <Route path="/lazyloading/Page10" element={<Page10 />} />
        </Routes>
      </Suspense>
    </div>
  )
}
