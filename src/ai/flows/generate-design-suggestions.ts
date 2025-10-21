'use server';

/**
 * @fileOverview This file defines a Genkit flow for generating design suggestions based on user-uploaded assets.
 *
 * The flow takes asset data URIs as input and returns creative design suggestions to inspire and enhance website visual appeal.
 * This file exports:
 *   - `generateDesignSuggestions`: The main function to trigger the design suggestion flow.
 *   - `GenerateDesignSuggestionsInput`: The input type for the `generateDesignSuggestions` function.
 *   - `GenerateDesignSuggestionsOutput`: The output type for the `generateDesignSuggestions` function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateDesignSuggestionsInputSchema = z.object({
  assets: z
    .array(
      z
        .string()
        .describe(
          "A list of assets as data URIs that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
        )
    )
    .describe('A list of data URIs representing the assets for design suggestions.'),
});
export type GenerateDesignSuggestionsInput = z.infer<
  typeof GenerateDesignSuggestionsInputSchema
>;

const GenerateDesignSuggestionsOutputSchema = z.object({
  suggestions: z
    .array(z.string())
    .describe('A list of creative design suggestions.'),
});
export type GenerateDesignSuggestionsOutput = z.infer<
  typeof GenerateDesignSuggestionsOutputSchema
>;

export async function generateDesignSuggestions(
  input: GenerateDesignSuggestionsInput
): Promise<GenerateDesignSuggestionsOutput> {
  return generateDesignSuggestionsFlow(input);
}

const generateDesignSuggestionsPrompt = ai.definePrompt({
  name: 'generateDesignSuggestionsPrompt',
  input: {schema: GenerateDesignSuggestionsInputSchema},
  output: {schema: GenerateDesignSuggestionsOutputSchema},
  prompt: `You are a creative design assistant for websites. Given the following assets, generate creative design suggestions to inspire and enhance website visual appeal. Return the suggestions as a numbered list.

  Assets:
  {{#each assets}}
  {{@index}}. {{media url=this}}
  {{/each}}`,
});

const generateDesignSuggestionsFlow = ai.defineFlow(
  {
    name: 'generateDesignSuggestionsFlow',
    inputSchema: GenerateDesignSuggestionsInputSchema,
    outputSchema: GenerateDesignSuggestionsOutputSchema,
  },
  async input => {
    const {output} = await generateDesignSuggestionsPrompt(input);
    return output!;
  }
);
