// app.js
const express = require('express');
const bodyParser = require('body-parser');
 

const chatbotRoutes = require('./routes/chatbotRoutes');
const app = express();

app.set('view engine', 'pug');
app.use(bodyParser.json());
app.use(express.static('public'));

// List of prompts to be passed to the template
const prompts = [
    "What is the brain?", "How many bones are in the human body?", "What is the heart?", "What is the liver?",
    "What are red blood cells?", "How many muscles are in the body?", "What are white blood cells?",
    "What is the immune system?", "What is the largest organ in the body?", "What is the function of the lungs?",
    "What are the types of blood vessels?", "How does digestion work?", "What is the role of the kidneys?",
    "What are nerves?", "What is the spinal cord?", "What are hormones?", "What is the pancreas?",
    "How does the body regulate temperature?", "What is metabolism?", "What is the function of the stomach?",
    "What is the skeletal system?", "What is the nervous system?", "What is the circulatory system?",
    "How many teeth do humans have?", "What is the function of saliva?", "What is the function of the brain?",
    "How do muscles contract?", "What are joints?", "What is cartilage?", "What are tendons?", "What is bone marrow?",
    "What is the lymphatic system?", "What is the role of the heart?", "How do the senses work?", "What is the endocrine system?",
    "What is the urinary system?", "What is the role of the liver?", "What is the digestive system?",
    "What is the respiratory system?", "What are alveoli?", "What is the esophagus?", "How does the immune system fight infections?",
    "What is the pituitary gland?", "How does the heart pump blood?", "What is the large intestine?",
    "What is the small intestine?", "How do cells divide?", "What is DNA?", "What is RNA?", "What are chromosomes?"
];

app.get('/', (req, res) => {
    res.render('index', { prompts });
});

app.use('/api/chatbot', chatbotRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
