import { ReactNode } from "react";

export type SiderContextType = {
  collapsed: boolean;
  toggleSider: () => void;
};

export type SiderProviderProps = {
  children: ReactNode;
};

export type HelpSubTabProps = {
  activeTab: string;
  setActiveTab: (tab: string) => void;
};

export type CourseBoxProps = {
  courseData: {
    title: String;
    description: String;
  };
};

export type CourseSubTabProps = {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  courseData: {
    content: string[];
  };
};

export type CourseHelpProps = {
  helpData: {
    title: String;
  };
};

export type HelpCardProps = {
  iconClass: string;
  title: string;
  description: string;
};

export type InstructorChannelProps = {
  instructor: string;
  students: number;
  likes: number;
  dislikes: number;
  shares: number;
};
