import React from "react";
import { useNavigate } from "react-router-dom";
import { useCreateCourseMutation } from "../../backend/features/courses/coursesApi";
import FormulaireCours from "./FormulaireCours";

export default function AddCours() {
  const navigate = useNavigate();
  const [createCourse, { isLoading }] = useCreateCourseMutation();

  const handleCreate = async (newCourseData) => {
    try {
      await createCourse(newCourseData).unwrap();
      navigate("/admin/courses"); // Redirection après succès
    } catch (err) {
      console.error("Erreur lors de la création du cours :", err);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-6 space-y-6 text-white animate-in fade-in duration-200">
      <div className="space-y-1 text-center md:text-left">
        <h1 className="font-bold text-2xl md:text-3xl tracking-tight">
          Ajouter un nouveau cours
        </h1>
        <p className="text-sm text-white/50">
          Complète les champs ci-dessous pour l'ajouter au catalogue.
        </p>
      </div>

      <FormulaireCours
        onSubmit={handleCreate}
        isLoading={isLoading}
        isEdit={false}
      />
    </div>
  );
}
