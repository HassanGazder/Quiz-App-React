import { createContext } from "react";
const AllQuiz =[
{
  id: 1,
  question: "1: What is the capital of pakistan",
  options: ["london", "Islamabad", "paris", "Chandigarh"],
  answer: "Islamabad",
},
{
  id: 2,
  question: "2: What is the capital of france",
  options: ["lahore", "Ludhiana", "Paris", "berlin"],
  answer: "Paris",
},
{
  id: 3,
  question: "3: What is the capital of India?",
  options: ["Delhi", "Mumbai", "Kolkata", "Chennai"],
  answer: "Delhi"
},
{
  id: 4,
  question: "4: What is the capital of England?",
  options: ["karachi", "berlin", "delhi", "London"],
  answer: "London"
},
{
  id: 5,
  question: "5: What is capital of Germany?",
  options: ["moscow", "Lucknow", "Berlin", "Agra"],
  answer: "Berlin"
},
]

export const Quizcontext = createContext(AllQuiz)
