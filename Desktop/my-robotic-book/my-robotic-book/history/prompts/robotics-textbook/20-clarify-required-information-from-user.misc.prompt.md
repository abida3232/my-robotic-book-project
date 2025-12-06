---
id: 20
title: Clarify Required Information from User
stage: misc
date: 2025-12-06
surface: agent
model: gemini
model_name: gemini
feature: robotics-textbook
branch: master
user: ABC
command: write_file
labels: ["clarification", "user-interaction", "troubleshooting"]
links:
  spec: ./specs/robotics-textbook/spec.md
  ticket: null
  adr: null
  pr: null
files:
  - my-robotic-book/what_i_want.txt
tests:
  (none)
---

## Prompt

tell me what you want

## Response snapshot

Clearly stated the specific information needed from the user regarding GitHub and Vercel deployment issues to proceed with troubleshooting.

## Outcome

- ✅ Impact: User has a clear understanding of what information is required for the agent to continue assisting with deployment issues.
- 🧪 Tests: No tests were run.
- 📁 Files: Created `what_i_want.txt`.
- 🔁 Next prompts: Awaiting user to provide the requested information.
- 🧠 Reflection: Direct and explicit requests for information are essential when troubleshooting requires external data from the user.

## Evaluation notes (flywheel)

- Failure modes observed: none
- Graders run and results (PASS/FAIL): PASS
- Prompt variant (if applicable): null
- Next experiment (smallest change to try): Analyze the information provided by the user.
