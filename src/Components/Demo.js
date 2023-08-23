import React from "react";
import axios from "axios";
import { useState } from "react";
import OpenAI from "openai";
export default function Demo() {

    const [inputParagraph, setInputParagraph] = useState('');
  const [paraphrasedParagraph, setParaphrasedParagraph] = useState('');

  const handleParaphrase = async () => {
    const prompt = `Paraphrase the following paragraph:\n${inputParagraph}\nParaphrased paragraph:`;

    try {
      const response = await OpenAI.Completions.caller({
        engine: 'text-davinci-003',  // Choose an appropriate engine
        prompt: prompt,
        max_tokens: 50,  // Adjust to control the length of the paraphrased output
        api_key: "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",
      });

      setParaphrasedParagraph(response.choices[0].text.trim());
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

    
    // const diverseSources = 'bbc-news,cnn,reuters,the-new-york-times,wired,the-verge,engadget';
    // const API_KEY = '3834a362799b4358aa40ffd7ca3791b8';
    // const BASE_URL = 'https://newsapi.org/v2/everything';
    
    // const queryParams = {
    //   apiKey: API_KEY,
    //   sources: diverseSources,
    //   q: 'technology',
    // };
    
    // const maxArticlesPerSource = 2; 
    // const articlesPerSource = {}; 
    // const newNews = [];
    
    // axios.get(BASE_URL, { params: queryParams })
    //   .then((response) => {
    //     const data = response.data;
    //     const articles = data.articles || [];
    //     articles.forEach((article) => {
    //       const sourceName = article.source.name;
    //       if (!articlesPerSource[sourceName]) {
    //         articlesPerSource[sourceName] = 1;
    //         console.log(article.title, sourceName);
    //         newNews.push(article);
    //       } else if (articlesPerSource[sourceName] < maxArticlesPerSource) {
    //         articlesPerSource[sourceName]++;
    //         newNews.push(article);
    //         console.log(article.title, sourceName);
    //       }
    //     });
    //   })
    //   .catch((error) => {
    //     console.error('Error:', error.message);
    //   });

    //   console.log(articlesPerSource);
    //   console.log(newNews);
    

    
    
    
    
  return <div>

<textarea
        rows="5"
        cols="50"
        value={inputParagraph}
        onChange={(e) => setInputParagraph(e.target.value)}
      />
      <br />
      <button onClick={handleParaphrase}>Paraphrase</button>
      <br />
      <div>
        <h3>Original Paragraph:</h3>
        <p>{inputParagraph}</p>
        <h3>Paraphrased Paragraph:</h3>
        <p>{paraphrasedParagraph}</p>
      </div>
  </div>;
}
