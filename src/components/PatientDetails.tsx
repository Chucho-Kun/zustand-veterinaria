import { use } from "react"
import { usePatientStore } from "../store"
import type { Patient } from "../types"
import PatienDetailItem from "./PatienDetailItem"

type PatientDetailsProps = {
    patient: Patient
}

export default function PatientDetails({ patient } : PatientDetailsProps) {

  const deletPatient =  usePatientStore( state => state.deletePatient )

  return (
    <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">
        <PatienDetailItem label="ID" data={ patient.id } />
        <PatienDetailItem label="Nombre" data={ patient.name } />
        <PatienDetailItem label="Propietario" data={ patient.caretaker } />
        <PatienDetailItem label="Email" data={ patient.email } />
        <PatienDetailItem label="Fecha ingreso" data={ patient.date.toString() } />
        <PatienDetailItem label="Sintomas" data={ patient.symptoms } />

        <div className="flex justify-between mt-10">
            <button
                type="button"
                className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"    
            >Editar</button>
            <button
                type="button"
                className="py-2 px-10 bg-red-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"    
                onClick={() => deletPatient( patient.id )}
            >Eliminar</button>
        </div>
    </div>
  )
}
