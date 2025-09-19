import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoImage from "@assets/generated_images/Indonesian_recipe_app_logo_d124862f.png";
import { useState, useEffect } from "react";

export default function Header() {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    const stored = localStorage.getItem("theme");
    return (stored as "light" | "dark") || "light";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    console.log("Theme switched to:", theme === "light" ? "dark" : "light");
  };

  return (
    <header className="w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo in top left corner */}
          <div className="flex items-center space-x-3">
            <img 
              src={logoImage} 
              alt="RecipeNusantara Logo" 
              className="h-10 w-8 object-contain"
              data-testid="img-logo"
            />
            <div>
              <h1 className="text-xl font-serif font-bold text-foreground" data-testid="text-app-name">
                RecipeNusantara
              </h1>
              <p className="text-xs text-muted-foreground" data-testid="text-app-tagline">
                Indonesian Recipe Generator
              </p>
            </div>
          </div>

          {/* Theme toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="h-9 w-9"
            data-testid="button-theme-toggle"
          >
            {theme === "light" ? (
              <Moon className="h-4 w-4" />
            ) : (
              <Sun className="h-4 w-4" />
            )}
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
      </div>
    </header>
  );
}