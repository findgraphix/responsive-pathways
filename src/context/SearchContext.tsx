
import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define the SearchResult type that's needed in SearchResults component
export interface SearchResult {
  id: string;
  title: string;
  description: string;
  url: string;
  category: string;
}

interface SearchContextProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  showResults: boolean;
  setShowResults: (show: boolean) => void;
  searching: boolean;
  setSearching: (isSearching: boolean) => void;
  // Add the missing properties from the error messages
  searchResults: SearchResult[];
  isSearching: boolean;
  performSearch: (query: string) => void;
  clearSearchResults: () => void;
}

const SearchContext = createContext<SearchContextProps | undefined>(undefined);

export const SearchProvider = ({ children }: { children: ReactNode }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [searching, setSearching] = useState(false);
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  // Implement the search functionality
  const performSearch = (query: string) => {
    if (!query.trim()) return;
    
    setIsSearching(true);
    
    // Simulate search with a timeout
    setTimeout(() => {
      // Mock search results based on the query
      const results: SearchResult[] = [
        {
          id: '1',
          title: 'Digital Transformation',
          description: 'How to transform your business with digital solutions',
          url: '/digital',
          category: 'Digital'
        },
        {
          id: '2',
          title: 'Industry Insights',
          description: 'Latest trends and insights for various industries',
          url: '/insights',
          category: 'Insights'
        },
        {
          id: '3',
          title: 'Consulting Services Overview',
          description: 'Our professional consulting services for your business needs',
          url: '/consulting-services',
          category: 'Services'
        },
        {
          id: '4',
          title: 'Career Opportunities',
          description: 'Join our team and grow your career',
          url: '/career',
          category: 'Careers'
        }
      ].filter(item => 
        item.title.toLowerCase().includes(query.toLowerCase()) || 
        item.description.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase())
      );
      
      setSearchResults(results);
      setIsSearching(false);
    }, 500); // Simulate network delay
  };

  const clearSearchResults = () => {
    setSearchResults([]);
  };

  return (
    <SearchContext.Provider value={{ 
      searchQuery, 
      setSearchQuery, 
      showResults, 
      setShowResults,
      searching,
      setSearching,
      searchResults,
      isSearching,
      performSearch,
      clearSearchResults
    }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = (): SearchContextProps => {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
};
