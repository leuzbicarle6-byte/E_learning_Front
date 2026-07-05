import React from "react";
import { useParams, Link } from "react-router-dom";
import { useGetProfileUserByIdQuery } from "../../backend/features/user/userApi";
import {
  Loader2,
  AlertCircle,
  ArrowLeft,
  Mail,
  Calendar,
  Shield,
  User,
  Award,
  BookOpen,
} from "lucide-react";
import { useGetMeStatsQuery } from "../../backend/features/courses/coursesApi";

export default function UserDetails() {
  const { id } = useParams();

  const {
    data: user,
    isLoading,
    isError,
    error,
  } = useGetProfileUserByIdQuery(id);

  const { data: stats, isLoading: statsLoading } = useGetMeStatsQuery(id);

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-4">
        <Loader2 className="w-8 h-8 text-indigo-500 animate-spin" />
        <p className="text-sm text-white/50">
          Chargement de la fiche utilisateur...
        </p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="max-w-md mx-auto mt-10 p-6 rounded-2xl border border-rose-500/20 bg-rose-500/10 text-center space-y-3">
        <AlertCircle className="w-8 h-8 text-rose-400 mx-auto" />
        <h3 className="text-white font-semibold">
          Impossible de charger le profil
        </h3>
        <p className="text-xs text-rose-300/70">
          {error?.data?.detail ||
            "Cet utilisateur n'existe pas ou vous n'avez pas les droits requis."}
        </p>
        <Link
          to="/admin/users"
          className="inline-flex items-center text-xs text-indigo-400 hover:underline pt-2"
        >
          <ArrowLeft className="w-3 h-3 mr-1" /> Retour à la liste
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6 p-4 md:p-6 text-white animate-in fade-in duration-300">
      {/* Bouton Retour */}
      <Link
        to="/admin/users"
        className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors group mb-2"
      >
        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
        Retour à la liste des utilisateurs
      </Link>

      {/* En-tête Profil */}
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md flex flex-col sm:flex-row items-center gap-6">
        {/* Avatar */}
        <div className="w-20 h-20 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 text-3xl font-bold font-mono shadow-inner">
          {user?.first_name ? (
            user.first_name[0].toUpperCase()
          ) : (
            <User className="w-10 h-10" />
          )}
        </div>

        {/* Identité basique */}
        <div className="text-center sm:text-left space-y-1.5 flex-1">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
            <h1 className="text-2xl font-bold tracking-tight">
              {user?.first_name || user?.last_name
                ? `${user.first_name} ${user.last_name}`
                : "Utilisateur sans nom"}
            </h1>

            {/* Rôle */}
            <div>
              {user?.role === "admin" || user?.is_superuser ? (
                <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-amber-500/10 text-amber-400 border border-amber-500/20">
                  <Shield className="w-3 h-3" /> Admin
                </span>
              ) : (
                <span className="inline-flex items-center text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-white/5 text-white/60">
                  Étudiant
                </span>
              )}
            </div>
          </div>
          <p className="text-white/40 text-sm font-mono flex items-center justify-center sm:justify-start gap-1.5">
            <Mail className="w-4 h-4 text-white/20" /> {user?.email}
          </p>
        </div>

        {/* Indicateur de statut d'activité */}
        <div className="sm:text-right">
          {user?.is_active ? (
            <span className="inline-flex items-center text-xs font-semibold px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              Compte Actif
            </span>
          ) : (
            <span className="inline-flex items-center text-xs font-semibold px-3 py-1 rounded-full bg-rose-500/10 text-rose-400 border border-rose-500/20">
              Compte Suspendu
            </span>
          )}
        </div>
      </div>

      {/* Grille d'informations détaillées */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Métriques / Progression */}
        <div className="md:col-span-1 rounded-2xl border border-white/10 bg-white/5 p-6 space-y-4">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-white/40 font-mono">
            Performances
          </h2>

          {/* XP Gagnée */}
          <div className="p-4 rounded-xl bg-white/2 border border-white/5 flex items-center gap-4">
            <Award className="w-8 h-8 text-amber-400" />
            <div>
              <p className="text-2xl font-bold font-mono">
                {user?.total_xp || 0}
              </p>
              <p className="text-xs text-white/40">Points d'XP Totaux</p>
            </div>
          </div>

          {/* Nombre de cours suivis */}
          <div className="p-4 rounded-xl bg-white/2 border border-white/5 flex items-center gap-4">
            <BookOpen className="w-8 h-8 text-indigo-400" />
            <div>
              <p className="text-2xl font-bold font-mono">
                {user?.course_progress?.length || 0}
              </p>
              <p className="text-xs text-white/40">Cours commencés</p>
            </div>
          </div>
          <div className="p-4 rounded-xl bg-white/2 border border-white/5 flex items-center gap-4">
            <BookOpen className="w-8 h-8 text-indigo-400" />
            <div>
              <p className="text-2xl font-bold font-mono">
                {statsLoading
                  ? "..."
                  : `${stats?.completed_courses} / ${stats?.total_courses}`}
              </p>
              <p className="text-xs text-white/40">
                Cours terminés ({stats?.completion_percentage}%)
              </p>
            </div>
          </div>
        </div>

        {/* Détails du compte */}
        <div className="md:col-span-2 rounded-2xl border border-white/10 bg-white/5 p-6 space-y-4">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-white/40 font-mono">
            Détails du compte
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div className="space-y-1 bg-white/5 rounded-md px-4 py-2">
              <span className="text-white/40 text-xs">
                Identifiant unique (ID)
              </span>
              <p className="font-mono text-white/80">{user?.id}</p>
            </div>

            <div className="space-y-1 bg-white/5 rounded-md px-4 py-2">
              <span className="text-white/40 text-xs">Numéro de téléphone</span>
              <p className="text-white/80">
                {user?.phone_number || "Non renseigné"}
              </p>
            </div>

            <div className="space-y-1 bg-white/5 rounded-md px-4 py-2">
              <span className="text-white/40 text-xs">Dernière connexion</span>
              <p className="text-white/80">
                {user?.last_login
                  ? new Date(user.last_login).toLocaleDateString("fr-FR", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })
                  : "Jamais connecté"}
              </p>
            </div>

            <div className="space-y-1 bg-white/5 rounded-md px-4 py-2">
              <span className="text-white/40 text-xs flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" /> Date d'inscription
              </span>
              <p className="text-white/80">{user?.created_at || "N/A"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
