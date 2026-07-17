import React from "react";
import RibbonTabContent from "./RibbonTabContent";
import { wordRibbonTabs } from "../WordFreeData";

export default function InsertionTab() {
  const tab = wordRibbonTabs.find((t) => t.id === "insertion");
  return <RibbonTabContent tab={tab} />;
}