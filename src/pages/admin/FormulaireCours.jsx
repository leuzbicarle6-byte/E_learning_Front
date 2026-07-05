import React, { useState, useEffect } from "react";
import { Loader2, Save, ArrowLeft, Link2 } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner"; // <-- Ajout de l'import pour les notifications

export default function FormulaireCours({
  initialData,
  onSubmit,
  isLoading,
  isEdit,
}) {
  const slugify = (str) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "") // Supprime les caractères spéciaux
      .replace(/[\s_-]+/g, "-") // Remplace les espaces et underscores par des tirets
      .replace(/^-+|-+$/g, "");

  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    description: "",
    category: "",
    price: "",
    is_free: false,
  });

  // Remplit le formulaire si on est en mode édition avec des données reçues
  useEffect(() => {
    if (initialData) {
      const cours = Array.isArray(initialData) ? initialData[0] : initialData;
      setFormData({
        title: cours.title || "",
        slug: cours.slug || "",
        description: cours.description || "",
        category: cours.category || "",
        price: cours.price || "",
        is_free: cours.is_free || false,
      });
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    setFormData((prev) => {
      const updatedFields = {
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      };

      // Si l'utilisateur modifie le titre, on met à jour automatiquement le slug en temps réel
      if (name === "title") {
        updatedFields.slug = slugify(value);
      }

      return updatedFields;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const payload = {
      ...formData,
      slug: formData.slug || slugify(formData.title), // Sécurité : s'assure qu'un slug existe
      price: formData.is_free ? 0 : parseFloat(formData.price) || 0,
    };

    // On enveloppe l'action asynchrone dans un toast.promise
    toast.promise(onSubmit(payload), {
      loading: isEdit ? "Enregistrement des modifications..." : "Création du cours en cours...",
      success: () => isEdit ? "Le cours a été modifié avec succès !" : "Le cours a été publié !",
      error: (err) => {
        const errorDetail = err?.data?.slug?.[0] || err?.data?.detail || "Une erreur est survenue.";
        return `Échec : ${errorDetail}`;
      }
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 max-w-2xl mx-auto bg-white/5 border border-white/10 p-6 md:p-8 rounded-2xl text-white"
    >
      <div className="flex items-center justify-between border-b border-white/5 pb-4">
        <h2 className="text-xl font-semibold tracking-tight">
          {isEdit ? "Modifier les informations" : "Détails du nouveau cours"}
        </h2>
        <Link
          to="/admin/courses"
          className="inline-flex items-center gap-1.5 text-xs text-white/40 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Retour
        </Link>
      </div>

      {/* Titre du cours + Affichage dynamique du Slug */}
      <div className="space-y-1.5">
        <label className="text-xs font-semibold text-white/60 tracking-wider uppercase">
          Titre du cours
        </label>
        <input
          type="text"
          name="title"
          required
          value={formData.title}
          onChange={handleChange}
          placeholder="Ex: Maîtriser les bases de Microsoft Word"
          className="w-full bg-white/5 border border-white/10 focus:border-indigo-500 rounded-xl px-4 py-3 text-sm transition-colors outline-none placeholder:text-white/20"
        />
        
        {/* Visualisation du slug généré sous le titre */}
        {formData.slug && (
          <div className="flex items-center gap-1.5 px-1 text-xs text-white/40 font-mono">
            <Link2 className="w-3 h-3 text-indigo-400" />
            <span>URL générée : <span className="text-indigo-300">{formData.slug}</span></span>
          </div>
        )}
      </div>

      {/* Catégorie */}
      <div className="space-y-1.5">
        <label className="text-xs font-semibold text-white/60 tracking-wider uppercase">
          Catégorie
        </label>
        <input
          type="text"
          name="category"
          required
          value={formData.category}
          onChange={handleChange}
          placeholder="Ex: Bureautique, Développement, Design"
          className="w-full bg-white/5 border border-white/10 focus:border-indigo-500 rounded-xl px-4 py-3 text-sm transition-colors outline-none placeholder:text-white/20"
        />
      </div>

      {/* Description */}
      <div className="space-y-1.5">
        <label className="text-xs font-semibold text-white/60 tracking-wider uppercase">
          Description
        </label>
        <textarea
          name="description"
          rows="4"
          required
          value={formData.description}
          onChange={handleChange}
          placeholder="Rédige un résumé clair du programme et des objectifs du cours..."
          className="w-full bg-white/5 border border-white/10 focus:border-indigo-500 rounded-xl px-4 py-3 text-sm transition-colors outline-none placeholder:text-white/20 resize-none"
        />
      </div>

      {/* Options de tarification */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-4 rounded-xl bg-white/5 border border-white/5">
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            id="is_free"
            name="is_free"
            checked={formData.is_free}
            onChange={handleChange}
            className="w-4 h-4 rounded border-white/10 bg-white/5 text-indigo-600 focus:ring-indigo-500 focus:ring-offset-0 cursor-pointer"
          />
          <label
            htmlFor="is_free"
            className="text-sm font-medium text-white/80 cursor-pointer select-none"
          >
            Rendre ce cours gratuit
          </label>
        </div>

        {!formData.is_free && (
          <div className="space-y-1.5 animate-in fade-in duration-200">
            <label className="text-xs font-semibold text-white/60 tracking-wider uppercase">
              Tarif (€)
            </label>
            <input
              type="number"
              name="price"
              min="0"
              step="0.01"
              required={!formData.is_free}
              value={formData.price}
              onChange={handleChange}
              placeholder="0.00"
              className="w-full bg-white/5 border border-white/10 focus:border-indigo-500 rounded-xl px-4 py-2 text-sm transition-colors outline-none placeholder:text-white/20"
            />
          </div>
        )}
      </div>

      {/* Bouton de soumission */}
      <button
        type="submit"
        disabled={isLoading}
        className="w-full inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 disabled:bg-indigo-600/40 text-white font-semibold text-sm px-4 py-3 rounded-xl shadow-md transition-colors cursor-pointer"
      >
        {isLoading ? (
          <Loader2 className="w-4 h-4 animate-spin" />
        ) : (
          <Save className="w-4 h-4" />
        )}
        {isEdit ? "Enregistrer les modifications" : "Publier le cours"}
      </button>
    </form>
  );
}