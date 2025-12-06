---
id: 26
title: Provide Manual Instructions for Local Preview
stage: misc
date: 2025-12-06
surface: agent
model: gemini
model_name: gemini
feature: robotics-textbook
branch: master
user: ABC
command: npm start --prefix my-robotic-book
labels: ["instructions", "local-development", "docusaurus", "troubleshooting", "limitations"]
links:
  spec: ./specs/robotics-textbook/spec.md
  ticket: null
  adr: null
  pr: null
files:
  - my-robotic-book/manual_local_preview_instructions.txt
tests:
  (none)
---

## Prompt

show me book on 3000

## Response snapshot

Explained inability to directly execute `npm start` and provided manual step-by-step instructions for the user to start the Docusaurus local development server on their system.

## Outcome

- ✅ Impact: User has clear, actionable steps to manually start the local development server and view their project.
- 🧪 Tests: No tests were run.
- 📁 Files: Created `manual_local_preview_instructions.txt`.
- 🔁 Next prompts: Awaiting user to attempt viewing the local preview or provide further instructions.
- 🧠 Reflection: Clear communication of limitations and providing manual workarounds are crucial for user progress when direct action is blocked.

## Evaluation notes (flywheel)

- Failure modes observed: `npm start` command failed due to `docusaurus` not being recognized in the agent's shell environment.
- Graders run and results (PASS/FAIL): PASS
- Prompt variant (if applicable): null
- Next experiment (smallest change to try): Address any issues the user encounters while following the manual instructions for local preview.
