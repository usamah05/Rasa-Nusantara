import RecipeDisplay from '../RecipeDisplay'

export default function RecipeDisplayExample() {
  const mockRecipe = {
    name: "Rendang Daging Sapi",
    description: "Rich and tender beef slow-cooked in aromatic spices and coconut milk from West Sumatra",
    origin: "West Sumatra, Indonesia",
    cookingTime: "3-4 hours",
    servings: 6,
    difficulty: "Medium" as const,
    ingredients: [
      { name: "Beef chuck roast", amount: "2 kg", notes: "cut into chunks" },
      { name: "Coconut milk", amount: "800ml", notes: "thick variety" },
      { name: "Galangal", amount: "3 cm", notes: "fresh, sliced" },
      { name: "Lemongrass", amount: "3 stalks", notes: "bruised" },
      { name: "Kaffir lime leaves", amount: "6 leaves" },
      { name: "Tamarind paste", amount: "2 tbsp" },
      { name: "Palm sugar", amount: "2 tbsp" },
      { name: "Red chilies", amount: "8-10", notes: "dried, soaked" },
      { name: "Shallots", amount: "8 pieces" },
      { name: "Garlic cloves", amount: "6 pieces" },
      { name: "Ginger", amount: "3 cm", notes: "fresh" },
      { name: "Turmeric", amount: "2 cm", notes: "fresh" },
      { name: "Candlenuts", amount: "4 pieces" }
    ],
    instructions: [
      "Blend chilies, shallots, garlic, ginger, turmeric, and candlenuts into a smooth paste using a food processor or traditional stone mortar (cobek).",
      "Heat oil in a heavy-bottomed pot and fry the spice paste over medium heat for 10-15 minutes until fragrant and oil separates.",
      "Add beef chunks and stir-fry until meat changes color and is well-coated with spices, about 15-20 minutes.",
      "Pour in coconut milk, add galangal, lemongrass, lime leaves, tamarind paste, and palm sugar. Bring to a boil.",
      "Reduce heat to low and simmer uncovered, stirring occasionally, for 2-3 hours until the sauce thickens and darkens.",
      "Continue cooking while stirring frequently until the oil separates and the meat becomes tender and dark brown.",
      "Taste and adjust seasoning with salt if needed. The rendang is ready when it's almost dry with a rich, dark color.",
      "Let it rest for 10 minutes before serving. Rendang tastes even better the next day as flavors develop further."
    ],
    history: "Rendang originated from the Minangkabau ethnic group of Indonesia, particularly from West Sumatra. This iconic dish was created as a way to preserve meat without refrigeration in the tropical climate. The slow-cooking process and rich spice blend naturally preserve the meat, making it last for weeks. Rendang was traditionally prepared for special occasions and long journeys. The dish spread throughout Indonesia and Malaysia through Minangkabau migration and trade. In 2011, CNN ranked Rendang as the world's most delicious food, bringing international recognition to this Indonesian culinary masterpiece.",
    interestingFacts: [
      "Rendang can last up to 4 weeks at room temperature due to its preservation method, making it perfect for long sea voyages in ancient times.",
      "The darker the rendang, the longer it has been cooked - the ultimate rendang should be almost black and dry, known as 'rendang kering'.",
      "UNESCO recognized rendang as an Intangible Cultural Heritage, acknowledging its cultural significance to the Minangkabau people.",
      "There are over 50 different types of rendang in Minangkabau cuisine, including rendang ayam (chicken), rendang jengkol (stink beans), and rendang paru (beef lung).",
      "The traditional cooking method uses a 'dandang' (traditional pot) and must be stirred with a wooden spatula called 'sudip' to prevent sticking."
    ],
    nutritionalHighlights: [
      "High in Protein",
      "Rich in Iron",
      "Contains Antioxidants",
      "Healthy Fats from Coconut",
      "Anti-inflammatory Spices"
    ]
  };

  return <RecipeDisplay recipe={mockRecipe} />
}