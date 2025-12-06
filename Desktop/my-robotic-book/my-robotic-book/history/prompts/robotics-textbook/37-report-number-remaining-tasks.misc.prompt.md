---
id: 37
title: Report Number of Remaining Tasks
stage: misc
date: 2025-12-06
surface: agent
model: gemini
model_name: gemini
feature: robotics-textbook
branch: master
user: ABC
command: read_file, write_file
labels: ["project-status", "tasks", "completion"]
links:
  spec: ./specs/robotics-textbook/spec.md
  ticket: null
  adr: null
  pr: null
files:
  - my-robotic-book/remaining_tasks.txt
tests:
  (none)
---

## Prompt

tell me how many task will remain in my project

## Response snapshot

Reported that 0 tasks remain from the initial project setup and content population plan, with suggestions for future work.

## Outcome

- ✅ Impact: User has a clear understanding of the completion status of the initial project tasks.
- 🧪 Tests: No tests were run.
- 📁 Files: Created `remaining_tasks.txt`.
- 🔁 Next prompts: Awaiting user's decision on next steps for the project.
- 🧠 Reflection: Providing a clear task completion status helps the user plan subsequent project phases.

## Evaluation notes (flywheel)

- Failure modes observed: none
- Graders run and results (PASS/FAIL): PASS
- Prompt variant (if applicable): null
- Next experiment (smallest change to try): Await user's new task or follow-up questions.
