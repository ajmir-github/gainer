export type Notification = {
  id: string;
  type: NotificationType;
  message?: string;
  read: boolean;
  createdAt: string;
};

export type Role = "USER" | "ADMIN";

export type NotificationType = "LIKE" | "FOLLOW" | "REPLY" | "MENTION";

export type Profile = {
  name: string;
  id: string;
  bio?: string;
  avatarURL?: string;
  createdAt: string;
  updatedAt: string;
};
export type User = {
  id: string;
  createdAt: string;
  email: string;
  password: string;
  role: Role;
  updatedAt: string;
};

export type Tweet = {
  id: string;
  content: string;
  images: string[];
  videos?: string;
  hashtags: string[];
  createdAt: string;
  updatedAt: string;
};
