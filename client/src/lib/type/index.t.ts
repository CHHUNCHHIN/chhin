export type Activity = {
  id: string;              // GUID from .NET
  title: string;
  date: string;            // ISO string (convert to Date later if needed)
  description: string;
  category: string;
  isCancelled: boolean;
  city: string;
  venue: string;
  latitude?: number;       // optional (nullable in backend)
  longitude?: number;      // optional (nullable in backend)
};
