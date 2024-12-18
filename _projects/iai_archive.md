---
layout: page
title: Interactive AI CDT Archive
description: Notable work from the Interactive AI CDT foundation year
img: assets/img/projects/archive.jpeg
importance: 3
category: archive
related_publications: false
---

## The UX of AI

Description: Artificial intelligence (AI) is a powerful tool for intelligent decision-making; however, there is an
urgent need for a better understanding of how AI can be developed with a focus on user experience. This literature
review aims to identify gaps within user experience research regarding AI, highlight current discussions in interactive
AI design, discuss principles for designing trustworthy and human-centred AI, and link existing design heuristics to
interactive AI design. \
PDF: [The UX of AI]({{ site.url }}/assets/pdf/The_UX_of_AI.pdf){:target="\_blank"}

## Chatbot with a Persona

Description: This study uses modern LLMs to attempt the ConvAI2 competition. The competition’s goal was to create a
conversational AI that could generate a suitable response to user inputs, given a dialogue history and a description of
the agent’s persona. This study developed a system for evaluating LLMs for this task using human feedback. Using the
developed system, three models were implemented for testing; it was found that modern LLMs can produce suitable outputs
deemed representative of a persona but struggle to convey them naturally. Hyperparameters were also analysed, with
findings indicating that increasing temperature increases the naturalness of outputs and top_p increases result in
better persona representation. \
PDF: [Chatbot with a Persona]({{ site.url }}/assets/pdf/Chatbot_with_a_Persona.pdf){:target="\_blank"} \
GitHub: [PersonaChat](https://github.com/jackjburnett/PersonaChat)

## MoReBikeS

Description: This paper accompanies a Kaggle submission to a repliocation of the ECML/PKDD 2015’s Model Reuse with Bike
rental Station data (MoReBikeS) Discovery Challenge. In the competition, participants are provided with information on
275 bike rental stations and must use this to predict the future availability of said stations. The competition is
divided into three phases. Phase 1 focuses on developing models to predict the availability of 75 stations over three
months; the previous month’s data is used to train these models. Phase 2 focuses on the adaptive reuse of learnt
knowledge by implementing linear models, trained on a year’s data for 200 stations, to predict the stations in phase 1.
Phase 3 focuses on participants combining the approaches of Phases 1 and 2 to achieve better performance within the
task. Methods are evaluated using the Mean Absolute Error of the model on a test data set. \
PDF: [MoReBikeS]({{ site.url }}/assets/pdf/MoReBikeS.pdf){:target="\_blank"} \
ipynb: [MoReBikeS]({{ site.url }}/assets/jupyter/MoReBikeS.ipynb){:target="\_blank"} \
DataLore Report: [MLP Report](https://datalore.jetbrains.com/report/static/xpFJ0NI0hLRUqjTY7AiDhW/gJfzOP9X0rRh0OeSLzSlyr)
