import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"
import PatientForm from './components/PatientForm';
import PatientsList from './components/PatientsList';

function App() {

  return (
    <>
    <div className='text-center bg-orange-800 text-white font-black text-3xl pt-5 pb-5' >VETERINARIA</div>
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
