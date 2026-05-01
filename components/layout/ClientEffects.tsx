"use client";
import dynamic from "next/dynamic";

const CustomCursor = dynamic(
  () => import("@/components/effects/CustomCursor").then((m) => m.CustomCursor),
  { ssr: false }
);
const LoadingScreen = dynamic(
  () => import("@/components/effects/LoadingScreen").then((m) => m.LoadingScreen),
  { ssr: false }
);
const CommandPalette = dynamic(
  () => import("@/components/effects/CommandPalette").then((m) => m.CommandPalette),
  { ssr: false }
);
const KonamiEasterEgg = dynamic(
  () => import("@/components/effects/KonamiEasterEgg").then((m) => m.KonamiEasterEgg),
  { ssr: false }
);

export function ClientEffects() {
  return (
    <>
      <LoadingScreen />
      <CustomCursor />
      <KonamiEasterEgg />
      <CommandPalette />
    </>
  );
}
