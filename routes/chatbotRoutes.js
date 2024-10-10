const express = require('express');
const router = express.Router();

router.post('/message', (req, res) => {
    const userMessage = req.body.message;

    if (!userMessage) {
        return res.status(400).json({ message: 'Message cannot be empty' });
    }

    // Predefined responses with more prompts about the human body
    let botResponse = "Sorry, I didn't understand that.";
    const predefinedReplies = {
        "hello": "Hello! How can I assist you today?",
        "bye": "Goodbye! Have a great day!",
        "how are you": "I'm doing great! How about you?",
        "what is the brain": "The brain is the control center of the body, responsible for thought, memory, emotion, and movement.",
        "how many bones in the human body": "An adult human has 206 bones.",
        "what is the heart": "The heart is a muscular organ that pumps blood throughout the body.",
        "what is the liver": "The liver is a vital organ that processes nutrients and detoxifies harmful substances.",
        "how many muscles in the body": "There are over 600 muscles in the human body.",
        "what is the skin": "The skin is the largest organ of the human body, acting as a protective barrier.",
        "what is the stomach": "The stomach is a muscular organ involved in the digestion of food.",
        "what are the lungs": "The lungs are organs that help in the exchange of oxygen and carbon dioxide in the blood.",
        "what is the skeleton": "The skeleton provides structure to the body and protects vital organs.",
        "how many teeth do adults have": "Adults typically have 32 teeth.",
        "what are red blood cells": "Red blood cells carry oxygen from the lungs to the rest of the body.",
        "what are white blood cells": "White blood cells help fight infections and play a key role in the immune system.",
        "what is blood": "Blood is the fluid that transports oxygen, nutrients, and waste products throughout the body.",
        "what is the spine": "The spine is a column of vertebrae that protects the spinal cord and supports the body.",
        "what is the function of kidneys": "The kidneys filter waste products from the blood and produce urine.",
        "what is the small intestine": "The small intestine absorbs nutrients from food after it leaves the stomach.",
        "what is the large intestine": "The large intestine absorbs water and forms waste products for excretion.",
        "how many chambers in the heart": "The heart has four chambers: two atria and two ventricles.",
        "what is the diaphragm": "The diaphragm is a muscle that helps with breathing by contracting and expanding the lungs.",
        "what are nerves": "Nerves are bundles of fibers that transmit signals between the brain and the rest of the body.",
        "what is the immune system": "The immune system defends the body against harmful pathogens like bacteria and viruses.",
        "what are hormones": "Hormones are chemical messengers that regulate various functions in the body.",
        "what is the thyroid gland": "The thyroid gland regulates metabolism, energy levels, and growth.",
        "what are joints": "Joints are where two bones meet, allowing movement and flexibility.",
        "what is cartilage": "Cartilage is a flexible connective tissue found in joints, the nose, and the ear.",
        "how does the brain send signals": "The brain sends signals via the nervous system using electrical impulses.",
        "what is the function of the pancreas": "The pancreas helps in digestion and regulates blood sugar by producing insulin.",
        "how do muscles move": "Muscles contract and relax to create movement, working with bones and joints.",
        "how many ribs does the human body have": "Most humans have 24 ribs, 12 on each side.",
        "what is the bladder": "The bladder is an organ that stores urine before it is excreted.",
        "what is the function of the gallbladder": "The gallbladder stores bile, which helps digest fats.",
        "what is the function of the spleen": "The spleen helps filter blood and plays a role in the immune system.",
        "what is the endocrine system": "The endocrine system is made up of glands that release hormones into the bloodstream.",
        "what is the reproductive system": "The reproductive system is responsible for producing offspring.",
        "what is the circulatory system": "The circulatory system transports blood, oxygen, and nutrients throughout the body.",
        "what is the respiratory system": "The respiratory system is responsible for taking in oxygen and expelling carbon dioxide.",
        "how does the heart pump blood": "The heart pumps blood through rhythmic contractions, circulating it throughout the body."
    };

    // Check if the message matches a predefined response
    for (const key in predefinedReplies) {
        if (userMessage.toLowerCase().includes(key)) {
            botResponse = predefinedReplies[key];
            break;
        }
    }

    res.json({ message: botResponse });
});

module.exports = router;
