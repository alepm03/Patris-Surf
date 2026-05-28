import { Experience, GalleryItem, Testimonial } from './types';

export const EXPERIENCES: Experience[] = [
  {
    id: 'entrenamientos-surfistas',
    title: 'Entrenamientos para Surfistas',
    subtitle: 'Perfeccionamiento Técnico',
    description: 'Programa orientado al perfeccionamiento técnico y físico del/a surfista, con enfoque de rendimiento deportivo. Se combinan sesiones en playa y gimnasio —skate, running, TRX, Bosu, fuerza y movilidad— con entrenamientos en el agua apoyados en videograbación y análisis técnico. Incluye seguimiento anual y licencia federativa.',
    price: 'Desde 60€',
    duration: 'Por mes',
    level: 'All Levels',
    spots: 'Grupos reducidos',
    image: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=1200&q=80',
    tags: ['Videoanálisis', 'Licencia Federativa', 'Skate & TRX']
  },
  {
    id: 'surf-inclusion',
    title: 'Surf & Inclusión',
    subtitle: 'Actividades Sociales',
    description: 'Jornadas trimestrales de surf con asociaciones, centros, pisos de menores y familias en intervención. También sesiones semanales o mensuales para jóvenes de colectivos vulnerables de todo Gipuzkoa. Hacemos el surf accesible para todos.',
    price: 'Consultar',
    duration: 'Trimestral / Mensual',
    level: 'All Levels',
    spots: 'Grupos flexibles',
    image: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1200&q=80',
    tags: ['100% Inclusivo', 'Colectivos Vulnerables', 'Monitores Especializados']
  },
  {
    id: 'guarda-tablas',
    title: 'Servicio Guarda-Tablas',
    subtitle: 'Instalaciones del Club',
    description: 'Servicio de guarda-tablas en un ambiente amigable y familiar. Deja tu tabla y neopreno con derecho a utilizar las instalaciones del Club. Un espacio pensado para la comunidad surfera de Donostia.',
    price: 'Desde 40€',
    duration: 'Por mes',
    level: 'All Levels',
    spots: 'Instalaciones del club',
    image: 'https://images.unsplash.com/photo-1533007424151-54c7d6d5ef76?auto=format&fit=crop&w=1200&q=80',
    tags: ['Tabla + Neopreno', 'Instalaciones', 'Ambiente Familiar']
  },
  {
    id: 'medioambiental',
    title: 'Sensibilización Medioambiental',
    subtitle: 'Jornadas de Limpieza',
    description: 'Jornadas mensuales de sensibilización y recogida de residuos en la playa de la Zurriola. Actividad abierta a toda la ciudadanía, de carácter voluntario. Se proporciona todo el material necesario. Último domingo de cada mes.',
    price: 'Gratuito',
    duration: '~2 horas',
    level: 'All Levels',
    spots: 'Abierto a todos',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    tags: ['Voluntario', 'Último domingo del mes', 'Material incluido']
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gallery-1',
    imageUrl: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=800&q=80',
    caption: 'Chasing raw Atlantic waves off the rugged coast of Galicia.',
    category: 'surfing',
    aspectRatio: 'aspect-[3/4]'
  },
  {
    id: 'gallery-2',
    imageUrl: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=800&q=80',
    caption: 'Late afternoon laughs and beachside fires with the Patris family.',
    category: 'community',
    aspectRatio: 'aspect-square'
  },
  {
    id: 'gallery-3',
    imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    caption: 'Razo Beach sunset glow reflection on pristine sand banks.',
    category: 'nature',
    aspectRatio: 'aspect-[16/9]'
  },
  {
    id: 'gallery-4',
    imageUrl: '/pexels-chelsey-horne-757133-scaled.jpg',
    caption: 'Handcrafted surfboards representing freedom, craft, and soul.',
    category: 'lifestyle',
    aspectRatio: 'aspect-[3/4]'
  },
  {
    id: 'gallery-5',
    imageUrl: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=800&q=80',
    caption: 'Quiet morning wave readings at daybreak on the Galician horizon.',
    category: 'nature',
    aspectRatio: 'aspect-[4/3]'
  },
  {
    id: 'gallery-6',
    imageUrl: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&w=800&q=80',
    caption: 'Deep green water and floating feelings of complete flow state.',
    category: 'surfing',
    aspectRatio: 'aspect-square'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Patricia "Patri" Díaz',
    role: 'Founder & Head Coach',
    location: 'A Coruña, Galicia',
    comment: 'Patris Surf was built because we believe the sea is the ultimate equalizing space. Watching people with adaptive needs or young kids stand up on a board and scream with pure freedom is why this platform exists.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    rating: 5
  },
  {
    id: 'test-2',
    name: 'Mateo Santos',
    role: 'Club Member',
    location: 'Santiago de Compostela, Spain',
    comment: "I've been surf-camping across Europe, but nothing compares to the soul of Patris Surf in Razo. The coaches don't just teach mechanics, they teach you how to read the language of the sandbanks and truly respect the tide.",
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    rating: 5
  },
  {
    id: 'test-3',
    name: 'Elena Rodríguez',
    role: 'Adaptive Wave Participant',
    location: 'Madrid, Spain',
    comment: 'As someone with lower limb mobility constraints, surfing was a far-off dream. Patri and her crew not only got me in the water—they made me feel safe, included, and perfectly capable. It is an extraordinary family.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
    rating: 5
  }
];

export const TEAM_MEMBERS = [
  {
    id: 't-1',
    name: 'Patricia "Patri" Díaz',
    role: 'Founder & Surf Therapist',
    bio: "FISA Certified coach. Passionate about women's empowerment in sports and pioneer of local adaptive surfing initiatives in Galicia.",
    experience: '12+ Years Surf Instructing',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 't-2',
    name: 'Javi Castro',
    role: 'Senior Wave Analyst',
    bio: 'Swell specialist, deep-sea ecologist, and advanced coach. Believes every surfboard is a brush painting on the water.',
    experience: '8 Years Competitive Surfing',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 't-3',
    name: 'Sara Méndez',
    role: 'Kids Safety & Ocean Literacy Lead',
    bio: 'Marine sports science graduate, specializing in youth kinetics, ocean awareness workshops, and adaptive water confidence.',
    experience: '5 Years Teaching surf kids',
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=400&q=80'
  }
];
