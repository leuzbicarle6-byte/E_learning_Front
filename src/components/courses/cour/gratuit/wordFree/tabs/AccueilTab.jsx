import React from "react";
import RibbonTabContent from "./RibbonTabContent";
import { wordRibbonTabs } from "../WordFreeData";

export default function AccueilTab() {
  const tab = wordRibbonTabs.find((t) => t.id === "accueil");
  return <RibbonTabContent tab={tab} />;
}
