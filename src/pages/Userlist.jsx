import React from "react";
import { Link } from "react-router-dom";

const Userlist = () => {
  const users = [
    {
      lastName: "Alexander",
      firstName: "Foley",
      email: "alexander.foley@gmail.com",
      role: "Admin",
      status: "Actif",
    },
    {
      lastName: "Alexander",
      firstName: "Foley",
      email: "alexander.foley@gmail.com",
      role: "Agence",
      status: "Actif",
    },
    {
      lastName: "Alexander",
      firstName: "Foley",
      email: "alexander.foley@gmail.com",
      role: "Mandataire",
      status: "Inactif",
    },
    {
      lastName: "Alexander",
      firstName: "Foley",
      email: "alexander.foley@gmail.com",
      role: "Client",
      status: "Actif",
    },
  ];
  return (
    <div className="p-6 bg-gray-100 h-screen">
      <h1 className="text-3xl font-bold mb-4">Configuration</h1>
      <div className="flex flex-col  mb-4  items-start gap-3">
        <input
          type="text"
          placeholder="Vous cherchez quel utilisateur ..."
          className="border border-gray-300 rounded-lg p-2 w-3/5 mr-4"
        />
        <Link to="/adduser">
          <button className="bg-blue-600 text-white rounded-lg px-4 py-2">
            Ajouter un utilisateur +
          </button>
        </Link>
      </div>
      <table className="min-w-full bg-white h-20     ">
        <thead className="bg-white text-gray-500">
          <tr>
            <th className="p-2 text-left">Noms</th>
            <th className="p-2 text-left">Prénoms</th>
            <th className="p-2 text-left">E-mails</th>
            <th className="p-2 text-left">Rôles</th>
            <th className="p-2 text-left">Statut</th>
            <th className="p-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="p-2 border-b-2  border-slate-300">
                {user.lastName}
              </td>
              <td className="p-2 border-b-2  border-slate-300">
                {user.firstName}
              </td>
              <td className="p-2 border-b-2  border-slate-300">{user.email}</td>
              <td className="p-2 border-b-2  border-slate-300">{user.role}</td>
              <td
                className={`p-2  border-b-2  border-slate-300 ${
                  user.status === "Actif" ? "text-green-500" : "text-red-500"
                }`}
              >
                {user.status}
              </td>
              <td className="p-4 border-b-2  border-slate-300 flex gap-2 items-center ">
                {/* <button className="text-blue-500 mr-2">VOIR</button> */}
                <Link to="/user">
                <button className="px-5 py-2 bg-transparent items-center justify-center flex border-2 border-sky-500 shadow-lg hover:bg-sky-500 text-sky-500 hover:text-white duration-300 cursor-pointer active:scale-[0.98] rounded-xl w-20">
                  Voir
                </button>
                </Link>
                {/* <button className="text-red-500">Supprimer</button> */}
                <button className="inline-flex items-center px-4 py-2 bg-red-600 transition ease-in-out delay-75 hover:bg-red-700 text-white text-sm font-medium hover:-translate-y-1 hover:scale-110  rounded-xl text-center">
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Userlist;
