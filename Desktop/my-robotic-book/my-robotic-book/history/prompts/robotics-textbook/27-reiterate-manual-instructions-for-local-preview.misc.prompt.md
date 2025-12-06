---
id: 27
title: Reiterate Manual Instructions for Local Preview
stage: misc
date: 2025-12-06
surface: agent
model: gemini
model_name: gemini
feature: robotics-textbook
branch: master
user: ABC
command: write_file
labels: ["instructions", "local-development", "docusaurus", "troubleshooting", "limitations", "reiteration"]
links:
  spec: ./specs/robotics-textbook/spec.md
  ticket: null
  adr: null
  pr: null
files:
  - my-robotic-book/manual_local_preview_instructions_reiterate.txt
tests:
  (none)
---

## Prompt

gemini please show me my project on local host 3000

## Response snapshot

Reiterated that the agent cannot display graphical previews and provided manual step-by-step instructions for the user to start the Docusaurus local development server on their system and view it in their web browser.

## Outcome

- ✅ Impact: User has been re-provided with actionable steps to manually view their project locally, emphasizing the agent's inability to provide graphical output.
- 🧪 Tests: No tests were run.
- 📁 Files: Created `manual_local_preview_instructions_reiterate.txt`.
- 🔁 Next prompts: Awaiting user's next command, likely after attempting local viewing.
- 🧠 Reflection: Persistent, clear communication is necessary when addressing repeated requests that exceed agent capabilities.

## Evaluation notes (flywheel)

- Failure modes observed: `npm start` command failed due to `docusaurus` not being recognized in the agent's shell environment.
- Graders run and results (PASS/FAIL): PASS
- Prompt variant (if applicable): null
- Next experiment (smallest change to try): Address any issues the user encounters while following the manual instructions for local preview, or proceed with other tasks.
