import React from 'react';
import { BrowserRouter as Router,  Routes, Route} from 'react-router-dom';
import Home from './Home1';
import ProjectsFirst from './projects/ProjectsFirst';
import Project22 from './projects/Project22';
import Project3 from './projects/Project3';
import Project4 from './projects/Project4';
function App() {
  return (
    <Router>
    <Routes>
         <Route path="/"  element={<Home />} />
        <Route path="projectFirst" element={<ProjectsFirst />} />
        <Route path="project2" element={<Project22 />} />
        <Route path="project3" element={<Project3 />} />
        <Route path="project4" element={<Project4 />} />
        <Route path="projectsSection"  element={<Home />} />
        <Route path="contactMeSection"  element={<Home />} />
     
        </Routes>
    </Router>
  );
} 
export default App;