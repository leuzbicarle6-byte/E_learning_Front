import React from "react";
import RibbonTabContent from "./RibbonTabContent";
import { wordRibbonTabs } from "../WordFreeData";

export default function ReferencesTab() {
  const tab = wordRibbonTabs.find((t) => t.id === "references");
  return <RibbonTabContent tab={tab} />;
}