export const TOOLS = [
    {
        id: 1,
        name: "ChatGPT",
        categories: ["LLM", "Research"],
        desc: "OpenAI's flagship; now powered by GPT-5.1 with 'Thinking' modes for persistent complex reasoning.",
        url: "https://chatgpt.com",
        tags: ["gpt-5.1", "reasoning", "multimodal"],
        favourite: true,
        pricing: "freemium"
    },
    {
        id: 2,
        name: "Gemini",
        categories: ["LLM", "Developer Tools"],
        desc: "Google's Gemini 3 with 2M+ context. Features dedicated 'Thinking' and 'Pro' quotas for deep analysis.",
        url: "https://gemini.google.com",
        tags: ["google", "long-context", "fast"],
        favourite: true,
        pricing: "freemium"
    },
    {
        id: 14,
        name: "Yupp",
        categories: ["Research", "LLM"],
        desc: "Side-by-side comparison of 800+ models. Features a 'Train-to-Earn' system for rewards in cash or crypto.",
        url: "https://yupp.ai/",
        tags: ["benchmarking", "rewards", "discovery"],
        favourite: true,
        pricing: "free"
    },
    {
        id: 11,
        name: "GenTube",
        categories: ["Image Gen", "Video/Audio"],
        desc: "The 'TikTok of AI Art'—completely free, unlimited, and social-first image and short-form video generation.",
        url: "https://www.gentube.app",
        tags: ["free", "unlimited", "social"],
        favourite: true,
        pricing: "free"
    },
    {
        id: 19,
        name: "Antigravity",
        categories: ["AI Agents", "Developer Tools"],
        desc: "Google's agent-first IDE (forked from VS Code) orchestrating autonomous coding agents via Gemini 3 Pro.",
        url: "https://antigravity.google",
        tags: ["google", "agent-first", "ide"],
        favourite: true,
        pricing: "freemium"
    },
    {
        id: 21,
        name: "OpenHands",
        categories: ["AI Agents"],
        desc: "The premier open-source autonomous agent platform (formerly OpenDevin) for full-stack engineering.",
        url: "https://github.com/All-Hands-AI/OpenHands",
        tags: ["open-source", "agents", "python"],
        favourite: false,
        pricing: "free"
    },
    {
        id: 12,
        name: "Kimi",
        categories: ["LLM", "AI Agents"],
        desc: "Moonshot AI's 'K2 Thinking' model; maintains stable reasoning across 300+ sequential tool calls.",
        url: "https://kimi.moonshot.cn/",
        tags: ["reasoning", "long-context", "moe"],
        favourite: false,
        pricing: "freemium"
    },
    {
        id: 13,
        name: "Grok",
        categories: ["LLM", "Research"],
        desc: "xAI's model with real-time X access. Now features a tiered Free Tier for Grok 4 on web/app.",
        url: "https://grok.com/",
        tags: ["real-time", "uncensored", "xai"],
        favourite: false,
        pricing: "freemium"
    },
    {
        id: 17,
        name: "HunyuanWorld Play",
        categories: ["3D Gen"],
        desc: "Tencent's framework for real-time interactive 3D world modeling with camera trajectory control.",
        url: "https://github.com/Tencent-Hunyuan/HY-WorldPlay",
        tags: ["open-source", "3d-worlds", "interactive"],
        favourite: false,
        pricing: "free"
    },
    {
        id: 22,
        name: "Tencent HY 3D Global",
        categories: ["3D Gen"],
        desc: "Professional 3D engine for high-fidelity assets. Supports Text/Image/Sketch-to-3D with smart topology.",
        url: "https://3d.hunyuanglobal.com",
        tags: ["3d-gen", "tencent", "spatial"],
        favourite: false,
        pricing: "freemium"
    },
    {
        id: 16,
        name: "Rodin AI (Hyper3D)",
        categories: ["3D Gen"],
        desc: "Professional-grade Text-to-3D asset generator. Trusted by game devs for high-fidelity meshes.",
        url: "https://hyper3d.ai",
        tags: ["3d-assets", "game-dev", "professional"],
        favourite: false,
        pricing: "paid"
    },
    {
        id: 18,
        name: "Z-Image-Turbo",
        categories: ["Image Gen"],
        desc: "Ultra-fast generation powered by SDXL Turbo. Now supports Z-Image-Base and Edit checkpoints.",
        url: "https://huggingface.co/spaces/mrfakename/Z-Image-Turbo",
        tags: ["fast", "sdxl", "hf"],
        favourite: false,
        pricing: "free"
    },
    {
        id: 15,
        name: "LMSYS Chatbot Arena",
        categories: ["Research"],
        desc: "Crowdsourced platform for evaluating LLMs. Includes specialized 'Hard Prompts' and 'Coding' leaderboards.",
        url: "https://lmarena.ai/",
        tags: ["benchmark", "llm-arena"],
        favourite: false,
        pricing: "free"
    },
    {
        id: 3,
        name: "Claude",
        categories: ["LLM"],
        desc: "Anthropic's safety-focused Claude 4. Now features 'Claude Code' for instant terminal-based development.",
        url: "https://claude.ai",
        tags: ["creative", "coding", "safe"],
        favourite: false,
        pricing: "freemium"
    },
    {
        id: 4,
        name: "Midjourney",
        categories: ["Image Gen"],
        desc: "V7 photorealistic engine. Features a unified web editor with advanced 'Personalization' tuning.",
        url: "https://midjourney.com",
        tags: ["artistic", "high-res"],
        favourite: false,
        pricing: "paid"
    },
    {
        id: 5,
        name: "DALL-E 3",
        categories: ["Image Gen"],
        desc: "OpenAI's image generator, now natively multimodal within GPT-5.1 for direct editing.",
        url: "https://openai.com/dall-e-3",
        tags: ["precise", "easy"],
        favourite: false,
        pricing: "freemium"
    },
    {
        id: 6,
        name: "Luma Dream Machine",
        categories: ["Video/Audio"],
        desc: "Generates realistic 4K video. New 'Keyframe-to-Video' mode ensures high temporal consistency.",
        url: "https://lumalabs.ai/dream-machine",
        tags: ["video", "realistic"],
        favourite: false,
        pricing: "freemium"
    },
    {
        id: 7,
        name: "Suno AI",
        categories: ["Video/Audio"],
        desc: "Generate professional songs with Suno v4, offering studio-quality vocals and multi-track stems.",
        url: "https://suno.com",
        tags: ["music", "creative"],
        favourite: false,
        pricing: "freemium"
    },
    {
        id: 23,
        name: "TTSFree",
        categories: ["Video/Audio"],
        desc: "Convert text to speech with natural sounding voices. Supports multiple languages and file exports.",
        url: "https://ttsfree.com",
        tags: ["tts", "voiceover", "audio"],
        favourite: false,
        pricing: "free"
    },
    {
        id: 8,
        name: "Vercel V0",
        categories: ["Research"],
        desc: "Generative UI system that builds React/Tailwind components. Now acts as an agent for full-page apps.",
        url: "https://v0.dev",
        tags: ["frontend", "react"],
        favourite: false,
        pricing: "freemium"
    },
    {
        id: 9,
        name: "Perplexity",
        categories: ["Research"],
        desc: "AI-powered search engine. 'Perplexity Pages' now automates full wiki and report generation.",
        url: "https://perplexity.ai",
        tags: ["citations", "search"],
        favourite: false,
        pricing: "freemium"
    },
    {
        id: 20,
        name: "Devin",
        categories: ["AI Agents", "Developer Tools"],
        desc: "The world's first AI engineer. Now features a $20/mo 'Core' pay-as-you-go tier for individual devs.",
        url: "https://devin.ai",
        tags: ["agents", "se-dev", "autonomous"],
        favourite: false,
        pricing: "paid"
    },
    {
        id: 24,
        name: "OpenCode AI",
        categories: ["AI Agents", "Developer Tools"],
        desc: "The open source AI coding agent. A terminal-first assistant with multi-provider support (OpenAI, Gemini, etc.) and autonomous workflows.",
        url: "https://opencode.ai",
        tags: ["open-source", "terminal-ui", "coding-agent"],
        favourite: false,
        pricing: "free"
    },
    {
        id: 25,
        name: "Tripo AI",
        categories: ["3D Gen"],
        desc: "The Best AI 3D Workspace. From texts, images, or sketches to production-ready 3D Assets in seconds — all in one seamless workflow.",
        url: "https://studio.tripo3d.ai/",
        tags: ["3d-gen", "text-to-3d", "image-to-3d", "assets"],
        favourite: false,
        pricing: "freemium"
    },
    {
        id: 26,
        name: "Hunyuan Motion",
        categories: ["3D Gen"],
        desc: "Tencent's generative motion platform. Create high-fidelity video and character animations from text or image prompts.",
        url: "https://hunyuan.tencent.com/motion?tabIndex=0",
        tags: ["motion-gen", "animation", "tencent"],
        favourite: false,
        pricing: "freemium"
    },
    {
        id: 27, 
        name: "Google Stitch",
        categories: ["Developer Tools"],
        desc: "Google's 'Prompt-to-UI' engine. Generates functional mobile/web interfaces from text or sketches, with direct export to Figma and production-ready React/Tailwind code.",
        url: "https://stitch.withgoogle.com",
        tags: ["google-labs", "ui-gen", "figma-export"],
        favourite: true,
        pricing: "free"
    },
    {
        id: 28,
        name: "CTO.new",
        categories: ["AI Agents", "Developer Tools"],
        desc: "Replit’s autonomous 'Chief Technology Officer' agent. Orchestrates full-stack deployment, database migrations, and cloud infra scaling via natural language.",
        url: "https://cto.new/",
        tags: ["replit", "devops", "autonomous-infra"],
        favourite: false,
        pricing: "freemium"
    },
    {
        id: 29,
        name: "Accomplish",
        categories: ["AI Agents"],
        desc: "Open-source AI desktop agent (formerly Openwork). Automates file management, browser tasks, and document drafting locally. Supports BYO-key or local LLMs via Ollama.",
        url: "https://www.accomplish.ai",
        tags: ["open-source", "local-first", "desktop-automation"],
        favourite: false,
        pricing: "free"
    },
    {
        id: 30,
        name: "MiniMax Agent",
        categories: ["AI Agents", "LLM"],
        desc: "A powerhouse agentic platform using the MiniMax-M2/M1 models. Features 'Lightning' and 'Pro' modes with ultra-fast inference and 1M+ context. Excels at multi-agent collaboration (MCP) and full-stack project execution.",
        url: "https://agent.minimax.io/",
        tags: ["hybrid-attention", "mcp-protocol", "low-latency"],
        favourite: false,
        pricing: "freemium"
    }
];

export const CATEGORIES = [
    "All",
    "Favourite",
    "LLM",
    "AI Agents",
    "Image Gen",
    "3D Gen",
    "Video/Audio",
    "Developer Tools",
    "Research"
];