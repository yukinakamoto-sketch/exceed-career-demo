"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

export type JourneySelection = {
  id: string;
  label: string;
} | null;

type JourneyContextValue = {
  current: JourneySelection;
  future: JourneySelection;
  setCurrent: (selection: { id: string; label: string }) => void;
  setFuture: (selection: { id: string; label: string }) => void;
};

const JourneyContext = createContext<JourneyContextValue | null>(null);

export function JourneyProvider({ children }: { children: ReactNode }) {
  const [current, setCurrentState] = useState<JourneySelection>(null);
  const [future, setFutureState] = useState<JourneySelection>(null);

  const setCurrent = (selection: { id: string; label: string }) => {
    setCurrentState((prev) => (prev?.id === selection.id ? null : selection));
  };

  const setFuture = (selection: { id: string; label: string }) => {
    setFutureState((prev) => (prev?.id === selection.id ? null : selection));
  };

  return (
    <JourneyContext.Provider value={{ current, future, setCurrent, setFuture }}>
      {children}
    </JourneyContext.Provider>
  );
}

export function useJourney() {
  const ctx = useContext(JourneyContext);
  if (!ctx) {
    throw new Error("useJourney must be used within a JourneyProvider");
  }
  return ctx;
}
