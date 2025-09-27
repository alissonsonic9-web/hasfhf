'use server';

/**
 * @fileOverview AI-powered personalized feedback for ear training exercises.
 *
 * - getPersonalizedFeedback - A function that analyzes a student's performance and provides feedback.
 * - PersonalizedFeedbackInput - The input type for the getPersonalizedFeedback function.
 * - PersonalizedFeedbackOutput - The return type for the getPersonalizedFeedback function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedFeedbackInputSchema = z.object({
  studentRecordingDataUri: z
    .string()
    .describe(
      "The student's recording of the ear training exercise, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
  exerciseDetails: z.string().describe('Details about the exercise, including correct pitches.'),
  studentSkills: z.string().describe('The current skills and progress of the student.'),
});
export type PersonalizedFeedbackInput = z.infer<typeof PersonalizedFeedbackInputSchema>;

const PersonalizedFeedbackOutputSchema = z.object({
  feedback: z.string().describe('Personalized feedback for the student.'),
  areasForImprovement: z.string().describe('Specific areas where the student can improve.'),
  adjustedDifficulty: z.string().describe('Suggested adjustment to the difficulty of future modules.'),
});
export type PersonalizedFeedbackOutput = z.infer<typeof PersonalizedFeedbackOutputSchema>;

export async function getPersonalizedFeedback(input: PersonalizedFeedbackInput): Promise<PersonalizedFeedbackOutput> {
  return personalizedFeedbackFlow(input);
}

const personalizedFeedbackPrompt = ai.definePrompt({
  name: 'personalizedFeedbackPrompt',
  input: {schema: PersonalizedFeedbackInputSchema},
  output: {schema: PersonalizedFeedbackOutputSchema},
  prompt: `You are an AI-powered ear training assistant providing personalized feedback to music students.

Analyze the student's recording in relation to the exercise details and student skills, and provide specific, constructive feedback.

Student Skills: {{{studentSkills}}}
Exercise Details: {{{exerciseDetails}}}
Student Recording: {{media url=studentRecordingDataUri}}

Based on the student's performance, identify areas for improvement and suggest adjustments to the difficulty of future modules.

Ensure the feedback is encouraging and helps the student progress in their ear training journey.

Provide feedback, identify areas for improvement, and suggest difficulty adjustments, within the output schema described.`,
});

const personalizedFeedbackFlow = ai.defineFlow(
  {
    name: 'personalizedFeedbackFlow',
    inputSchema: PersonalizedFeedbackInputSchema,
    outputSchema: PersonalizedFeedbackOutputSchema,
  },
  async input => {
    const {output} = await personalizedFeedbackPrompt(input);
    return output!;
  }
);
