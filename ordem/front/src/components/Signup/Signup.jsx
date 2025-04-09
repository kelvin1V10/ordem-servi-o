import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaUserPlus } from "react-icons/fa";

export default function Signup() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("tecnico");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const cadastrar = async () => {
    if (!user || !password) {
      alert("Preencha todos os campos.");
      return;
    }

    setLoading(true);
    try {
      await axios.post("http://127.0.0.1:8000/api/signup/", {
        username: user,
        password: password,
        role: role,
      });
      alert("Cadastro realizado com sucesso!");
      navigate("/login");
    } catch (error) {
      console.error(error);
      alert("Erro ao cadastrar. Verifique os dados.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <FaUserPlus className="text-4xl text-gray-600 mb-4" />

      <input
        className="w-64 p-2 mb-3 border rounded-lg shadow-sm bg-white bg-opacity-30 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-black"
        value={user}
        onChange={(e) => setUser(e.target.value)}
        placeholder="Username"
      />

      <input
        type="password"
        className="w-64 p-2 mb-3 border rounded-lg shadow-sm bg-white bg-opacity-30 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-black"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />

      <select
        className="w-64 p-2 mb-4 border rounded-lg shadow-sm bg-white bg-opacity-30 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-black"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      >
        <option value="tecnico">Técnico</option>
        <option value="chefe">Chefe de Manutenção</option>
        <option value="admin">Administrador</option>
      </select>

      <button
        className={`w-64 p-2 ${loading ? "bg-gray-700" : "bg-black"} text-white rounded-lg hover:bg-gray-900 transition`}
        onClick={cadastrar}
        disabled={loading}
      >
        {loading ? "Cadastrando..." : "Cadastrar"}
      </button>
    </div>
  );
}
