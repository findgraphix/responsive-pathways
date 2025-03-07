
import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface SearchResult {
  id: string;
  title: string;
  description: string;
  url: string;
  category: string;
}

interface SearchContextProps {
  searchResults: SearchResult[];
  isSearching: boolean;
  performSearch: (query: string) => Promise<void>;
  clearSearchResults: () => void;
}

const SearchContext = createContext<SearchContextProps | undefined>(undefined);

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
};

interface SearchProviderProps {
  children: ReactNode;
}

export const SearchProvider: React.FC<SearchProviderProps> = ({ children }) => {
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const performSearch = async (query: string) => {
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }
    
    setIsSearching(true);
    
    try {
      // Simulate API call with timeout
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Mock search results
      const results: SearchResult[] = [
        {
          id: '1',
          title: 'Strategy Consulting',
          description: 'Develop clear strategies to achieve your business objectives.',
          url: '/consulting-services',
          category: 'Services'
        },
        {
          id: '2',
          title: 'Digital Transformation',
          description: 'Transform your business with cutting-edge digital solutions.',
          url: '/digital',
          category: 'Services'
        },
        {
          id: '3',
          title: 'Manufacturing Industry',
          description: 'Solutions for manufacturing companies.',
          url: '/industries',
          category: 'Industries'
        }
      ].filter(item => 
        item.title.toLowerCase().includes(query.toLowerCase()) || 
        item.description.toLowerCase().includes(query.toLowerCase())
      );
      
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
    <SearchContext.Provider value={{ 
      searchResults, 
      isSearching, 
      performSearch, 
      clearSearchResults 
    }}>
      {children}
    </SearchContext.Provider>
  );
};
