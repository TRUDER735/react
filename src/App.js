import {  
  createBrowserRouter,
  Route, 
  createRoutesFromElements,
  RouterProvider
} from "react-router-dom";

import Contact, { contactAction } from "./pages/help/Contact";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Faq from "./pages/help/Faq";
 

// Layouts
import RootLayout from "./layouts/RootLayout";
import HelpLayout from "./layouts/HelpLayout";
import NotFound from "./pages/NotFound";
import CareersLayout from "./layouts/CareersLayout";
import Careers, { careersLoader } from "./pages/Careers";
import CareerDetails, { careersDetailsLoader } from "./pages/CareerDetails";
import CareersError from "./pages/CareersError";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
      <Route path="/" element={<Home />}/>
      <Route path="about" element={<About />}/>

      <Route path="help" element={<HelpLayout/>}>
        <Route path="faq" element={<Faq/>}/>
        <Route path="contact" element={<Contact/>} action={contactAction}/>
      </Route>

    <Route path="careers" element={<CareersLayout/>} errorElement={<CareersError/>}>
      <Route 
        index 
        element={<Careers/>}
        loader={careersLoader}
      />

      <Route
        path=':id'
        element={<CareerDetails/>}
        loader={careersDetailsLoader}
        
      />
    </Route>

      <Route path="*" element={<NotFound/>}/>
    </Route>
  )
)

function App() {
  return (
    
    <RouterProvider router={router}/>
    
  );
}

export default App
