
"use client";

import { useState } from "react";
import { generateDesignSuggestions } from "@/ai/flows/generate-design-suggestions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2, Upload, Sparkles } from "lucide-react";
import Image from "next/image";
import { useToast } from "@/hooks/use-toast";

type SuggestionState = {
  suggestions: string[];
  isLoading: boolean;
  error: string | null;
};

export function VisualDesignAssistant() {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [filePreviews, setFilePreviews] = useState<string[]>([]);
  const [suggestionState, setSuggestionState] = useState<SuggestionState>({
    suggestions: [],
    isLoading: false,
    error: null,
  });
  const { toast } = useToast();

  const fileToDataUri = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setUploadedFiles(files);

    const previews = await Promise.all(files.map(fileToDataUri));
    setFilePreviews(previews);
  };

  const handleGenerate = async () => {
    if (uploadedFiles.length === 0) {
      toast({
        title: "No files uploaded",
        description: "Please upload at least one asset to get suggestions.",
        variant: "destructive"
      });
      return;
    }

    setSuggestionState({ suggestions: [], isLoading: true, error: null });

    try {
      const dataUris = await Promise.all(uploadedFiles.map(fileToDataUri));
      const result = await generateDesignSuggestions({ assets: dataUris });
      setSuggestionState({ suggestions: result.suggestions, isLoading: false, error: null });
    } catch (error) {
      console.error("Error generating design suggestions:", error);
      const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
      setSuggestionState({ suggestions: [], isLoading: false, error: errorMessage });
      toast({
        title: "Error Generating Suggestions",
        description: errorMessage,
        variant: "destructive"
      });
    }
  };

  return (
    <section id="ai-assistant" className="w-full py-20 md:py-32 bg-transparent">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl flex items-center justify-center gap-2">
            <Sparkles className="w-8 h-8 text-accent" />
            Visual Design Assistant
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Have assets but need ideas? Upload your images or logos and let our AI generate creative design suggestions for your brand.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          <Card className="bg-background/50">
            <CardHeader>
              <CardTitle>1. Upload Your Assets</CardTitle>
              <CardDescription>Select one or more images (e.g., logos, product photos).</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="picture" className="sr-only">Picture</Label>
                <Input id="picture" type="file" multiple onChange={handleFileChange} accept="image/*" />
              </div>

              {filePreviews.length > 0 && (
                <div className="mt-4">
                  <h4 className="font-medium mb-2">Previews:</h4>
                  <div className="grid grid-cols-3 gap-2">
                    {filePreviews.map((src, index) => (
                      <Image key={index} src={src} alt={`Preview ${index + 1}`} width={100} height={100} className="rounded-md object-cover aspect-square" />
                    ))}
                  </div>
                </div>
              )}
              
              <Button onClick={handleGenerate} disabled={suggestionState.isLoading} className="w-full mt-6">
                {suggestionState.isLoading ? (
                  <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Generating...</>
                ) : (
                  <><Sparkles className="mr-2 h-4 w-4" /> Generate Suggestions</>
                )}
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-background/50">
            <CardHeader>
              <CardTitle>2. Get AI-Powered Suggestions</CardTitle>
              <CardDescription>Here are some creative ideas for your brand's visuals.</CardDescription>
            </CardHeader>
            <CardContent>
              {suggestionState.isLoading ? (
                <div className="flex items-center justify-center h-40">
                  <Loader2 className="h-8 w-8 animate-spin text-accent" />
                </div>
              ) : suggestionState.error ? (
                <div className="text-destructive-foreground bg-destructive p-4 rounded-md">{suggestionState.error}</div>
              ) : suggestionState.suggestions.length > 0 ? (
                <ul className="space-y-3 list-disc list-inside text-sm text-foreground/90">
                  {suggestionState.suggestions.map((suggestion, index) => (
                    <li key={index}>{suggestion}</li>
                  ))}
                </ul>
              ) : (
                <div className="flex flex-col items-center justify-center text-center text-muted-foreground h-40 rounded-lg border-2 border-dashed">
                  <Upload className="h-8 w-8 mb-2" />
                  <p>Suggestions will appear here</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
