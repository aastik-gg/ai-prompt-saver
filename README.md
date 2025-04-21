# 🧠 AI Prompt Saver

An elegant and interactive React-based app to manage and explore AI prompts. Users can create, view, edit, delete, and search prompts using a modern UI and seamless API integration.

## 🚀 Features

- 🏠 **Home Page**: Displays a list of all AI prompts fetched from the MockAPI.
- 🔍 **Search**: Real-time filtering of prompts using keywords.
- ➕ **Add Prompt**: Form to submit new prompts to the API.
- 📝 **Edit Prompt**: Modify existing prompts directly from the interface.
- 🧾 **Prompt Detail Page**: View the full details of a single prompt.
- 🧑‍💻 **User Prompts Page**: List of prompts submitted by the current user.
- 🌐 **Routing**: Handled via `react-router-dom`.
- 🪄 **Unique Design**: Uses Raleway font and Tailwind CSS with a modern gradient theme inspired by GitInjest.

## 🏗️ Project Structure

```
/src
├── assets                # Images, icons, static files (if needed)
├── components            # Reusable UI components
│   ├── AddPrompt.jsx
│   ├── EditPrompt.jsx
│   ├── Navbar.jsx
│   ├── PromptCard.jsx
│   ├── PromptList.jsx
│   └── SearchBar.jsx
├── context               # React Context for managing global state
│   └── PromptContext.jsx
├── pages                 # Main route pages
│   ├── AddPromptPage.jsx
│   ├── AllPromptsPage.jsx
│   ├── EditPromptPage.jsx
│   ├── Home.jsx
│   ├── PromptDetail.jsx
│   └── UserPromptsPage.jsx
├── services              # API logic
│   └── api.jsx
├── styles                # Tailwind + global styling
│   └── index.css
├── App.jsx               # App layout and route structure
└── main.jsx              # Vite project entry point
```

## ⚙️ Tech Stack

- **Frontend**: React + Vite
- **Styling**: Tailwind CSS + Google Fonts (Raleway)
- **Routing**: React Router DOM
- **API**: [MockAPI.io](https://mockapi.io/) for simulating backend
- **Version Control**: Git + GitHub

## 🛠️ Getting Started

```bash
git clone https://github.com/aastik-gg/ai-prompt-saver.git
cd ai-prompt-saver
npm install
npm run dev
```

## 🌐 API Setup
- Go to [MockAPI](https://mockapi.io/)
- Create a new project and resource called `prompts`
- Add the following fields to the schema:
  - `title` (String)
  - `description` (String)
  - `tag` (String)
  - `userId` (String)
- Add your API base URL to a `.env` file as:
```env
VITE_API_BASE_URL=https://68025d230a99cb7408e96710.mockapi.io/api
```

## 🤩 Demo Ideas
- [ ] Add authentication (e.g., Firebase Auth)
- [ ] Export prompt collections
- [ ] Upvote/favorite prompts

## ✍️ Author
Developed by [Aastik Nayyar] — feel free to connect and contribute!

## 📄 License
MIT License. Feel free to fork, modify, and use!

