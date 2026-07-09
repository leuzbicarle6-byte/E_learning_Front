import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GraduationCap, Mail, ArrowLeft, Loader2 } from "lucide-react";
import { useForgotPasswordMutation } from "../../backend/features/auth/authApi";
import { toast } from "sonner";

export default function ForgotPwd() {
  const [forgot, { isLoading }] = useForgotPasswordMutation();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  function validate() {
    if (!email.trim()) {
      return "L'email est obligatoire.";
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      return "Format d'email invalide.";
    }
    return "";
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const validationError = validate();
    setError(validationError);
    if (validationError) return;

    const toastId = toast.loading("Envoi du lien de réinitialisation...");

    try {
      // On passe l'email à la mutation (adapte la clé si ton API Django attend autre chose, ex: { email })
      await forgot({ email }).unwrap();

      toast.success("Un email de réinitialisation vous a été envoyé !", {
        id: toastId,
      });

      // Optionnel : vider le champ après succès
      setEmail("");
    } catch (err) {
      let errorMessage = "Une erreur est survenue lors de l'envoi.";

      // Interception d'une erreur Django classique (ex: utilisateur introuvable)
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

        {/* Form Card */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
          <h1 className="font-display font-bold text-2xl text-white text-center">
            Mot de passe oublié
          </h1>
          <p className="text-white/50 text-sm text-center mt-2">
            Entrez votre adresse email pour recevoir un lien de
            réinitialisation.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
            {/* Email */}
            <div>
              <label className="block text-sm text-white/70 mb-1.5">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="toi@exemple.com"
                  className={`w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/5 border text-white placeholder:text-white/30 outline-none focus:ring-2 focus:ring-indigo-500 transition ${
                    error ? "border-rose-500/50" : "border-white/10"
                  }`}
                />
              </div>
              {error && <p className="text-rose-400 text-xs mt-1">{error}</p>}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="mt-2 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-600 text-white font-medium hover:bg-indigo-500 transition-colors disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
            >
              {isLoading && <Loader2 className="w-4 h-4 animate-spin" />}
              {isLoading ? "Envoi..." : "Envoyer le lien"}
            </button>
          </form>

          {/* Retour au Login */}
          <div className="text-center mt-6">
            <Link
              to="/login"
              className="inline-flex items-center gap-2 text-sm text-indigo-400 hover:text-indigo-300 font-medium transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Retour à la connexion
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
