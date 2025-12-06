---
id: 15
title: Request User to Complete Incomplete Message
stage: misc
date: 2025-12-06
surface: agent
model: gemini
model_name: gemini
feature: robotics-textbook
branch: master
user: ABC
command: write_file
labels: ["clarification", "user-interaction"]
links:
  spec: ./specs/robotics-textbook/spec.md
  ticket: null
  adr: null
  pr: null
files:
  - my-robotic-book/incomplete_message_prompt.txt
tests:
  (none)
---

## Prompt

it show """

## Response snapshot

Requested the user to complete their message to understand the problem.

## Outcome

- ✅ Impact: User has been prompted to provide missing information, which is necessary for the agent to proceed.
- 🧪 Tests: No tests were run.
- 📁 Files: Created `incomplete_message_prompt.txt`.
- 🔁 Next prompts: Awaiting user's complete message.
- 🧠 Reflection: Clear communication is essential, especially when user input is ambiguous.

## Evaluation notes (flywheel)

- Failure modes observed: none
- Graders run and results (PASS/FAIL): PASS
- Prompt variant (if applicable): null
- Next experiment (smallest change to try): Analyze the complete message provided by the user.
