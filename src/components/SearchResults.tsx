import React from 'react';
import { Link } from 'react-router-dom';
import { SearchResult } from '../context/SearchContext';
import { X } from 'lucide-react';

interface SearchResultsProps {
  results: SearchResult[];
  isLoading: boolean;
  onClose: () => void;
}

const SearchResults: React.FC<SearchResultsProps> = ({ results, isLoading, onClose }) => {
  // Group results by category
  const groupedResults: Record<string, SearchResult[]> = {};
  
  results.forEach(result => {
    if (!groupedResults[result.category]) {
      groupedResults[result.category] = [];
    }
    groupedResults[result.category].push(result);
  });
  
  const handleLinkClick = () => {
    onClose();
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-h-[80vh] overflow-y-auto">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold">Search Results</h3>
        <button 
          onClick={onClose}
          className="p-1 hover:bg-gray-100 rounded-full transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {isLoading ? (
        <div className="flex items-center justify-center p-8">
          <div className="animate-pulse text-gray-400">Searching...</div>
        </div>
      ) : results.length === 0 ? (
        <div className="text-center p-8">
          <p className="text-gray-500">No results found.</p>
          <p className="text-gray-400 text-sm mt-2">Try different keywords or browse our site.</p>
        </div>
      ) : (
        <div>
          {Object.entries(groupedResults).map(([category, items]) => (
            <div key={category} className="mb-6">
              <h4 className="text-sm font-bold text-gray-500 uppercase mb-3">{category}</h4>
              <div className="space-y-3">
                {items.map(result => (
                  <Link 
                    key={result.id}
                    to={result.url}
                    onClick={handleLinkClick}
                    className="block p-3 rounded-md hover:bg-gray-50 transition-colors"
                  >
                    <h5 className="text-lg font-medium text-sky-blue mb-1">{result.title}</h5>
                    <p className="text-sm text-gray-600">{result.description}</p>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResults;
