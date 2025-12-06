---
id: 23
title: Explain Inability to Display Graphical Preview
stage: misc
date: 2025-12-06
surface: agent
model: gemini
model_name: gemini
feature: robotics-textbook
branch: master
user: ABC
command: write_file
labels: ["clarification", "user-interaction", "limitations"]
links:
  spec: ./specs/robotics-textbook/spec.md
  ticket: null
  adr: null
  pr: null
files:
  - my-robotic-book/cannot_show_local_preview_explanation.txt
tests:
  (none)
---

## Prompt

show mein local system prevew

## Response snapshot

Explained that as a CLI agent, I cannot display graphical previews and reiterated the steps for the user to view it in their web browser.

## Outcome

- ✅ Impact: User has a clear understanding of the agent's limitations regarding graphical output and the correct procedure for viewing local web previews.
- 🧪 Tests: No tests were run.
- 📁 Files: Created `cannot_show_local_preview_explanation.txt`.
- 🔁 Next prompts: Awaiting user to attempt viewing the local preview or provide further instructions.
- 🧠 Reflection: Managing user expectations about tool capabilities is important for smooth interaction.

## Evaluation notes (flywheel)

- Failure modes observed: none
- Graders run and results (PASS/FAIL): PASS
- Prompt variant (if applicable): null
- Next experiment (smallest change to try): Address any issues the user encounters while following instructions to view the local preview.
