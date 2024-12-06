// src/pages/api/getCocktail.ts
import type { APIRoute } from 'astro';
const apiKey = import.meta.env.OPENAI_API_KEY;
//const apiKey = process.env.OPENAI_API_KEY;
const baseUrl = "https://openrouter.ai/api";
const model = "gpt-3.5-turbo";
const temperature = 0.5;    
const maxTokens = 500;


export const POST: APIRoute = async ({ request }) => {
    const { input } = await request.json();
    console.log('input--->:', input);
    let body = {
        messages: [
            {
                role: "system",
                content: "You are a professional cocktail recipe creator. Generate a professional cocktail recipe for a [description of the cocktail] including the following details: A detailed description of the cocktail\'s flavor profile, ingredients, and presentation. A step-by-step set of instructions for preparing the cocktail, starting from any ingredient infusions if necessary. Include the ABV (alcohol by volume), calories, and net carbs for one serving of the cocktail. List the ingredients clearly with exact measurements and provide garnish suggestions. Ensure the tone is sophisticated and appeals to an audience looking for a high-end cocktail experience."
            },
            {
                role: "user",
                content: input
            }
        ],
        model: model,
        temperature: temperature,
        max_tokens: maxTokens
    }
    console.log('body--->:', body);
    try {
        // 使用fetch调用假设的第三方API
        const response = await fetch(`${baseUrl}/v1/chat/completions`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify(body)
        });

        if (!response.ok) {
            throw new Error('Third party API request failed');
        }

        const data = await response.json();
        console.log('data--->:', data);
        console.log('data--->:', data.choices[0].message.content);
        return new Response(JSON.stringify({ result: data.choices[0].message.content }), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (error) {
        console.error('Error:', error);
        return new Response(JSON.stringify({ error: 'Error fetching cocktail recipe' }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
};
