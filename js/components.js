/**
 * UI Factory for AI-HUB
 */

export const createSidebarLink = (category, isActive = false) => {
    return `
        <button 
            data-category="${category}"
            class="nav-link w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 transition-all border border-transparent ${isActive ? 'active' : ''}"
        >
            <span>${category}</span>
            <svg class="w-4 h-4 opacity-0 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
        </button>
    `;
};

export const createToolCard = (tool) => {
    const faviconUrl = `https://www.google.com/s2/favicons?domain=${new URL(tool.url).hostname}&sz=64`;

    return `
        <div class="tool-card bg-zinc-900 border border-zinc-800 rounded-2xl p-5 flex flex-col h-full">
            <div class="flex items-start justify-between mb-4">
                <div class="favicon-container w-12 h-12 bg-zinc-950 rounded-xl flex items-center justify-center border border-zinc-800 p-2 overflow-hidden">
                    <img src="${faviconUrl}" alt="${tool.name}" class="w-full h-full object-contain">
                </div>
                <div class="flex flex-col items-end gap-1.5">
                    <div class="flex flex-wrap justify-end gap-1">
                        ${tool.categories.map(cat => `
                            <span class="text-[9px] font-bold px-1.5 py-0.5 bg-zinc-800 text-zinc-400 rounded border border-zinc-700/50 uppercase tracking-tighter">
                                ${cat}
                            </span>
                        `).join('')}
                    </div>
                    <span class="text-[10px] font-bold px-1.5 py-0.5 rounded border uppercase tracking-tighter ${tool.pricing === 'free' ? 'text-emerald-500 border-emerald-500/20 bg-emerald-500/5' :
            tool.pricing === 'freemium' ? 'text-blue-500 border-blue-500/20 bg-blue-500/5' :
                'text-amber-500 border-amber-500/20 bg-amber-500/5'
        }">
                        ${tool.pricing}
                    </span>
                </div>
            </div>
            
            <h3 class="text-lg font-bold text-zinc-100 mb-2">${tool.name}</h3>
            <p class="text-sm text-zinc-400 mb-6 flex-1 line-clamp-2">${tool.desc}</p>
            
            <div class="flex flex-wrap gap-2 mb-6">
                ${tool.tags.map(tag => `<span class="text-[10px] px-2 py-0.5 bg-zinc-950 text-emerald-500 rounded border border-emerald-500/20">#${tag}</span>`).join('')}
            </div>
            
            <div class="flex gap-2">
                <a 
                    href="${tool.url}" 
                    target="_blank" 
                    class="flex-1 bg-emerald-600 hover:bg-emerald-500 text-zinc-950 text-sm font-bold py-2.5 px-4 rounded-xl transition-colors text-center"
                >
                    Visit Site
                </a>
            </div>
        </div>
    `;
};
