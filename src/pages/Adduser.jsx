import React, { useState } from 'react'

const Adduser = () => {
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [lastName, setLastName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [role, setRole] = useState('');
    const [address, setAddress] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logique pour soumettre les données
        console.log({ email, phone, lastName, firstName, role, address });
      };


  return (
    <div className=" p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Configuration</h2>
      <div>
       <h2 className='text-gray-400 my-3'>Ajouter compte</h2>
      </div>
      <form onSubmit={handleSubmit} >
        <div className="grid grid-rows-3 grid-flow-col gap-3">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Adresse e-mail</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-11/12 border border-gray-300 rounded-md p-2"
            placeholder="alexander.foley@mail.com"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Numéro de téléphone</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="mt-1 block w-11/12 border border-gray-300 rounded-md p-2"
            placeholder="(+237) 696 88 77 55"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Nom</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="mt-1 block w-11/12 border border-gray-300 rounded-md p-2"
            placeholder="Nom"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Prénom</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="mt-1 block w-11/12 border border-gray-300 rounded-md p-2"
            placeholder="Prénom"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Rôle</label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
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
            value={address}
            onChange={(e) => setAddress(e.target.value)}
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
          Sauvegarder
        </button>
      </form>
    </div>
  )
}

export default Adduser