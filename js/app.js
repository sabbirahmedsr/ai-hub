import { CATEGORIES } from './data.js';
import { createSidebarLink, createToolCard } from './components.js';
import { filterTools } from './router.js';

// State Management
const state = {
    currentCategory: 'All',
    searchQuery: '',
    activePricing: []
};

// DOM Elements
const sidebarNav = document.getElementById('sidebar-nav');
const toolGrid = document.getElementById('tool-grid');
const searchInput = document.getElementById('search-input');
const noResults = document.getElementById('no-results');

/**
 * Render the entire application
 */
const render = () => {
    // 1. Render Sidebar
    sidebarNav.innerHTML = CATEGORIES.map(cat =>
        createSidebarLink(cat, state.currentCategory === cat)
    ).join('');

    // 2. Filter data
    const filteredTools = filterTools(state.currentCategory, state.searchQuery, state.activePricing);

    // 3. Render Grid
    if (filteredTools.length === 0) {
        toolGrid.innerHTML = '';
        noResults.classList.remove('hidden');
        noResults.classList.add('flex');
    } else {
        noResults.classList.add('hidden');
        noResults.classList.remove('flex');
        toolGrid.innerHTML = filteredTools.map(tool => createToolCard(tool)).join('');
    }

    // Attach sidebar listeners after render
    document.querySelectorAll('.nav-link').forEach(btn => {
        btn.addEventListener('click', () => {
            state.currentCategory = btn.dataset.category;
            render();
        });
    });
};

/**
 * Initialization
 */
const init = () => {
    // Search Listener
    searchInput.addEventListener('input', (e) => {
        state.searchQuery = e.target.value;
        render();
    });

    // Pricing Filter Listeners
    document.querySelectorAll('.pricing-filter').forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            state.activePricing = Array.from(document.querySelectorAll('.pricing-filter:checked'))
                .map(cb => cb.value);
            render();
        });
    });

    // Keyboard Shortcuts
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            state.searchQuery = '';
            searchInput.value = '';
            render();
            searchInput.blur();
        }
    });

    // Initial render
    render();
};

// Start the app
init();
