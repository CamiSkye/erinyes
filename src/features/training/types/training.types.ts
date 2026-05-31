// ===========================
// TYPES — TrainingPage
// ===========================

export interface CourseModule {
  id: number;
  title: string;
  duration: string;
  description: string;
}

export interface Course {
  id: number;
  title: string;
  description: string;
  duration: string;
  level: string;
  modules: CourseModule[];
  category: string;
  icon: React.ComponentType<{ className?: string }>;
  url: string;
}