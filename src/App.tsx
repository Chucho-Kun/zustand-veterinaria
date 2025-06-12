import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"
import PatientForm from './components/PatientForm';
import PatientsList from './components/PatientsList';

function App() {

  return (
    <>
      <div className="container mx-auto mt-20">
      <div className="mt-12 md:flex">
        <PatientForm />
        <PatientsList />
      </div>
        
      </div>
      <ToastContainer />
    </>
  )
}

export default App
