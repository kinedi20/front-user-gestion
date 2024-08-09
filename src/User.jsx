import axios from 'axios';
import React, { useState } from 'react'
import { BsTelephone } from 'react-icons/bs';
import { useLocation, useNavigate } from 'react-router-dom';


const url = "http://localhost:3000/user";

const User = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  const [options, setOptions] = useState([]);

  const [formData, setFormData] = useState({
    email: state.user.email,
    phone: state.user.phone,
    lastname: state.user.lastname,
    firstname: state.user.firstname,
    phone: state.user.phone,
    role: state.user.role,
    status:state.user.status,
    address: state.user.address,

   
  });


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  }; 

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.put(
        url+"/" +state.user.id,
        formData
      );
      navigate('/');
      console.log(response.data);
      
    } catch (error) {
      console.error("Erreur lors de l'inscription:", error);
      
    }
  
  };

  return (
     <div className=" p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Voir l' utilisateur</h2>
      <div>
       <h2 className='text-gray-400 my-3'>info utilisateur</h2>
      </div>
      <form onSubmit={handleSubmit} >
        <div className="grid grid-rows-3 grid-flow-col gap-3">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Adresse e-mail</label>
          <input
            type="email"
            value={formData.email}
            name='email'
            onChange={handleChange}
            className="mt-1 block w-11/12 border border-gray-300 rounded-md p-2"
            placeholder="alexander.foley@mail.com"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Numéro de téléphone</label>
          <input
            type="tel"
            name='phone'
            value={formData.phone}
            onChange={handleChange}
            className="mt-1 block w-11/12 border border-gray-300 rounded-md p-2"
            placeholder="(+237) 696 88 77 55"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Nom</label>
          <input
            type="text"
            name='lastname'
            value={formData.lastname}
            onChange={handleChange}
            className="mt-1 block w-11/12 border border-gray-300 rounded-md p-2"
            placeholder="Nom"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Prénom</label>
          <input
            type="text"
            value={formData.firstname}
            name='firstname'
            onChange={handleChange}
            className="mt-1 block w-11/12 border border-gray-300 rounded-md p-2"
            placeholder="Prénom"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Rôle</label>
          <select
            value={formData.role}
            name='role'
            onChange={handleChange}
            className="mt-1 block w-11/12 border border-gray-300 rounded-md p-2 bg-white"
            required
          >
            <option value="">Sélectionner un rôle</option>
            <option value="Agence">Agence</option>
            <option value="Mandataire">Mandataire</option>
            <option value="Client">Client</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Adresse</label>
          <input
            type="text"
            value={formData.address}
            onChange={handleChange}
            name='address'
            className="mt-1 block w-11/12 border border-gray-300 rounded-md p-2"
            placeholder="Mariste, Dakar, Sénégal"
            required
          />
        </div>
        </div>
        <button
          type="submit"
          className="w-1/12 bg-blue-600 text-white rounded-md py-2 mt-4"
        >
          Modifier
        </button>
      </form>
    </div>
  )
}

export default User