---
id: 36
title: Await User's Specific Next Command
stage: misc
date: 2025-12-06
surface: agent
model: gemini
model_name: gemini
feature: robotics-textbook
branch: master
user: ABC
command: write_file
labels: ["user-interaction", "next-steps"]
links:
  spec: ./specs/robotics-textbook/spec.md
  ticket: null
  adr: null
  pr: null
files:
  - my-robotic-book/awaiting_specific_command.txt
tests:
  (none)
---

## Prompt

next command

## Response snapshot

Prompted the user to provide their next specific command or task for the project.

## Outcome

- ✅ Impact: User has been clearly invited to provide the next specific task.
- 🧪 Tests: No tests were run.
- 📁 Files: Created `awaiting_specific_command.txt`.
- 🔁 Next prompts: Awaiting user's specific project command.
- 🧠 Reflection: Reiterating the request for a specific command is necessary when a generic "next command" is provided multiple times.

## Evaluation notes (flywheel)

- Failure modes observed: none
- Graders run and results (PASS/FAIL): PASS
- Prompt variant (if applicable): null
- Next experiment (smallest change to try): Address the specific new task provided by the user.
