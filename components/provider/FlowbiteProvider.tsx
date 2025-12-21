"use client";

import { useEffect } from "react";
import { initFlowbite } from "flowbite";

export default function FlowbiteProvider() {
  useEffect(() => {
    initFlowbite();
  }, []);

  return null;
}
