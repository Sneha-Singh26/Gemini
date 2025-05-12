import { GoogleGenAI } from '@google/genai';

async function runChat(prompt) {
  try {
    const ai = new GoogleGenAI({
      apiKey: 'AIzaSyA8WBXWXd-YYvVJdLWEXmRiHyi3rfGFUj4', // Replace with your actual API key
    });

    const config = {
      responseMimeType: 'text/plain',
    };

    const model = 'gemini-2.5-flash-preview-04-17'; // Adjust the model name if needed
    const contents = [
      {
        role: 'user',
        parts: [
          {
            text: prompt,
          },
        ],
      },
    ];

    const response = await ai.models.generateContentStream({
      model,
      config,
      contents,
    });

    // Log each chunk of the response
    let result = '';
    for await (const chunk of response) {
      result += chunk.text;
    }
    return result;
  } catch (error) {
    console.error('Error in runChat:', error);

    // Check for 503 status and return a user-friendly message
    if (error.message.includes('"code": 503')) {
      return "The model is currently overloaded. Please try again later.";
    }

    return "An error occurred. Please try again.";
  }
}

export default runChat;