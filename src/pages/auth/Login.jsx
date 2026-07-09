import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GraduationCap, Mail, Lock, Loader2, Eye, EyeOff } from "lucide-react"; // <-- Ajout de Eye et EyeOff
import { useLoginMutation } from "../../backend/features/auth/authApi";
import { useDispatch } from "react-redux";
import { setCredentials } from "../../backend/features/auth/authSlice"; 
import { toast } from "sonner"; 

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch(); 
  const [login, { isLoading }] = useLoginMutation();

  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false); // <-- État pour afficher/masquer le mot de passe

  function validate() {
    const newErrors = {};
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

    const toastId = toast.loading("Vérification de vos identifiants...");

    try {
      const res = await login(form).unwrap();
      dispatch(setCredentials(res));

      toast.success(`Ravi de vous revoir, ${res?.user?.first_name || "l'ami"} !`, {
        id: toastId,
      });

      if (res?.user?.role === "super-admin" || res?.user?.role === "admin") {
        navigate("/admin/dashboard");
      } else {
        navigate("/user/dashboard");
      }

    } catch (err) {
      let errorMessage = "Une erreur réseau est survenue.";
      
      if (err?.data?.detail === "No active account found with the given credentials") {
        errorMessage = "Identifiants incorrects ou compte actuellement suspendu.";
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

        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
          <h1 className="font-display font-bold text-2xl text-white text-center">
            Connexion
          </h1>
          <p className="text-white/50 text-sm text-center mt-2">
            Content de te revoir. Continue ton apprentissage.
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
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-sm text-white/70">
                  Mot de passe
                </label>
                {/* Lien Mot de passe oublié */}
                <Link
                  to="/forgot-password" // <-- Ajuste le chemin selon ta route (ex: /fwd ou /forgot-password)
                  className="text-xs text-indigo-400 hover:text-indigo-300 transition-colors"
                >
                  Mot de passe oublié ?
                </Link>
              </div>
              
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                <input
                  type={showPassword ? "text" : "password"} // <-- Devient "text" si showPassword est true
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className={`w-full pl-10 pr-12 py-2.5 rounded-xl bg-white/5 border text-white placeholder:text-white/30 outline-none focus:ring-2 focus:ring-indigo-500 transition ${
                    errors.password ? "border-rose-500/50" : "border-white/10"
                  }`}
                />
                
                {/* Bouton pour basculer l'affichage du mot de passe */}
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-md text-white/40 hover:text-white/70 transition-colors cursor-pointer"
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="text-rose-400 text-xs mt-1">{errors.password}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="mt-2 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-600 text-white font-medium hover:bg-indigo-500 transition-colors disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
            >
              {isLoading && <Loader2 className="w-4 h-4 animate-spin" />}
              {isLoading ? "Connexion..." : "Se connecter"}
            </button>
          </form>

          <p className="text-center text-sm text-white/50 mt-6">
            Pas encore de compte ?{" "}
            <Link
              to="/register"
              className="text-indigo-400 hover:text-indigo-300 font-medium"
            >
              S'inscrire
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}