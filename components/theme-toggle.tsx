"use client";

import { Moon, Sun } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

function getInitialTheme(): "light" | "dark" {
  if (typeof window === "undefined") return "light";
  
  const root = window.document.documentElement;
  const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
  return savedTheme || (root.classList.contains("dark") ? "dark" : "light");
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">(getInitialTheme);

  const toggleTheme = () => {
    const root = window.document.documentElement;
    const newTheme = theme === "light" ? "dark" : "light";
    
    root.classList.remove(theme);
    root.classList.add(newTheme);
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="h-8 w-8"
    >
      {theme === "light" ? (
        <Moon className="h-4 w-4" />
      ) : (
        <Sun className="h-4 w-4" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
