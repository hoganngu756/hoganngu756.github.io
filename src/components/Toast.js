import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const Toast = ({ message, isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 animate-slide-up">
      <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-slate-900/90 dark:bg-slate-100/90 text-white dark:text-slate-900 shadow-xl border border-slate-700/50 dark:border-slate-200/50 backdrop-blur-md text-xs font-medium tracking-wide">
        <FaCheckCircle className="text-emerald-400 dark:text-emerald-600 text-sm" />
        <span>{message}</span>
      </div>
    </div>
  );
};

export default Toast;
