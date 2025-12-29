
export interface NavItem {
  label: string;
  href: string;
}

export interface Package {
  id: string;
  name: string;
  initial: string;
  target: string;
  description: string;
  isPopular?: boolean;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export enum MessageType {
  USER = 'user',
  BOT = 'bot'
}

export interface ChatMessage {
  type: MessageType;
  text: string;
}
