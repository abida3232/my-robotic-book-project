---
id: 35
title: Await User's Next Project Command
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
  - my-robotic-book/awaiting_next_command.txt
tests:
  (none)
---

## Prompt

next command

## Response snapshot

Prompted the user for their next command or task, offering suggestions for continuation of the project.

## Outcome

- ✅ Impact: User has been clearly invited to provide the next specific task for project development.
- 🧪 Tests: No tests were run.
- 📁 Files: Created `awaiting_next_command.txt`.
- 🔁 Next prompts: Awaiting user's specific project command.
- 🧠 Reflection: Providing clear options can help guide the user when transitioning between different phases or tasks.

## Evaluation notes (flywheel)

- Failure modes observed: none
- Graders run and results (PASS/FAIL): PASS
- Prompt variant (if applicable): null
- Next experiment (smallest change to try): Address the specific new task provided by the user.
