import React, { useState } from 'react';
import './App.css';
import GradesList from './components/GradesList';
import { Grade } from './interfaces';
import GradeDetails from './components/GradesDetails';

// function App() {
//   return (
//     <div id='all' className='container-fluid p-0 d-flex flex-column min-vh-100'>
//       <nav id='mainNavbar' className="navbar sticky-top">
//         <div className="container-fluid justify-content-center mt-2 mb-2">
//           <span id='brand' className="navbar-brand">Grades Project for DSS</span>
//         </div>
//       </nav>

//       <section className='container-fluid'>
//         <div id='mainContent' className='row'>
//           <div className='col-8 bg-warning border-end'>asdasdasdaslore</div>
//           <section className='content-details col-4 bg-success'>dasdasdasdasdas</section>
//         </div>
//       </section>

//       <div className="container-fluid p-0 mt-auto">
//         <footer id='footer' className='justify-content-center pb-2 pt-2'>
//           <span id='footerText' className='navbar-brand'>2023 Grades Management System</span>
//         </footer>
//       </div>
//     </div>
//   );
// }

const App: React.FC = () => {
  let grade1: Grade = {
    id: 1,
    studentFirstName: "Petar",
    studentLastName: "Stoykov",
    subject: "Maths",
    score: 15,
    date: new Date(),
    active: true,
  };

  let grade2: Grade = {
    id: 2,
    studentFirstName: "Ivan",
    studentLastName: "Ivanov",
    subject: "Literature",
    score: 18,
    date: new Date(),
    active: true,
  };

  let grade3: Grade = {
    id: 3,
    studentFirstName: "Mihail",
    studentLastName: "Simeonov",
    subject: "Sports",
    score: 20,
    date: new Date(),
    active: true,
  };

  let gradesInitial = [grade1, grade2, grade3];

  const [grades, setGrades] = useState(gradesInitial);
  const [selectedGrade, setGrade] = useState<Grade>(grade1);

  const handleSaveGrade = (grade: Grade) => {
    let gradesLength = grades.length + 1;
    grade.id = gradesLength;
    let gradeArray = [...grades, grade] as Grade[];
    setGrades(gradeArray);
  };

  const handleGradeUpdate = (grade: Grade) => {
    let gradeIndex = grades.findIndex((item) => item.id === grade.id);
    let gradesArr = [...grades];
    let updatedGrade = { ...grades[gradeIndex] };
    updatedGrade = grade;
    gradesArr[gradeIndex] = updatedGrade;
    setGrades(gradesArr);

  }

  const handleGradeSelection = (grade: Grade) => {
    setGrade(grade);
  }

  const handleGradeDelete = (gradeArr: Grade[]) => {
    let idIndex = 1;
    for (let i = 0; i < gradeArr.length; i++) {
      gradeArr[i].id = idIndex++;
    }
    return gradeArr;
  };



  return (
    <div id='all' className='container-fluid p-0 d-flex flex-column min-vh-100'>
      <nav id='mainNavbar' className="navbar sticky-top">
        <div className="container-fluid justify-content-center mt-2 mb-2">
          <span id='brand' className="navbar-brand">Grades Project for DSS</span>
        </div>
      </nav>

      <section className='container-fluid min-vh-100 d-flex flex-column'>
        <div id='mainContent' className='row flex-grow-1'>
          <section id='list' className='content-list col-lg-8'>
            <GradesList grades={grades} onSelectedGrade={handleGradeSelection} onDeletedGrade={(newGrades) => setGrades(handleGradeDelete(newGrades))} />
          </section>
          <section className='content-details col-lg-4'>
            <GradeDetails onSave={handleSaveGrade} onUpdate={handleGradeUpdate} selectedGrade={selectedGrade} />
          </section>
        </div>
      </section>

      <div className="container-fluid p-0 mt-auto">
        <footer id='footer' className='justify-content-center pb-2 pt-2'>
          <span id='footerText' className='navbar-brand'>2023 Grades Management System</span>
        </footer>
      </div>
    </div>
  );
}

export default App;
