// src/pages/api/getCocktail.ts
import type { APIRoute } from 'astro';
import { SYSTEM_PROMPT, baseUrl, model, temperature, maxTokens } from './prompt';
const apiKey = import.meta.env.OPENAI_API_KEY;
//const apiKey = process.env.OPENAI_API_KEY;


export const POST: APIRoute = async ({ request }) => {
    const { input } = await request.json();
    console.log('input--->:', input);
    let body = {
        messages: [
            SYSTEM_PROMPT,
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
