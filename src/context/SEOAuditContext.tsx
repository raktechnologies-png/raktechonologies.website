"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import SEOAuditModal from "@/components/ui/SEOAuditModal";

interface SEOAuditContextType {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

const SEOAuditContext = createContext<SEOAuditContextType | null>(null);

export function SEOAuditProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);

  return (
    <SEOAuditContext.Provider value={{ isOpen, open: () => setIsOpen(true), close }}>
      {children}
      <SEOAuditModal isOpen={isOpen} onClose={close} />
    </SEOAuditContext.Provider>
  );
}

export function useSEOAudit() {
  const ctx = useContext(SEOAuditContext);
  if (!ctx) throw new Error("useSEOAudit must be used within SEOAuditProvider");
  return ctx;
}
