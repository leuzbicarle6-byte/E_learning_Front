import React from "react";
import RibbonTabContent from "./RibbonTabContent";
import { wordRibbonTabs } from "../WordFreeData";

export default function FichierTab() {
  const tab = wordRibbonTabs.find((t) => t.id === "fichier");
  return <RibbonTabContent tab={tab} />;
}