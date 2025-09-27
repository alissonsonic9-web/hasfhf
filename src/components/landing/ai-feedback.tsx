"use client";

import { useState } from 'react';
import { getPersonalizedFeedback, type PersonalizedFeedbackOutput } from '@/ai/flows/personalized-feedback';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Loader2, Mic, Bot, Zap, Target } from 'lucide-react';

// This is a dummy silent audio data URI to simulate a recording.
const DUMMY_RECORDING_URI = "data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAAABkYXRhIAAAAAAAAAA=";

export function AIFeedback() {
  const [isLoading, setIsLoading] = useState(false);
  const [feedback, setFeedback] = useState<PersonalizedFeedbackOutput | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleGetFeedback = async () => {
    setIsLoading(true);
    setError(null);
    setFeedback(null);

    try {
      const input = {
        studentRecordingDataUri: DUMMY_RECORDING_URI,
        exerciseDetails: "O aluno deveria tocar a escala de Dó Maior em um andamento de 120bpm. As notas são C, D, E, F, G, A, B, C.",
        studentSkills: "Aluno iniciante, 3 meses de prática. Demonstra dificuldade com ritmo e afinação, especialmente em notas mais agudas.",
      };
      const result = await getPersonalizedFeedback(input);
      setFeedback(result);
    } catch (e: any) {
      setError("Houve um erro ao processar o áudio. Por favor, tente novamente.");
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <Card className="max-w-3xl mx-auto shadow-lg border-primary/20">
          <CardHeader className="text-center">
            <div className="mx-auto bg-primary/10 rounded-full p-3 w-fit mb-4">
              <Bot className="w-10 h-10 text-primary" />
            </div>
            <CardTitle className="text-3xl font-bold">Feedback com Inteligência Artificial</CardTitle>
            <CardDescription className="text-lg text-muted-foreground">
              Veja na prática como nossa IA analisa sua performance e te ajuda a evoluir.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center p-6 border rounded-lg bg-card">
              <p className="font-semibold text-lg">Exercício Simulado:</p>
              <p className="text-muted-foreground">Toque a escala de Dó Maior (C-D-E-F-G-A-B-C).</p>
            </div>
            
            {isLoading && (
              <div className="flex justify-center items-center p-8">
                <Loader2 className="h-12 w-12 animate-spin text-primary" />
                <p className="ml-4 text-lg">Analisando sua performance...</p>
              </div>
            )}

            {error && (
              <Alert variant="destructive">
                <AlertTitle>Erro!</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            {feedback && (
              <div className="space-y-4 animate-in fade-in-50 duration-500">
                <h3 className="text-xl font-semibold text-center text-primary">Análise da IA Concluída!</h3>
                <div className="p-4 border rounded-lg bg-card space-y-2">
                  <div className="flex items-center gap-3">
                    <Zap className="w-5 h-5 text-accent flex-shrink-0"/>
                    <p><strong>Feedback:</strong> {feedback.feedback}</p>
                  </div>
                </div>
                 <div className="p-4 border rounded-lg bg-card space-y-2">
                  <div className="flex items-center gap-3">
                    <Target className="w-5 h-5 text-accent flex-shrink-0"/>
                    <p><strong>Áreas para Melhorar:</strong> {feedback.areasForImprovement}</p>
                  </div>
                </div>
                 <div className="p-4 border rounded-lg bg-card space-y-2">
                  <div className="flex items-center gap-3">
                    <Bot className="w-5 h-5 text-accent flex-shrink-0"/>
                    <p><strong>Dificuldade Ajustada:</strong> {feedback.adjustedDifficulty}</p>
                  </div>
                </div>
              </div>
            )}

          </CardContent>
          <CardFooter className="flex justify-center">
            <Button onClick={handleGetFeedback} disabled={isLoading} size="lg" className="font-bold">
              <Mic className="mr-2 h-5 w-5" />
              {isLoading ? 'Analisando...' : 'Gravar e Analisar Performance'}
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
