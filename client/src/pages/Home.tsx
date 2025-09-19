import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import InputInterface from "@/components/InputInterface";
import RecipeDisplay from "@/components/RecipeDisplay";
import Footer from "@/components/Footer";

// todo: remove mock functionality - replace with real AI integration
const mockGenerateRecipe = async (type: "image" | "text", data: string) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 3000));
  
  // Mock recipe based on input type
  if (type === "image") {
    return {
      name: "Nasi Gudeg Jogja",
      description: "Sweet and savory jackfruit stew served with rice, a signature dish from Yogyakarta",
      origin: "Yogyakarta, Central Java",
      cookingTime: "2-3 hours",
      servings: 4,
      difficulty: "Medium" as const,
      ingredients: [
        { name: "Young jackfruit", amount: "1 kg", notes: "fresh or canned" },
        { name: "Coconut milk", amount: "500ml" },
        { name: "Palm sugar", amount: "150g" },
        { name: "Bay leaves", amount: "3 pieces" },
        { name: "Galangal", amount: "2 cm", notes: "bruised" },
        { name: "Lemongrass", amount: "2 stalks" },
        { name: "Tamarind water", amount: "3 tbsp" },
        { name: "Salt", amount: "1 tsp" }
      ],
      instructions: [
        "Clean and cut young jackfruit into bite-sized pieces.",
        "Boil jackfruit in water for 30 minutes to remove latex, then drain.",
        "In a pot, combine coconut milk, palm sugar, bay leaves, galangal, and lemongrass.",
        "Add jackfruit pieces and simmer on low heat for 1-2 hours until tender.",
        "Add tamarind water and salt, continue cooking until sauce thickens.",
        "Serve hot with steamed rice, boiled eggs, and krecek (beef skin crackers)."
      ],
      history: "Gudeg is the iconic dish of Yogyakarta, often called 'Jogja's soul food.' Legend says it was created in the Sultan's palace during the Mataram Kingdom era. The sweet taste represents the gentle nature of Yogyakarta people, while the slow cooking process reflects the Javanese philosophy of patience and harmony.",
      interestingFacts: [
        "Gudeg is traditionally cooked in a clay pot called 'kendil' which gives it a distinctive earthy flavor.",
        "The dish gets sweeter the longer it's cooked, with some vendors cooking it for up to 12 hours.",
        "Different regions have variations - Gudeg Solo is less sweet than Yogyakarta's version."
      ],
      nutritionalHighlights: ["High Fiber", "Vitamin C", "Plant-based Protein"]
    };
  } else {
    return {
      name: "Sate Ayam Madura",
      description: "Grilled chicken skewers with sweet peanut sauce, a beloved street food from Madura Island",
      origin: "Madura Island, East Java",
      cookingTime: "45 minutes",
      servings: 4,
      difficulty: "Easy" as const,
      ingredients: [
        { name: "Chicken thigh", amount: "500g", notes: "cut into cubes" },
        { name: "Peanuts", amount: "200g", notes: "roasted" },
        { name: "Palm sugar", amount: "3 tbsp" },
        { name: "Tamarind paste", amount: "1 tbsp" },
        { name: "Chili peppers", amount: "2-3 pieces" },
        { name: "Garlic", amount: "3 cloves" },
        { name: "Shallots", amount: "2 pieces" },
        { name: "Sweet soy sauce", amount: "3 tbsp" }
      ],
      instructions: [
        "Soak bamboo skewers in water for 30 minutes to prevent burning.",
        "Thread chicken cubes onto skewers, leaving small gaps between pieces.",
        "Grind roasted peanuts, chilies, garlic, and shallots into a smooth paste.",
        "Mix paste with palm sugar, tamarind, sweet soy sauce, and water to make sauce.",
        "Grill chicken skewers over charcoal fire, turning frequently for 15-20 minutes.",
        "Brush with peanut sauce while grilling for the last 5 minutes.",
        "Serve hot with remaining peanut sauce, rice cakes, and pickled vegetables."
      ],
      history: "Sate originated from Arab and Indian traders who brought kebab techniques to Indonesia. The Madurese people perfected this dish, creating the signature sweet peanut sauce that defines Indonesian sate. It spread throughout Java and became one of Indonesia's most recognizable dishes worldwide.",
      interestingFacts: [
        "There are over 20 different types of sate across Indonesia, each with regional variations.",
        "The word 'sate' comes from the Hokkien Chinese word 'sa tae' meaning three pieces.",
        "Traditional sate is grilled over coconut shell charcoal for the best flavor."
      ],
      nutritionalHighlights: ["High Protein", "Healthy Fats", "B Vitamins"]
    };
  }
};

interface Recipe {
  name: string;
  description: string;
  origin: string;
  cookingTime: string;
  servings: number;
  difficulty: "Easy" | "Medium" | "Hard";
  ingredients: Array<{
    name: string;
    amount: string;
    notes?: string;
  }>;
  instructions: string[];
  history: string;
  interestingFacts: string[];
  nutritionalHighlights?: string[];
}

export default function Home() {
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleAnalyze = async (type: "image" | "text", data: string) => {
    setIsLoading(true);
    setRecipe(null);
    
    try {
      // todo: remove mock functionality - replace with real OpenAI API call
      const generatedRecipe = await mockGenerateRecipe(type, data);
      setRecipe(generatedRecipe);
      console.log("Recipe generated successfully:", generatedRecipe.name);
    } catch (error) {
      console.error("Failed to generate recipe:", error);
      // todo: add proper error handling with toast notifications
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <InputInterface onAnalyze={handleAnalyze} isLoading={isLoading} />
        <RecipeDisplay recipe={recipe} />
      </main>
      <Footer />
    </div>
  );
}