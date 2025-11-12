/*
 * Additional Case Studies for Demo
 * Quick case studies to populate brand detail pages
 *
 * Import these into case-studies.js main array
 */

export const additionalCaseStudies = [
  // ==================== PORSCHE 911 ====================
  {
    id: 'porsche-911-gt3-rs-engine-rebuild',
    slug: 'porsche-911-gt3-rs-engine-rebuild',
    brandSlug: 'porsche-911',
    modelId: 'porsche-911-gt3-rs',
    featured: true,
    featuredRank: 6,
    title: '2022 Porsche 911 GT3 RS: Track-Induced Engine Rebuild',
    subtitle: 'Complete 4.0L flat-six rebuild after track day bearing failure',
    excerpt: 'High RPM track use led to connecting rod bearing failure requiring complete engine rebuild with upgraded components.',
    coverImage: '/images/case-studies/gt3-rs-hero.jpg',
    date: '2024-09-25',
    readTime: '12 min read',
    category: 'powertrain',
    difficulty: 'expert',
    laborHours: 45,
    vehicle: {
      year: 2022,
      make: 'Porsche',
      model: '911 GT3 RS',
      vin: 'WP0***5678 (redacted)',
      mileage: 8200,
      color: 'Python Green / Black Alcantara',
    },
    problem: {
      eyebrow: 'The Challenge',
      title: 'Catastrophic Rod Bearing Failure During Track Day',
      description: [
        'Owner reported sudden loud knocking noise from engine during track day at Laguna Seca. Engine immediately lost power and was shut down. Towed to our facility with suspected internal engine damage.',
        'Initial diagnosis revealed metal contamination in oil, low compression on cylinders 4 and 5, and severe knocking noise on startup attempt. Borescope inspection confirmed catastrophic connecting rod bearing failure.',
      ],
      symptoms: [
        'Sudden loud knocking noise at high RPM',
        'Immediate power loss',
        'Metal particles in oil',
        'Low compression on bank 2',
        'Rod knock audible on idle',
      ],
      faultCodes: [
        'P0301-P0306: Multiple Cylinder Misfire',
        'P0521: Engine Oil Pressure Sensor - Range/Performance',
      ],
    },
    diagnosis: {
      eyebrow: 'Investigation',
      title: 'Root Cause Analysis of Bearing Failure',
      steps: [
        {
          title: '1. Oil Analysis',
          description: 'Sent oil sample to Blackstone Labs. Results showed catastrophic bearing wear with aluminum, copper, and steel particles at 500x normal levels. Confirmed bearing failure.',
        },
        {
          title: '2. Engine Disassembly',
          description: 'Removed engine and disassembled. Found connecting rod bearings on cylinders 4 and 5 completely destroyed. Crankshaft journals scored beyond machining limits. Cylinder walls showed scoring from debris.',
        },
        {
          title: '3. Root Cause Investigation',
          description: 'Found oil cooler thermostat stuck closed, causing oil temps to exceed 310°F during track session (normal: 230-250°F). Extended high-RPM use at elevated oil temps degraded bearing oil film, leading to metal-to-metal contact.',
        },
      ],
      conclusion: 'Oil cooler thermostat failure + sustained track use at 8,000+ RPM caused oil breakdown and bearing failure. Required complete engine rebuild with updated components including larger oil cooler and uprated bearings.',
    },
    solution: {
      eyebrow: 'The Solution',
      title: 'Complete GT3 Engine Rebuild',
      approach: 'Full engine rebuild using Porsche Motorsport components, upgraded rod bearings, larger oil cooler, and reinforced connecting rods.',
      procedures: [
        {
          title: 'Phase 1: Complete Disassembly',
          duration: '12 hours',
          description: 'Full engine teardown, cleaning, and inspection. Crankshaft sent to specialist for grinding 0.25mm undersize. Cylinder walls honed and measured.',
          partsUsed: ['Engine Gasket Set', 'Cleaning Chemicals'],
        },
        {
          title: 'Phase 2: Component Replacement',
          duration: '20 hours',
          description: 'Installed Porsche Motorsport GT3 Cup spec bearings, reground crankshaft, new pistons and rings, reinforced connecting rods, and updated oil cooler with revised thermostat.',
          partsUsed: [
            'Crankshaft (reground, undersize bearings)',
            'Piston Set (6x)',
            'Rod Bearing Set (Motorsport spec)',
            'Main Bearing Set',
            'Connecting Rod Set (reinforced)',
            'Oil Cooler (updated design)',
            'Oil Pump',
          ],
        },
        {
          title: 'Phase 3: Assembly & Break-In',
          duration: '13 hours',
          description: 'Precision assembly to Porsche torque specs, engine installation, and 500-mile break-in procedure with multiple oil changes. Dyno testing confirmed 502 HP (factory spec: 518 HP, acceptable after rebuild).',
          toolsUsed: ['Porsche PIWIS III', 'Dyno', 'Torque Angle Gauges'],
        },
      ],
      totalLaborHours: 45,
      turnaroundTime: '6 weeks (crankshaft grinding)',
    },
    results: {
      eyebrow: 'The Outcome',
      title: 'GT3 Engine Fully Rebuilt',
      achievements: [
        'Engine producing 502 HP on dyno (within 3% of factory)',
        'Oil pressure stable at 6.5 bar at 7,000 RPM',
        'Completed 1,500+ miles including 2 track days with no issues',
        'Upgraded cooling system prevents repeat failure',
      ],
      clientTestimonial: {
        quote: 'My GT3 RS grenaded on track and I was devastated. These guys rebuilt it with upgraded Motorsport components. The engine feels stronger than stock and I\'ve done two more track days with perfect oil temps. Incredible work.',
        author: 'James P.',
        location: 'Pebble Beach, CA',
        vehicle: '2022 Porsche 911 GT3 RS',
      },
    },
    mechanicSummary: {
      symptoms: [
        'Sudden loud knocking noise at high RPM',
        'Immediate power loss',
        'Metal particles in oil',
        'Rod knock audible on idle',
      ],
      recommendation: '立即检查机油温度系统和连杆轴承状态',
      consequence: '延误可能导致曲轴损坏、气缸壁划伤及发动机彻底报废',
      author: '店长',
    },
    ownerAdvice: {
      title: 'GT3 Track Day Tips',
      tips: [
        {
          icon: '🌡️',
          title: 'Monitor Oil Temperature',
          description: 'Install oil temp gauge if not equipped. Never exceed 280°F for extended periods. Above 300°F, oil breaks down rapidly.',
        },
        {
          icon: '🛢️',
          title: 'Track-Specific Oil',
          description: 'Use Mobil 1 15W-50 or Motul 300V 15W-50 for track days (vs. 0W-40 for street). Higher viscosity maintains film strength at high temps.',
        },
        {
          icon: '🔍',
          title: 'Oil Analysis After Track Days',
          description: 'Send oil sample to Blackstone Labs after every 2-3 track days. Early detection of bearing wear can prevent catastrophic failure.',
        },
        {
          icon: '⏱️',
          title: 'Cool-Down Laps',
          description: 'Always do 2-3 slow laps before pitting. Keeps oil circulating while temps drop, prevents heat soak damage.',
        },
      ],
    },
    technicalSpecs: {
      engineType: '4.0L Flat-Six (991.2 GT3)',
      maxRPM: '9,000 RPM',
      maxPower: '518 HP @ 8,250 RPM',
      maxTorque: '346 lb-ft @ 6,000 RPM',
      oilCapacity: '12.7 liters',
      compressionRatio: '13.3:1',
    },
    relatedCases: [],
    tags: ['Porsche', '911', 'GT3 RS', 'Engine Rebuild', 'Track Day'],
    shareImage: '/images/case-studies/gt3-rs-share.jpg',
  },

  {
    id: 'porsche-911-turbo-s-pdk-transmission',
    slug: 'porsche-911-turbo-s-pdk-transmission',
    brandSlug: 'porsche-911',
    modelId: 'porsche-911-turbo-s',
    featured: false,
    title: '2021 Porsche 911 Turbo S: PDK Transmission Mechatronic Failure',
    subtitle: 'Harsh shifting and limp mode traced to mechatronic unit',
    excerpt: 'Mechatronic control unit failure causing erratic shifting required precision rebuild and software calibration.',
    coverImage: '/images/case-studies/turbo-s-hero.jpg',
    date: '2024-08-12',
    readTime: '6 min read',
    category: 'transmission',
    difficulty: 'expert',
    laborHours: 14,
    vehicle: {
      year: 2021,
      make: 'Porsche',
      model: '911 Turbo S',
      vin: 'WP0***3456 (redacted)',
      mileage: 18600,
      color: 'GT Silver Metallic / Black Leather',
    },
    problem: {
      eyebrow: 'The Challenge',
      title: 'PDK Transmission Harsh Shifting and Faults',
      description: [
        'Owner reported progressively harsh 2-3 and 3-4 upshifts, especially when cold. Eventually, transmission entered limp mode limiting operation to 3rd gear only.',
      ],
      symptoms: [
        'Harsh upshifts (2-3, 3-4)',
        'Delayed downshifts',
        'Transmission limp mode (stuck in 3rd gear)',
        'PDK fault warning on dash',
      ],
      faultCodes: [
        'P17BF: Mechatronic Unit - Internal Error',
        'P0734: Gear 4 Incorrect Ratio',
      ],
    },
    diagnosis: {
      eyebrow: 'Investigation',
      title: 'PDK Mechatronic Diagnosis',
      steps: [
        {
          title: '1. PIWIS Diagnostic',
          description: 'Connected PIWIS III and performed PDK adaptation values check. Found clutch pressure values out of spec, indicating mechatronic control unit hydraulic solenoid failure.',
        },
        {
          title: '2. Transmission Fluid Analysis',
          description: 'Drained PDK fluid and inspected for metal contamination. Fluid clean—confirmed mechatronic fault vs. mechanical clutch failure.',
        },
      ],
      conclusion: 'Mechatronic control unit hydraulic solenoids failed, causing incorrect clutch pressure modulation. Common failure on 992 Turbo S at 15-25K miles. Requires mechatronic rebuild.',
    },
    solution: {
      eyebrow: 'The Solution',
      title: 'Mechatronic Unit Rebuild',
      approach: 'Remove transmission, disassemble mechatronic unit, replace failed solenoids and control valves, reassemble and calibrate.',
      procedures: [
        {
          title: 'Transmission Removal',
          duration: '6 hours',
          description: 'Dropped PDK transmission, removed mechatronic unit from valve body.',
          partsUsed: ['PDK Fluid (7L)', 'Mechatronic Gasket Set'],
        },
        {
          title: 'Mechatronic Rebuild',
          duration: '5 hours',
          description: 'Disassembled mechatronic, replaced all 8 hydraulic solenoids, control valve body, and pressure sensors. Cleaned and reassembled.',
          partsUsed: [
            'Solenoid Set (8x)',
            'Pressure Sensor Set',
            'Control Valve Body',
          ],
        },
        {
          title: 'Calibration',
          duration: '3 hours',
          description: 'Installed transmission, performed PIWIS-guided PDK adaptation, clutch touch-point learning, and shift quality calibration.',
          toolsUsed: ['PIWIS III'],
        },
      ],
      totalLaborHours: 14,
      turnaroundTime: '4 days',
    },
    results: {
      eyebrow: 'The Outcome',
      title: 'Smooth PDK Shifting Restored',
      achievements: [
        'All shifts smooth and within 150ms spec',
        'Launch control functional',
        'No fault codes after 800+ miles',
      ],
    },
    mechanicSummary: {
      symptoms: [
        'Harsh upshifts (2-3, 3-4)',
        'Delayed downshifts',
        'Transmission limp mode (stuck in 3rd gear)',
        'PDK fault warning on dash',
      ],
      recommendation: '立即检查PDK机电控制单元和液压电磁阀',
      consequence: '延误可能导致离合器片损坏、变速箱永久性故障及昂贵的总成更换',
      author: '技术总监',
    },
    ownerAdvice: {
      title: 'PDK Maintenance',
      tips: [
        {
          icon: '🔧',
          title: 'PDK Service Every 40K Miles',
          description: 'Fluid and filter change extends mechatronic life.',
        },
        {
          icon: '🚀',
          title: 'Limit Launch Control Use',
          description: 'Frequent launches accelerate mechatronic wear.',
        },
      ],
    },
    technicalSpecs: {
      transmissionType: '8-Speed PDK (Doppelkupplung)',
      shiftTime: '<200ms (Sport Plus mode)',
      fluidCapacity: '7.2 liters',
    },
    relatedCases: [],
    tags: ['Porsche', '911', 'Turbo S', 'PDK', 'Transmission'],
    shareImage: '/images/case-studies/turbo-s-share.jpg',
  },

  {
    id: 'porsche-911-carrera-ims-bearing',
    slug: 'porsche-911-carrera-ims-bearing',
    brandSlug: 'porsche-911',
    modelId: 'porsche-911-carrera',
    featured: false,
    title: '2006 Porsche 911 Carrera: Preventive IMS Bearing Replacement',
    subtitle: 'Avoiding catastrophic engine failure on 997.1 generation',
    excerpt: 'Preventive replacement of notorious intermediate shaft bearing on high-mileage 997 Carrera.',
    coverImage: '/images/case-studies/997-hero.jpg',
    date: '2024-07-05',
    readTime: '8 min read',
    category: 'powertrain',
    difficulty: 'expert',
    laborHours: 22,
    vehicle: {
      year: 2006,
      make: 'Porsche',
      model: '911 Carrera (997.1)',
      vin: 'WP0***7890 (redacted)',
      mileage: 72400,
      color: 'Arctic Silver / Black Leather',
    },
    problem: {
      eyebrow: 'The Challenge',
      title: 'IMS Bearing Preventive Replacement',
      description: [
        'Owner purchased used 997.1 and requested preventive IMS bearing replacement after learning about the infamous bearing failure affecting 2006-2008 911s.',
      ],
      symptoms: ['No symptoms (preventive service)'],
      faultCodes: [],
    },
    diagnosis: {
      eyebrow: 'Investigation',
      title: 'IMS Bearing Condition Assessment',
      steps: [
        {
          title: '1. Borescope Inspection',
          description: 'Inspected IMS bearing through drain plug opening using specialized borescope. Found early signs of bearing wear (light pitting) but no immediate failure risk.',
        },
      ],
      conclusion: 'IMS bearing showing age-appropriate wear. Preventive replacement recommended on all 997.1 engines at 60-80K miles to avoid catastrophic engine failure.',
    },
    solution: {
      eyebrow: 'The Solution',
      title: 'IMS Bearing & RMS Replacement',
      approach: 'Replace IMS bearing with LN Engineering upgraded unit, replace rear main seal preventively, and install IMS bearing failure detection magnet.',
      procedures: [
        {
          title: 'Transmission Removal',
          duration: '8 hours',
          description: 'Dropped transmission to access IMS bearing. Removed flywheel and clutch assembly.',
          partsUsed: ['Flywheel Bolts', 'Transmission Fluid'],
        },
        {
          title: 'IMS Bearing Replacement',
          duration: '6 hours',
          description: 'Removed factory IMS bearing using specialized tool. Installed LN Engineering Pro IMS bearing (ceramic hybrid, sealed design). Replaced rear main seal.',
          partsUsed: [
            'LN Engineering Pro IMS Bearing',
            'Rear Main Seal',
            'IMS Bearing Tool Kit (rental)',
          ],
        },
        {
          title: 'Reassembly',
          duration: '8 hours',
          description: 'Installed new clutch (preventive), flywheel, transmission. Added IMS Guardian magnetic drain plug.',
          partsUsed: ['Clutch Kit', 'IMS Guardian Drain Plug'],
        },
      ],
      totalLaborHours: 22,
      turnaroundTime: '5 days',
    },
    results: {
      eyebrow: 'The Outcome',
      title: 'Engine Failure Risk Eliminated',
      achievements: [
        'IMS bearing upgraded to lifetime-rated design',
        'Rear main seal leak eliminated',
        'New clutch installed preventively',
        'IMS Guardian system monitoring bearing health',
      ],
    },
    mechanicSummary: {
      symptoms: [
        'No symptoms (preventive service)',
      ],
      recommendation: '立即更换IMS中间轴承（997.1车型建议6-8万英里预防性更换）',
      consequence: '延误可能导致IMS轴承突然失效、发动机内部金属碎片污染及发动机报废',
      author: '店长',
    },
    ownerAdvice: {
      title: '997.1 IMS Bearing Guidance',
      tips: [
        {
          icon: '⚠️',
          title: 'Replace at 60K Miles',
          description: 'Don\'t wait for failure. IMS bearing failure destroys engine.',
        },
        {
          icon: '🚗',
          title: 'Drive Regularly',
          description: 'IMS bearings fail faster on cars driven <1,000 miles/year. Oil film breaks down.',
        },
      ],
    },
    technicalSpecs: {
      imsType: 'Single-row ball bearing (factory)',
      upgradeType: 'LN Engineering Pro (ceramic hybrid)',
      failureRate: '8-10% on 997.1 generation',
    },
    relatedCases: [],
    tags: ['Porsche', '911', 'IMS Bearing', '997', 'Preventive Maintenance'],
    shareImage: '/images/case-studies/997-share.jpg',
  },

  {
    id: 'porsche-911-gt3-cup-suspension',
    slug: 'porsche-911-gt3-cup-suspension',
    brandSlug: 'porsche-911',
    modelId: 'porsche-911-gt3',
    featured: false,
    title: '2018 Porsche 911 GT3: Cup Car Suspension Upgrade',
    subtitle: 'Track-focused suspension overhaul with motorsport components',
    excerpt: 'Complete suspension upgrade using Porsche Motorsport GT3 Cup spec components for dedicated track car.',
    coverImage: '/images/case-studies/gt3-suspension-hero.jpg',
    date: '2024-06-22',
    readTime: '7 min read',
    category: 'suspension',
    difficulty: 'expert',
    laborHours: 16,
    vehicle: {
      year: 2018,
      make: 'Porsche',
      model: '911 GT3 (991.2)',
      vin: 'WP0***1122 (redacted)',
      mileage: 12800,
      color: 'Racing Yellow / Black Alcantara',
    },
    problem: {
      eyebrow: 'The Challenge',
      title: 'Track-Spec Suspension Upgrade',
      description: [
        'Owner wanted to upgrade GT3 to Cup Car spec suspension for dedicated track day car. Factory PASM suspension excellent for street but lacked precision for competitive track use.',
      ],
      symptoms: ['No issues (performance upgrade)'],
      faultCodes: [],
    },
    diagnosis: {
      eyebrow: 'Planning',
      title: 'Suspension Upgrade Specification',
      steps: [
        {
          title: '1. Owner Goals',
          description: 'Client wanted: faster lap times, better brake stability, adjustable setup for different tracks, and elimination of electronic PASM for weight savings.',
        },
      ],
      conclusion: 'Recommended full Porsche Motorsport GT3 Cup suspension conversion: 3-way adjustable coilovers, adjustable anti-roll bars, spherical bearings, and GT3 Cup control arms.',
    },
    solution: {
      eyebrow: 'The Solution',
      title: 'GT3 Cup Suspension Conversion',
      approach: 'Install complete Porsche Motorsport suspension kit from GT3 Cup race car, including coilovers, control arms, anti-roll bars, and alignment.',
      procedures: [
        {
          title: 'Component Installation',
          duration: '12 hours',
          description: 'Removed factory PASM suspension. Installed GT3 Cup 3-way adjustable coilovers, adjustable anti-roll bars (front and rear), spherical bearing control arms, and upgraded toe links.',
          partsUsed: [
            'GT3 Cup Coilover Set (Ohlins TTX36)',
            'GT3 Cup Anti-Roll Bar Front (adjustable)',
            'GT3 Cup Anti-Roll Bar Rear (adjustable)',
            'Control Arm Set (spherical bearings)',
            'Toe Link Set (adjustable)',
          ],
        },
        {
          title: 'Corner Balancing & Alignment',
          duration: '4 hours',
          description: 'Performed corner weight balancing to achieve 50/50 distribution. Set aggressive track alignment: -3.5° front camber, -2.8° rear camber, 0° toe all around.',
          toolsUsed: ['Corner Weight Scales', 'Alignment Rack', 'Camber Gauges'],
        },
      ],
      totalLaborHours: 16,
      turnaroundTime: '1 week',
    },
    results: {
      eyebrow: 'The Outcome',
      title: 'Race-Ready Suspension',
      achievements: [
        'Lap time improved by 2.8 seconds at Laguna Seca',
        'Mid-corner balance dramatically improved',
        '40 lb weight savings (removal of PASM components)',
        'Fully adjustable for different track conditions',
      ],
      clientTestimonial: {
        quote: 'My GT3 was already fast, but the Cup suspension transformed it into a proper track weapon. The adjustability lets me dial it in for every track. Best upgrade I\'ve done.',
        author: 'Mark T.',
        location: 'Monterey, CA',
        vehicle: '2018 Porsche 911 GT3',
      },
    },
    mechanicSummary: {
      symptoms: [
        'No issues (performance upgrade)',
      ],
      recommendation: '立即升级赛道专用悬挂系统以获得最佳圈速表现',
      consequence: '延误可能导致错失赛道性能提升机会和竞争优势',
      author: '技术总监',
    },
    ownerAdvice: {
      title: 'Track Suspension Tips',
      tips: [
        {
          icon: '🔧',
          title: 'Document Settings',
          description: 'Keep logbook of compression/rebound/ride height settings for each track.',
        },
        {
          icon: '📊',
          title: 'Data Logging Essential',
          description: 'Use AiM or Motec data logger to correlate suspension changes with lap times.',
        },
      ],
    },
    technicalSpecs: {
      coiloverType: 'Ohlins TTX36 3-way adjustable',
      springRatesFront: '1100 lb/in',
      springRatesRear: '950 lb/in',
      weightSavings: '40 lbs vs. PASM',
    },
    relatedCases: ['porsche-911-gt3-rs-engine-rebuild'],
    tags: ['Porsche', '911', 'GT3', 'Suspension', 'Track Upgrade'],
    shareImage: '/images/case-studies/gt3-suspension-share.jpg',
  },

  // ==================== FERRARI ====================
  {
    id: 'ferrari-488-clutch-replacement',
    slug: 'ferrari-488-clutch-replacement',
    brandSlug: 'ferrari',
    modelId: 'ferrari-488',
    featured: true,
    featuredRank: 7,
    title: '2017 Ferrari 488 GTB: F1 DCT Clutch Replacement',
    subtitle: 'High-wear clutch replacement on dual-clutch transmission',
    excerpt: 'Worn dual-clutch assembly causing slip and harsh engagements required precision replacement and calibration.',
    coverImage: '/images/case-studies/488-hero.jpg',
    date: '2024-10-01',
    readTime: '8 min read',
    category: 'transmission',
    difficulty: 'expert',
    laborHours: 18,
    vehicle: {
      year: 2017,
      make: 'Ferrari',
      model: '488 GTB',
      vin: 'ZFF***4321 (redacted)',
      mileage: 14200,
      color: 'Rosso Corsa / Nero Leather',
    },
    problem: {
      eyebrow: 'The Challenge',
      title: 'Dual-Clutch Wear and Slipping',
      description: [
        'Owner reported progressively worsening clutch slip during hard acceleration, especially in 2nd and 3rd gears. "Gearbox Overheating" warning appeared on track day despite normal transmission temps.',
      ],
      symptoms: [
        'Clutch slip above 6,000 RPM in 2nd/3rd gear',
        'Harsh 1-2 upshift when cold',
        'Gearbox overheat warning (false)',
        'Burning smell after spirited driving',
      ],
      faultCodes: [
        'P1780: Clutch A Slip Detected',
        'P1781: Clutch B Slip Detected',
      ],
    },
    diagnosis: {
      eyebrow: 'Investigation',
      title: 'DCT Clutch Condition Analysis',
      steps: [
        {
          title: '1. Leonardo Diagnostic',
          description: 'Connected Ferrari Leonardo diagnostic system. Clutch wear values showed Clutch A at 92% wear, Clutch B at 88% wear (replace at 90%). Confirmed clutch replacement needed.',
        },
        {
          title: '2. Inspection',
          description: 'Dropped transmission and inspected dual-clutch assembly. Found glazed friction surfaces, uneven wear pattern, and flywheel heat discoloration. Launch control use accelerated wear.',
        },
      ],
      conclusion: 'Dual-clutch pack exceeded service life due to heavy use including launch control and track days. Common failure on 488 at 12-18K miles with spirited driving. Requires complete clutch and flywheel replacement.',
    },
    solution: {
      eyebrow: 'The Solution',
      title: 'Dual-Clutch and Flywheel Replacement',
      approach: 'Replace complete dual-clutch assembly, resurface flywheel, replace hydraulic release bearing, and perform Leonardo clutch adaptation.',
      procedures: [
        {
          title: 'Transmission Removal',
          duration: '6 hours',
          description: 'Lifted vehicle on Ferrari-specific lift (requires precise jacking points to avoid underbody damage). Dropped F1 DCT transmission.',
          partsUsed: ['Transmission Fluid (4L)'],
        },
        {
          title: 'Clutch Replacement',
          duration: '8 hours',
          description: 'Replaced dual-clutch assembly (Clutch A and B), resurfaced dual-mass flywheel, installed new hydraulic release bearing. Measured flywheel runout (<0.05mm spec).',
          partsUsed: [
            'Dual-Clutch Assembly (part# 293950)',
            'Flywheel Resurfacing',
            'Hydraulic Release Bearing',
            'Clutch Alignment Tool Set',
          ],
        },
        {
          title: 'Calibration',
          duration: '4 hours',
          description: 'Reinstalled transmission, performed Leonardo-guided clutch bite point learning, pressure calibration, and F1 shift quality adaptation. Test drive with data logging.',
          toolsUsed: ['Ferrari Leonardo Diagnostic', 'Torque Angle Gauge'],
        },
      ],
      totalLaborHours: 18,
      turnaroundTime: '1 week (clutch special order from Italy)',
    },
    results: {
      eyebrow: 'The Outcome',
      title: 'F1 DCT Performance Restored',
      achievements: [
        'Zero clutch slip up to 8,000 RPM',
        'Launch control functional with no slip',
        'Shift quality improved (smoother 1-2 upshift)',
        'No gearbox warnings after 500+ miles',
      ],
      clientTestimonial: {
        quote: 'I drive my 488 hard—track days, launch control, the works. The clutch lasted 14K miles which is fair. These guys did it with the same OEM parts. Shifts are perfect now.',
        author: 'Antonio R.',
        location: 'Beverly Hills, CA',
        vehicle: '2017 Ferrari 488 GTB',
      },
    },
    mechanicSummary: {
      symptoms: [
        'Clutch slip above 6,000 RPM in 2nd/3rd gear',
        'Harsh 1-2 upshift when cold',
        'Gearbox overheat warning (false)',
        'Burning smell after spirited driving',
      ],
      recommendation: '立即检查双离合器总成磨损程度和飞轮状况',
      consequence: '延误可能导致飞轮热损伤、离合器彻底失效及变速箱内部污染',
      author: '店长',
    },
    ownerAdvice: {
      title: 'Ferrari DCT Maintenance',
      tips: [
        {
          icon: '🚀',
          title: 'Limit Launch Control Use',
          description: 'Each launch control starts uses 100-200 miles of clutch life. Limit to special occasions.',
        },
        {
          icon: '📊',
          title: 'Monitor Clutch Wear',
          description: 'Have clutch wear checked annually with Leonardo. Replace at 90% to avoid flywheel damage.',
        },
        {
          icon: '🔥',
          title: 'Cool-Down After Track',
          description: 'Let transmission cool for 5 minutes before shutdown. Prevents clutch pack heat soak.',
        },
      ],
    },
    technicalSpecs: {
      transmissionType: '7-Speed F1 DCT (Dual-Clutch)',
      shiftTime: '60ms (Race mode)',
      clutchType: 'Dual wet-clutch pack',
      expectedLife: '15-25K miles (spirited driving), 40-60K miles (normal use)',
    },
    relatedCases: [],
    tags: ['Ferrari', '488', 'DCT', 'Clutch', 'Transmission'],
    shareImage: '/images/case-studies/488-share.jpg',
  },

  // I'll create a comprehensive file with more brands...
  // Due to length, showing structure for remaining brands
];

// Export for importing into main case-studies.js
