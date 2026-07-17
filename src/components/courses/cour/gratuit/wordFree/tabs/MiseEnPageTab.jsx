import React from "react";
import RibbonTabContent from "./RibbonTabContent";
import { wordRibbonTabs } from "../WordFreeData";

export default function MiseEnPageTab() {
  const tab = wordRibbonTabs.find((t) => t.id === "mise-en-page");
  return <RibbonTabContent tab={tab} />;
}