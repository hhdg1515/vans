/*
 * Detailed Brand Data for /brands/:brandSlug pages
 * Includes history, expertise, models, common issues, and technical specifications
 */

export const brandDetails = {
  'maybach': {
    slug: 'maybach',
    name: 'Maybach',
    tagline: 'The pinnacle of luxury automotive engineering',
    tier: 'ultra-luxury',

    // Hero section
    hero: {
      title: 'Maybach Specialist',
      subtitle: 'Factory-trained expertise for the world\'s most exclusive sedans',
      image: '/images/brands/maybach-hero.jpg', // TODO: 1920×1080 hero image
    },

    // Brand story
    story: {
      eyebrow: 'Our Maybach Expertise',
      title: 'Two Decades of Ultra-Luxury Service',
      paragraphs: [
        'Mercedes-Maybach represents the absolute pinnacle of automotive luxury. From the S680\'s twin-turbo V12 to the groundbreaking MBUX Hyperscreen, these vehicles demand specialized knowledge and factory-level diagnostic tools.',
        'Our lead technician received direct training from Mercedes-Benz Classic Center Stuttgart and has serviced over 200 Maybach vehicles since 2004. We maintain the largest private inventory of Maybach-specific tooling in Southern California.',
        'Whether your S-Class requires AIRMATIC suspension recalibration, Magic Body Control diagnostics, or hybrid system maintenance, we deliver dealership-level expertise without the dealership experience.',
      ],
      image: '/images/brands/maybach-workshop.jpg', // TODO: 1200×1600
    },

    // Model lineup
    models: [
      {
        id: 'maybach-s680',
        name: 'S680',
        generation: 'V223 (2021-Present)',
        engineCode: 'M279',
        displacement: '6.0L V12 Twin-Turbo',
        power: '621 HP / 664 lb-ft',
        transmission: '9G-TRONIC',
        features: ['AIRMATIC', '4MATIC', 'Rear-Axle Steering', 'MBUX Hyperscreen'],
        commonIssues: ['ABC hydraulic leaks', 'AIRMATIC sensor drift', 'MBUX software glitches'],
        caseStudiesCount: 3,
      },
      {
        id: 'maybach-s580',
        name: 'S580',
        generation: 'V223 (2021-Present)',
        engineCode: 'M256',
        displacement: '4.0L V8 Twin-Turbo + 48V Hybrid',
        power: '496 HP / 516 lb-ft',
        transmission: '9G-TRONIC',
        features: ['ISG 48V Mild Hybrid', 'E-ACTIVE BODY CONTROL', 'Burmester 4D'],
        commonIssues: ['48V battery degradation', 'E-ABC calibration', 'Hybrid system faults'],
        caseStudiesCount: 2,
      },
      {
        id: 'maybach-s560',
        name: 'S560 / S650',
        generation: 'X222 (2015-2020)',
        engineCode: 'M177 / M279',
        displacement: '4.0L V8 / 6.0L V12',
        power: '463-621 HP',
        transmission: '7G-TRONIC / 9G-TRONIC',
        features: ['MAGIC BODY CONTROL', 'Chauffeur Package', 'Executive Rear Seats'],
        commonIssues: ['ABC pump failure', 'COMAND system freeze', 'Air suspension leaks'],
        caseStudiesCount: 1,
      },
    ],

    // Specialized services
    services: [
      {
        title: 'AIRMATIC & ABC Systems',
        description: 'Factory-level diagnostics for Active Body Control, AIRMATIC air suspension, and E-ACTIVE BODY CONTROL with road scanning.',
        icon: 'suspension',
      },
      {
        title: 'V12 & Hybrid Powertrain',
        description: 'Twin-turbo V12 maintenance, 48V mild hybrid diagnostics, and ISG (Integrated Starter Generator) calibration.',
        icon: 'engine',
      },
      {
        title: 'MBUX & Interior Tech',
        description: 'MBUX Hyperscreen software updates, Burmester 4D sound system repair, executive seat climate control diagnostics.',
        icon: 'tech',
      },
      {
        title: 'Chauffeur Package Systems',
        description: 'Rear-seat entertainment, partition systems, executive rear console, and rear-axle steering calibration.',
        icon: 'luxury',
      },
    ],

    // Statistics
    stats: {
      vehiclesServiced: '200+',
      yearsExperience: '20+',
      specialistCertifications: 'STAR Level 3, ABC, AMG, Hybrid',
      averageRepairTime: '2-3 days',
    },

    // Case studies preview (IDs link to case-studies.js)
    featuredCaseStudies: ['maybach-s680-abc-rebuild', 'maybach-s580-hybrid-fault'],

    // Gallery
    gallery: [
      '/images/brands/maybach-gallery-1.jpg', // TODO: Workshop shots
      '/images/brands/maybach-gallery-2.jpg',
      '/images/brands/maybach-gallery-3.jpg',
      '/images/brands/maybach-gallery-4.jpg',
    ],
  },

  'rolls-royce': {
    slug: 'rolls-royce',
    name: 'Rolls-Royce',
    tagline: 'Automotive royalty deserves royal treatment',
    tier: 'ultra-luxury',

    hero: {
      title: 'Rolls-Royce Specialist',
      subtitle: 'Preserving the legacy of the world\'s most prestigious motor cars',
      image: '/images/brands/rolls-hero.jpg',
    },

    story: {
      eyebrow: 'Our Rolls-Royce Heritage',
      title: 'Craftsmanship Meets Precision',
      paragraphs: [
        'Rolls-Royce ownership is an experience defined by uncompromising quality and bespoke luxury. From the 6.75L V12 to the all-new Spectre\'s electric architecture, these vehicles require intimate knowledge of BMW Group\'s most exclusive platform.',
        'Our facility is one of only three independent shops in California equipped with genuine Rolls-Royce diagnostic tools and factory-trained technicians. We\'ve maintained relationships with collectors owning everything from 1960s Silver Shadows to the latest Phantom Series II.',
        'Every Rolls-Royce service follows the marque\'s original white-glove standards—protected storage, microfiber-only contact, and documentation worthy of the Spirit of Ecstasy.',
      ],
      image: '/images/brands/rolls-workshop.jpg',
    },

    models: [
      {
        id: 'rolls-phantom',
        name: 'Phantom VIII',
        generation: '2018-Present',
        engineCode: 'N74B68',
        displacement: '6.75L V12 Twin-Turbo',
        power: '563 HP / 664 lb-ft',
        transmission: '8-Speed Automatic',
        features: ['Magic Carpet Ride', 'Bespoke Audio', 'Gallery', 'Flagbearer System'],
        commonIssues: ['Air suspension complexity', 'Bespoke electronics', 'Gallery lighting'],
        caseStudiesCount: 2,
      },
      {
        id: 'rolls-ghost',
        name: 'Ghost',
        generation: 'Second Gen (2020-Present)',
        engineCode: 'N74B68',
        displacement: '6.75L V12 Twin-Turbo',
        power: '563 HP / 627 lb-ft',
        transmission: '8-Speed ZF',
        features: ['Planar Suspension', 'Illuminated Fascia', 'Micro-Environment Purification'],
        commonIssues: ['Planar damper calibration', 'Satellite Aided Transmission', 'Illumination LEDs'],
        caseStudiesCount: 1,
      },
      {
        id: 'rolls-cullinan',
        name: 'Cullinan',
        generation: '2018-Present',
        engineCode: 'N74B68',
        displacement: '6.75L V12 Twin-Turbo',
        power: '563 HP / 627 lb-ft',
        transmission: '8-Speed Automatic',
        features: ['Off-Road Mode', 'Viewing Suite', 'Recreation Module', 'Self-Leveling'],
        commonIssues: ['Off-road suspension wear', 'Tailgate electronics', 'All-wheel drive'],
        caseStudiesCount: 1,
      },
    ],

    services: [
      {
        title: 'Magic Carpet Ride Suspension',
        description: 'Flagship air suspension with camera-based road preview, Planar suspension system, and self-leveling diagnostics.',
        icon: 'suspension',
      },
      {
        title: '6.75L V12 Powertrain',
        description: 'N74 engine maintenance, satellite-aided transmission calibration, and BMW ISTA diagnostics for Rolls-Royce architecture.',
        icon: 'engine',
      },
      {
        title: 'Bespoke Interior Systems',
        description: 'Gallery lighting, illuminated fascia, starlight headliner repair, and custom wood/leather restoration referrals.',
        icon: 'luxury',
      },
      {
        title: 'Electrical & Comfort',
        description: 'Spirit of Ecstasy retraction, door closure assist, rear-seat entertainment, and micro-environment purification systems.',
        icon: 'tech',
      },
    ],

    stats: {
      vehiclesServiced: '85+',
      yearsExperience: '15+',
      specialistCertifications: 'BMW ISTA, Rolls-Royce Factory Training',
      averageRepairTime: '3-5 days',
    },

    featuredCaseStudies: ['rolls-phantom-air-suspension'],

    gallery: [
      '/images/brands/rolls-gallery-1.jpg',
      '/images/brands/rolls-gallery-2.jpg',
      '/images/brands/rolls-gallery-3.jpg',
    ],
  },

  'bentley': {
    slug: 'bentley',
    name: 'Bentley',
    tagline: 'British craftsmanship, German precision',
    tier: 'ultra-luxury',

    hero: {
      title: 'Bentley Specialist',
      subtitle: 'Expert service for Britain\'s finest grand tourers',
      image: '/images/brands/bentley-hero.jpg',
    },

    story: {
      eyebrow: 'Our Bentley Expertise',
      title: 'Crewe Excellence in California',
      paragraphs: [
        'Bentley represents the rare marriage of British luxury and Volkswagen Group engineering precision. From the W12-powered Continental GT to the electrified Bentayga Hybrid, these vehicles demand expertise spanning both worlds.',
        'Our technicians are trained on VAG diagnostic platforms specific to Bentley\'s unique systems—including Dynamic Ride (48V active anti-roll), adaptive cruise with Bentley-specific calibrations, and the brand\'s signature rotating display.',
        'We maintain direct relationships with Bentley specialists in the UK for access to technical bulletins, wiring diagrams, and bespoke interior component sourcing unavailable through standard channels.',
      ],
      image: '/images/brands/bentley-workshop.jpg',
    },

    models: [
      {
        id: 'bentley-continental-gt',
        name: 'Continental GT',
        generation: 'Third Gen (2018-Present)',
        engineCode: 'EA825 / CVTA',
        displacement: '6.0L W12 / 4.0L V8 Twin-Turbo',
        power: '542-626 HP',
        transmission: '8-Speed Dual-Clutch',
        features: ['Dynamic Ride (48V)', 'Rotating Display', 'All-Wheel Steering', 'Air Suspension'],
        commonIssues: ['48V system faults', 'DCT clutch wear', 'Rotating display motors'],
        caseStudiesCount: 2,
      },
      {
        id: 'bentley-bentayga',
        name: 'Bentayga',
        generation: '2016-Present',
        engineCode: 'CWTA / CWTD',
        displacement: '4.0L V8 / 6.0L W12',
        power: '542-626 HP',
        transmission: '8-Speed Torque Converter',
        features: ['Bentley Dynamic Ride', 'All-Terrain Spec', 'Naim Audio', 'Hybrid Option'],
        commonIssues: ['Air suspension leaks', 'Electric anti-roll bar', 'Hybrid battery'],
        caseStudiesCount: 1,
      },
    ],

    services: [
      {
        title: 'W12 & V8 Powertrain',
        description: 'VW Group W12 and V8 twin-turbo maintenance, dual-clutch transmission service, and performance calibration.',
        icon: 'engine',
      },
      {
        title: 'Dynamic Ride System',
        description: '48V Bentley Dynamic Ride (active anti-roll bars), air suspension diagnostics, and all-wheel steering calibration.',
        icon: 'suspension',
      },
      {
        title: 'Interior & Infotainment',
        description: 'Rotating display repair, Naim for Bentley audio, diamond-quilted leather care, and wood veneer maintenance.',
        icon: 'luxury',
      },
      {
        title: 'Hybrid & Electrification',
        description: 'Bentayga Hybrid diagnostics, high-voltage battery service, and plug-in charging system troubleshooting.',
        icon: 'tech',
      },
    ],

    stats: {
      vehiclesServiced: '120+',
      yearsExperience: '12+',
      specialistCertifications: 'VAG Bentley, VAS 5054A, ODIS',
      averageRepairTime: '2-4 days',
    },

    featuredCaseStudies: ['bentley-continental-gt-48v'],

    gallery: [
      '/images/brands/bentley-gallery-1.jpg',
      '/images/brands/bentley-gallery-2.jpg',
      '/images/brands/bentley-gallery-3.jpg',
    ],
  },

  'aston-martin': {
    slug: 'aston-martin',
    name: 'Aston Martin',
    tagline: 'British performance engineering and bespoke craftsmanship',
    tier: 'performance',

    hero: {
      title: 'Aston Martin Performance Atelier',
      subtitle: 'Factory tooling, AML diagnostics, and Q-division preservation for Gaydon grand tourers.',
      image: '/images/brands/aston-hero.jpg',
    },

    story: {
      eyebrow: 'Our Aston Heritage',
      title: 'From Newport Pagnell Classics to Modern Gaydon Icons',
      paragraphs: [
        'Our lead technician began at Aston Martin Newport Pagnell in 2006 and has since supported the DB9, DBS, Vantage, and Valkyrie programmes. That background gives us direct knowledge of AML bonded aluminium chassis, VH platform electronics, and the unique service requirements of naturally aspirated and twin-turbo V12s.',
        'We maintain dedicated AMDS and AML Diagnostic Laptop tooling, jig fixtures for carbon-ceramic brake service, and OEM torque plates for engine-out procedures. Archived service documentation is photo logged for provenance.',
        'Whether you are preparing a DB12 for an alpine tour or keeping a Q-spec Vantage concours-ready, our workflow blends factory torque specifications with photographic reporting.'
      ],
      image: '/images/brands/aston-workshop.jpg',
    },

    models: [
      {
        id: 'aston-db12',
        name: 'DB12',
        generation: '2023-Present',
        engineCode: 'M177 (AML Calibration)',
        displacement: '4.0L V8 Twin-Turbo',
        power: '671 HP / 590 lb-ft',
        transmission: 'ZF 8-Speed Automatic',
        features: ['Bonded aluminium platform', 'AML drive modes', 'Carbon ceramic brakes'],
        commonIssues: ['Calibration updates', 'Carbon ceramic heat cycling', 'Adaptive damping faults'],
        caseStudiesCount: 1,
      },
      {
        id: 'aston-vantage',
        name: 'Vantage V12',
        generation: '2022-Present',
        engineCode: 'AE31',
        displacement: '5.2L V12 Twin-Turbo',
        power: '690 HP / 555 lb-ft',
        transmission: 'ZF 8-Speed Automatic',
        features: ['Active exhaust', 'AML rear differential', 'Track Mode calibration'],
        commonIssues: ['Rear differential seepage', 'Carbon ceramic squeal', 'Adaptive suspension calibration'],
        caseStudiesCount: 1,
      },
      {
        id: 'aston-dbx707',
        name: 'DBX707',
        generation: '2022-Present',
        engineCode: 'M177 (DBX707)',
        displacement: '4.0L V8 Twin-Turbo',
        power: '697 HP / 663 lb-ft',
        transmission: '9-Speed Wet-Clutch Automatic',
        features: ['Active centre differential', 'Triple chamber air suspension', '48V active anti-roll'],
        commonIssues: ['Air suspension leaks', '48V anti-roll faults', 'High-temp brake fade'],
        caseStudiesCount: 0,
      },
    ],

    services: [
      {
        title: 'AML Powertrain Programmes',
        description: 'Engine-out timing chain service, V12 valvetrain setup, and AMG-derived V8 calibration updates.',
        icon: 'engine',
      },
      {
        title: 'Chassis & Carbon Ceramic Care',
        description: 'Carbon ceramic brake resurfacing, adaptive damping calibration, and bonded aluminium chassis inspections.',
        icon: 'suspension',
      },
      {
        title: 'Q-Division Interior Preservation',
        description: 'Leather recolor, carbon trim refinishing, and AML infotainment retrofits for Q bespoke builds.',
        icon: 'luxury',
      },
      {
        title: 'Track & Touring Preparation',
        description: 'Telemetry-backed alignment, tire and fluid programmes, and on-site support for track days or European tours.',
        icon: 'performance',
      },
    ],

    stats: {
      vehiclesServiced: '95+',
      yearsExperience: '18+',
      specialistCertifications: 'AMDS, AML Diagnostic Laptop, Carbon Ceramic Specialist',
      averageRepairTime: '2-5 days',
    },

    featuredCaseStudies: ['aston-vantage-carbon-brake-service'],

    gallery: [
      '/images/brands/aston-gallery-1.jpg',
      '/images/brands/aston-gallery-2.jpg',
    ],
  },
  'porsche': {
    slug: 'porsche',
    name: 'Porsche',
    tagline: 'Stuttgart precision, legendary performance',
    tier: 'performance',

    hero: {
      title: 'Porsche Specialist',
      subtitle: 'Obsessive precision for legendary sports cars',
      image: '/images/brands/porsche-hero.jpg',
    },

    story: {
      eyebrow: 'Our Porsche Philosophy',
      title: 'Engineering Excellence',
      paragraphs: [
        'Porsche represents the ultimate fusion of everyday usability and racetrack performance. From air-cooled 911s to the cutting-edge Taycan\'s 800V electric architecture, every Porsche demands absolute precision.',
        'Our Porsche technician spent five years at an authorized Porsche Classic Partner before joining us. We maintain Porsche PIWIS 3 diagnostic systems, corner-balancing alignment equipment, and specialized tooling for everything from IMS bearing replacement to PDK clutch adaptation.',
        'Whether your 911 needs a track-day inspection or your Taycan requires high-voltage battery diagnostics, we deliver factory-level precision without dealership overhead.',
      ],
      image: '/images/brands/porsche-workshop.jpg',
    },

    models: [
      {
        id: 'porsche-911',
        name: '911 (992)',
        generation: '2019-Present',
        engineCode: '9A2 EVO',
        displacement: '3.0L Twin-Turbo Flat-6',
        power: '379-640 HP',
        transmission: '7-Speed Manual / 8-Speed PDK',
        features: ['Wet PDK Clutch', 'PASM Sport Suspension', 'Rear-Axle Steering', 'Sport Chrono'],
        commonIssues: ['PDK mechatronics', 'Rear-axle steering calibration', 'PASM leaks'],
        caseStudiesCount: 3,
      },
      {
        id: 'porsche-taycan',
        name: 'Taycan',
        generation: '2020-Present',
        engineCode: 'Electric (800V)',
        displacement: 'Dual Motor AWD',
        power: '402-750 HP',
        transmission: '2-Speed Rear Transmission',
        features: ['800V Architecture', '270kW Charging', 'Active Suspension', 'Launch Control'],
        commonIssues: ['800V charging faults', 'Battery thermal management', '2-speed transmission'],
        caseStudiesCount: 2,
      },
      {
        id: 'porsche-gt3',
        name: '911 GT3',
        generation: '992 (2021-Present)',
        engineCode: '9A2 GT3',
        displacement: '4.0L Naturally Aspirated Flat-6',
        power: '502 HP / 346 lb-ft',
        transmission: '7-Speed PDK / 6-Speed Manual',
        features: ['DRS Wing', 'Double Wishbone Front', 'Clubsport Package', 'Carbon Buckets'],
        commonIssues: ['Track brake wear', 'DRS actuator', 'Oil temp management'],
        caseStudiesCount: 1,
      },
    ],

    services: [
      {
        title: 'Flat-Six Powertrain',
        description: 'Air-cooled and water-cooled flat-six maintenance, IMS bearing replacement, PDK transmission service.',
        icon: 'engine',
      },
      {
        title: 'Taycan Electric Systems',
        description: '800V battery diagnostics, high-voltage charging system repair, and Performance Battery Plus health checks.',
        icon: 'tech',
      },
      {
        title: 'PASM & Suspension',
        description: 'Porsche Active Suspension Management, rear-axle steering calibration, and GT3 track alignment.',
        icon: 'suspension',
      },
      {
        title: 'Track Preparation',
        description: 'Pre-track inspection, brake fluid flush, corner-balancing, and post-session fluid analysis.',
        icon: 'performance',
      },
    ],

    stats: {
      vehiclesServiced: '250+',
      yearsExperience: '14+',
      specialistCertifications: 'Porsche PIWIS 3, Classic Partner Trained, 800V EV',
      averageRepairTime: '2-4 days',
    },

    featuredCaseStudies: ['porsche-911-pdk-service', 'porsche-taycan-800v'],

    gallery: [
      '/images/brands/porsche-gallery-1.jpg',
      '/images/brands/porsche-gallery-2.jpg',
      '/images/brands/porsche-gallery-3.jpg',
    ],
  },

  'lamborghini': {
    slug: 'lamborghini',
    name: 'Lamborghini',
    tagline: 'Italian supercar passion meets German expertise',
    tier: 'supercar',

    hero: {
      title: 'Lamborghini Specialist',
      subtitle: 'Sant\'Agata Bolognese performance in Southern California',
      image: '/images/brands/lamborghini-hero.jpg',
    },

    story: {
      eyebrow: 'Our Lamborghini Experience',
      title: 'Raging Bull Expertise',
      paragraphs: [
        'Lamborghini ownership is about drama, performance, and uncompromising design. From the naturally aspirated V10 Huracán to the hybrid V12 Revuelto, these supercars demand intimate knowledge of VAG Group\'s most extreme platforms.',
        'Our facility is equipped with Lamborghini LDAS diagnostic systems, hydraulic lifts rated for low ground clearance, and climate-controlled storage protecting carbon fiber bodywork. We\'ve serviced over 60 Lamborghinis including rare Aventador SVJ and Huracán Performante models.',
        'Every Lamborghini service includes pre- and post-service photo documentation, paint protection during work, and storage in our dedicated exotic bay.',
      ],
      image: '/images/brands/lamborghini-workshop.jpg',
    },

    models: [
      {
        id: 'lamborghini-huracan',
        name: 'Huracán',
        generation: '2014-Present',
        engineCode: 'Type 07L',
        displacement: '5.2L V10 Naturally Aspirated',
        power: '602-631 HP',
        transmission: '7-Speed DCT (LDF)',
        features: ['Lamborghini Dinamica Veicolo (LDV)', 'Magnetorheological Suspension', 'ANIMA Drive Modes'],
        commonIssues: ['DCT overheating', 'Lift system hydraulics', 'Carbon ceramic brake judder'],
        caseStudiesCount: 2,
      },
      {
        id: 'lamborghini-urus',
        name: 'Urus',
        generation: '2018-Present',
        engineCode: 'EA825',
        displacement: '4.0L V8 Twin-Turbo',
        power: '641-657 HP',
        transmission: '8-Speed Torque Converter',
        features: ['Tamburo Drive Mode', 'Active Roll Stabilization', 'Akrapovic Titanium Exhaust'],
        commonIssues: ['Turbo wastegate rattle', 'Air suspension faults', 'Rear-wheel steering'],
        caseStudiesCount: 1,
      },
    ],

    services: [
      {
        title: 'V10 & V12 Powertrain',
        description: 'Naturally aspirated V10 maintenance, hybrid V12 diagnostics, and DCT transmission service (LDF gearbox).',
        icon: 'engine',
      },
      {
        title: 'LDAS Diagnostics',
        description: 'Lamborghini Diagnostic Assistance System for fault codes, calibrations, and software updates.',
        icon: 'tech',
      },
      {
        title: 'Magnetorheological Suspension',
        description: 'Adaptive damper diagnostics, lift system hydraulics, and track-mode calibration.',
        icon: 'suspension',
      },
      {
        title: 'Carbon Fiber Care',
        description: 'Carbon ceramic brake service, carbon fiber bodywork inspection, and clear bra installation referrals.',
        icon: 'luxury',
      },
    ],

    stats: {
      vehiclesServiced: '60+',
      yearsExperience: '10+',
      specialistCertifications: 'VAG Lamborghini, LDAS Certified, DCT Specialist',
      averageRepairTime: '3-5 days',
    },

    featuredCaseStudies: ['lamborghini-huracan-dct'],

    gallery: [
      '/images/brands/lamborghini-gallery-1.jpg',
      '/images/brands/lamborghini-gallery-2.jpg',
    ],
  },

  'ferrari': {
    slug: 'ferrari',
    name: 'Ferrari',
    tagline: 'Italian racing heritage, prancing horse legacy',
    tier: 'supercar',

    hero: {
      title: 'Ferrari Specialist',
      subtitle: 'Maranello precision for the prancing horse',
      image: '/images/brands/ferrari-hero.jpg',
    },

    story: {
      eyebrow: 'Our Ferrari Philosophy',
      title: 'Racing Heritage Service',
      paragraphs: [
        'Ferrari represents the pinnacle of Italian automotive passion—every model carries DNA from Formula 1. From the twin-turbo V8 in the F8 Tributo to the hybrid SF90\'s 1,000 HP tri-motor system, these cars demand Ferrari-specific expertise.',
        'Our Ferrari technician holds specialist certification from an authorized Ferrari service center and maintains access to Ferrari Telemetry systems, Leonardo diagnostic platforms, and Maranello technical bulletins unavailable to general shops.',
        'We understand that Ferrari ownership transcends transportation—it\'s preservation of racing history. Every service maintains factory specifications while respecting each car\'s unique character.',
      ],
      image: '/images/brands/ferrari-workshop.jpg',
    },

    models: [
      {
        id: 'ferrari-f8',
        name: 'F8 Tributo',
        generation: '2019-Present',
        engineCode: 'F154 CD',
        displacement: '3.9L V8 Twin-Turbo',
        power: '710 HP / 568 lb-ft',
        transmission: '7-Speed F1 DCT',
        features: ['Side Slip Control 6.1', 'Ferrari Dynamic Enhancer', 'SCM-E Magnetorheological'],
        commonIssues: ['DCT clutch wear', 'F1 actuator', 'Oil consumption'],
        caseStudiesCount: 1,
      },
      {
        id: 'ferrari-sf90',
        name: 'SF90 Stradale',
        generation: '2020-Present',
        engineCode: 'F163',
        displacement: '4.0L V8 + 3 Electric Motors',
        power: '986 HP (total)',
        transmission: '8-Speed F1 DCT',
        features: ['Plug-in Hybrid', 'Torque Vectoring', 'eManettino', 'Active Aero'],
        commonIssues: ['High-voltage battery', 'Hybrid inverter cooling', 'eDrive faults'],
        caseStudiesCount: 1,
      },
    ],

    services: [
      {
        title: 'Ferrari V8 & V12',
        description: 'Twin-turbo V8 maintenance, naturally aspirated V12 service, and F1 dual-clutch transmission expertise.',
        icon: 'engine',
      },
      {
        title: 'Hybrid Systems (SF90)',
        description: 'High-voltage battery diagnostics, electric motor service, and plug-in charging system repair.',
        icon: 'tech',
      },
      {
        title: 'Leonardo Diagnostics',
        description: 'Ferrari factory diagnostic platform, telemetry analysis, and Side Slip Control calibration.',
        icon: 'performance',
      },
      {
        title: 'Magnetorheological Suspension',
        description: 'SCM-E damper service, Ferrari Dynamic Enhancer diagnostics, and track alignment.',
        icon: 'suspension',
      },
    ],

    stats: {
      vehiclesServiced: '45+',
      yearsExperience: '12+',
      specialistCertifications: 'Ferrari Leonardo, F1 DCT, Hybrid Certified',
      averageRepairTime: '3-6 days',
    },

    featuredCaseStudies: ['ferrari-f8-dct'],

    gallery: [
      '/images/brands/ferrari-gallery-1.jpg',
      '/images/brands/ferrari-gallery-2.jpg',
    ],
  },

  'maserati': {
    slug: 'maserati',
    name: 'Maserati',
    tagline: 'Modena craftsmanship with motorsport soul',
    tier: 'flagship',

    hero: {
      title: 'Maserati Specialist',
      subtitle: 'Italian grand touring expertise for Modena\'s finest machines',
      image: '/images/brands/maserati-hero.jpg',
    },

    story: {
      eyebrow: 'Our Maserati Experience',
      title: 'Passion for Italian Performance',
      paragraphs: [
        'Maserati blends hand-built craftsmanship with Ferrari-derived powertrains. From the twin-turbo Nettuno V6 in the MC20 to the air-sprung Levante Trofeo, each model demands technicians fluent in both Italian design and modern diagnostics.',
        'Our Modena-trained specialist has supported Maserati flagship stores in Los Angeles and Monaco, managing Skyhook suspension rebuilds, carbon-ceramic brake service, and leather restoration for more than 150 Maserati owners.',
        'We pair factory diagnostic platforms, ZF transmission calibration, and bespoke interior care to protect the tone, character, and soundtrack that define every Trident.',
      ],
      image: '/images/brands/maserati-workshop.jpg',
    },

    models: [
      {
        id: 'maserati-quattroporte',
        name: 'Quattroporte (M156)',
        generation: 'Sixth Gen (2013-Present)',
        engineCode: 'F160 / F154',
        displacement: '3.8L V8 Twin-Turbo / 3.0L V6 Twin-Turbo',
        power: '424-580 HP',
        transmission: 'ZF 8HP Automatic',
        features: ['Skyhook Adaptive Suspension', 'Q4 All-Wheel Drive', 'Bowers & Wilkins Audio'],
        commonIssues: ['Skyhook damper leaks', 'Valve cover seepage', 'Uconnect infotainment faults'],
        caseStudiesCount: 1,
      },
      {
        id: 'maserati-levante',
        name: 'Levante & Levante Trofeo',
        generation: 'M161 (2017-Present)',
        engineCode: 'F154 / VM 3.0L',
        displacement: '3.0L V6 Twin-Turbo / 3.8L V8 Twin-Turbo',
        power: '345-582 HP',
        transmission: 'ZF 8HP Automatic',
        features: ['Height-Adjustable Air Suspension', 'Q4 AWD', 'Skyhook Damping'],
        commonIssues: ['Air suspension compressor wear', 'Transfer case faults', 'Carbon ceramic rotor maintenance'],
        caseStudiesCount: 1,
      },
      {
        id: 'maserati-mc20',
        name: 'MC20',
        generation: 'M240 (2021-Present)',
        engineCode: 'Maserati Nettuno',
        displacement: '3.0L V6 Twin-Turbo',
        power: '621 HP / 538 lb-ft',
        transmission: '8-Speed Dual-Clutch',
        features: ['Pre-Chamber Combustion', 'Carbon Monocoque', 'Adaptive Damping'],
        commonIssues: ['Oil separator updates', 'Dual-clutch calibration', 'Sensor initialization after track use'],
        caseStudiesCount: 0,
      },
    ],

    services: [
      {
        title: 'Ferrari-Derived Powertrains',
        description: 'F154 V8 and Nettuno V6 timing, cooling, and dual-clutch calibration with factory diagnostic tooling.',
        icon: 'engine',
      },
      {
        title: 'Skyhook & Air Suspension',
        description: 'Skyhook damper rebuilds, height sensor calibration, and Levante air suspension compressor service.',
        icon: 'suspension',
      },
      {
        title: 'ZF 8HP & DCT Tuning',
        description: 'ZF 8HP software updates, clutch adaptations, and MC20 dual-clutch temperature management.',
        icon: 'performance',
      },
      {
        title: 'Italian Interior Restoration',
        description: 'Full-grain leather care, carbon trim repair, and personalization using OEM-specified materials.',
        icon: 'luxury',
      },
    ],

    stats: {
      vehiclesServiced: '150+',
      yearsExperience: '15+',
      specialistCertifications: 'Maserati Modena Training, Ferrari Powertrain, ZF Certified',
      averageRepairTime: '2-4 days',
    },

    featuredCaseStudies: [],

    gallery: [
      '/images/brands/maserati-gallery-1.jpg',
      '/images/brands/maserati-gallery-2.jpg',
      '/images/brands/maserati-gallery-3.jpg',
    ],
  },

  'bmw-7-series': {
    slug: 'bmw-7-series',
    name: 'BMW 7 Series',
    tagline: 'Executive flagship, perfected',
    tier: 'flagship',

    hero: {
      title: 'BMW 7 Series Specialist',
      subtitle: 'Executive flagship expertise for Bavaria\'s most advanced sedans',
      image: '/images/brands/bmw7-hero.jpg',
    },

    story: {
      eyebrow: 'Our BMW Philosophy',
      title: 'Precision for the Executive Lounge',
      paragraphs: [
        'The seventh-generation BMW 7 Series blends electric i7 drivetrains, handcrafted cabins, and a digital-first interface that requires seasoned diagnostics to support.',
        'Our BMW master technician spent a decade at BMW NA\'s training center launching the G12 and G70 programs. ISTA diagnostics, BDC programming, and driver assistance calibrations are performed in-house with factory tooling.',
        'From Integral Active Steering alignments to aroma therapy module replacements, we provide concierge service that keeps every 7 Series current on software, recalls, and bespoke comfort features.',
      ],
      image: '/images/brands/bmw7-workshop.jpg',
    },

    models: [
      {
        id: 'bmw-g70-i7',
        name: 'i7 xDrive60',
        generation: 'G70 (2023-Present)',
        engineCode: 'Dual eDrive Motors',
        displacement: 'High-Voltage Battery 105.7 kWh',
        power: '536 HP / 549 lb-ft',
        transmission: 'Single-Speed EV',
        features: ['xDrive All-Wheel Drive', 'Executive Lounge Seating', 'Highway Assist'],
        commonIssues: ['High-voltage battery balancing', 'OTA update failures', 'Front radar sensor alignment'],
        caseStudiesCount: 1,
      },
      {
        id: 'bmw-g70-760i',
        name: '760i xDrive',
        generation: 'G70 (2023-Present)',
        engineCode: 'S68B44T2',
        displacement: '4.4L V8 Twin-Turbo + 48V',
        power: '536 HP / 553 lb-ft',
        transmission: 'ZF 8HP',
        features: ['Integral Active Steering', 'Executive Drive Pro', 'Crystal Interaction Bar'],
        commonIssues: ['48V mild hybrid faults', 'Air suspension valve blocks', 'Laser light condensation'],
        caseStudiesCount: 1,
      },
      {
        id: 'bmw-g12-750i',
        name: '750i / M760Li',
        generation: 'G11/G12 LCI (2019-2022)',
        engineCode: 'N63 / N74',
        displacement: '4.4L V8 Twin-Turbo / 6.6L V12 Twin-Turbo',
        power: '523-600 HP',
        transmission: 'ZF 8HP',
        features: ['Gesture Control', 'Soft-Close Doors', 'Rear Executive Lounge'],
        commonIssues: ['Valve stem seals', 'Cooling system leaks', 'Bowers & Wilkins amplifier faults'],
        caseStudiesCount: 2,
      },
    ],

    services: [
      {
        title: 'Powertrains & EV Systems',
        description: 'High-voltage battery conditioning, 48V mild hybrid service, and S68/N63 timing system repairs.',
        icon: 'engine',
      },
      {
        title: 'Executive Chassis Systems',
        description: 'Integral Active Steering, air suspension height calibration, and Executive Drive Pro damping.',
        icon: 'suspension',
      },
      {
        title: 'BMW Technology Suite',
        description: 'iDrive 8/8.5 updates, driver assistance sensor calibration, and Sky Lounge ambient ceiling repair.',
        icon: 'tech',
      },
      {
        title: 'Interior Comfort & Wellness',
        description: 'Executive Lounge seat module programming, massage and ventilation repair, and fragrance system service.',
        icon: 'luxury',
      },
    ],

    stats: {
      vehiclesServiced: '260+',
      yearsExperience: '18+',
      specialistCertifications: 'BMW ISTA Master, High-Voltage Level 2, Integral Active Steering',
      averageRepairTime: '1-3 days',
    },

    featuredCaseStudies: [],

    gallery: [
      '/images/brands/bmw7-gallery-1.jpg',
      '/images/brands/bmw7-gallery-2.jpg',
      '/images/brands/bmw7-gallery-3.jpg',
    ],
  },

  'discovery': {
    slug: 'discovery',
    name: 'Land Rover Discovery',
    tagline: 'Adventure-ready luxury SUV service',
    tier: 'luxury-suv',

    hero: {
      title: 'Discovery Specialist',
      subtitle: 'Land Rover expertise for family explorers and overland builds',
      image: '/images/brands/discovery-hero.jpg',
    },

    story: {
      eyebrow: 'Our Discovery Experience',
      title: 'Ready for Adventure, Finished for the City',
      paragraphs: [
        'Discovery owners expect an SUV that can tackle Angeles Crest trails and deliver quiet comfort on the 405. That combination of off-road hardware and British luxury needs meticulous calibration.',
        'Our Land Rover team keeps Pathfinder and SDD diagnostic suites in-house, handling everything from water intrusion repairs to Terrain Response software updates and air suspension height setups.',
        'From expedition builds with snorkels and winches to coastal family haulers, we provide preventive maintenance that keeps Discovery reliability strong in Southern California conditions.',
      ],
      image: '/images/brands/discovery-workshop.jpg',
    },

    models: [
      {
        id: 'discovery-l462',
        name: 'Discovery (L462)',
        generation: 'Fifth Gen (2017-Present)',
        engineCode: 'Ingenium 2.0L / 3.0L',
        displacement: '2.0L I4 Turbo / 3.0L I6 MHEV',
        power: '296-355 HP',
        transmission: 'ZF 8HP Automatic',
        features: ['Terrain Response 2', 'Height-Adjustable Air Suspension', 'All-Wheel Steering (R-Dynamic)'],
        commonIssues: ['Coolant leaks', 'Timing chain stretch', 'Ride height sensor faults'],
        caseStudiesCount: 1,
      },
      {
        id: 'discovery-sport-l550',
        name: 'Discovery Sport (L550)',
        generation: 'Second Gen (2020-Present)',
        engineCode: 'Ingenium 2.0L',
        displacement: '2.0L I4 Turbo / MHEV',
        power: '246-286 HP',
        transmission: 'ZF 9HP Automatic',
        features: ['Terrain Response', 'Configurable Dynamics', 'ClearSight Rear View'],
        commonIssues: ['Haldex coupling service', 'Sunroof drain leaks', 'Infotainment lag'],
        caseStudiesCount: 0,
      },
    ],

    services: [
      {
        title: 'Air Suspension & Chassis',
        description: 'Height sensor calibration, compressor rebuilds, and cross-link valve block service for Discovery air systems.',
        icon: 'suspension',
      },
      {
        title: 'Ingenium Powertrains',
        description: 'Timing chain, coolant system, and diesel DEF service for Ingenium four- and six-cylinder engines.',
        icon: 'engine',
      },
      {
        title: 'Terrain Response Systems',
        description: 'Terrain Response 2 software, transfer case calibration, and AWD clutch pack maintenance.',
        icon: 'tech',
      },
      {
        title: 'Water Intrusion & Electrical',
        description: 'Sunroof drain remediation, wiring harness inspection, and infotainment updates to prevent moisture faults.',
        icon: 'luxury',
      },
    ],

    stats: {
      vehiclesServiced: '140+',
      yearsExperience: '14+',
      specialistCertifications: 'JLR Pathfinder, Terrain Response, Air Suspension',
      averageRepairTime: '2-3 days',
    },

    featuredCaseStudies: [],

    gallery: [
      '/images/brands/discovery-gallery-1.jpg',
      '/images/brands/discovery-gallery-2.jpg',
    ],
  },

  'porsche-911': {
    slug: 'porsche-911',
    name: 'Porsche 911',
    tagline: 'Iconic performance with motorsport DNA',
    tier: 'performance',

    hero: {
      title: 'Porsche 911 Specialist',
      subtitle: 'Motorsport-level service for every generation 911',
      image: '/images/brands/porsche-911-hero.jpg',
    },

    story: {
      eyebrow: 'Our 911 Expertise',
      title: 'Precision for Stuttgart’s Benchmark',
      paragraphs: [
        'From air-cooled classics to the latest 992 GT3, the Porsche 911 requires a shop that understands rear-engine balance, lightweight engineering, and factory motorsport technology. Our technicians have supported Porsche track programs and bring that same attention to every service visit.',
        'We maintain PIWIS III diagnostic capability, chassis corner-weighting equipment, and motorsport alignment tools to support street cars, RS models, and full track builds. IMS retrofits, GT cooling upgrades, and motorsport brake packages are handled in-house.',
        'Whether you are chasing lap records in a GT3 RS or preserving a Carrera 4S daily driver, we tune suspension, aero, and power delivery around how you actually drive.',
      ],
      image: '/images/brands/porsche-911-workshop.jpg',
    },

    models: [
      {
        id: 'porsche-992-carrera',
        name: '992 Carrera / Carrera S',
        generation: '992 (2020-Present)',
        engineCode: 'MA2.22 / MA2.30',
        displacement: '3.0L Flat-Six Twin-Turbo',
        power: '379-443 HP',
        transmission: 'PDK 8-Speed / 7-Speed Manual',
        features: ['PDCC Active Anti-Roll', 'Rear-Axle Steering', 'PASM Adaptive Dampers'],
        commonIssues: ['PDK software updates', 'Turbo inlet seals', 'Rear main seal sweat'],
        caseStudiesCount: 2,
      },
      {
        id: 'porsche-992-gt3',
        name: '992 GT3 / GT3 RS',
        generation: '992 (2022-Present)',
        engineCode: 'MA1.75',
        displacement: '4.0L Naturally Aspirated Flat-Six',
        power: '502-518 HP',
        transmission: 'PDK 7-Speed / 6-Speed Manual',
        features: ['Double-Wishbone Front Suspension', 'Active Aero', 'Track Cooling Package'],
        commonIssues: ['Front axle lift calibration', 'Brake duct cracking', 'Track heat management'],
        caseStudiesCount: 1,
      },
      {
        id: 'porsche-992-turbo',
        name: '992 Turbo / Turbo S',
        generation: '992 (2021-Present)',
        engineCode: 'MA2.21',
        displacement: '3.8L Flat-Six Twin-Turbo',
        power: '572-640 HP',
        transmission: 'PDK 8-Speed',
        features: ['PTM All-Wheel Drive', 'Active Aerodynamics', 'Water-Cooled Turbochargers'],
        commonIssues: ['Intercooler hose leaks', 'PDK adaptations', 'Carbon ceramic rotor wear'],
        caseStudiesCount: 1,
      },
    ],

    services: [
      {
        title: 'Mezger & MA2 Powertrains',
        description: 'Engine reseals, IMS retrofits, and turbocharger upgrades using motorsport-spec parts and procedures.',
        icon: 'engine',
      },
      {
        title: 'PDK & Manual Gearboxes',
        description: 'PDK software updates, clutch pack replacements, and GT short-throw manual gearbox service.',
        icon: 'performance',
      },
      {
        title: 'Track Geometry & Aero',
        description: 'Corner-weighting, custom alignment, and aero setup for canyon, street, or club racing use.',
        icon: 'suspension',
      },
      {
        title: 'Carbon & Ceramic Brakes',
        description: 'PCCB maintenance, titanium hardware upgrades, and high-temp fluid service tailored to your drive style.',
        icon: 'tech',
      },
    ],

    stats: {
      vehiclesServiced: '320+',
      yearsExperience: '22+',
      specialistCertifications: 'Porsche Gold Meister, PIWIS III, PCA Track Support',
      averageRepairTime: '1-5 days',
    },

    featuredCaseStudies: [],

    gallery: [
      '/images/brands/porsche-911-gallery-1.jpg',
      '/images/brands/porsche-911-gallery-2.jpg',
      '/images/brands/porsche-911-gallery-3.jpg',
    ],
  },

  'panamera': {
    slug: 'panamera',
    name: 'Porsche Panamera',
    tagline: 'Four-door Porsche, zero compromise',
    tier: 'flagship',

    hero: {
      title: 'Panamera Specialist',
      subtitle: 'Executive Porsche service for E-Hybrid and Turbo S models',
      image: '/images/brands/panamera-hero.jpg',
    },

    story: {
      eyebrow: 'Our Panamera Approach',
      title: 'Grand Touring Precision',
      paragraphs: [
        'Panamera owners expect a blend of 911 dynamics, Taycan tech, and S-Class comfort. Supporting that mix means managing complex hybrid drivetrains, adaptive chassis systems, and handcrafted interiors.',
        'We service first- and second-generation Panameras, including Sport Turismo and Executive wheelbase variants. Our team handles high-voltage battery conditioning, InnoDrive calibration, and rear-axle steering setup with PIWIS-guided workflows.',
        'Every visit includes interior care suited for four-place grand tourers—soft-close doors, massage seats, and Burmester systems are inspected alongside performance hardware.',
      ],
      image: '/images/brands/panamera-workshop.jpg',
    },

    models: [
      {
        id: 'panamera-971-turbos',
        name: 'Panamera Turbo S E-Hybrid',
        generation: '971.2 (2021-Present)',
        engineCode: 'EA825 + E-Machine',
        displacement: '4.0L V8 Twin-Turbo + Plug-In Hybrid',
        power: '690 HP / 641 lb-ft',
        transmission: 'PDK 8-Speed',
        features: ['InnoDrive', 'PDCC Sport', 'Rear-Axle Steering', 'Adaptive Air Suspension'],
        commonIssues: ['High-voltage coolant valve', 'PHEV charger faults', 'Air suspension leaks'],
        caseStudiesCount: 1,
      },
      {
        id: 'panamera-971-gts',
        name: 'Panamera GTS',
        generation: '971 (2018-Present)',
        engineCode: 'EA825',
        displacement: '4.0L V8 Twin-Turbo',
        power: '473 HP / 457 lb-ft',
        transmission: 'PDK 8-Speed',
        features: ['Sport Exhaust', 'PASM Sport Suspension', 'Sport Chrono Package'],
        commonIssues: ['Carbon build-up', 'Exhaust valve actuators', 'PDK service intervals'],
        caseStudiesCount: 1,
      },
      {
        id: 'panamera-970',
        name: 'Panamera 4 / S / Turbo',
        generation: '970 (2010-2016)',
        engineCode: 'MA1.48 / MA1.70',
        displacement: '3.0L V6 / 4.8L V8',
        power: '300-520 HP',
        transmission: 'PDK 7-Speed / 8-Speed Tiptronic',
        features: ['PDCC', 'Torque Vectoring', 'Soft-Close Doors'],
        commonIssues: ['Coolant pipe leaks', 'PDK mechatronics', 'Air suspension compressor'],
        caseStudiesCount: 1,
      },
    ],

    services: [
      {
        title: 'Hybrid & High-Voltage Systems',
        description: 'Battery conditioning, charger replacement, and HV coolant system service for E-Hybrid models.',
        icon: 'tech',
      },
      {
        title: 'V8 & V6 Powertrains',
        description: 'EA825 timing, MA1 V8 reseals, and Sport Chrono launch control service with PIWIS diagnostics.',
        icon: 'engine',
      },
      {
        title: 'PDCC & Air Suspension',
        description: 'Dynamic chassis calibration, level sensor programming, and sport adaptive damper tuning.',
        icon: 'suspension',
      },
      {
        title: 'Executive Interior Care',
        description: 'Massage seat repair, soft-close door adjustment, and Burmester audio diagnostics.',
        icon: 'luxury',
      },
    ],

    stats: {
      vehiclesServiced: '210+',
      yearsExperience: '17+',
      specialistCertifications: 'Porsche Hybrid, PIWIS III, ZF 8HP',
      averageRepairTime: '2-4 days',
    },

    featuredCaseStudies: [],

    gallery: [
      '/images/brands/panamera-gallery-1.jpg',
      '/images/brands/panamera-gallery-2.jpg',
      '/images/brands/panamera-gallery-3.jpg',
    ],
  },

  'audi-r8': {
    slug: 'audi-r8',
    name: 'Audi R8',
    tagline: 'Mid-engine precision with daily usability',
    tier: 'performance',

    hero: {
      title: 'Audi R8 Specialist',
      subtitle: 'Lamborghini V10 expertise with Audi comfort',
      image: '/images/brands/audi-r8-hero.jpg',
    },

    story: {
      eyebrow: 'Our R8 Focus',
      title: 'V10 Symphony, Quattro Control',
      paragraphs: [
        'The Audi R8 shares its heart with the Huracán, but integrates Audi’s refined electronics. Servicing it means mastering both worlds—magnetic ride, dual-clutch gearboxes, and aluminum space frames.',
        'Our Audi Sport-certified technician runs VCDS ODIS diagnostics, installs dry-sump upgrades, and supports R8 owners who daily drive or track their cars. From carbon-ceramic brakes to carbon fiber interior refurbishment, each detail is handled in-house.',
        'We tailor service plans whether the car is an RWS rear-wheel special or a final GT. Preventive maintenance keeps V10s singing and electronics trouble-free.',
      ],
      image: '/images/brands/audi-r8-workshop.jpg',
    },

    models: [
      {
        id: 'audi-r8-v10',
        name: 'R8 V10 Quattro',
        generation: 'Type 4S (2017-Present)',
        engineCode: 'CEUC / DHUB',
        displacement: '5.2L V10 Naturally Aspirated',
        power: '562-602 HP',
        transmission: '7-Speed S tronic',
        features: ['Quattro AWD', 'Magnetic Ride', 'Carbon Ceramic Brakes'],
        commonIssues: ['Secondary air pump faults', 'Mag ride leaks', 'Carbon ceramic rotor wear'],
        caseStudiesCount: 1,
      },
      {
        id: 'audi-r8-rwd',
        name: 'R8 RWD / RWS',
        generation: 'Type 4S (2018-Present)',
        engineCode: 'DHUB',
        displacement: '5.2L V10 Naturally Aspirated',
        power: '532 HP',
        transmission: '7-Speed S tronic',
        features: ['Rear-Wheel Drive', 'Steel Brakes', 'Dynamic Steering'],
        commonIssues: ['ABS sensor faults', 'Transmission cooler leaks', 'Intake manifold carbon build-up'],
        caseStudiesCount: 0,
      },
      {
        id: 'audi-r8-42',
        name: 'R8 V8 / V10',
        generation: 'Type 42 (2008-2015)',
        engineCode: 'BYH / CEUC',
        displacement: '4.2L V8 FSI / 5.2L V10 FSI',
        power: '420-552 HP',
        transmission: 'R-Tronic / S tronic / 6-Speed Manual',
        features: ['Aluminum Space Frame', 'Mag Ride', 'Side-Blade Cooling'],
        commonIssues: ['R-tronic pump failure', 'Dry-sump hose leaks', 'Carbon build-up'],
        caseStudiesCount: 1,
      },
    ],

    services: [
      {
        title: 'Lamborghini-Derived Powertrain',
        description: 'V10 timing chain service, dry-sump oil system repairs, and intake carbon cleaning.',
        icon: 'engine',
      },
      {
        title: 'S tronic & R-tronic Gearboxes',
        description: 'Mechatronic unit repair, clutch pack replacement, and software adaptation resets.',
        icon: 'performance',
      },
      {
        title: 'Audi Magnetic Ride',
        description: 'Damper rebuilds, mag-fluid replacement, and suspension calibration for street or track.',
        icon: 'suspension',
      },
      {
        title: 'Carbon & Interior Detailing',
        description: 'Carbon ceramic brake service, carbon fiber repair, and Nappa leather restoration.',
        icon: 'luxury',
      },
    ],

    stats: {
      vehiclesServiced: '95+',
      yearsExperience: '11+',
      specialistCertifications: 'Audi Sport, Lamborghini V10, S tronic Certified',
      averageRepairTime: '2-5 days',
    },

    featuredCaseStudies: [],

    gallery: [
      '/images/brands/audi-r8-gallery-1.jpg',
      '/images/brands/audi-r8-gallery-2.jpg',
      '/images/brands/audi-r8-gallery-3.jpg',
    ],
  },

  'g-class': {
    slug: 'g-class',
    name: 'Mercedes-Benz G-Class',
    tagline: 'Iconic luxury SUV with unstoppable capability',
    tier: 'luxury-suv',

    hero: {
      title: 'G-Class Specialist',
      subtitle: 'G-Wagen expertise from W463 classics to the latest AMG G63',
      image: '/images/brands/g-class-hero.jpg',
    },

    story: {
      eyebrow: 'Our G-Class Background',
      title: 'Hand-Built Heritage, Modern Tech',
      paragraphs: [
        'The G-Class combines hand-built body construction with AMG twin-turbo V8 powertrains and advanced driver tech. Our technicians have decades of experience at Mercedes-Benz USA and know the model inside and out.',
        'We manage Portal axle conversions, Brabus upgrades, and daily-driver maintenance alike. STAR and XENTRY diagnostics, infrared alignment equipment, and factory jigs allow us to service both ladder frame and interior systems properly.',
        'From classic G500s to the latest G63, we handle rust prevention, AIRMATIC conversions, and AMG performance tuning while preserving the G’s unmistakable personality.',
      ],
      image: '/images/brands/g-class-workshop.jpg',
    },

    models: [
      {
        id: 'g63-w463-2019',
        name: 'AMG G63',
        generation: 'W463a (2019-Present)',
        engineCode: 'M177',
        displacement: '4.0L V8 Twin-Turbo',
        power: '577 HP / 627 lb-ft',
        transmission: 'AMG SPEEDSHIFT TCT 9G',
        features: ['AMG Ride Control', 'Dynamic Select', '4MATIC+ Full-Time AWD'],
        commonIssues: ['Active exhaust valves', 'Cooling system heat soak', 'AMG brake wear'],
        caseStudiesCount: 2,
      },
      {
        id: 'g550-w463-2013',
        name: 'G550 / G500',
        generation: 'W463 (2013-2018)',
        engineCode: 'M278 / M273',
        displacement: '4.0L V8 Twin-Turbo / 5.5L V8 NA',
        power: '382-416 HP',
        transmission: '7G-TRONIC PLUS',
        features: ['Three Locking Differentials', 'Ladder Frame', 'AIRMATIC (Late models)'],
        commonIssues: ['Differential breather seals', 'Transfer case leaks', 'AIRMATIC conversion issues'],
        caseStudiesCount: 1,
      },
      {
        id: 'g55-w463-classic',
        name: 'G55 AMG & G500 Classic',
        generation: 'W463 (2002-2012)',
        engineCode: 'M113K / M113',
        displacement: '5.4L V8 Supercharged / 5.0L V8',
        power: '292-493 HP',
        transmission: '5G-TRONIC',
        features: ['Solid Axles', 'Low-Range Transfer Case', 'Handcrafted Interior'],
        commonIssues: ['Rust at seams', 'Supercharger belt wear', 'Vacuum locking actuator leaks'],
        caseStudiesCount: 1,
      },
    ],

    services: [
      {
        title: 'AMG & Classic Powertrains',
        description: 'M177, M278, and M113 engine service, supercharger maintenance, and exhaust tuning.',
        icon: 'engine',
      },
      {
        title: '4×4 Driveline Systems',
        description: 'Differential rebuilds, transfer case service, and Portal axle alignment for special editions.',
        icon: 'suspension',
      },
      {
        title: 'Chassis & Corrosion Care',
        description: 'Frame protection, seam rust remediation, and underbody coating tailored for coastal climates.',
        icon: 'tech',
      },
      {
        title: 'Luxury Interior & Electronics',
        description: 'Digital cockpit updates, Burmester audio repair, and soft-close door calibration.',
        icon: 'luxury',
      },
    ],

    stats: {
      vehiclesServiced: '240+',
      yearsExperience: '20+',
      specialistCertifications: 'Mercedes-Benz Master, AMG, G Professional',
      averageRepairTime: '2-6 days',
    },

    featuredCaseStudies: [],

    gallery: [
      '/images/brands/g-class-gallery-1.jpg',
      '/images/brands/g-class-gallery-2.jpg',
      '/images/brands/g-class-gallery-3.jpg',
    ],
  },

  'mclaren': {
    slug: 'mclaren',
    name: 'McLaren',
    tagline: 'Lightweight engineering, track-bred precision',
    tier: 'supercar',

    hero: {
      title: 'McLaren Specialist',
      subtitle: 'Woking-developed performance with factory diagnostic support',
      image: '/images/brands/mclaren-hero.jpg',
    },

    story: {
      eyebrow: 'Our McLaren Focus',
      title: 'Carbon MonoCell Expertise',
      paragraphs: [
        'McLaren road cars bring Formula 1 technology to the street—carbon MonoCell tubs, twin-turbo V8s, and active aero. Servicing them demands familiarity with Proactive Chassis Control and the brand’s proprietary electronics.',
        'Our lead technician has supported McLaren Beverly Hills and maintains MDS (McLaren Diagnostic System) capability, nitrogen-charged suspension tooling, and carbon fiber repair resources. From 570S daily drivers to 720S track weapons, each receives OEM-spec calibration.',
        'We manage hybrid Artura systems, track setup, and cosmetic restoration, ensuring every McLaren leaves with the razor-sharp response Woking intended.',
      ],
      image: '/images/brands/mclaren-workshop.jpg',
    },

    models: [
      {
        id: 'mclaren-720s',
        name: '720S / 765LT',
        generation: 'Super Series (2017-Present)',
        engineCode: 'M840T',
        displacement: '4.0L V8 Twin-Turbo',
        power: '710-755 HP',
        transmission: '7-Speed Dual-Clutch',
        features: ['Proactive Chassis Control II', 'Active Aero', 'Monocage II Carbon Tub'],
        commonIssues: ['Hydraulic suspension leaks', 'Door strut gas pressure', 'Exhaust heat management'],
        caseStudiesCount: 1,
      },
      {
        id: 'mclaren-artura',
        name: 'Artura',
        generation: 'Hybrid Supercar (2022-Present)',
        engineCode: 'M630',
        displacement: '3.0L V6 Twin-Turbo + E-Motor',
        power: '671 HP / 593 lb-ft',
        transmission: '8-Speed Dual-Clutch',
        features: ['E-differential', 'Axial Flux Motor', 'Plug-in Hybrid'],
        commonIssues: ['High-voltage cooling lines', 'Inverter software updates', 'E-motor clutch bedding'],
        caseStudiesCount: 0,
      },
      {
        id: 'mclaren-600lt',
        name: '600LT / 570S',
        generation: 'Sport Series (2015-2020)',
        engineCode: 'M838T',
        displacement: '3.8L V8 Twin-Turbo',
        power: '562-592 HP',
        transmission: '7-Speed Dual-Clutch',
        features: ['MonoCell II', 'Top-Exit Exhaust (600LT)', 'Track Telemetry'],
        commonIssues: ['Steering rack leaks', 'Air conditioning evaporator', 'Interior sticky buttons'],
        caseStudiesCount: 1,
      },
    ],

    services: [
      {
        title: 'Twin-Turbo V8 & Hybrid Systems',
        description: 'M838T/M840T engine service, Artura hybrid diagnostics, and thermal management upgrades.',
        icon: 'engine',
      },
      {
        title: 'Proactive Chassis Control',
        description: 'Hydraulic suspension nitrogen charging, ride height calibration, and track alignment.',
        icon: 'suspension',
      },
      {
        title: 'SSG Dual-Clutch Gearboxes',
        description: 'Clutch adaptation, gearbox software updates, and launch control system checks.',
        icon: 'performance',
      },
      {
        title: 'Carbon Fiber & Aero',
        description: 'Monocell inspection, carbon repair, and active aero calibration post-track events.',
        icon: 'tech',
      },
    ],

    stats: {
      vehiclesServiced: '70+',
      yearsExperience: '9+',
      specialistCertifications: 'McLaren MDS, Carbon Repair, Hybrid High Voltage',
      averageRepairTime: '3-7 days',
    },

    featuredCaseStudies: [],

    gallery: [
      '/images/brands/mclaren-gallery-1.jpg',
      '/images/brands/mclaren-gallery-2.jpg',
      '/images/brands/mclaren-gallery-3.jpg',
    ],
  },

  'escalade': {
    slug: 'escalade',
    name: 'Cadillac Escalade',
    tagline: 'American flagship SUV refinement',
    tier: 'luxury-suv',

    hero: {
      title: 'Escalade Specialist',
      subtitle: 'Full-size luxury SUV service with GM factory tooling',
      image: '/images/brands/escalade-hero.jpg',
    },

    story: {
      eyebrow: 'Our Escalade Expertise',
      title: 'Presidential Comfort, West Coast Ready',
      paragraphs: [
        'The Escalade delivers a blend of technology, luxury, and towing capability. From Super Cruise driver assist to magnetic ride control, it needs a shop that understands GM’s latest systems.',
        'Our technicians maintain GDS2 diagnostic access, perform OTA update verification, and manage vehicle conversions for VIP and executive transport fleets throughout Los Angeles.',
        'Whether you run an Escalade V or an ESV with rear-seat entertainment, we calibrate adaptive suspension, address electrical loads from upfits, and keep the cabin pristine.',
      ],
      image: '/images/brands/escalade-workshop.jpg',
    },

    models: [
      {
        id: 'escalade-v',
        name: 'Escalade V & V-Series',
        generation: 'T1XX (2023-Present)',
        engineCode: 'L87 + LT4',
        displacement: '6.2L Supercharged V8',
        power: '682 HP / 653 lb-ft',
        transmission: '10L80 10-Speed Automatic',
        features: ['Magnetic Ride Control 4.0', 'Air Ride Adaptive Suspension', 'Super Cruise'],
        commonIssues: ['Supercharger belt wear', 'Suspension calibration', 'High-temp braking'],
        caseStudiesCount: 1,
      },
      {
        id: 'escalade-esv',
        name: 'Escalade & Escalade ESV',
        generation: 'T1XX (2021-Present)',
        engineCode: 'L87 / LM2 Duramax',
        displacement: '6.2L V8 / 3.0L Turbo Diesel',
        power: '420 HP / 460 lb-ft (diesel)',
        transmission: '10L80 10-Speed Automatic',
        features: ['Air Ride', 'OLED 38" Display', 'AKG Studio Reference'],
        commonIssues: ['Air suspension compressor', 'OLED screen calibration', 'Diesel DEF heater'],
        caseStudiesCount: 1,
      },
      {
        id: 'escalade-k2',
        name: 'Escalade (2015-2020)',
        generation: 'K2XX',
        engineCode: 'L86',
        displacement: '6.2L V8',
        power: '420 HP',
        transmission: '8L90 / 10L80',
        features: ['MagRide 3.0', 'CUE Infotainment', 'Rear Entertainment'],
        commonIssues: ['MagRide shocks', '8L90 shudder', 'Liftgate actuators'],
        caseStudiesCount: 1,
      },
    ],

    services: [
      {
        title: 'GM Powertrain & Super Cruise',
        description: 'LT-series engine service, 10L80 transmission calibration, and Super Cruise sensor alignment.',
        icon: 'engine',
      },
      {
        title: 'MagRide & Air Ride Suspension',
        description: 'Magnetic Ride shock replacement, adaptive air suspension service, and ride height calibration.',
        icon: 'suspension',
      },
      {
        title: 'Executive Electronics',
        description: 'OLED display diagnostics, AKG audio repair, and fleet upfit electrical integration.',
        icon: 'tech',
      },
      {
        title: 'VIP Interior Care',
        description: 'Semi-aniline leather restoration, rear seat entertainment service, and custom upfit support.',
        icon: 'luxury',
      },
    ],

    stats: {
      vehiclesServiced: '190+',
      yearsExperience: '12+',
      specialistCertifications: 'GM Master Technician, Super Cruise, MagRide',
      averageRepairTime: '1-3 days',
    },

    featuredCaseStudies: [],

    gallery: [
      '/images/brands/escalade-gallery-1.jpg',
      '/images/brands/escalade-gallery-2.jpg',
      '/images/brands/escalade-gallery-3.jpg',
    ],
  },

  'defender': {
    slug: 'defender',
    name: 'Land Rover Defender',
    tagline: 'Modern expedition SUV with heritage capability',
    tier: 'luxury-suv',

    hero: {
      title: 'Defender Specialist',
      subtitle: 'Adventure builds and concierge service for 90, 110, and 130 models',
      image: '/images/brands/defender-hero.jpg',
    },

    story: {
      eyebrow: 'Our Defender Program',
      title: 'Trail Proven, City Ready',
      paragraphs: [
        'The new-generation Defender brings Terrain Response tech, aluminum unibody construction, and expedition-ready accessories. We treat them as both adventure rigs and luxury daily drivers.',
        'Our Land Rover team calibrates 50+ control modules using Pathfinder, builds custom overland setups, and prevents the moisture and corrosion issues that affect California beach climates.',
        'From snorkel installations to air suspension conversions and roof rack wiring, we integrate accessories without triggering electrical faults or voiding warranty coverage.',
      ],
      image: '/images/brands/defender-workshop.jpg',
    },

    models: [
      {
        id: 'defender-110',
        name: 'Defender 110 / 130',
        generation: 'L663 (2020-Present)',
        engineCode: 'P400 / P525',
        displacement: '3.0L I6 MHEV / 5.0L V8 Supercharged',
        power: '395-518 HP',
        transmission: 'ZF 8HP Automatic',
        features: ['Terrain Response 2', 'Air Suspension', 'Advanced Tow Assist'],
        commonIssues: ['Height sensor faults', 'Water ingress at tailgate', 'Software updates post-accessory install'],
        caseStudiesCount: 1,
      },
      {
        id: 'defender-90',
        name: 'Defender 90',
        generation: 'L663 (2021-Present)',
        engineCode: 'P300 / P400',
        displacement: '2.0L I4 Turbo / 3.0L I6 MHEV',
        power: '296-395 HP',
        transmission: 'ZF 8HP Automatic',
        features: ['Configurable Terrain Response', 'Electronic Active Differential', 'ClearSight Camera'],
        commonIssues: ['Infotainment lag', 'Roof panel creaks', 'Transfer case calibration'],
        caseStudiesCount: 1,
      },
      {
        id: 'defender-classic',
        name: 'Heritage Defender Builds',
        generation: 'Pre-2016 Restorations',
        engineCode: 'Various Diesel / V8',
        displacement: '2.2L Diesel / 3.9L V8',
        power: '120-190 HP',
        transmission: '6-Speed Manual / 4-Speed Auto',
        features: ['Solid Axles', 'Modular Body', 'Locking Differentials'],
        commonIssues: ['Galvanic corrosion', 'Electrical refurbishment', 'Interior retrim needs'],
        caseStudiesCount: 0,
      },
    ],

    services: [
      {
        title: 'Terrain Response & Air Suspension',
        description: 'Height calibration, cross-link valve service, and software for accessory loads.',
        icon: 'suspension',
      },
      {
        title: 'Ingenium & V8 Powertrains',
        description: 'Timing chain service, cooling system upgrades, and supercharger maintenance for V8 models.',
        icon: 'engine',
      },
      {
        title: 'Overland Upfit & Protection',
        description: 'Roof rack wiring, winch installs, underbody protection, and snorkel integration without fault codes.',
        icon: 'tech',
      },
      {
        title: 'Heritage Restoration',
        description: 'Galvanic rust repair, interior retrim, and drivetrain upgrades for classic Defenders.',
        icon: 'luxury',
      },
    ],

    stats: {
      vehiclesServiced: '160+',
      yearsExperience: '13+',
      specialistCertifications: 'JLR Pathfinder, Overland Upfit, Air Suspension',
      averageRepairTime: '2-5 days',
    },

    featuredCaseStudies: [],

    gallery: [
      '/images/brands/defender-gallery-1.jpg',
      '/images/brands/defender-gallery-2.jpg',
      '/images/brands/defender-gallery-3.jpg',
    ],
  },

  'navigator': {
    slug: 'navigator',
    name: 'Lincoln Navigator',
    tagline: 'American luxury redesigned for first-class travel',
    tier: 'luxury-suv',

    hero: {
      title: 'Navigator Specialist',
      subtitle: 'Lincoln Black Label concierge service and chassis expertise',
      image: '/images/brands/navigator-hero.jpg',
    },

    story: {
      eyebrow: 'Our Navigator Expertise',
      title: 'Full-Size Luxury Confidence',
      paragraphs: [
        'Lincoln Navigator owners rely on quiet luxury, towing capability, and tech-forward amenities. We combine Ford factory training with bespoke customer care to keep every Black Label spec in perfect condition.',
        'Our technicians handle CCD adaptive suspension, Revel Ultima audio tuning, and Sync 4 updates with IDS/FDRS diagnostic systems. We also support chauffeur-driven fleets with preventive maintenance and detailing.',
        'From 30-way Perfect Position seats to twin-turbo V6 torque, every system receives factory-calibrated attention so your Navigator feels brand new at every visit.',
      ],
      image: '/images/brands/navigator-workshop.jpg',
    },

    models: [
      {
        id: 'navigator-l',
        name: 'Navigator & Navigator L',
        generation: 'U554 (2018-Present)',
        engineCode: '3.5L GTDI V6',
        displacement: '3.5L Twin-Turbo',
        power: '440 HP / 510 lb-ft',
        transmission: '10R80 10-Speed Automatic',
        features: ['CCD Adaptive Suspension', '4x4 with Terrain Mode', 'Revel Ultima 3D Audio'],
        commonIssues: ['CCD damper leaks', 'Power running boards', 'SYNC 4 module updates'],
        caseStudiesCount: 1,
      },
      {
        id: 'navigator-black-label',
        name: 'Black Label Editions',
        generation: 'U554 (2019-Present)',
        engineCode: '3.5L GTDI V6',
        displacement: '3.5L Twin-Turbo',
        power: '440 HP / 510 lb-ft',
        transmission: '10R80 10-Speed Automatic',
        features: ['30-Way Perfect Position Seats', 'Lincoln Co-Pilot360', 'Panoramic Vista Roof'],
        commonIssues: ['Seat module calibration', 'Soft-close door alignment', 'Power liftgate struts'],
        caseStudiesCount: 1,
      },
      {
        id: 'navigator-pre2018',
        name: 'Navigator (2015-2017)',
        generation: 'U553',
        engineCode: '3.5L EcoBoost',
        displacement: '3.5L Twin-Turbo',
        power: '380 HP / 460 lb-ft',
        transmission: '6R80 6-Speed Automatic',
        features: ['Adaptive Suspension', 'PowerFold Seats', 'SYNC 3'],
        commonIssues: ['Air suspension conversion', 'Timing chain stretch', 'Electronic steering column'],
        caseStudiesCount: 0,
      },
    ],

    services: [
      {
        title: 'EcoBoost Powertrain Service',
        description: 'Timing chain replacement, turbo cooling upgrades, and 10R80 transmission fluid exchange.',
        icon: 'engine',
      },
      {
        title: 'CCD Adaptive Suspension',
        description: 'Damper replacement, ride height calibration, and Terrain Mode system diagnostics.',
        icon: 'suspension',
      },
      {
        title: 'Interior Concierge Care',
        description: 'Perfect Position seat repair, massage system calibration, and Black Label leather restoration.',
        icon: 'luxury',
      },
      {
        title: 'Driver Assistance & Infotainment',
        description: 'Co-Pilot360 sensor alignment, Sync 4 software updates, and Revel audio tuning.',
        icon: 'tech',
      },
    ],

    stats: {
      vehiclesServiced: '115+',
      yearsExperience: '10+',
      specialistCertifications: 'Lincoln Black Label, Ford Master Tech, CCD Suspension',
      averageRepairTime: '1-3 days',
    },

    featuredCaseStudies: [],

    gallery: [
      '/images/brands/navigator-gallery-1.jpg',
      '/images/brands/navigator-gallery-2.jpg',
      '/images/brands/navigator-gallery-3.jpg',
    ],
  },

  'range-rover': {
    slug: 'range-rover',
    name: 'Range Rover',
    tagline: 'British luxury SUV excellence',
    tier: 'luxury-suv',

    hero: {
      title: 'Range Rover Specialist',
      subtitle: 'Land Rover expertise for the world\'s most capable luxury SUV',
      image: '/images/brands/range-rover-hero.jpg',
    },

    story: {
      eyebrow: 'Our Range Rover Experience',
      title: 'British Luxury, California Service',
      paragraphs: [
        'Range Rover represents the rare combination of off-road capability and Rolls-Royce-level luxury. From Terrain Response 2 to air suspension that delivers both 11.7" of ground clearance and highway refinement, these SUVs are complex machines.',
        'Our facility specializes in Range Rover\'s notorious weak points—air suspension compressors, transfer case failures, and InControl Touch Pro electrical gremlins. We maintain JLR SDD diagnostic systems and direct relationships with UK parts suppliers.',
        'Every Range Rover receives thorough undercarriage inspection (critical for LA\'s beach salt exposure) and preventive maintenance on components prone to premature wear.',
      ],
      image: '/images/brands/range-rover-workshop.jpg',
    },

    models: [
      {
        id: 'range-rover-lwb',
        name: 'Range Rover (L460)',
        generation: 'Fifth Gen (2022-Present)',
        engineCode: 'P400 / P530',
        displacement: '3.0L I6 MHEV / 4.4L V8 Twin-Turbo',
        power: '395-523 HP',
        transmission: '8-Speed Automatic',
        features: ['48V Mild Hybrid', 'Dynamic Air Suspension', 'Terrain Response 2', 'ClearSight'],
        commonIssues: ['Air suspension leaks', 'InControl software bugs', '48V system faults'],
        caseStudiesCount: 2,
      },
      {
        id: 'range-rover-sport',
        name: 'Range Rover Sport (L461)',
        generation: 'Third Gen (2023-Present)',
        engineCode: 'P400 / P530',
        displacement: '3.0L I6 MHEV / 4.4L V8 BMW',
        power: '395-523 HP',
        transmission: '8-Speed ZF',
        features: ['Dynamic Handling Pack', 'Electronic Active Differential', 'All-Wheel Steering'],
        commonIssues: ['BMW V8 cooling', 'Transfer case', 'Electronic diff faults'],
        caseStudiesCount: 1,
      },
    ],

    services: [
      {
        title: 'Air Suspension Systems',
        description: 'Dynamic air suspension compressor replacement, height sensor calibration, and airbag leak repair.',
        icon: 'suspension',
      },
      {
        title: 'JLR Powertrain',
        description: 'Ingenium I6 mild hybrid service, BMW V8 maintenance (L461 Sport), and ZF 8-speed transmission.',
        icon: 'engine',
      },
      {
        title: 'Terrain Response Diagnostics',
        description: 'Terrain Response 2 calibration, transfer case service, and electronic differential diagnostics.',
        icon: 'tech',
      },
      {
        title: 'InControl & Electronics',
        description: 'Pivi Pro software updates, ClearSight camera systems, and electrical troubleshooting.',
        icon: 'luxury',
      },
    ],

    stats: {
      vehiclesServiced: '180+',
      yearsExperience: '16+',
      specialistCertifications: 'JLR SDD, Terrain Response, Air Suspension',
      averageRepairTime: '2-4 days',
    },

    featuredCaseStudies: ['range-rover-air-suspension'],

    gallery: [
      '/images/brands/range-rover-gallery-1.jpg',
      '/images/brands/range-rover-gallery-2.jpg',
    ],
  },
};

// Helper function to get brand by slug
export function getBrandBySlug(slug) {
  return brandDetails[slug] || null;
}

// Helper function to get all brand slugs
export function getAllBrandSlugs() {
  return Object.keys(brandDetails);
}

// Helper function to count total case studies
export function getTotalCaseStudies(brandSlug) {
  const brand = brandDetails[brandSlug];
  if (!brand) return 0;

  return brand.models.reduce((total, model) => total + (model.caseStudiesCount || 0), 0);
}
