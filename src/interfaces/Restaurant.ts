export type Address = {
  city?: string;
  state?: string;
  number?: number;
  street?: string;
  country?: string;
  createdAt?: string;
  updatedAt?: string;
  postalCode?: string;
  countryCode?: string;
  neighborhood?: string;
};

export type OpeningHours = {
  startHour?: string;
  finishHour?: string;
};

export type WorkSchedules = {
  sunday?: OpeningHours;
  monday?: OpeningHours;
  tuesday?: OpeningHours;
  wednesday?: OpeningHours;
  thursday?: OpeningHours;
  friday?: OpeningHours;
  saturday?: OpeningHours;
};

export interface Restaurant {
  id: string;
  name: string;
  slug?: string;
  image?: string;
  imageUrl?: string;
  addresses?: Address[];
  workSchedules?: WorkSchedules[];
}
