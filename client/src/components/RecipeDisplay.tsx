import { Clock, Users, MapPin, BookOpen, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

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

interface RecipeDisplayProps {
  recipe: Recipe | null;
}

export default function RecipeDisplay({ recipe }: RecipeDisplayProps) {
  if (!recipe) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Card className="max-w-4xl mx-auto">
          <CardContent className="p-12 text-center">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto">
                <BookOpen className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold" data-testid="text-no-recipe-title">
                No Recipe Generated Yet
              </h3>
              <p className="text-muted-foreground max-w-md mx-auto" data-testid="text-no-recipe-description">
                Upload an image or describe a dish to discover authentic Indonesian recipes with detailed cultural insights.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  const difficultyColor = {
    Easy: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
    Medium: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
    Hard: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto space-y-6">
        
        {/* Recipe Header */}
        <Card>
          <CardHeader>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <CardTitle className="text-2xl md:text-3xl font-serif" data-testid="text-recipe-name">
                  {recipe.name}
                </CardTitle>
                <p className="text-muted-foreground mt-2" data-testid="text-recipe-description">
                  {recipe.description}
                </p>
              </div>
              <Badge className={difficultyColor[recipe.difficulty]} data-testid="badge-difficulty">
                {recipe.difficulty}
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center space-x-2" data-testid="div-cooking-time">
                <Clock className="h-4 w-4 text-primary" />
                <span className="text-sm">{recipe.cookingTime}</span>
              </div>
              <div className="flex items-center space-x-2" data-testid="div-servings">
                <Users className="h-4 w-4 text-primary" />
                <span className="text-sm">{recipe.servings} servings</span>
              </div>
              <div className="flex items-center space-x-2" data-testid="div-origin">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-sm">{recipe.origin}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Ingredients */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <span data-testid="text-ingredients-title">Ingredients</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {recipe.ingredients.map((ingredient, index) => (
                <div key={index} className="flex justify-between items-start" data-testid={`div-ingredient-${index}`}>
                  <span className="font-medium">{ingredient.name}</span>
                  <div className="text-right">
                    <span className="text-primary font-semibold">{ingredient.amount}</span>
                    {ingredient.notes && (
                      <p className="text-xs text-muted-foreground mt-1">{ingredient.notes}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Instructions */}
        <Card>
          <CardHeader>
            <CardTitle data-testid="text-instructions-title">Cooking Instructions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recipe.instructions.map((step, index) => (
                <div key={index} className="flex space-x-4" data-testid={`div-instruction-${index}`}>
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold">
                    {index + 1}
                  </div>
                  <p className="text-sm leading-relaxed pt-1">{step}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* History & Cultural Background */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <BookOpen className="h-5 w-5 text-primary" />
              <span data-testid="text-history-title">History & Cultural Background</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm leading-relaxed" data-testid="text-history-content">
              {recipe.history}
            </p>
          </CardContent>
        </Card>

        {/* Interesting Facts */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Sparkles className="h-5 w-5 text-primary" />
              <span data-testid="text-facts-title">Interesting Facts</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recipe.interestingFacts.map((fact, index) => (
                <div key={index} className="flex space-x-3" data-testid={`div-fact-${index}`}>
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <p className="text-sm leading-relaxed">{fact}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Nutritional Highlights (if available) */}
        {recipe.nutritionalHighlights && recipe.nutritionalHighlights.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle data-testid="text-nutrition-title">Nutritional Highlights</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {recipe.nutritionalHighlights.map((highlight, index) => (
                  <Badge key={index} variant="outline" data-testid={`badge-nutrition-${index}`}>
                    {highlight}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}