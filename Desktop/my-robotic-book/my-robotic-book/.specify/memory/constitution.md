# AI-Native Robotics Textbook Constitution

## Core Principles

### I. Content is King
The primary focus of this project is the creation of a high-quality, accurate, and engaging textbook on Physical AI and Humanoid Robotics. The content must be clear, well-structured, and provide practical value to students and professionals.

### II. Spec-Driven Development
We will adhere to the `spec-kit-plus` methodology. All development, from book structure to software features, will begin with a clear specification, followed by a plan, tasks, and implementation. This ensures clarity and alignment throughout the project.

### III. Interactive and Engaging
The textbook will not be static. It will be an interactive, "AI-native" experience. This includes an integrated RAG chatbot for answering questions and personalization features to tailor the content to the user's background.

### IV. Automate Everything
We will strive for a high degree of automation in our development and deployment processes. This includes automated testing, linting, and continuous deployment of the textbook to GitHub Pages.

### V. Open Source and Collaborative
The project is built using open-source technologies. The final textbook will be publicly accessible, and the underlying code will be available for others to learn from and contribute to.

## Technology Stack

The following technologies are mandated for this project:

- **Textbook Framework:** Docusaurus
- **Deployment:** GitHub Pages
- **Chatbot Backend:** FastAPI (Python)
- **Chatbot Frontend:** React (embedded in Docusaurus)
- **Vector Database:** Qdrant Cloud (Free Tier)
- **Relational Database:** Neon Serverless Postgres
- **AI/LLM Integration:** OpenAI SDKs (Assistants, ChatKit)
- **Authentication:** Better-Auth.com

## Development Workflow

- **Branching:** All new features and chapters will be developed on separate feature branches.
- **Code Style:** We will use Prettier for code formatting and ESLint for linting to maintain a consistent code style.
- **Reviews:** All pull requests must be reviewed by at least one other team member before merging.
- **Testing:** All backend code must have unit tests with a minimum of 80% code coverage. Frontend components will be tested using Jest and React Testing Library.

## Governance
This constitution is the source of truth for the project's principles and standards. Any amendments must be proposed as a pull request, reviewed by the team, and documented in the project's ADRs if significant.

**Version**: 1.0 | **Ratified**: 2025-12-05 | **Last Amended**: 2025-12-05