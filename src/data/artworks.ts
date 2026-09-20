export interface Artwork {
  id: string;
  title: string;
  category: 'Portrait Art' | 'Digital Art' | 'Original Works';
  categoryKey: 'portrait' | 'digital' | 'original';
  image: string;
  aspectRatio: 'tall' | 'wide' | 'square';
  medium: string;
  dimensions: string;
  year: string;
  description: string;
  artistNote: string;
  tags: string[];
  featured?: boolean;
}

export const ARTWORKS: Artwork[] = [
  {
    id: 'art-1',
    title: 'The Solitary Contemplation',
    category: 'Portrait Art',
    categoryKey: 'portrait',
    image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=80',
    aspectRatio: 'tall',
    medium: 'Oil on Belgian Linen with Ochre Glaze',
    dimensions: '24" x 36"',
    year: '2024',
    description: 'A study in quiet reverence, exploring the delicate boundary between shadow and interior light. Built through nine layers of transparent oil glazes.',
    artistNote: 'Painted over a four-month period, capturing the subtle golden hour reflections in warm umber and burnt sienna.',
    tags: ['Oil Painting', 'Classical', 'Warm Tones'],
    featured: true,
  },
  {
    id: 'art-2',
    title: 'Ethereal Horizons: No. 4',
    category: 'Digital Art',
    categoryKey: 'digital',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    aspectRatio: 'square',
    medium: 'Procedural Brushwork & Digital Impasto (300 DPI Archival)',
    dimensions: '30" x 30" (Archival Print)',
    year: '2024',
    description: 'An exploration of fluidity and organic geometry, marrying algorithmic precision with the visceral unpredictability of physical pigment.',
    artistNote: 'Created with custom procedural brush engines tuned to emulate heavy-body acrylic physics on wet canvas.',
    tags: ['Digital Impasto', 'Abstract', 'Fluid Dynamics'],
    featured: true,
  },
  {
    id: 'art-3',
    title: 'Legacy of the Matriarch',
    category: 'Original Works',
    categoryKey: 'original',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1200&q=80',
    aspectRatio: 'tall',
    medium: 'Bespoke Mixed Media & Gold Leaf on Raw Canvas',
    dimensions: '28" x 40"',
    year: '2023',
    description: 'A treasured heirloom piece celebrating heritage, blending classical figurative techniques with symbolic botanical elements.',
    artistNote: 'Created as a generational tribute. Incorporates real 23k gold leaf inlays along the drape borders.',
    tags: ['Mixed Media', 'Heirloom', 'Gold Leaf'],
    featured: true,
  },
  {
    id: 'art-4',
    title: 'Whispers in Terracotta',
    category: 'Portrait Art',
    categoryKey: 'portrait',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80',
    aspectRatio: 'tall',
    medium: 'Chalk Pastel and Earth Pigments on Archival Rag',
    dimensions: '20" x 28"',
    year: '2024',
    description: 'Expressive portraiture centering the raw emotional resonance of human expression, rendered in warm clay, charcoal, and ochre.',
    artistNote: 'Drawn live in studio with minimal preparatory sketches to preserve immediacy and gestural honesty.',
    tags: ['Pastel', 'Gestural', 'Figurative'],
  },
  {
    id: 'art-5',
    title: 'Synesthetic Symphony',
    category: 'Digital Art',
    categoryKey: 'digital',
    image: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1200&q=80',
    aspectRatio: 'wide',
    medium: 'Generative Synthesis & High-Res Stylus Render',
    dimensions: '40" x 24" (Aluminum Di-Bond)',
    year: '2024',
    description: 'Translating orchestral frequencies into sweeping gradients of terracotta, sand, and deep forest olive.',
    artistNote: 'Rendered at native 12K resolution, designed for museum-grade illuminated display panels.',
    tags: ['Generative', 'Concept', 'Warm Palette'],
  },
  {
    id: 'art-6',
    title: 'Sanctuary of the Ancient Coast',
    category: 'Original Works',
    categoryKey: 'original',
    image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=80',
    aspectRatio: 'wide',
    medium: 'Original Oil & Sand Texture on Heavy Wood Panel',
    dimensions: '48" x 32"',
    year: '2024',
    description: 'Site-specific artwork created with organic textures, incorporating fine Mediterranean sand into the tactile underpainting.',
    artistNote: 'Crafted to harmonize with neutral travertine stonework and natural oak interiors.',
    tags: ['Textured', 'Architectural', 'Site-Specific'],
  },
  {
    id: 'art-7',
    title: 'Gaze into the Twilight',
    category: 'Portrait Art',
    categoryKey: 'portrait',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=1200&q=80',
    aspectRatio: 'tall',
    medium: 'Oil and Beeswax Encaustic on Italian Wood Block',
    dimensions: '18" x 24"',
    year: '2023',
    description: 'Intimate portrait highlighting luminous skin tones against a textured background of earthy sepia and burnished amber.',
    artistNote: 'The encaustic wax medium gives the surface a tactile, dimensional luminescence that changes under varying room light.',
    tags: ['Encaustic', 'Intimate', 'Warm Amber'],
  },
  {
    id: 'art-8',
    title: 'The Architecture of Dreams',
    category: 'Digital Art',
    categoryKey: 'digital',
    image: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=1200&q=80',
    aspectRatio: 'tall',
    medium: 'Digital Fine Art with Matte Velvet Giclée Finish',
    dimensions: '24" x 36"',
    year: '2024',
    description: 'Surreal juxtaposition of brutalist arches and drifting organic clay monoliths, balanced with serene compositional harmony.',
    artistNote: 'Influenced by Mediterranean architectural ruins and modernist minimalism.',
    tags: ['Surrealism', 'Digital Canvas', 'Architectural'],
  },
  {
    id: 'art-9',
    title: 'The Companion’s Vigil',
    category: 'Original Works',
    categoryKey: 'original',
    image: 'https://images.unsplash.com/photo-1561037404-61cd46aa615b?auto=format&fit=crop&w=1200&q=80',
    aspectRatio: 'square',
    medium: 'Fine Art Pet Portraiture in Soft Pastels',
    dimensions: '20" x 20"',
    year: '2024',
    description: 'A soulful portrait capturing the noble dignity of a rescue hound in rich espresso and hazelnut tones.',
    artistNote: 'Every stroke rendered with ultra-soft unisons pastels on sanded archival board.',
    tags: ['Fine Art', 'Pet Portrait', 'Soft Pastel'],
  }
];

export const CATEGORIES = [
  { id: 'all', label: 'All Artworks', count: 9 },
  { id: 'portrait', label: 'Portrait Art', count: 3 },
  { id: 'digital', label: 'Digital Art', count: 3 },
  { id: 'original', label: 'Original Works', count: 3 },
] as const;

export const SIZES = [
  { id: 'small', label: 'Studio Small (12" x 16")', detail: 'Ideal for intimate desk nooks & gallery wall clusters' },
  { id: 'medium', label: 'Classic Medium (18" x 24")', detail: 'Most popular for bedroom, study & mantle display' },
  { id: 'large', label: 'Grand Large (24" x 36")', detail: 'Striking focal presence for living rooms & dining halls' },
  { id: 'statement', label: 'Master Statement (36" x 48"+)', detail: 'Museum-scale showcase for grand entries & high ceilings' },
  { id: 'custom-dimension', label: 'Custom Dimensions', detail: 'Tailored precisely to your architectural space' }
];

export const ARTWORK_TYPES = [
  { id: 'Portrait Art', label: 'Portrait Art', description: 'Hand-painted figurative study capturing individual character and soul' },
  { id: 'Digital Art', label: 'Digital Art', description: 'Ultra-high resolution conceptual digital creation with archival museum print' },
  { id: 'Original Works', label: 'Original Works', description: 'Authentic studio masterwork designed around unique narrative and emotion' }
];

export const STYLES = [
  { id: 'classical-oil', label: 'Classical Fine Art & Glazes', icon: 'Brush' },
  { id: 'modern-minimalist', label: 'Modern Warm Minimalist', icon: 'Sparkles' },
  { id: 'textured-earthy', label: 'Textured Impasto & Earth Pigment', icon: 'Layers' },
  { id: 'surreal-concept', label: 'Atmospheric & Conceptual', icon: 'Eye' },
  { id: 'charcoal-pastel', label: 'Fine Charcoal & Soft Pastel', icon: 'Feather' }
];
