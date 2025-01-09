/*const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.REACT_APP_OPENAI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const prompt = "Explain how AI works";

const result = await model.generateContent(prompt);
console.log(result.response.text());*/

import { GoogleGenerativeAI } from "@google/generative-ai";

/*
  1 - Configure Gemini with an API key
  2 - Define a prompt
  3 - Choose the model
  4 - Call the Gemini API to generate content
  5 - Handle API responses and errors
*/

// const apiKey = process.env.REACT_APP_OPENAI_API_KEY;
const apiKey = "AIzaSyCBgBFtYb-hkScQBi4wr0HGa-HpuRqNjmM";

const genAI = new GoogleGenerativeAI(apiKey);

export default async function (req, res) {
    if (!apiKey) {
        res.status(500).json({ error: "Gemini API key is required. Please add your key to the environment variables." });
        return;
    }
    if (!req.body.input) {
        res.status(400).json({ error: "Missing input." });
        return;
    }

    try {
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        // Define the prompt
        const prompt = `Q: ${req.body.input}\nA:`;

        // Call the Gemini API
        const result = await model.generateContent(prompt);

        // Send the response back
        // console.log(result.response.text())
        res.status(200).json({ result: result.response.text() });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
