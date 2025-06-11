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
    </>
  )
}

export default App
