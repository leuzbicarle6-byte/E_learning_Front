import React from "react";
import { useGetUserProfileQuery } from "../../backend/features/user/userApi";
import { Loader2, User, Mail, Phone, Calendar, Award, Shield } from "lucide-react";

export default function Profile() {
  const { data: profile, isLoading, isError } = useGetUserProfileQuery();

  if (isLoading) {
    return (
      <div className="text-center text-white/50 p-10">
        <Loader2 className="w-6 h-6 animate-spin mx-auto mb-2 text-indigo-500" />
        Chargement du profil...
      </div>
    );
  }

  if (isError || !profile) {
    return (
      <div className="text-center text-rose-400 p-10">
        Impossible de charger les informations du profil.
      </div>
    );
  }

  // Formatage de la date d'inscription (ex: 17 juin 2026)
  const memberSince = new Date(profile.created_at).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-6 text-white space-y-6 animate-in fade-in duration-200">
      
      {/* ENTÊTE DU PROFIL */}
      <div className="relative p-6 rounded-2xl border border-white/5 bg-white/5 flex flex-col md:flex-row items-center gap-6 overflow-hidden">
        {/* Effet de lumière en arrière-plan */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />

        {/* Avatar Placeholder ou Image */}
        <div className="w-20 h-20 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shadow-inner">
          {profile.avatar ? (
            <img src={profile.avatar} alt="Avatar" className="w-full h-full rounded-full object-cover" />
          ) : (
            <User className="w-10 h-10" />
          )}
        </div>

        {/* Identité */}
        <div className="text-center md:text-left space-y-1 flex-1">
          <h1 className="text-2xl font-bold font-display tracking-tight">
            {profile.first_name} {profile.last_name}
          </h1>
          <div className="flex flex-wrap justify-center md:justify-start gap-2 pt-1">
            <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 bg-indigo-500/10 text-indigo-400 rounded-md border border-indigo-500/20">
              <Shield className="w-3 h-3" /> {profile.role}
            </span>
            <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 bg-emerald-500/10 text-emerald-400 rounded-md border border-emerald-500/20">
              <Award className="w-3 h-3" /> {profile.total_xp} XP
            </span>
          </div>
        </div>
      </div>

      {/* RESTE DES INFORMATIONS (GRILLE) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Coordonnées */}
        <div className="p-5 rounded-2xl border border-white/5 bg-white/5 space-y-4">
          <h3 className="text-xs font-bold uppercase tracking-wider text-white/40">
            Informations personnelles
          </h3>
          
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-sm">
              <Mail className="w-4 h-4 text-white/40" />
              <div>
                <p className="text-[10px] text-white/40 uppercase">Adresse Email</p>
                <p className="text-white/80 font-medium">{profile.email}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 text-sm">
              <Phone className="w-4 h-4 text-white/40" />
              <div>
                <p className="text-[10px] text-white/40 uppercase">Téléphone</p>
                <p className="text-white/80 font-medium">
                  {profile.phone_number || "Non renseigné"}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Statistiques / Activité */}
        <div className="p-5 rounded-2xl border border-white/5 bg-white/5 space-y-4">
          <h3 className="text-xs font-bold uppercase tracking-wider text-white/40">
            Activité du compte
          </h3>

          <div className="space-y-3">
            <div className="flex items-center gap-3 text-sm">
              <Calendar className="w-4 h-4 text-white/40" />
              <div>
                <p className="text-[10px] text-white/40 uppercase">Membre depuis le</p>
                <p className="text-white/80 font-medium">{memberSince}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 text-sm">
              <Award className="w-4 h-4 text-indigo-400" />
              <div>
                <p className="text-[10px] text-white/40 uppercase">Niveau global</p>
                <p className="text-white/80 font-medium">
                  {profile.total_xp >= 100 ? "Apprenti Avancé" : "Débutant"}
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}