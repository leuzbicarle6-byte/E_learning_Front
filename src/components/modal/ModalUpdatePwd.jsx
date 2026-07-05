import React, { useState } from 'react';
import { useChangePasswordMutation } from '../../backend/features/auth/authApi';
import { X, Loader2, Eye, EyeOff } from 'lucide-react'; // Ajout des icônes Eye et EyeOff

export default function ModalUpdatePwd({ onClose }) {
  const [updatePwd, { isLoading }] = useChangePasswordMutation();
  const [formData, setFormData] = useState({
    old_password: '',
    new_password: '',
    confirm_password: '',
  });
  
  // États individuels pour l'affichage des mots de passe
  const [showOld, setShowOld] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    setSuccessMsg('');

    if (formData.new_password !== formData.confirm_password) {
      setErrorMsg("Les nouveaux mots de passe ne correspondent pas.");
      return;
    }

    try {
      await updatePwd({
        old_password: formData.old_password,
        new_password: formData.new_password
      }).unwrap();
      
      setSuccessMsg("Mot de passe modifié avec succès !");
      setTimeout(() => {
        onClose();
      }, 1500);
    } catch (err) {
      setErrorMsg(err?.data?.message || "Une erreur est survenue lors du changement.");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="w-full max-w-md bg-zinc-900 border border-white/10 rounded-2xl p-6 text-white space-y-4 shadow-xl">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold">Changer de mot de passe</h2>
          <button onClick={onClose} className="text-white/40 hover:text-white transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {errorMsg && (
          <div className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs">
            {errorMsg}
          </div>
        )}

        {successMsg && (
          <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs">
            {successMsg}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Mot de passe actuel */}
          <div className="space-y-1">
            <label className="text-xs uppercase tracking-wider text-white/40 font-bold">Mot de passe actuel</label>
            <div className="relative">
              <input
                type={showOld ? "text" : "password"} // Logique dynamique ici
                name="old_password"
                value={formData.old_password}
                onChange={handleChange}
                required
                disabled={!!successMsg}
                className="w-full bg-white/5 border border-white/10 rounded-xl pl-4 pr-10 py-2 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
              />
              <button
                type="button" // Important pour éviter de soumettre le formulaire au clic
                onClick={() => setShowOld(!showOld)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors"
              >
                {showOld ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Nouveau mot de passe */}
          <div className="space-y-1">
            <label className="text-xs uppercase tracking-wider text-white/40 font-bold">Nouveau mot de passe</label>
            <div className="relative">
              <input
                type={showNew ? "text" : "password"}
                name="new_password"
                value={formData.new_password}
                onChange={handleChange}
                required
                disabled={!!successMsg}
                className="w-full bg-white/5 border border-white/10 rounded-xl pl-4 pr-10 py-2 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
              />
              <button
                type="button"
                onClick={() => setShowNew(!showNew)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors"
              >
                {showNew ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Confirmer le nouveau mot de passe */}
          <div className="space-y-1">
            <label className="text-xs uppercase tracking-wider text-white/40 font-bold">Confirmer le nouveau mot de passe</label>
            <div className="relative">
              <input
                type={showConfirm ? "text" : "password"}
                name="confirm_password"
                value={formData.confirm_password}
                onChange={handleChange}
                required
                disabled={!!successMsg}
                className="w-full bg-white/5 border border-white/10 rounded-xl pl-4 pr-10 py-2 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
              />
              <button
                type="button"
                onClick={() => setShowConfirm(!showConfirm)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors"
              >
                {showConfirm ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              disabled={isLoading || !!successMsg}
              className="px-4 py-2 rounded-xl text-sm font-medium hover:bg-white/5 transition-colors"
            >
              Annuler
            </button>
            <button
              type="submit"
              disabled={isLoading || !!successMsg}
              className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 disabled:bg-indigo-600/50 text-white px-4 py-2 rounded-xl text-sm font-medium transition-colors"
            >
              {isLoading && <Loader2 className="w-4 h-4 animate-spin" />}
              Mettre à jour
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}