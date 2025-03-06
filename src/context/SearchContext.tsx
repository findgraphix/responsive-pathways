
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface SearchContextType {
  searchResults: SearchResult[];
  isSearching: boolean;
  performSearch: (query: string) => void;
  clearSearchResults: () => void;
}

export interface SearchResult {
  id: string;
  title: string;
  description: string;
  url: string;
  category: string;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const SearchProvider = ({ children }: { children: ReactNode }) => {
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const performSearch = async (query: string) => {
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    setIsSearching(true);
    try {
      // Simulate API call with local search
      const results = await searchService.search(query);
      setSearchResults(results);
    } catch (error) {
      console.error('Search error:', error);
      setSearchResults([]);
    } finally {
      setIsSearching(false);
    }
  };

  const clearSearchResults = () => {
    setSearchResults([]);
  };

  return (
    <SearchContext.Provider
      value={{
        searchResults,
        isSearching,
        performSearch,
        clearSearchResults
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
};

// Mock search service
export const searchService = {
  // Sample search data
  searchData: [
    // Home page content
    { id: '1', title: 'Home', description: 'Main page with overview of our services', url: '/', category: 'Page' },
    { id: '2', title: 'Business Consulting', description: 'Expert business consulting services', url: '/#consulting-services', category: 'Service' },
    { id: '3', title: 'Digital Transformation', description: 'Transform your business with digital solutions', url: '/#digital', category: 'Service' },
    { id: '4', title: 'Industry Insights', description: 'Latest insights and thought leadership', url: '/#insights', category: 'Content' },
    
    // Industries page content
    { id: '5', title: 'Technology Industry', description: 'Solutions for tech companies', url: '/industries', category: 'Industry' },
    { id: '6', title: 'Manufacturing Industry', description: 'Solutions for manufacturing companies', url: '/industries', category: 'Industry' },
    { id: '7', title: 'Financial Services', description: 'Solutions for financial institutions', url: '/industries', category: 'Industry' },
    { id: '8', title: 'Healthcare Industry', description: 'Solutions for healthcare organizations', url: '/industries', category: 'Industry' },
    { id: '9', title: 'Retail Industry', description: 'Solutions for retail businesses', url: '/industries', category: 'Industry' },
    
    // About page content
    { id: '10', title: 'About Us', description: 'Learn about our company history and mission', url: '/about', category: 'Page' },
    { id: '11', title: 'Our Leadership Team', description: 'Meet our experienced leadership team', url: '/about', category: 'Content' },
    { id: '12', title: 'Company History', description: 'Our journey from founding to today', url: '/about', category: 'Content' },
    
    // Career page content
    { id: '13', title: 'Careers', description: 'Job opportunities at our company', url: '/career', category: 'Page' },
    { id: '14', title: 'Senior Consultant', description: 'Senior Consultant job opening', url: '/career#openings', category: 'Job' },
    { id: '15', title: 'Data Scientist', description: 'Data Scientist job opening', url: '/career#openings', category: 'Job' },
    { id: '16', title: 'UX/UI Designer', description: 'UX/UI Designer job opening', url: '/career#openings', category: 'Job' },
    { id: '17', title: 'Business Analyst', description: 'Business Analyst job opening', url: '/career#openings', category: 'Job' },
    { id: '18', title: 'Marketing Specialist', description: 'Marketing Specialist job opening', url: '/career#openings', category: 'Job' },
    { id: '19', title: 'Technology Consultant', description: 'Technology Consultant job opening', url: '/career#openings', category: 'Job' },
    { id: '20', title: 'Benefits', description: 'Employee benefits and perks', url: '/career', category: 'Content' },
  ],

  search: async (query: string): Promise<SearchResult[]> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 300));
    
    const normalizedQuery = query.toLowerCase().trim();
    
    // Filter items that match the query in title or description
    return searchService.searchData.filter(item => {
      return (
        item.title.toLowerCase().includes(normalizedQuery) ||
        item.description.toLowerCase().includes(normalizedQuery)
      );
    });
  }
};
