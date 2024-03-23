import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import './index.css'
import MyProject from './Components/ProjectPage/MyProject.jsx'
import Sampleproject from './Components/Samplepage/Sampleproject.jsx'
import Sampleapp from './Components/sampleapp/Sampleapp.jsx'
import Intro from './Components/introtonucleo/Intro.jsx'
import HelpSupport from './Components/Helpandsupport/HelpSupport.jsx'
import Feedback from './Components/Feedback/Feedback.jsx'


const router=createBrowserRouter(
  [{
    path:"/",
    element:<App/>,
    children:
      [
        {
          path:"/",
          element:<MyProject/>
        },
        {
          path:"/sample_project",
          element:<Sampleproject/>,
        },{
          path:'/projectapp',
          element:<Sampleapp/>,
        },{
          path:'/IntroToNucleo',
          element:<Intro/>
        },{
          path:'/HelpSupport',
          element:<HelpSupport/>
        },{
          path:'/Feedback',
          element:<Feedback/>
        }
      ]
  }]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
