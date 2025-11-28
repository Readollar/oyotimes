// src/content/config.ts
import { z, defineCollection } from 'astro:content';

// 1. Define the Blog Schema
const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.string(),
    author: z.string(),
    category: z.string(),
    heroImage: z.string(),
    excerpt: z.string().optional(),
    authorAvatar: z.string().optional(),
    isFeatured: z.boolean().optional(),
    isTopStory: z.boolean().optional(),
    isMainStory: z.boolean().optional(), 
    isEditorPick: z.boolean().optional(),

  }),
});

// 2. Define the Places Schema (THIS IS WHAT YOU ARE MISSING)
const placesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    location: z.string(),
    category: z.string(),
    rating: z.number(),
    reviewCount: z.number(),
    priceText: z.string(),
    priceLabel: z.string(),
    imgSrc: z.string(),
    
    website: z.string().optional(), 


    // Flags for where to show them
    isTopPlace: z.boolean().optional(),    // For Sidebar
    isEditorPick: z.boolean().optional(),  // For Bottom Grid
    
    // Arrays for details
    gallery: z.array(z.object({ src: z.string(), alt: z.string() })).optional(),
    ratingBars: z.array(z.object({ name: z.string(), score: z.number() })).optional(),
    features: z.array(z.object({ title: z.string(), text: z.string() })).optional(),
    activity: z.array(z.string()).optional(),
    included: z.array(z.string()).optional(),
    notIncluded: z.array(z.string()).optional(),
    safety: z.array(z.string()).optional(),
    description: z.string().optional(),
  }),
});

// 3. Define the Events Schema
const eventsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    website: z.string().optional(),
    
    // Date & Time
    startDate: z.date(),      // e.g. 2025-12-25
    startTime: z.string(),    // e.g. "10:00 AM"
    endDate: z.date().optional(),
    endTime: z.string().optional(),
    
    location: z.string(),     // e.g. "Atiba Hall"
    address: z.string().optional(),
    
    organizer: z.string().optional(),
    price: z.string().default("Free"), // e.g. "Free" or "₦5,000"
    
    imgSrc: z.string(),
    
    // Flags
    isFeatured: z.boolean().optional(),
  }),
});

// 4. Export them
export const collections = {
  'blog': blogCollection,
  'places': placesCollection, // <--- This MUST match the folder name 'src/content/places'
  'events': eventsCollection, // <-- ADD THIS LINE

};
