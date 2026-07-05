import React from "react";
import "./App.css";
import AppNavigation from "./routes/AppNavigation";
import { Toaster } from "sonner";

export default function App() {
  return (
    <>
      <AppNavigation />
      <Toaster theme="dark" position="top-right" richColors />
    </>
  );
}
