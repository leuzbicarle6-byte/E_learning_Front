import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GraduationCap, Mail, Lock, User, Loader2 } from "lucide-react";
import { useRegisterMutation } from "../../backend/features/auth/authApi";

export default function Register() {
  const navigate = useNavigate();
  const [register, { isLoading }] = useRegisterMutation();

  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState("");

  function validate() {
    const newErrors = {};
    if (!form.first_name.trim()) {
      newErrors.first_name = "Le prénom est obligatoire.";
    }
    if (!form.last_name.trim()) {
      newErrors.last_name = "Le nom est obligatoire.";
    }
    if (!form.email.trim()) {
      newErrors.email = "L'email est obligatoire.";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      newErrors.email = "Format d'email invalide.";
    }
    if (!form.password) {
      newErrors.password = "Le mot de passe est obligatoire.";
    } else if (form.password.length < 6) {
      newErrors.password = "6 caractères minimum.";
    }
    if (form.confirmPassword !== form.password) {
      newErrors.confirmPassword = "Les mots de passe ne correspondent pas.";
    }
    return newErrors;
  }

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setApiError("");

    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    try {
      const { confirmPassword, ...payload } = form;
      await register(payload).unwrap();
      navigate("/login"); 
    } catch (err) {
      setApiError(
        err?.data?.message || "Inscription impossible. Réessaie plus tard.",
      );
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-linear-to-b from-slate-950 to-slate-900">
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

        <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
          <h1 className="font-display font-bold text-2xl text-white text-center">
            Créer un compte
          </h1>
          <p className="text-white/50 text-sm text-center mt-2">
            Rejoins LearnTech et commence à apprendre dès aujourd'hui.
          </p>

          {apiError && (
            <div className="mt-5 px-4 py-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-sm">
              {apiError}
            </div>
          )}

          <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
            
            {/* Prénom & Nom sur la même ligne (optionnel pour le design) */}
            <div className="grid grid-cols-2 gap-4">
              {/* Prénom */}
              <div>
                <label className="block text-sm text-white/70 mb-1.5">Prénom</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                  <input
                    type="text"
                    name="first_name"
                    value={form.first_name}
                    onChange={handleChange}
                    placeholder="John"
                    className={`w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/5 border text-white placeholder:text-white/30 outline-none focus:ring-2 focus:ring-indigo-500 transition ${
                      errors.first_name ? "border-rose-500/50" : "border-white/10"
                    }`}
                  />
                </div>
                {errors.first_name && (
                  <p className="text-rose-400 text-xs mt-1">{errors.first_name}</p>
                )}
              </div>

              {/* Nom */}
              <div>
                <label className="block text-sm text-white/70 mb-1.5">Nom</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                  <input
                    type="text"
                    name="last_name"
                    value={form.last_name}
                    onChange={handleChange}
                    placeholder="Doe"
                    className={`w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/5 border text-white placeholder:text-white/30 outline-none focus:ring-2 focus:ring-indigo-500 transition ${
                      errors.last_name ? "border-rose-500/50" : "border-white/10"
                    }`}
                  />
                </div>
                {errors.last_name && (
                  <p className="text-rose-400 text-xs mt-1">{errors.last_name}</p>
                )}
              </div>
            </div>

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
                  value={form.email}
                  onChange={handleChange}
                  placeholder="toi@exemple.com"
                  className={`w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/5 border text-white placeholder:text-white/30 outline-none focus:ring-2 focus:ring-indigo-500 transition ${
                    errors.email ? "border-rose-500/50" : "border-white/10"
                  }`}
                />
              </div>
              {errors.email && (
                <p className="text-rose-400 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm text-white/70 mb-1.5">
                Mot de passe
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

            {/* Confirm Password */}
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

            <button
              type="submit"
              disabled={isLoading}
              className="mt-2 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-600 text-white font-medium hover:bg-indigo-500 transition-colors disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
            >
              {isLoading && <Loader2 className="w-4 h-4 animate-spin" />}
              {isLoading ? "Création..." : "Créer mon compte"}
            </button>
          </form>

          <p className="text-center text-sm text-white/50 mt-6">
            Déjà un compte ?{" "}
            <Link
              to="/login"
              className="text-indigo-400 hover:text-indigo-300 font-medium"
            >
              Se connecter
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}