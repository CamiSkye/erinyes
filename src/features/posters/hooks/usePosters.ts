import { useState } from 'react';
import type { ViewMode } from '../types/posters.types';
import { posterPreviews } from '../data/posters.data';

export interface PosterItem {
  title: string;
  description: string;
  category: string;
  format: string;
  size: string;
}

export function usePosters() {
  const [viewMode,         setViewMode]         = useState<ViewMode>('grid');
  const [searchTerm,       setSearchTerm]       = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [previewImage,     setPreviewImage]     = useState<string | null>(null);
  const [showQuiz,         setShowQuiz]         = useState(false);

  const filterPosters = (items: PosterItem[]) =>
    items.filter(poster => {
      const matchesSearch   = poster.title.toLowerCase().includes(searchTerm.toLowerCase())
                           || poster.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || poster.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });

  const handleDownload = (preview: string, title: string) => {
    const link    = document.createElement('a');
    link.href     = preview;
    link.download = `${title.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDownloadAll = (items: PosterItem[]) => {
    items.forEach((item, index) => handleDownload(posterPreviews[index], item.title));
  };

  const handleShare = async (title: string, description: string, copiedMessage: string) => {
    if (navigator.share) {
      try {
        await navigator.share({ title, text: description, url: window.location.href });
      } catch {
        console.log('Partage annulé');
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert(copiedMessage);
    }
  };

  const handlePreview  = (preview: string) => setPreviewImage(preview);
  const closePreview   = ()                => setPreviewImage(null);
  const toggleQuiz     = ()                => setShowQuiz(prev => !prev);

  return {
    viewMode,         setViewMode,
    searchTerm,       setSearchTerm,
    selectedCategory, setSelectedCategory,
    previewImage,
    showQuiz,
    filterPosters,
    handleDownload,
    handleDownloadAll,
    handleShare,
    handlePreview,
    closePreview,
    toggleQuiz,
  };
}