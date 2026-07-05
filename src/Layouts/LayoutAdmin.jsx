import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Menu } from "lucide-react";
import Navbar from "../components/Navbar";
import SidebarA from "../components/admin/SidebarA";

export default function LayoutUser() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen text-white overflow-hidden bg-[#0a192f]">
      {/* BOUTON BURGER (MOBILE UNIQUEMENT) - Passé en z-55 pour être au-dessus de la Navbar */}
      {!sidebarOpen && (
        <button
          onClick={() => setSidebarOpen(true)}
          className="md:hidden fixed top-3 left-4 z-55 p-2 rounded-xl bg-white/5 border border-white/10 text-white cursor-pointer backdrop-blur-md"
        >
          <Menu className="w-5 h-5" />
        </button>
      )}

      {/* NOTRE SIDEBAR SÉPARÉE */}
      <SidebarA isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

      {/* ZONE DE CONTENU GLOBAL */}
      <div className="flex-1 flex flex-col min-w-0 h-screen overflow-y-auto">
        {/* 1. La Navbar est posée à la racine de la zone de contenu */}
        <Navbar />

        {/* 2. Le Main prend le relais avec un padding-top (pt-24 sur mobile / pt-20 sur desktop) pour laisser la place à la Navbar */}
        <main className="flex-1 p-4 sm:p-6 md:p-10 pt-24 max-w-7xl w-full mx-auto">
          {/* Injecte le Dashboard ou le Profil ici sans blocage */}
          <Outlet />
        </main>
      </div>
    </div>
  );
}
