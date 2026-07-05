import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  useGetCourseByIdQuery,
  useUpdateCourseMutation,
} from "../../backend/features/courses/coursesApi";
import { Loader2, AlertCircle } from "lucide-react";
import FormulaireCours from "./FormulaireCours";

export default function EditCours() {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    data: cours,
    isLoading: isFetchLoading,
    isError,
  } = useGetCourseByIdQuery(id);
  const [updateCourse, { isLoading: isUpdateLoading }] =
    useUpdateCourseMutation();

  const handleUpdate = async (updatedFields) => {
    try {
      // On passe l'ID et le corps de la requête attendu par ta mutation
      await updateCourse({ id, ...updatedFields }).unwrap();
      navigate("/admin/courses"); // Redirection vers le tableau de bord
    } catch (err) {
      console.error("Erreur de mise à jour :", err);
    }
  };

  if (isFetchLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] space-y-3">
        <Loader2 className="w-7 h-7 text-indigo-500 animate-spin" />
        <p className="text-sm text-white/50">Récupération du cours...</p>
      </div>
    );
  }

  if (isError || !cours) {
    return (
      <div className="max-w-md mx-auto p-6 rounded-2xl border border-rose-500/20 bg-rose-500/10 text-center text-white space-y-2">
        <AlertCircle className="w-6 h-6 text-rose-400 mx-auto" />
        <p className="text-sm">
          Impossible de charger les données de ce cours.
        </p>
      </div>
    );
  }

  const currentCourse = Array.isArray(cours) ? cours[0] : cours;

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-6 space-y-6 text-white animate-in fade-in duration-200">
      <div className="space-y-1 text-center md:text-left">
        <h1 className="font-bold text-2xl md:text-3xl tracking-tight">
          Édition du cours{" "}
          <span className="text-indigo-400">#{currentCourse?.id}</span>
        </h1>
        <p className="text-sm text-white/50">
          Modifie les informations globales du catalogue.
        </p>
      </div>

      <FormulaireCours
        initialData={currentCourse}
        onSubmit={handleUpdate}
        isLoading={isUpdateLoading}
        isEdit={true}
      />
    </div>
  );
}
