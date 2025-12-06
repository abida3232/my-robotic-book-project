---
id: 28
title: Final Instructions for Running Project on Localhost
stage: misc
date: 2025-12-06
surface: agent
model: gemini
model_name: gemini
feature: robotics-textbook
branch: master
user: ABC
command: write_file
labels: ["instructions", "local-development", "docusaurus", "user-action-required"]
links:
  spec: ./specs/robotics-textbook/spec.md
  ticket: null
  adr: null
  pr: null
files:
  - my-robotic-book/final_local_run_instructions.txt
tests:
  (none)
---

## Prompt

i want to see my project over veiw can you help me to provide run project on local host

## Response snapshot

Provided clear, emphatic instructions for the user to manually run `npm start` in their terminal to view the project on `http://localhost:3000`, stressing that the agent cannot execute or display it directly.

## Outcome

- ✅ Impact: User has received final, explicit instructions on how to run their project locally, with a clear understanding of the agent's limitations.
- 🧪 Tests: No tests were run.
- 📁 Files: Created `final_local_run_instructions.txt`.
- 🔁 Next prompts: Awaiting user's feedback after attempting to run the project locally.
- 🧠 Reflection: Repeatedly clarifying agent capabilities and requiring user action for tasks outside those capabilities is essential for managing expectations and moving forward.

## Evaluation notes (flywheel)

- Failure modes observed: none
- Graders run and results (PASS/FAIL): PASS
- Prompt variant (if applicable): null
- Next experiment (smallest change to try): Address any issues the user encounters while following the provided instructions, or return to deployment troubleshooting once relevant logs/details are provided.
