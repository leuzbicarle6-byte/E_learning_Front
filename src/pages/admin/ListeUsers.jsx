import React, { useState } from "react";
import {
  useGetAllUsersQuery,
  useUpdateToggleUserMutation,
  useDeleteUserMutation,
} from "../../backend/features/user/userApi"; // Ajuste le chemin selon ton projet
import {
  Loader2,
  AlertCircle,
  Shield,
  User,
  UserCheck,
  UserX,
  Trash2,
  Search,
  Eye,
} from "lucide-react";
import { toast } from "sonner";
import { Link } from "react-router-dom";

export default function ListeUsers() {
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  // RTK Query
  const {
    data: responseData,
    isLoading,
    isError,
    error,
  } = useGetAllUsersQuery(page);
  const [toggleUser, { isLoading: isToggling }] = useUpdateToggleUserMutation();
  const [deleteUser] = useDeleteUserMutation();

  // Gestion de la structure des données (tableau brut ou objet paginé de Django)
  const usersArray = Array.isArray(responseData)
    ? responseData
    : responseData?.results || [];

  // Filtrage local par mot-clé (Nom, Prénom, Email)
  const filteredUsers = usersArray.filter((u) => {
    const searchString =
      `${u.first_name} ${u.last_name} ${u.email}`.toLowerCase();
    return searchString.includes(searchTerm.toLowerCase());
  });

  // Action : Activer / Désactiver le compte
  const handleToggleStatus = async (user) => {
    try {
      const newStatus = !user.is_active;
      await toggleUser({ id: user.id, is_active: newStatus }).unwrap();

      if (newStatus) {
        toast.success(`Le compte de ${user.email} a été réactivé.`);
      } else {
        toast.warning(`Le compte de ${user.email} a été suspendu.`);
      }
    } catch (err) {
      toast.error(err?.data?.detail || "Impossible de modifier le statut.");
    }
  };

  // Action : Supprimer définitivement
  const handleDeleteUser = (user) => {
    toast.promise(deleteUser(user.id).unwrap(), {
      loading: `Suppression de ${user.email}...`,
      success: `L'utilisateur ${user.email} a été supprimé définitivement.`,
      error: (err) => err?.data?.detail || "Erreur lors de la suppression.",
    });
  };

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] space-y-4">
        <Loader2 className="w-8 h-8 text-indigo-500 animate-spin" />
        <p className="text-sm text-white/50">
          Chargement de la liste des membres...
        </p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="max-w-md mx-auto p-6 rounded-2xl border border-rose-500/20 bg-rose-500/10 text-center space-y-3">
        <AlertCircle className="w-8 h-8 text-rose-400 mx-auto" />
        <h3 className="text-white font-semibold">Erreur administrative</h3>
        <p className="text-xs text-rose-300/70">
          {error?.data?.detail || "Accès refusé ou serveur indisponible."}
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto space-y-6 p-4 md:p-6 text-white animate-in fade-in duration-300">
      {/* En-tête */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-white/5 pb-6">
        <div className="space-y-1">
          <h1 className="font-bold text-2xl md:text-3xl tracking-tight">
            Gestion des Utilisateurs
          </h1>
          <p className="text-white/50 text-sm">
            Visualise, contrôle les accès et gère les comptes de la plateforme.
          </p>
        </div>

        {/* Barre de recherche */}
        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 text-white/30 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Rechercher un membre..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-white/5 border border-white/10 focus:border-indigo-500 rounded-xl pl-10 pr-4 py-2 text-sm transition-colors outline-none placeholder:text-white/20"
          />
        </div>
      </div>

      {/* Tableau Responsive */}
      <div className="w-full overflow-x-auto rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-white/10 bg-white/2 text-xs font-semibold text-white/40 uppercase tracking-wider font-mono">
              <th className="px-6 py-4">Utilisateur</th>
              <th className="px-6 py-4">Rôle</th>
              <th className="px-6 py-4">Statut</th>
              <th className="px-6 py-4">Inscription</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5 text-sm">
            {filteredUsers.map((user) => (
              <tr
                key={user.id}
                className="hover:bg-white/2 transition-colors group"
              >
                {/* Identité */}
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 font-semibold font-mono">
                      {user.first_name ? (
                        user.first_name[0].toUpperCase()
                      ) : (
                        <User className="w-4 h-4" />
                      )}
                    </div>
                    <div>
                      <p className="font-medium text-white tracking-tight">
                        {user.first_name || user.last_name
                          ? `${user.first_name} ${user.last_name}`
                          : "Sans nom"}
                      </p>
                      <p className="text-xs text-white/40 font-mono">
                        {user.email}
                      </p>
                    </div>
                  </div>
                </td>

                {/* Rôle */}
                <td className="px-6 py-4">
                  {user.is_staff ? (
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-amber-500/10 text-amber-400 border border-amber-500/20">
                      <Shield className="w-3 h-3" /> Admin
                    </span>
                  ) : (
                    <span className="inline-flex items-center text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-white/5 text-white/60">
                      Étudiant
                    </span>
                  )}
                </td>

                {/* Statut (Actif/Suspendu) */}
                <td className="px-6 py-4">
                  <button
                    onClick={() => handleToggleStatus(user)}
                    disabled={isToggling}
                    className="cursor-pointer select-none transition-opacity hover:opacity-80"
                  >
                    {user.is_active ? (
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        <UserCheck className="w-3 h-3" /> Actif
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-full bg-rose-500/10 text-rose-400 border border-rose-500/20">
                        <UserX className="w-3 h-3" /> Suspendu
                      </span>
                    )}
                  </button>
                </td>

                {/* Date d'inscription */}
                <td className="px-6 py-4 text-xs text-white/50 font-mono">
                  {user.created_at || "N/A"}
                </td>

                {/* Actions */}
                <td className="px-6 py-4 text-right space-x-2 whitespace-nowrap">
                  <Link
                    to={`/admin/detail/user/${user.id}`}
                    title="Voir les détails"
                    className="inline-flex p-2 rounded-lg bg-purple-500/10 border border-purple-500/10 text-purple-400 hover:bg-purple-500/20 transition-colors cursor-pointer opacity-0 group-hover:opacity-100 focus:opacity-100"
                  >
                    <Eye className="w-4 h-4" />
                  </Link>

                  <button
                    onClick={() => handleDeleteUser(user)}
                    title="Supprimer définitivement"
                    className="inline-flex p-2 rounded-lg bg-rose-500/10 border border-rose-500/10 text-rose-400 hover:bg-rose-500/20 transition-colors cursor-pointer opacity-0 group-hover:opacity-100 focus:opacity-100"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* État vide */}
        {filteredUsers.length === 0 && (
          <div className="p-8 text-center text-white/40 text-sm">
            Aucun utilisateur trouvé correspondant aux critères.
          </div>
        )}
      </div>

      {/* Pagination ultra-basique (si gérée par ton Django) */}
      {responseData?.next || responseData?.previous ? (
        <div className="flex items-center justify-end gap-2 pt-2">
          <button
            disabled={!responseData?.previous}
            onClick={() => setPage((old) => Math.max(old - 1, 1))}
            className="px-3 py-1.5 text-xs bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 disabled:opacity-40 transition-colors cursor-pointer"
          >
            Précédent
          </button>
          <button
            disabled={!responseData?.next}
            onClick={() => setPage((old) => old + 1)}
            className="px-3 py-1.5 text-xs bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 disabled:opacity-40 transition-colors cursor-pointer"
          >
            Suivant
          </button>
        </div>
      ) : null}
    </div>
  );
}
