/**
 * Feature Selector Component
 * Allows users to select AI feature mode - Horizontal compact version
 */

import { Brain, FileText, TrendingUp, MessageCircle } from 'lucide-react';

const FeatureSelector = ({ selectedFeature, onFeatureChange, disabled }) => {
  const features = [
    {
      id: 'Smart_Chat',
      name: 'Smart Chat',
      icon: Brain,
      color: 'blue',
    },
    {
      id: 'Document_Analysis',
      name: 'Document Analysis',
      icon: FileText,
      color: 'green',
    },
    {
      id: 'Analytical_Insights',
      name: 'Insights',
      icon: TrendingUp,
      color: 'purple',
    },
    {
      id: 'General_Conversation',
      name: 'General',
      icon: MessageCircle,
      color: 'gray',
    },
  ];

  const getColorClasses = (color, isSelected) => {
    const colors = {
      blue: isSelected
        ? 'bg-blue-100 border-blue-500 text-blue-900'
        : 'hover:bg-blue-50 hover:border-blue-300 text-gray-600',
      green: isSelected
        ? 'bg-green-100 border-green-500 text-green-900'
        : 'hover:bg-green-50 hover:border-green-300 text-gray-600',
      purple: isSelected
        ? 'bg-purple-100 border-purple-500 text-purple-900'
        : 'hover:bg-purple-50 hover:border-purple-300 text-gray-600',
      gray: isSelected
        ? 'bg-gray-100 border-gray-500 text-gray-900'
        : 'hover:bg-gray-50 hover:border-gray-300 text-gray-600',
    };
    return colors[color];
  };

  return (
    <div className="flex items-center gap-2">
      {features.map((feature) => {
        const Icon = feature.icon;
        const isSelected = selectedFeature === feature.id;
        
        return (
          <button
            key={feature.id}
            onClick={() => onFeatureChange(feature.id)}
            disabled={disabled}
            className={`
              flex items-center gap-2 px-3 py-2 rounded-lg border-2 transition-all duration-200
              ${getColorClasses(feature.color, isSelected)}
              ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
              ${!isSelected && !disabled ? 'border-gray-200' : ''}
            `}
            title={feature.name}
          >
            <Icon className="w-4 h-4" />
            <span className="text-sm font-medium hidden md:inline">
              {feature.name}
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default FeatureSelector;
