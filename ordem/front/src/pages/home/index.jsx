import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "components/Header";

export default function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    document.body.classList.add("hide-scrollbar");

    return () => {
      document.body.classList.remove("hide-scrollbar");
    };
  }, []);

  const options = [
    { label: "Ordem de Serviço", path: "/ordem-servico" },
    { label: "Manutentor", path: "/manutentor" },
    { label: "Históricos", path: "/historicos" },
    { label: "Patrimônio", path: "/patrimonio" },
    { label: "Ambiente", path: "/ambiente" },
    { label: "Responsáveis", path: "/responsaveis" },
    { label: "Gestores", path: "/gestores" },
  ];

  return (
    <>
      <Header />
      <main className="h-[calc(100vh-90px)] flex items-center justify-center p-8 bg-gray-100">
        <div className="flex flex-col gap-9 w-full max-w-md">
          {options.map((option, index) => (
            <button
              key={index}
              onClick={() => navigate(option.path)}
              className="bg-white shadow-md hover:shadow-lg hover:bg-gray-200 text-gray-800 font-semibold py-4 px-6 rounded-xl transition-all duration-300 text-center text-lg w-full"
            >
              {option.label}
            </button>
          ))}
        </div>
      </main>
    </>
  );
}
