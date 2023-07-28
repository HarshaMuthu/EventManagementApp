import React, { useState, useEffect } from "react";
import { Landing } from "./components/landing";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import Login from './components/login'
// import { About } from "./components/about";
// import { Services } from "./components/services";
// import { Gallery } from "./components/gallery";
// import { Testimonials } from "./components/testimonials";
// import { Team } from "./components/Team";
// import { Contact } from "./components/contact";
import Form from "./components/signup";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
// import RegistrationForm from "./components/register";
import Registration from "./components/RegistrationForm";
import FeedForm from "./components/FeedForm";
import { Provider } from "react-redux";
import store from "./components/store";
import UserProfile from "./components/userprofile";
export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  // const [landingPageData, setLandingPageData] = useState({});
  // useEffect(() => {
  //   setLandingPageData(JsonData);
  // }, []);

//   return (
//     <div>
//       {/* <Login/> */}
//       <Navigation />
//       <Header data={landingPageData.Header} />
//       <About data={landingPageData.About} />
//       <Services data={landingPageData.Services} />
//       <Gallery data={landingPageData.Gallery} />
//       <Testimonials data={landingPageData.Testimonials} />
//       <Team data={landingPageData.Team} />
//       <Contact data={landingPageData.Contact} />
//     </div>
//   );
// };


return (
  <Provider store={store}>
  <div>


<Router>
  <Routes>

      
        <Route path="/" element={<Login/>} />
        <Route path="/register" element={<Form/>} />
        <Route path="/home" element={<Landing/>} />
        <Route path="/reg" element={<Registration/>}/>
        <Route path="/feedform" element={<FeedForm />}/>
        <Route path="/user" element={<UserProfile />}/>
        
    
        </Routes>
    </Router>
    </div>
    </Provider>
  );
};

export default App;

