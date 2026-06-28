import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Menu } from "lucide-react";
import SidebarUser from "../components/user/SidebarUser"; // Ajuste ton chemin d'import
import Navbar from "../components/Navbar";

export default function LayoutUser() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen text-white overflow-hidden">
      {/* BOUTON BURGER (MOBILE UNIQUEMENT) */}
      {!sidebarOpen && (
        <button
          onClick={() => setSidebarOpen(true)}
          className="md:hidden fixed top-4 left-4 z-30 p-2 rounded-xl bg-white/5 border border-white/10 text-white cursor-pointer backdrop-blur-md"
        >
          <Menu className="w-6 h-6" />
        </button>
      )}

      {/* NOTRE SIDEBAR SÉPARÉE */}
      <SidebarUser isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

      {/* ZONE DE CONTENU DYNAMIQUE */}
      <div className="flex-1 flex flex-col min-w-0 h-screen overflow-y-auto">
        <main className="p-6 md:p-10 max-w-7xl w-full mx-auto pt-20 md:pt-10">
          <div className="mb-6">
            <Navbar />
          </div>
          {/* Injecte le Dashboard ou Profil ici */}
          <Outlet />
        </main>
      </div>
    </div>
  );
}
