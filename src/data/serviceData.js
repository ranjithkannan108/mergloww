import bannerSriSakthi from '../assets/Banner Image Sri Sakthi garden.webp';
import bannerSudiksha from '../assets/Banner Image Sudiksha garden.webp';
import bannerSpNagar from '../assets/Banner Image SP Nagar.webp';

export const servicesData = {
  'sri-sakthi-garden': {
    id: 'sri-sakthi-garden',
    title: 'Sri Sakthi Garden',
    image: bannerSriSakthi,
    tags: ['Residential', 'Villa Plots', 'Guduvanchery'],
    heading: 'DTCP & RERA APPROVED PLOTS IN GUDUVANCHERY',
    description: "Discover a secure investment opportunity in one of Chennai's fastest-growing corridors. Located in Guduvanchery, this premium residential layout offers DTCP & RERA approved plots with excellent infrastructure, seamless connectivity, and exceptional appreciation potential.",
    highlights: [
      'Premium Blacktop Internal Roads',
      'Avenue Tree Plantation',
      'Solar Street Lights',
      '24×7 Security',
      'Reliable Water Supply',
      'Compound Wall With Gated Community'
    ],
    landmarks: [
      'Just 1 km From Guduvanchery Railway Station',
      'Just 1 km From GST Road',
      'Schools & Colleges – Nearby',
      'Hospitals – Close Proximity',
      'IT & Industrial Corridor – Easily Accessible',
      'Public Transportation – Excellent Connectivity'
    ],
    details: [
      { label: 'Total Plots', value: '42' },
      { label: 'Plot Sizes', value: '800Sq.Ft Onwards' },
      { label: 'Price', value: '₹5,100/Sq.Ft Onwards' }
    ]
  },
  'sudiksha-garden': {
    id: 'sudiksha-garden',
    title: 'Sudiksha Garden',
    image: bannerSudiksha,
    tags: ['Residential', 'DTCP Approved', 'Maduranthakam'],
    heading: 'DTCP APPROVED PLOTS IN MADURANTHAKAM',
    description: "A premium residential plot in the rapidly developing town of Maduranthagam, where affordability meets exceptional future growth. Developed with modern infrastructure and clear legal approvals, this DTCP-approved residential layout offers an ideal opportunity for both homebuyers and investors seeking long-term value.",
    highlights: [
      '30-Foot Blacktop Roads',
      'Solar Street Lights',
      '24×7 Security',
      'Residential Surroundings',
      'Children\'s Play Area'
    ],
    landmarks: [
      'Easy access to Maduranthagam Town',
      'Close to Schools & Colleges',
      'Nearby Hospitals & Healthcare Facilities',
      'Near IT Companies & Industrial Developments'
    ],
    details: [
      { label: 'Phase 1', value: '115 Plots' },
      { label: 'Phase 2', value: '126 Plots' },
      { label: 'Plot Sizes', value: '600Sq.Ft Onwards' },
      { label: 'Price', value: '₹1,600/Sq.Ft Onwards' }
    ]
  },
  'sp-nagar': {
    id: 'sp-nagar',
    title: 'SP Nagar',
    image: bannerSpNagar,
    tags: ['Investment', 'Gated Community', 'Walajabad'],
    heading: 'DTCP & RERA APPROVED PLOTS IN WALAJABAD',
    description: "A premium investment opportunity in Walajabad, one of Chennai's rapidly developing residential corridors. This DTCP & RERA-approved residential layout combines legal security, modern infrastructure, and exceptional appreciation potential, making it the ideal choice for homeowners and investors alike.",
    highlights: [
      '30-Foot Blacktop Roads',
      '23-Foot Blacktop Internal Roads',
      'Reliable Water Supply',
      'Compound Wall with Gated Community'
    ],
    landmarks: [
      'Just 1 km From Walajabad Railway Station',
      'Just 1 km From Bus Stand',
      'Registration Office - 5Mins',
      'Just 1 km From Chennai State Highway'
    ],
    details: [
      { label: 'Plot Sizes', value: '500Sq.Ft Onwards' },
      { label: 'Price', value: '₹1,600/Sq.Ft Onwards' }
    ]
  }
};
