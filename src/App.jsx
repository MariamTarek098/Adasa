import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css'
import Blog from './pages/Blog/Blog'
import Home from './pages/Home/Home'
import BlogDetails from './pages/BlogDetails/BlogDetails'
import NotFound from './pages/NotFound/NotFound'
import Layout from './components/Layout/Layout'

function App() {
  const routes = createBrowserRouter([
    {path:'/', element:<Layout/> , children:[
      {path:'', element:<Home/>},
      {path:'blog', element:<Blog/>},
      { path: 'blog/:slug', element: <BlogDetails /> },
      { path: '404', element: <NotFound /> },
      { path: '*', element: <NotFound /> },
    ]}
  ]);

  return (
    <>
      <RouterProvider router={routes}/>
    </>
  )
}

export default App
