/**
 * Smart Suggestions Component
 * Shows suggested follow-up questions based on context
 */

import { Lightbulb, ArrowRight } from 'lucide-react';

const SmartSuggestions = ({ lastMessage, documents, onSuggestionClick, disabled }) => {
  
  const generateSuggestions = () => {
    const suggestions = [];

    // If no documents uploaded
    if (!documents || documents.length === 0) {
      return [
        "Upload a financial document to get started",
        "What can you help me with?",
        "Explain financial terms",
      ];
    }

    // Based on last message content
    if (lastMessage) {
      const content = lastMessage.content.toLowerCase();
      
      // Revenue related
      if (content.includes('revenue') || content.includes('sales')) {
        suggestions.push(
          "What were the expenses?",
          "Calculate the profit margin",
          "Compare with previous quarter"
        );
      }
      // Profit related
      else if (content.includes('profit') || content.includes('income')) {
        suggestions.push(
          "What's the year-over-year growth?",
          "Show me the expense breakdown",
          "What are the key drivers?"
        );
      }
      // Expense related
      else if (content.includes('expense') || content.includes('cost')) {
        suggestions.push(
          "Which category has the highest cost?",
          "How can we reduce expenses?",
          "Compare with budget"
        );
      }
      // Growth related
      else if (content.includes('growth') || content.includes('increase')) {
        suggestions.push(
          "What's driving this growth?",
          "Is this sustainable?",
          "Show me the trend analysis"
        );
      }
      // General financial document
      else {
        suggestions.push(
          "Summarize the key financial metrics",
          "What are the main highlights?",
          "Show me the revenue trends"
        );
      }
    } else {
      // Default suggestions
      suggestions.push(
        "Summarize this document",
        "What are the key financial metrics?",
        "Show me revenue and profit trends"
      );
    }

    return suggestions.slice(0, 3);
  };

  const suggestions = generateSuggestions();

  if (suggestions.length === 0 || disabled) return null;

  return (
    <div className="my-4 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
      <div className="flex items-center gap-2 mb-3">
        <Lightbulb className="w-4 h-4 text-blue-600" />
        <h4 className="text-sm font-semibold text-blue-900">Suggested Questions</h4>
      </div>
      <div className="space-y-2">
        {suggestions.map((suggestion, index) => (
          <button
            key={index}
            onClick={() => onSuggestionClick(suggestion)}
            disabled={disabled}
            className="w-full flex items-center justify-between px-4 py-2.5 bg-white hover:bg-blue-50 text-left rounded-lg border border-blue-200 hover:border-blue-400 transition-all duration-200 group disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span className="text-sm text-gray-700 group-hover:text-blue-700">
              {suggestion}
            </span>
            <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default SmartSuggestions;
