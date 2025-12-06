---
id: 22
title: Provide Instructions for Local Project Review
stage: misc
date: 2025-12-06
surface: agent
model: gemini
model_name: gemini
feature: robotics-textbook
branch: master
user: ABC
command: write_file
labels: ["instructions", "local-development", "docusaurus"]
links:
  spec: ./specs/robotics-textbook/spec.md
  ticket: null
  adr: null
  pr: null
files:
  - my-robotic-book/local_check_instructions.txt
tests:
  (none)
---

## Prompt

i want to check project on my system

## Response snapshot

Provided step-by-step instructions on how to start the Docusaurus local development server to view the book content on their system.

## Outcome

- ✅ Impact: User has clear, actionable steps to review their project content locally.
- 🧪 Tests: No tests were run.
- 📁 Files: Created `local_check_instructions.txt`.
- 🔁 Next prompts: Awaiting user's feedback after attempting local review.
- 🧠 Reflection: Providing clear and concise operational instructions is key for user self-sufficiency.

## Evaluation notes (flywheel)

- Failure modes observed: none
- Graders run and results (PASS/FAIL): PASS
- Prompt variant (if applicable): null
- Next experiment (smallest change to try): Address any issues encountered during local project review.
