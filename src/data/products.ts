import type { Product, CategoryFilter } from '@/types/product';
import { getReviewsForProduct, getAverageRating } from './reviews';

export const categories: CategoryFilter[] = [
  {
    id: 'smart-lighting',
    name: 'Smart Lighting',
    description: 'Intelligent lighting solutions for modern homes',
    icon: '💡'
  },
  {
    id: 'security-cameras',
    name: 'Security Cameras',
    description: 'Advanced surveillance and monitoring systems',
    icon: '📹'
  },
  {
    id: 'smart-speakers',
    name: 'Smart Speakers',
    description: 'Voice-controlled audio and smart home hubs',
    icon: '🔊'
  },
  {
    id: 'smart-locks',
    name: 'Smart Locks',
    description: 'Secure keyless entry solutions',
    icon: '🔐'
  },
  {
    id: 'sensors-detectors',
    name: 'Sensors & Detectors',
    description: 'Motion, temperature, and security sensors',
    icon: '🌡️'
  },
  {
    id: 'control-panels',
    name: 'Control Panels',
    description: 'Central hubs for smart home automation',
    icon: '📱'
  }
];

export const products: Product[] = [
  // Control Panels (from existing Boles products)
  {
    id: 'mixpad-mini',
    name: 'MixPad Mini Super Smart Panel',
    description: 'Compact 4-inch smart control panel with multi-touch capacitive screen and unlimited scenario support.',
    price: 299,
    category: 'control-panels',
    image: 'https://res.cloudinary.com/control4/image/upload/f_auto,q_auto,dpr_auto/www/control4/homepage/OS_3_WWW_Home_1b.jpg',
    images: [
      'https://res.cloudinary.com/control4/image/upload/f_auto,q_auto,dpr_auto/www/control4/homepage/OS_3_WWW_Home_1b.jpg',
      'https://m.media-amazon.com/images/I/61f8O-P1fqL._AC_UF894,1000_QL80_.jpg',
      'http://anjielo.com/cdn/shop/products/Wifi-Smart-Home-Control-Panel-Smart-Switch-Electronic-Lock-Tuya-Control-Panel-Music-Light-Tuya-Series.jpg?v=1649234895'
    ],
    features: [
      '4 inches, 480x480P resolution display',
      'Multi-touch capacitive screen',
      'AAC 1813 speaker',
      '220V zero live wire power supply',
      'Wi-Fi and Bluetooth connectivity',
      'Unlimited scenarios supported'
    ],
    specifications: {
      'Display': '4 inches, 480×480P resolution',
      'Touch Layer': 'Multi-touch capacitive screen',
      'Speaker': 'AAC 1813 speaker',
      'Power Supply': '220V zero live wire power supply',
      'Connectivity': 'Wi-Fi, Bluetooth',
      'Scenarios': 'Unlimited scenarios supported',
      'Dimensions': '86×86×12mm',
      'Installation': 'Wall-mounted'
    },
    inStock: true,
    stockCount: 25,
    rating: 4.8,
    reviewCount: 203,
    badges: ['Best Seller'],
    brand: 'BOLES',
    model: 'MP-MINI-001',
    warranty: '2 years',
    compatibility: ['iOS', 'Android', 'Smart Home Systems']
  },
  {
    id: 'mixpad-s-gateway',
    name: 'MixPad S All-in-one Gateway Panel',
    description: 'Advanced smart panel with built-in gateway, supporting up to 350 devices with zigbee networking.',
    price: 449,
    originalPrice: 499,
    category: 'control-panels',
    image: 'https://m.media-amazon.com/images/I/61C2YFb1-+L._AC_UF1000,1000_QL80_.jpg',
    images: [
      'https://m.media-amazon.com/images/I/61C2YFb1-+L._AC_UF1000,1000_QL80_.jpg',
      'https://image.made-in-china.com/202f0j00AeWiIDkhgufY/Wgsensor-Touch-Screen-Panel-6-Inches-Central-Control-for-Tuya-Intelligent-Devices-Zigbee-Smart-Hub-Products.webp',
      'https://m.media-amazon.com/images/I/61jVMVk76VL._AC_UF894,1000_QL80_.jpg'
    ],
    features: [
      '2GB RAM, 8GB ROM storage',
      '4 inches, 480x480P resolution',
      'Dual microphone array',
      'Built-in zigbee gateway',
      'Supports 350 devices',
      'Wi-Fi, Bluetooth, Zigbee 3.0'
    ],
    specifications: {
      'Storage': '2GB RAM, 8GB ROM',
      'Display': '4 inches, 480×480P resolution',
      'Microphone': 'Dual microphone array',
      'Gateway': 'Built-in Zigbee 3.0 gateway',
      'Device Support': 'Up to 350 devices',
      'Connectivity': 'Wi-Fi, Bluetooth, Zigbee 3.0',
      'Light Sensor': 'Automatic brightness adjustment',
      'Distance Sensor': '10-15cm gesture sensing'
    },
    inStock: true,
    stockCount: 15,
    rating: 4.9,
    reviewCount: 156,
    badges: ['Featured', 'Gateway Hub'],
    brand: 'BOLES',
    model: 'MP-S-GW-001',
    warranty: '2 years',
    compatibility: ['iOS', 'Android', 'Zigbee 3.0', 'Smart Home Systems']
  },
  {
    id: 'mixpad-genie',
    name: 'MixPad Genie',
    description: 'Compact smart controller with 3.27-inch color display, supporting voice, touch, and app control.',
    price: 199,
    category: 'control-panels',
    image: 'https://ext.same-assets.com/596243380/2361381922.png',
    images: [
      'https://ext.same-assets.com/596243380/2361381922.png',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=400&fit=crop',
      'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=500&h=400&fit=crop'
    ],
    features: [
      '3.27 inches color HD touch screen',
      'Voice, touch, and app control',
      'Type-C mobile phone charging',
      'Bluetooth Mesh, Wi-Fi, infrared',
      'Multiple power supply options',
      'Home appliance control'
    ],
    specifications: {
      'Display': '3.27 inches color HD touch screen',
      'Control Methods': 'Voice, touch, and app control',
      'Charging': 'Type-C mobile phone charging',
      'Connectivity': 'Bluetooth Mesh, Wi-Fi, infrared',
      'Power': 'Multiple power supply options',
      'Compatibility': 'Home appliances'
    },
    inStock: true,
    stockCount: 18,
    rating: 4.7,
    reviewCount: 203,
    badges: ['Compact Design'],
    brand: 'BOLES',
    model: 'MP-GENIE-001',
    warranty: '2 years',
    compatibility: ['iOS', 'Android', 'Smart Home Systems']
  },

  // Smart Lighting
  {
    id: 'smart-led-strip',
    name: 'BOLES RGB Smart LED Strip',
    description: 'Color-changing LED strip with app control and voice compatibility.',
    price: 79,
    originalPrice: 99,
    category: 'smart-lighting',
    image: 'https://m.media-amazon.com/images/I/714sp-DjYhL._AC_UF1000,1000_QL80_.jpg',
    images: [
      'https://m.media-amazon.com/images/I/714sp-DjYhL._AC_UF1000,1000_QL80_.jpg',
      'https://m.media-amazon.com/images/I/61X27IypvjL._AC_UF1000,1000_QL80_.jpg',
      'https://m.media-amazon.com/images/I/61htOO3Ki-L._AC_UF1000,1000_QL80_.jpg'
    ],
    features: [
      '16 million colors',
      'Music sync capability',
      'Voice control compatible',
      'Easy installation',
      '32.8ft length',
      'App control'
    ],
    specifications: {
      'Length': '32.8ft (10m)',
      'Colors': '16 million colors',
      'Connectivity': 'Wi-Fi, App control',
      'Features': 'Music sync, Voice control',
      'Installation': 'Adhesive backing',
      'Voltage': '12V DC'
    },
    inStock: true,
    stockCount: 45,
    rating: 4.6,
    reviewCount: 342,
    badges: ['Popular'],
    brand: 'BOLES',
    model: 'LED-RGB-10M',
    warranty: '1 year',
    compatibility: ['iOS', 'Android', 'Alexa', 'Google Assistant']
  },
  {
    id: 'smart-ceiling-light',
    name: 'Smart Ceiling Light Pro',
    description: 'Intelligent ceiling light with adjustable brightness and color temperature.',
    price: 159,
    category: 'smart-lighting',
    image: 'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=500&h=400&fit=crop',
    features: [
      'Adjustable brightness',
      'Color temperature control',
      'Schedule automation',
      'Energy efficient LED',
      'Flush mount design',
      'Remote control included'
    ],
    inStock: true,
    rating: 4.8,
    reviewCount: 128,
    badges: ['Energy Efficient']
  },
  {
    id: 'smart-dimmer-switch',
    name: 'Smart Dimmer Switch',
    description: 'Wi-Fi enabled dimmer switch with voice control and scheduling.',
    price: 49,
    category: 'smart-lighting',
    image: 'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?w=500&h=400&fit=crop',
    features: [
      'Wi-Fi connectivity',
      'Voice control support',
      'Scheduling and timers',
      'Easy installation',
      'Compatible with LED bulbs',
      'No hub required'
    ],
    inStock: true,
    rating: 4.5,
    reviewCount: 89,
    badges: ['Easy Install']
  },

  // Security Cameras
  {
    id: 'outdoor-security-cam',
    name: 'BOLES Outdoor Security Camera',
    description: 'Weatherproof 4K security camera with night vision and motion detection.',
    price: 249,
    originalPrice: 299,
    category: 'security-cameras',
    image: 'https://m.media-amazon.com/images/I/716Ed4DBAML.jpg',
    images: [
      'https://m.media-amazon.com/images/I/716Ed4DBAML.jpg',
      'https://m.media-amazon.com/images/I/71oWCr2tZCL.jpg',
      'https://www.security.org/app/uploads/2020/07/Lorex-4K-Ultra-HD-Camera.png'
    ],
    features: [
      '4K Ultra HD recording',
      'Night vision up to 100ft',
      'Motion detection alerts',
      'Weatherproof IP66 rating',
      'Two-way audio',
      'Cloud storage included'
    ],
    specifications: {
      'Resolution': '4K Ultra HD (3840×2160)',
      'Night Vision': 'Up to 100ft infrared range',
      'Weather Rating': 'IP66 weatherproof',
      'Audio': 'Two-way communication',
      'Storage': 'Cloud and local storage',
      'Connectivity': 'Wi-Fi 6, Ethernet',
      'Power': 'PoE or 12V DC adapter',
      'Field of View': '110° diagonal'
    },
    inStock: true,
    stockCount: 18,
    rating: getAverageRating(getReviewsForProduct('outdoor-security-cam')) || 4.7,
    reviewCount: getReviewsForProduct('outdoor-security-cam').length,
    badges: ['Weatherproof', 'Best Seller'],
    brand: 'BOLES',
    model: 'SEC-4K-001',
    warranty: '3 years',
    compatibility: ['iOS', 'Android', 'PC', 'Mac']
  },
  {
    id: 'indoor-pan-tilt-cam',
    name: 'Smart Indoor Pan/Tilt Camera',
    description: '360° rotating indoor camera with AI person detection and privacy mode.',
    price: 129,
    category: 'security-cameras',
    image: 'https://m.media-amazon.com/images/I/5170obx7JpL.jpg',
    features: [
      '360° pan and 96° tilt',
      'AI person detection',
      'Privacy mode',
      '1080p HD video',
      'Two-way communication',
      'Mobile app control'
    ],
    inStock: true,
    rating: 4.6,
    reviewCount: 198,
    badges: ['AI Powered']
  },
  {
    id: 'doorbell-camera',
    name: 'Smart Video Doorbell',
    description: 'Wireless video doorbell with motion alerts and smartphone notifications.',
    price: 199,
    category: 'security-cameras',
    image: 'https://images.thdstatic.com/productImages/ffacd8fa-a1b8-4609-8a17-938e502ec4b8/svn/black-blink-security-cameras-b0b1n5hw22-64_600.jpg',
    features: [
      'Wireless installation',
      'Motion detection zones',
      'Smartphone notifications',
      'Two-way talk',
      'Cloud recording',
      'Night vision'
    ],
    inStock: true,
    rating: 4.8,
    reviewCount: 156,
    badges: ['Wireless']
  },

  // Smart Speakers
  {
    id: 'voice-assistant-hub',
    name: 'BOLES Voice Assistant Hub',
    description: 'Premium smart speaker with superior sound quality and smart home control.',
    price: 179,
    category: 'smart-speakers',
    image: 'https://images.unsplash.com/photo-1589492477829-5e65395b66cc?w=500&h=400&fit=crop',
    features: [
      'Superior 360° sound',
      'Built-in smart hub',
      'Voice control',
      'Music streaming',
      'Smart device control',
      'Multiple assistant support'
    ],
    inStock: true,
    rating: 4.7,
    reviewCount: 234,
    badges: ['Premium Audio']
  },
  {
    id: 'compact-smart-speaker',
    name: 'Compact Smart Speaker',
    description: 'Small but powerful smart speaker perfect for any room.',
    price: 79,
    originalPrice: 99,
    category: 'smart-speakers',
    image: 'https://images.unsplash.com/photo-1589492477829-5e65395b66cc?w=500&h=400&fit=crop',
    features: [
      'Compact design',
      'Rich bass sound',
      'Voice activation',
      'Multi-room audio',
      'Smart home control',
      'Bluetooth connectivity'
    ],
    inStock: true,
    rating: 4.4,
    reviewCount: 167,
    badges: ['Compact']
  },

  // Smart Locks
  {
    id: 'keypad-smart-lock',
    name: 'Smart Keypad Door Lock',
    description: 'Keyless entry with keypad, smartphone app, and backup keys.',
    price: 279,
    category: 'smart-locks',
    image: 'https://m.media-amazon.com/images/I/71WCY7n+nuL._AC_UF894,1000_QL80_.jpg',
    features: [
      'Keyless entry',
      'Smartphone app control',
      'Backup physical keys',
      'Auto-lock feature',
      'Access logs',
      'Easy installation'
    ],
    inStock: true,
    rating: 4.6,
    reviewCount: 145,
    badges: ['Secure']
  },
  {
    id: 'fingerprint-lock',
    name: 'Biometric Fingerprint Lock',
    description: 'Advanced biometric lock with fingerprint recognition and app control.',
    price: 349,
    originalPrice: 399,
    category: 'smart-locks',
    image: 'https://ae01.alicdn.com/kf/Saf79da110b83489793fed9e6783fa54e6.jpg',
    features: [
      'Fingerprint recognition',
      'Stores 100 fingerprints',
      'Smartphone integration',
      'Battery backup',
      'Weather resistant',
      'Quick access'
    ],
    inStock: true,
    rating: 4.8,
    reviewCount: 92,
    badges: ['Biometric', 'Advanced']
  },

  // Sensors & Detectors
  {
    id: 'motion-sensor',
    name: 'Smart Motion Sensor',
    description: 'Wireless motion detector with smartphone alerts and automation triggers.',
    price: 39,
    category: 'sensors-detectors',
    image: 'https://ae01.alicdn.com/kf/Sfa40a9cb54bb42249f124b0f9c3955fd5.png',
    features: [
      'Wireless connectivity',
      'Instant alerts',
      'Long battery life',
      'Easy mounting',
      'Automation triggers',
      'Pet-friendly option'
    ],
    inStock: true,
    rating: 4.5,
    reviewCount: 289,
    badges: ['Wireless']
  },
  {
    id: 'smart-smoke-detector',
    name: 'Smart Smoke & Carbon Monoxide Detector',
    description: 'Intelligent detector with smartphone notifications and self-testing.',
    price: 129,
    category: 'sensors-detectors',
    image: 'https://ae01.alicdn.com/kf/S506657441e8549cfaaf83e109abf1438P.jpg',
    features: [
      'Smoke and CO detection',
      'Smartphone alerts',
      'Self-testing capability',
      '10-year battery',
      'Voice announcements',
      'Easy installation'
    ],
    inStock: true,
    rating: 4.9,
    reviewCount: 178,
    badges: ['Safety Critical', '10-Year Battery']
  },
  {
    id: 'door-window-sensor',
    name: 'Smart Door/Window Sensor Set',
    description: 'Wireless sensors for doors and windows with instant alerts.',
    price: 59,
    category: 'sensors-detectors',
    image: 'https://ae01.alicdn.com/kf/Hcc21ed6590e6456d9a45e71cf24e5eb45.jpg',
    features: [
      'Set of 4 sensors',
      'Wireless installation',
      'Instant notifications',
      'Long battery life',
      'Small, discreet design',
      'Home automation ready'
    ],
    inStock: true,
    rating: 4.6,
    reviewCount: 203,
    badges: ['4-Pack', 'Discreet']
  }
];

export const featuredProducts = products.filter(p => p.badges?.includes('Best Seller') || p.badges?.includes('Featured')).slice(0, 6);

export const getProductsByCategory = (category: string) => {
  if (category === 'all') return products;
  return products.filter(p => p.category === category);
};

export const getProductById = (id: string) => {
  return products.find(p => p.id === id);
};
