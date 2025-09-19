import { useState, useRef } from "react";
import { Upload, ImageIcon, Type, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";

interface InputInterfaceProps {
  onAnalyze: (type: "image" | "text", data: string) => Promise<void>;
  isLoading: boolean;
}

export default function InputInterface({ onAnalyze, isLoading }: InputInterfaceProps) {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>("");
  const [textPrompt, setTextPrompt] = useState("");
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (file: File) => {
    if (file && file.type.startsWith("image/")) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
      console.log("Image uploaded:", file.name);
    }
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleImageUpload(e.dataTransfer.files[0]);
    }
  };

  const handleFileSelect = () => {
    fileInputRef.current?.click();
  };

  const handleAnalyzeImage = async () => {
    if (imageFile) {
      const reader = new FileReader();
      reader.onload = async () => {
        const base64 = reader.result as string;
        await onAnalyze("image", base64.split(",")[1]);
      };
      reader.readAsDataURL(imageFile);
    }
  };

  const handleAnalyzeText = async () => {
    if (textPrompt.trim()) {
      await onAnalyze("text", textPrompt.trim());
    }
  };

  const examplePrompts = [
    "Nasi Gudeg with jackfruit",
    "Rendang beef curry",
    "Gado-gado salad",
    "Sate ayam skewers",
    "Soto ayam soup"
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        
        {/* Left Column - Image Upload */}
        <Card className="h-fit">
          <CardContent className="p-6">
            <div className="flex items-center space-x-2 mb-4">
              <ImageIcon className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold" data-testid="text-image-section-title">Upload Food Image</h3>
            </div>
            
            <div
              className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                dragActive
                  ? "border-primary bg-primary/5"
                  : imagePreview
                  ? "border-primary"
                  : "border-muted-foreground/25 hover:border-muted-foreground/50"
              }`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
              data-testid="div-image-upload-area"
            >
              {imagePreview ? (
                <div className="space-y-4">
                  <img
                    src={imagePreview}
                    alt="Food preview"
                    className="mx-auto max-h-48 rounded-lg object-cover"
                    data-testid="img-food-preview"
                  />
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground" data-testid="text-image-ready">
                      Image ready for analysis
                    </p>
                    <div className="flex gap-2 justify-center">
                      <Button
                        onClick={handleFileSelect}
                        variant="outline"
                        size="sm"
                        data-testid="button-change-image"
                      >
                        Change Image
                      </Button>
                      <Button
                        onClick={handleAnalyzeImage}
                        disabled={isLoading}
                        size="sm"
                        data-testid="button-analyze-image"
                      >
                        {isLoading ? (
                          <Loader2 className="h-4 w-4 animate-spin" />
                        ) : (
                          "Analyze Image"
                        )}
                      </Button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <Upload className="h-12 w-12 text-muted-foreground mx-auto" />
                  <div>
                    <p className="text-lg font-medium" data-testid="text-upload-instruction">
                      Drop your food image here
                    </p>
                    <p className="text-sm text-muted-foreground" data-testid="text-upload-description">
                      or click to browse from your device
                    </p>
                  </div>
                  <Button
                    onClick={handleFileSelect}
                    variant="outline"
                    data-testid="button-browse-image"
                  >
                    Browse Files
                  </Button>
                </div>
              )}
            </div>
            
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={(e) => {
                if (e.target.files?.[0]) {
                  handleImageUpload(e.target.files[0]);
                }
              }}
              className="hidden"
              data-testid="input-file"
            />
          </CardContent>
        </Card>

        {/* Right Column - Text Input */}
        <Card className="h-fit">
          <CardContent className="p-6">
            <div className="flex items-center space-x-2 mb-4">
              <Type className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold" data-testid="text-prompt-section-title">Describe a Dish</h3>
            </div>
            
            <div className="space-y-4">
              <Textarea
                placeholder="Describe an Indonesian dish you'd like to learn about... For example: 'A spicy beef curry from West Sumatra' or 'Sweet and savory grilled chicken skewers'"
                value={textPrompt}
                onChange={(e) => setTextPrompt(e.target.value)}
                rows={6}
                className="resize-none"
                data-testid="textarea-dish-description"
              />
              
              <Button
                onClick={handleAnalyzeText}
                disabled={!textPrompt.trim() || isLoading}
                className="w-full"
                data-testid="button-analyze-text"
              >
                {isLoading ? (
                  <Loader2 className="h-4 w-4 animate-spin mr-2" />
                ) : null}
                Generate Recipe
              </Button>
              
              <div className="space-y-2">
                <p className="text-sm font-medium text-muted-foreground" data-testid="text-example-label">
                  Try these examples:
                </p>
                <div className="flex flex-wrap gap-2">
                  {examplePrompts.map((prompt, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="cursor-pointer hover-elevate"
                      onClick={() => {
                        setTextPrompt(prompt);
                        console.log("Selected example prompt:", prompt);
                      }}
                      data-testid={`badge-example-${index}`}
                    >
                      {prompt}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}