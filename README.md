# AI-HUB Modular SPA

A high-performance, responsive Single Page Application (SPA) for discovering and previewing AI tools. Built with Vanilla JavaScript, ES6 Modules, and Tailwind CSS.

## 📁 Project Structure

```text
ai-hub/
├── index.html          # Main entry point
├── css/
│   └── main.css        # Custom styles and animations
├── js/
│   ├── app.js          # Main entry & state management
│   ├── components.js   # UI Factory (HTML templates)
│   ├── data.js         # Tool database & categories
│   └── router.js       # Filtering & search logic
└── README.md           # Documentation
```

## 🚀 Getting Started

Simply open `index.html` in any modern web browser. No build step or installation is required.

## 🛠️ Adding New Tools

To add a new tool to the hub, open `js/data.js` and add a new object to the `TOOLS` array:

```javascript
{
    id: 11, // Unique ID
    name: "Tool Name",
    category: "LLM", // One of: LLM, Image Gen, Video/Audio, Developer Tools, Research
    desc: "A brief one-sentence description.",
    url: "https://example.com",
    tags: ["tag1", "tag2"]
}
```

## ✨ Features

- **Real-time Search:** Filter across names, descriptions, and tags.
- **Category Filtering Index:** Quick access via the sidebar.
- **Peek View:** Snapshot preview of websites without leaving the app.
- **Responsive Design:** Optimized for mobile, tablet, and desktop.
- **Dark Mode:** Sleek Zinc-based dark theme with Emerald accents.

## 🗺️ Roadmap

- [ ] **User Favorites:** Save tools to a "Favorites" list using `LocalStorage`.
- [ ] **Custom Categories:** Allow users to create their own collections.
- [ ] **AI-Powered Search:** Integrate a small LLM for semantic search.
- [ ] **Tool Stats:** Show popularity or last updated status.

## 📄 License

MIT
