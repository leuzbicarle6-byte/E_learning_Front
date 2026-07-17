import React from "react";
import RibbonTabContent from "./RibbonTabContent";
import { wordRibbonTabs } from "../WordFreeData";

export default function AffichageTab() {
  const tab = wordRibbonTabs.find((t) => t.id === "affichage");
  return <RibbonTabContent tab={tab} />;
}