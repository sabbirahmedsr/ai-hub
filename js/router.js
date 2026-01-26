import { TOOLS } from './data.js';

/**
 * Handle filtering logic
 */
export const filterTools = (category = 'All', searchQuery = '', activePricing = []) => {
    return TOOLS.filter(tool => {
        // Category Filter
        let matchesCategory = false;
        if (category === 'All') {
            matchesCategory = true;
        } else if (category === 'Favourite') {
            matchesCategory = tool.favourite === true;
        } else {
            matchesCategory = tool.categories.includes(category);
        }

        // Pricing Filter
        const matchesPricing = activePricing.length === 0 || activePricing.includes(tool.pricing);

        // Search Filter
        const matchesSearch = !searchQuery ||
            tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            tool.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
            tool.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

        return matchesCategory && matchesPricing && matchesSearch;
    });
};
