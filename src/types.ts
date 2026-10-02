export interface Artwork {
  id: string;
  title: string;
  artist: string;
  handle: string;
  price: string;
  category: string;
  tag?: string;
  likes: number;
  badgeColor?: string;
  renderType: 'graphic-green' | 'blue-poster' | 'yellow-pop' | 'record-dark' | 'orange-staff' | 'fleur-bike' | 'green-knight' | 'summer-90s' | 'fluffy-blue' | 'amnesia-dots' | 'spectrum-wave' | 'collage-class' | 'celebrates-party' | 'eye-surreal' | 'model-coral' | 'model-red' | 'magenta-portrait' | 'flower-sculpture';
}

export interface Creator {
  id: string;
  name: string;
  handle: string;
  avatarBg: string;
  followers: string;
  specialty: string;
  badge?: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  popular?: boolean;
  features: string[];
  cta: string;
}
