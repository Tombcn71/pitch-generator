"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "en" | "es"
type Translations = Record<string, Record<Language, string>>

const translations: Translations = {
  // Navigation
  "nav.home": {
    en: "Home",
    es: "Inicio",
  },
  "nav.dashboard": {
    en: "Dashboard",
    es: "Panel",
  },
  "nav.contact": {
    en: "Contact Coach",
    es: "Contactar Coach",
  },
  // Pitch Canvas
  "pitch.title": {
    en: "Pitch Canvas Generator",
    es: "Generador de Pitch Canvas",
  },
  "pitch.subtitle": {
    en: "Create your perfect pitch with AI",
    es: "Crea tu pitch perfecto con IA",
  },
  "pitch.problem": {
    en: "Problem",
    es: "Problema",
  },
  "pitch.problem.placeholder": {
    en: "What problem are you solving?",
    es: "¿Qué problema estás resolviendo?",
  },
  "pitch.solution": {
    en: "Solution",
    es: "Solución",
  },
  "pitch.solution.placeholder": {
    en: "How does your solution work?",
    es: "¿Cómo funciona tu solución?",
  },
  "pitch.uniqueness": {
    en: "Uniqueness",
    es: "Singularidad",
  },
  "pitch.uniqueness.placeholder": {
    en: "What makes your solution unique?",
    es: "¿Qué hace única a tu solución?",
  },
  "pitch.market": {
    en: "Target Market",
    es: "Mercado Objetivo",
  },
  "pitch.market.placeholder": {
    en: "Who is your target audience?",
    es: "¿Quién es tu público objetivo?",
  },
  "pitch.traction": {
    en: "Traction",
    es: "Tracción",
  },
  "pitch.traction.placeholder": {
    en: "What traction do you have so far?",
    es: "¿Qué tracción tienes hasta ahora?",
  },
  "pitch.business": {
    en: "Business Model",
    es: "Modelo de Negocio",
  },
  "pitch.business.placeholder": {
    en: "How will you make money?",
    es: "¿Cómo generarás ingresos?",
  },
  "pitch.team": {
    en: "Team",
    es: "Equipo",
  },
  "pitch.team.placeholder": {
    en: "Who is on your team?",
    es: "¿Quién forma parte de tu equipo?",
  },
  "pitch.ask": {
    en: "The Ask",
    es: "La Petición",
  },
  "pitch.ask.placeholder": {
    en: "What are you asking for?",
    es: "¿Qué estás pidiendo?",
  },
  "pitch.generate": {
    en: "Generate Pitch",
    es: "Generar Pitch",
  },
  // Contact
  "contact.title": {
    en: "Contact Pitch Coach",
    es: "Contactar Coach de Pitch",
  },
  "contact.subtitle": {
    en: "Get professional coaching from Martina Guzman",
    es: "Obtén coaching profesional de Martina Guzman",
  },
  "contact.name": {
    en: "Name",
    es: "Nombre",
  },
  "contact.email": {
    en: "Email",
    es: "Correo Electrónico",
  },
  "contact.message": {
    en: "Message",
    es: "Mensaje",
  },
  "contact.submit": {
    en: "Submit",
    es: "Enviar",
  },
  "contact.success": {
    en: "Message sent successfully!",
    es: "¡Mensaje enviado con éxito!",
  },
  // Footer
  "footer.free": {
    en: "Pitch generation is free",
    es: "La generación de pitch es gratuita",
  },
  "footer.coaching": {
    en: "Professional coaching is a paid service",
    es: "El coaching profesional es un servicio de pago",
  },
}

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  const t = (key: string): string => {
    return translations[key]?.[language] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

