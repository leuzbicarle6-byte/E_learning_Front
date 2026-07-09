import React, { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { GraduationCap, Lock, Loader2, CheckCircle2 } from "lucide-react";
import { useConfirmPasswordResetMutation } from "../../backend/features/auth/authApi"; // <-- Ajuste le nom selon ton authApi
import { toast } from "sonner";

export default function ResetPwd() {
  const { uid, token } = useParams(); // Récupère les paramètres de l'URL (ex: /reset-password/:uid/:token)
  const navigate = useNavigate();
  const [resetPassword, { isLoading }] = useConfirmPasswordResetMutation();

  const [form, setForm] = useState({ password: "", confirmPassword: "" });
  const [errors, setErrors] = useState({});

  function validate() {
    const newErrors = {};
    if (!form.password) {
      newErrors.password = "Le mot de passe est obligatoire.";
    } else if (form.password.length < 6) {
      newErrors.password = "6 caractères minimum.";
    }

    if (form.password !== form.confirmPassword) {
      newErrors.confirmPassword = "Les mots de passe ne correspondent pas.";
    }
    return newErrors;
  }

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    const toastId = toast.loading("Mise à jour de votre mot de passe...");

    try {
      // On envoie le uid, le token et le nouveau mot de passe au backend
      await resetPassword({
        uid,
        token,
        new_password: form.password, // Adapte la clé selon ce qu'attend ton API Django (ex: password, new_password, etc.)
      }).unwrap();

      toast.success("Mot de passe modifié avec succès !", { id: toastId });

      // Redirection vers la page de connexion après 2 secondes pour laisser le temps de lire le toast
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (err) {
      let errorMessage = "Le lien est invalide ou a expiré.";
      if (err?.data?.detail) {
        errorMessage = err.data.detail;
      } else if (err?.data?.message) {
        errorMessage = err.data.message;
      }
      toast.error(errorMessage, { id: toastId });
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-[#0a192f]">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-linear-to-tr from-indigo-600 to-indigo-500 text-white shadow-lg shadow-indigo-900/20">
            <GraduationCap className="w-6 h-6" />
          </div>
          <span className="font-display font-bold text-xl text-white tracking-tight">
            Learn
            <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-purple-400">
              Tech
            </span>
          </span>
        </div>

        {/* Card */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
          <h1 className="font-display font-bold text-2xl text-white text-center">
            Réinitialisation
          </h1>
          <p className="text-white/50 text-sm text-center mt-2">
            Saisissez votre nouveau mot de passe ci-dessous.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
            {/* Nouveau Mot de passe */}
            <div>
              <label className="block text-sm text-white/70 mb-1.5">
                Nouveau mot de passe
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                <input
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className={`w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/5 border text-white placeholder:text-white/30 outline-none focus:ring-2 focus:ring-indigo-500 transition ${
                    errors.password ? "border-rose-500/50" : "border-white/10"
                  }`}
                />
              </div>
              {errors.password && (
                <p className="text-rose-400 text-xs mt-1">{errors.password}</p>
              )}
            </div>

            {/* Confirmer le Mot de passe */}
            <div>
              <label className="block text-sm text-white/70 mb-1.5">
                Confirmer le mot de passe
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                <input
                  type="password"
                  name="confirmPassword"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className={`w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/5 border text-white placeholder:text-white/30 outline-none focus:ring-2 focus:ring-indigo-500 transition ${
                    errors.confirmPassword
                      ? "border-rose-500/50"
                      : "border-white/10"
                  }`}
                />
              </div>
              {errors.confirmPassword && (
                <p className="text-rose-400 text-xs mt-1">
                  {errors.confirmPassword}
                </p>
              )}
            </div>

            {/* Bouton de validation */}
            <button
              type="submit"
              disabled={isLoading}
              className="mt-2 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-600 text-white font-medium hover:bg-indigo-500 transition-colors disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
            >
              {isLoading && <Loader2 className="w-4 h-4 animate-spin" />}
              {isLoading ? "Modification..." : "Réinitialiser le mot de passe"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
