/*
 * Case Study Data for /brands/:brandSlug/:caseId pages
 * Magazine-style technical stories about complex repairs and service work
 */

export const caseStudies = [
  // ==================== MERCEDES-MAYBACH ====================
  {
    id: 'maybach-s680-abc-rebuild',
    slug: 'maybach-s680-abc-rebuild',
    brandSlug: 'maybach',
    modelId: 'maybach-s680',

    // Featured Article
    featured: true,
    featuredRank: 1,

    // Hero/Preview
    title: '2022 Maybach S680: Complete ABC System Rebuild',
    subtitle: 'Restoring Magic Carpet Ride to a flagship sedan',
    excerpt: 'Complete suspension collapse led to a comprehensive ABC hydraulic system overhaul, restoring factory ride quality to this flagship sedan.',
    coverImage: '/images/case-studies/maybach-s680-hero.jpg', // TODO: 1920×1080
    date: '2024-09-15',
    readTime: '8 min read',
    category: 'suspension',
    difficulty: 'expert',
    laborHours: 17,

    // Vehicle Details
    vehicle: {
      year: 2022,
      make: 'Mercedes-Maybach',
      model: 'S680 4MATIC',
      vin: 'WDD***7890 (redacted)',
      mileage: 18500,
      color: 'Obsidian Black Metallic / Nappa Leather Two-Tone',
    },

    // Problem Statement
    problem: {
      eyebrow: 'The Challenge',
      title: 'Catastrophic ABC Hydraulic Failure',
      description: [
        'This 2022 Maybach S680 arrived on a flatbed with complete suspension collapse on the right-front corner. Owner reported progressive warning messages over 3 weeks: first "ABC Visit Workshop," then "Vehicle Lowered," and finally total failure while parked overnight.',
        'Initial STAR diagnosis revealed multiple fault codes across the Active Body Control system, hydraulic fluid leaking from the right-front strut, and contaminated fluid in the reservoir.',
      ],
      symptoms: [
        'Right-front corner collapsed to bump stops',
        'AIRMATIC warning light + multiple ABC fault codes',
        'Green hydraulic fluid pooling under vehicle',
        'Loss of Magic Body Control and curve tilting functions',
        'Vehicle undriveable due to extreme lean angle',
      ],
      faultCodes: [
        'C1525: ABC Strut Right-Front - Pressure Loss',
        'C1511: ABC Pressure Reservoir - Low Pressure',
        'C1502: ABC Hydraulic Pump - Contamination Detected',
        'C1430: ABC Level Sensor Right-Front - Implausible Signal',
      ],
    },

    // Diagnostic Process
    diagnosis: {
      eyebrow: 'Investigation',
      title: 'Root Cause Analysis',
      steps: [
        {
          title: '1. STAR Diagnostic Deep Dive',
          description: 'Connected XENTRY DIAGNOSIS to capture all ABC control unit data, freeze frames, and hydraulic pressure readings. Confirmed right-front strut seal failure as primary issue, but contamination suggested secondary problems.',
          image: '/images/case-studies/maybach-diagnosis-1.jpg',
        },
        {
          title: '2. Hydraulic System Inspection',
          description: 'Drained ABC reservoir and analyzed fluid—found metal particles indicating pump wear. Visual inspection confirmed: RF strut piston seal torn, hydraulic pump inlet screen 70% clogged with debris, and pressure accumulator showing signs of fatigue.',
          image: '/images/case-studies/maybach-diagnosis-2.jpg',
        },
        {
          title: '3. System Pressure Testing',
          description: 'Used ABC pressure test kit to measure static and dynamic pressures. Found pump delivering only 180 bar (spec: 200 bar) and accumulator unable to maintain charge—both needing replacement to prevent recurrence.',
          image: '/images/case-studies/maybach-diagnosis-3.jpg',
        },
      ],
      conclusion: 'The failed strut seal allowed air into the system, causing cavitation that accelerated pump wear and contaminated the entire hydraulic circuit. This is a common failure cascade in ABC systems—fixing only the strut would lead to repeat failure within months.',
    },

    // Solution/Work Performed
    solution: {
      eyebrow: 'The Solution',
      title: 'Complete ABC System Overhaul',
      approach: 'Rather than replacing only the failed strut (dealership\'s initial quote), we recommended a comprehensive ABC refresh to address root causes and prevent future failures. Client approved the full rebuild after we explained the failure cascade.',
      procedures: [
        {
          title: 'Phase 1: System Decontamination',
          duration: '4 hours',
          description: 'Completely drained ABC system, removed and cleaned reservoir, replaced hydraulic filter, and flushed all lines using Mercedes-approved cleaning procedure. Removed 2.5L of contaminated fluid containing metal particles.',
          partsUsed: ['ABC Hydraulic Filter (A2223270090)', 'ABC Reservoir Cleaning Kit', '3L ABC Hydraulic Fluid (MB 345.0)'],
        },
        {
          title: 'Phase 2: Component Replacement',
          duration: '8 hours',
          description: 'Replaced right-front strut assembly (with new piston seal and damper), ABC hydraulic pump (with updated tandem design), and pressure accumulator. Used OEM Mercedes-Benz parts to maintain factory ride quality.',
          partsUsed: [
            'ABC Strut Assembly RF (A2223208713)',
            'ABC Hydraulic Pump Updated Design (A2213201604)',
            'ABC Pressure Accumulator (A2203270115)',
            'ABC Pump Inlet Screen (A2213270090)',
          ],
        },
        {
          title: 'Phase 3: System Calibration',
          duration: '3 hours',
          description: 'Performed XENTRY-guided ABC control unit coding, level sensor calibration, and hydraulic pressure adaptation. Ran 23-point ABC system test including curve tilt simulation, pothole detection, and Magic Body Control verification.',
          toolsUsed: ['XENTRY Diagnosis & Coding', 'ABC Pressure Test Kit', 'Level Sensor Calibration Tool'],
        },
        {
          title: 'Phase 4: Road Testing & Validation',
          duration: '2 hours',
          description: 'Test drive on varied road surfaces to validate curve tilting, Magic Body Control road scanning, and ABC Sport mode. Monitored real-time hydraulic pressure data via XENTRY during emergency brake tests and high-speed lane changes.',
          result: 'All ABC functions restored to factory spec. Magic Body Control successfully detected and pre-compensated for road irregularities. Curve tilt angle within 0.5° of factory calibration.',
        },
      ],
      totalLaborHours: 17,
      turnaroundTime: '5 business days',
    },

    // Technical Deep Dive (magazine-style)
    technicalInsights: {
      eyebrow: 'Technical Analysis',
      title: 'Understanding ABC System Architecture',
      content: [
        {
          heading: 'How Mercedes Active Body Control Works',
          text: 'Unlike traditional air suspension, ABC uses hydraulic fluid at 200 bar (2,900 PSI) to actively control each wheel independently. A central tandem piston pump pressurizes fluid, which is stored in a nitrogen-charged accumulator. The ABC control unit commands electrohydraulic valves at each strut to add or remove fluid in milliseconds, counteracting body roll, dive, and squat.',
        },
        {
          heading: 'The Failure Cascade Effect',
          text: 'ABC systems are vulnerable to contamination cascades. When a strut seal fails, it allows air into the closed hydraulic circuit. This air causes cavitation in the pump (tiny bubbles that implode violently), accelerating wear on pump pistons and seals. Metal particles from pump wear then circulate through the system, clogging filters and damaging valve bodies. This is why we always recommend full system service when contamination is detected—fixing one component leaves others primed to fail.',
        },
        {
          heading: 'Why OEM Parts Matter',
          text: 'We tested aftermarket ABC struts in 2019 and found they lasted an average of 18 months vs. 5+ years for OEM Mercedes parts. The difference: piston seal material and damper valving. Aftermarket seals harden in heat cycles, while Mercedes seals use a proprietary rubber compound that remains pliable. Damper valving affects how the ABC control unit calculates pressure—incorrect valving confuses the system and triggers false fault codes.',
        },
      ],
      images: [
        '/images/case-studies/abc-diagram.jpg', // TODO: Diagram of ABC system
        '/images/case-studies/abc-pump-comparison.jpg', // TODO: Old vs new pump
      ],
    },

    // Results
    results: {
      eyebrow: 'The Outcome',
      title: 'Magic Carpet Ride Restored',
      achievements: [
        'All ABC fault codes cleared and no reoccurrence after 500+ miles',
        'Curve tilt function restored to factory spec (up to 2.65° lean angle)',
        'Magic Body Control successfully detecting road irregularities 15m ahead',
        'Hydraulic pressure stable at 200 bar under all driving conditions',
        'Client reported smoother ride quality than when vehicle was new',
      ],
      clientTestimonial: {
        quote: 'These guys did it in under a week, and the car rides better than ever. They actually explained what failed and why. Highly recommend for any Maybach owner.',
        author: 'Robert M.',
        location: 'Beverly Hills, CA',
        vehicle: '2022 Maybach S680',
      },
      afterImages: [
        '/images/case-studies/maybach-after-1.jpg', // TODO: Completed repair
        '/images/case-studies/maybach-after-2.jpg',
      ],
    },

    // Mechanic's Expert Summary
    mechanicSummary: {
      symptoms: [
        'Vehicle drops to one corner while parked',
        '"ABC Visit Workshop" warning message',
        'Green hydraulic fluid leaking from struts',
        'Loss of curve tilt or Magic Body Control functions',
      ],
      recommendation: '立即检查 ABC 悬挂系统的液压泵、减震器和蓄压器',
      consequence: '延误会导致液压系统污染扩散，最终需要完整系统重建，维修成本增加 3-5 倍',
      author: '技术总监',
    },

    // Lessons Learned / Tips
    ownerAdvice: {
      title: 'ABC System Maintenance Tips',
      tips: [
        {
          icon: '🔍',
          title: 'Watch for Early Warnings',
          description: 'Don\'t ignore "ABC Visit Workshop" messages. Early intervention prevents contamination cascades that can escalate into major system rebuilds.',
        },
        {
          icon: '⚙️',
          title: 'Service Hydraulic Fluid Every 60K Miles',
          description: 'Mercedes doesn\'t officially specify ABC fluid changes, but we recommend every 60,000 miles or 5 years. Fresh fluid prevents seal degradation and pump wear.',
        },
        {
          icon: '🛠️',
          title: 'Avoid Potholes When Possible',
          description: 'ABC struts handle potholes better than air suspension, but repeated hard impacts accelerate piston seal wear. The Magic Body Control camera can\'t detect every road irregularity.',
        },
        {
          icon: '📊',
          title: 'Annual STAR Diagnostic Recommended',
          description: 'ABC systems develop issues slowly. Annual STAR diagnostics can detect pressure loss, sensor drift, and pump wear before catastrophic failure occurs.',
        },
      ],
    },

    // Technical Specifications Reference
    technicalSpecs: {
      abcSystemPressure: '200 bar (2,900 PSI) nominal',
      hydraulicFluidCapacity: '7.2 liters MB 345.0',
      pumpType: 'Tandem piston (updated design A2213201604)',
      accumulatorPrecharge: '170 bar nitrogen',
      struttravelRange: '80mm (3.15 inches)',
      curveTiltMaxAngle: '2.65 degrees',
      systemResponseTime: '< 20 milliseconds',
    },

    // Related Case Studies
    relatedCases: ['maybach-s580-hybrid-fault', 'maybach-s560-abc-pump'],

    // SEO / Metadata
    tags: ['ABC Suspension', 'Hydraulic Repair', 'Maybach S680', 'AIRMATIC', 'Complex Diagnosis'],
    shareImage: '/images/case-studies/maybach-s680-share.jpg',
  },

  // ==================== MAYBACH S580 HYBRID ====================
  {
    id: 'maybach-s580-hybrid-fault',
    slug: 'maybach-s580-hybrid-fault',
    brandSlug: 'maybach',
    modelId: 'maybach-s580',

    featured: true,
    featuredRank: 2,

    title: '2023 Maybach S580: 48V Hybrid System Fault',
    subtitle: 'Diagnosing intermittent ISG failure in mild hybrid system',
    excerpt: 'Intermittent hybrid system failures required advanced data logging to identify a faulty ISG connection causing sporadic power loss.',
    coverImage: '/images/case-studies/maybach-s580-hero.jpg',
    date: '2024-10-02',
    readTime: '6 min read',
    category: 'powertrain',
    difficulty: 'expert',
    laborHours: 12,

    vehicle: {
      year: 2023,
      make: 'Mercedes-Maybach',
      model: 'S580 4MATIC',
      vin: 'WDD***4567 (redacted)',
      mileage: 12200,
      color: 'Selenite Grey Magno / Exclusive Nappa Leather',
    },

    problem: {
      eyebrow: 'The Challenge',
      title: 'Intermittent Hybrid System Shutdown',
      description: [
        'Owner reported intermittent "Hybrid System Malfunction" warnings appearing randomly—sometimes on cold starts, other times after highway driving. Symptoms included loss of Auto Start-Stop, reduced fuel economy, and occasional harsh downshifts from the 9G-TRONIC transmission.',
        'Dealership performed two STAR diagnostics over 4 weeks but could not reproduce the fault. Client was frustrated with "no fault found" diagnosis despite repeated warning messages.',
      ],
      symptoms: [
        'Intermittent "Hybrid System Malfunction" warning',
        'Auto Start-Stop disabled randomly',
        'Harsh 3-2 downshifts when hybrid system offline',
        'Fuel economy dropped from 21 MPG to 17 MPG',
        'No consistent pattern to fault occurrence',
      ],
      faultCodes: [
        'P0A0F: Hybrid Battery Voltage System - Intermittent',
        'U110D: ISG Communication Lost - Sporadic',
        'P0562: 48V System Voltage Low - Historical',
      ],
    },

    diagnosis: {
      eyebrow: 'Investigation',
      title: 'Advanced Intermittent Fault Diagnosis',
      steps: [
        {
          title: '1. Data Logging Setup',
          description: 'Installed XENTRY data logger to record 48V system voltage, ISG (Integrated Starter Generator) current draw, and battery state-of-charge during normal driving. Client drove vehicle for 3 days with logger active, capturing 450 miles of data.',
          image: '/images/case-studies/s580-diagnosis-1.jpg',
        },
        {
          title: '2. Thermal Imaging Inspection',
          description: 'Analyzed data logs and found voltage drops correlated with high ambient temperature (95°F+). Used thermal camera to inspect 48V battery compartment during fault recreation—discovered battery reaching 167°F, exceeding Mercedes spec of 140°F max.',
          image: '/images/case-studies/s580-thermal.jpg',
        },
        {
          title: '3. Cooling System Fault Isolation',
          description: 'Inspected 48V battery cooling system and found cabin HVAC vent directing air to battery pack was 80% blocked by installation debris (foam packaging material). Battery thermal management system was functional, but inadequate airflow prevented proper cooling.',
          image: '/images/case-studies/s580-diagnosis-2.jpg',
        },
      ],
      conclusion: 'The intermittent fault was caused by 48V battery overheating due to blocked cooling vent. When battery exceeded thermal limits, the Battery Management System shut down hybrid functions to prevent damage. This is a known issue on early V223 S-Class models with rushed PDI (Pre-Delivery Inspection).',
    },

    solution: {
      eyebrow: 'The Solution',
      title: 'Cooling System Restoration + Software Update',
      approach: 'Removed cooling vent blockage, performed 48V battery health test, and applied Mercedes TSB (Technical Service Bulletin) software update improving thermal management.',
      procedures: [
        {
          title: 'Phase 1: Cooling System Cleaning',
          duration: '2 hours',
          description: 'Removed rear seat and trunk trim panels to access 48V battery compartment. Extracted foam packaging debris from cooling vent and HVAC ducting. Verified airflow with anemometer (restored to 280 CFM, spec: 250-300 CFM).',
          partsUsed: ['Trunk Trim Panel Clips (replaced during removal)'],
        },
        {
          title: 'Phase 2: Battery Health Assessment',
          duration: '1.5 hours',
          description: 'Performed XENTRY-guided 48V battery load test, cell voltage balance check, and State-of-Health analysis. All cells within 0.02V of each other (excellent). Battery SOH at 98.3% (like new). No permanent damage from overheating episodes.',
          toolsUsed: ['XENTRY Battery Test Module', '48V Battery Load Tester'],
        },
        {
          title: 'Phase 3: Software Update (TSB 48-002/23)',
          duration: '1 hour',
          description: 'Applied Mercedes TSB 48-002/23 updating 48V Battery Management System firmware. New calibration reduces hybrid system power during high battery temps (graceful degradation vs. complete shutdown) and improves cooling fan activation logic.',
          toolsUsed: ['XENTRY SCN Coding', 'Mercedes Global Hotline Access'],
        },
      ],
      totalLaborHours: 4.5,
      turnaroundTime: '1 day',
    },

    technicalInsights: {
      eyebrow: 'Technical Analysis',
      title: 'Mercedes 48V Mild Hybrid Architecture',
      content: [
        {
          heading: 'What is a 48V Mild Hybrid?',
          text: 'The S580 uses a 48V electrical architecture (vs. traditional 12V) to power an Integrated Starter Generator (ISG) producing up to 22 HP and 184 lb-ft of torque. This "mild hybrid" system enables Auto Start-Stop, EQ Boost (electric torque fill during turbo lag), and energy recuperation during braking. Unlike full hybrids, it cannot drive on electric power alone.',
        },
        {
          heading: 'Why 48V Battery Temperature Matters',
          text: 'Lithium-ion batteries have a narrow optimal temperature range (68-104°F). Above 140°F, internal resistance increases, reducing capacity and lifespan. The Battery Management System monitors each cell\'s temperature and will disable hybrid functions if limits are exceeded—exactly what happened in this case.',
        },
        {
          heading: 'Common V223 S-Class PDI Issues',
          text: 'We\'ve seen 4 cases of early V223 models (2021-2022 production) with similar installation debris blocking cooling vents. This suggests rushed Pre-Delivery Inspections at the port. Mercedes issued internal bulletin MB-001/22 requiring dealers to verify 48V cooling airflow on all V223 deliveries, but pre-bulletin cars may still have blockages.',
        },
      ],
      images: [
        '/images/case-studies/48v-architecture.jpg',
        '/images/case-studies/s580-debris.jpg',
      ],
    },

    results: {
      eyebrow: 'The Outcome',
      title: 'Hybrid System Fully Restored',
      achievements: [
        'No hybrid faults after 800+ miles and multiple 95°F+ days',
        '48V battery temperature peak reduced from 167°F to 118°F',
        'Fuel economy improved from 17 MPG back to 21 MPG average',
        'Auto Start-Stop functioning 100% of the time',
      ],
      clientTestimonial: {
        quote: 'These guys found the real problem—installation debris—in one day. They actually fixed the car.',
        author: 'David K.',
        location: 'Malibu, CA',
        vehicle: '2023 Maybach S580',
      },
      afterImages: [
        '/images/case-studies/s580-after-1.jpg',
      ],
    },

    // Mechanic's Expert Summary
    mechanicSummary: {
      symptoms: [
        'Intermittent "Hybrid System Malfunction" warning',
        'Auto Start-Stop disabled randomly',
        'Harsh 3-2 downshifts when hybrid system offline',
        'Fuel economy dropped significantly',
      ],
      recommendation: '立即检查 48V 混合动力系统的电池冷却系统和温度管理',
      consequence: '延误会导致电池过热损坏，需要更换昂贵的 48V 锂电池组，维修成本超过 $8,000',
      author: '店长',
    },

    ownerAdvice: {
      title: '48V Hybrid System Care',
      tips: [
        {
          icon: '🔥',
          title: 'Monitor Battery Temperature',
          description: 'If you get intermittent hybrid faults in hot weather, it\'s likely thermal-related. XENTRY can display battery temp in real-time.',
        },
        {
          icon: '🔋',
          title: 'Let the System "Sleep"',
          description: 'After hard driving, let the car idle for 30 seconds before shutting off. This allows 48V battery cooling fans to run and prevent heat soak.',
        },
        {
          icon: '⚡',
          title: 'Verify PDI Completion (New Cars)',
          description: 'For 2021-2023 V223 S-Class/Maybach, ask dealer to verify 48V cooling airflow was checked during PDI. Early cars may have installation debris.',
        },
        {
          icon: '📊',
          title: 'Battery Health Check Annually',
          description: '48V batteries should maintain >90% State-of-Health for 8 years. Annual testing catches degradation early.',
        },
      ],
    },

    technicalSpecs: {
      batteryVoltage: '48V nominal (42-54V operating range)',
      batteryCapacity: '1.0 kWh',
      batteryChemistry: 'Lithium-Ion (pouch cells)',
      isgMaxPower: '22 HP / 184 lb-ft',
      eqBoostDuration: 'Up to 30 seconds continuous',
      regenerativeBraking: 'Up to 15 kW recovery',
      batteryTempRange: '-4°F to 140°F (operating)',
    },

    relatedCases: ['maybach-s680-abc-rebuild'],

    tags: ['48V Hybrid', 'Intermittent Fault', 'Thermal Issue', 'Maybach S580', 'ISG'],
    shareImage: '/images/case-studies/maybach-s580-share.jpg',
  },

  // ==================== ROLLS-ROYCE PHANTOM ====================
  {
    id: 'rolls-phantom-air-suspension',
    slug: 'rolls-phantom-air-suspension',
    brandSlug: 'rolls-royce',
    modelId: 'rolls-phantom',

    featured: true,
    featuredRank: 3,

    title: '2019 Rolls-Royce Phantom: Magic Carpet Ride Restoration',
    subtitle: 'Diagnosing and repairing Flagbearer suspension system faults',
    excerpt: 'Restoring the Magic Carpet Ride function on a Phantom VIII through camera system repair and suspension recalibration.',
    coverImage: '/images/case-studies/phantom-hero.jpg',
    date: '2024-08-20',
    readTime: '7 min read',
    category: 'suspension',
    difficulty: 'expert',
    laborHours: 14,

    vehicle: {
      year: 2019,
      make: 'Rolls-Royce',
      model: 'Phantom VIII',
      vin: 'SCA***1234 (redacted)',
      mileage: 8900,
      color: 'Arctic White / Navy Blue Leather',
    },

    problem: {
      eyebrow: 'The Challenge',
      title: 'Loss of Magic Carpet Ride Function',
      description: [
        'This Phantom VIII arrived with "Suspension Fault" warning and loss of the signature Magic Carpet Ride function. Owner noticed progressive deterioration over 2 months: first, reduced ability to handle road imperfections, then complete failure of camera-based preview system.',
        'The Flagbearer system (stereo cameras that scan the road ahead) was not detecting irregularities, causing the Phantom to ride like a "normal luxury car"—unacceptable for Rolls-Royce ownership.',
      ],
      symptoms: [
        'Magic Carpet Ride camera system offline',
        'Suspension no longer pre-adjusting for road irregularities',
        'Flagbearer warning light on instrument cluster',
        'Right-front suspension felt "choppy" over bumps',
        'Vehicle height sensors giving erratic readings',
      ],
      faultCodes: [
        'C1A12: Flagbearer Camera System - No Signal',
        'C1304: Air Suspension Height Sensor RF - Implausible',
        'C1202: Air Spring RF - Leak Suspected',
      ],
    },

    diagnosis: {
      eyebrow: 'Investigation',
      title: 'Flagbearer System Deep Dive',
      steps: [
        {
          title: '1. Camera System Inspection',
          description: 'Inspected Flagbearer stereo cameras mounted behind windshield. Found right camera lens covered in condensation (internal moisture). Removed camera module and discovered cracked lens seal allowing water intrusion during car washes.',
          image: '/images/case-studies/phantom-camera-fault.jpg',
        },
        {
          title: '2. Air Suspension Diagnosis',
          description: 'While investigating camera fault, discovered unrelated right-front air spring slow leak (explains "choppy" ride). Performed soapy water test on all air springs and found RF spring leaking at top mount crimp.',
          image: '/images/case-studies/phantom-air-spring.jpg',
        },
        {
          title: '3. Height Sensor Calibration Check',
          description: 'Erratic height sensor readings were caused by RF air spring leak creating inconsistent ride height. Sensor itself tested within spec. Would require recalibration after air spring replacement.',
          image: '/images/case-studies/phantom-sensor.jpg',
        },
      ],
      conclusion: 'Two separate failures: (1) Flagbearer camera water damage from cracked seal, (2) Air spring leak causing sensor errors. Both needed repair to restore Magic Carpet Ride and proper suspension function.',
    },

    solution: {
      eyebrow: 'The Solution',
      title: 'Flagbearer Camera + Air Suspension Repair',
      approach: 'Replaced damaged Flagbearer camera module (OEM Rolls-Royce part), replaced leaking air spring, and recalibrated entire suspension system.',
      procedures: [
        {
          title: 'Phase 1: Flagbearer Camera Replacement',
          duration: '3 hours',
          description: 'Removed A-pillar trim and headliner section to access Flagbearer camera module. Replaced complete stereo camera assembly (Rolls-Royce does not sell individual lenses). Performed BMW ISTA calibration of 3D road surface mapping.',
          partsUsed: ['Flagbearer Stereo Camera Module (RR part# 7123456)', 'Lens Seal Kit'],
        },
        {
          title: 'Phase 2: Air Spring Replacement',
          duration: '4 hours',
          description: 'Raised vehicle on Phantom-rated lift (requires precise jacking points to avoid underbody damage). Replaced right-front air spring with OEM BMW part (shared with 7-Series). Performed leak test on all other air springs (all passed).',
          partsUsed: ['Air Spring RF (BMW 37126791675)', 'Air Spring Mounting Hardware'],
        },
        {
          title: 'Phase 3: System Calibration',
          duration: '2 hours',
          description: 'Performed BMW ISTA-guided suspension calibration including: air spring fill/vent test, height sensor learn procedure, Flagbearer camera alignment, and Magic Carpet Ride function test. Verified camera detecting road irregularities 5-10 meters ahead.',
          toolsUsed: ['BMW ISTA/D', 'Flagbearer Alignment Tool', 'Suspension Pressure Tester'],
        },
      ],
      totalLaborHours: 9,
      turnaroundTime: '3 days (camera special order from BMW Group)',
    },

    technicalInsights: {
      eyebrow: 'Technical Analysis',
      title: 'Rolls-Royce Flagbearer Technology',
      content: [
        {
          heading: 'How Magic Carpet Ride Works',
          text: 'The Flagbearer system uses two high-resolution cameras behind the windshield to create a 3D map of the road surface up to 10 meters ahead. This data is processed in real-time, and the air suspension pre-adjusts dampers and air spring pressure before each wheel encounters an irregularity. The result: bumps, potholes, and rough pavement are "smoothed out" before occupants feel them.',
        },
        {
          heading: 'Camera Failure Mode Analysis',
          text: 'The Flagbearer camera failure was caused by a cracked lens seal—a rare but documented issue on 2018-2019 Phantom VIII models exposed to high-pressure car washes. Water intrusion causes condensation on internal optics, rendering the stereo depth perception useless. Rolls-Royce issued TSB SIB-72-2019 recommending touchless car washes for all Phantom VIII owners.',
        },
        {
          heading: 'Air Suspension Architecture',
          text: 'Phantom VIII air suspension uses BMW 7-Series G11/G12 platform components (air springs, compressor, EHCM control module) with Rolls-Royce-specific calibration. This means OEM BMW parts can be used for most components—drastically reducing cost vs. Rolls-Royce-branded parts.',
        },
      ],
      images: [
        '/images/case-studies/flagbearer-diagram.jpg',
        '/images/case-studies/phantom-camera-moisture.jpg',
      ],
    },

    results: {
      eyebrow: 'The Outcome',
      title: 'Magic Carpet Ride Fully Restored',
      achievements: [
        'Flagbearer system successfully detecting road irregularities up to 10m ahead',
        'Air suspension restored to factory ride quality',
        'All fault codes cleared with no reoccurrence after 400+ miles',
        'Client reported "riding on a cloud again"',
      ],
      clientTestimonial: {
        quote: 'My Phantom lost what makes it a Phantom—that effortless magic carpet ride. These specialists diagnosed it in one day, fixed both problems, and explained every step. The car rides exactly as it should now.',
        author: 'Charles T.',
        location: 'Bel Air, CA',
        vehicle: '2019 Rolls-Royce Phantom VIII',
      },
      afterImages: [
        '/images/case-studies/phantom-after-1.jpg',
      ],
    },

    // Mechanic's Expert Summary
    mechanicSummary: {
      symptoms: [
        'Magic Carpet Ride camera system offline',
        'Suspension no longer pre-adjusting for road irregularities',
        'Flagbearer warning light on instrument cluster',
        'Right-front suspension felt "choppy" over bumps',
      ],
      recommendation: '立即检查 Flagbearer 摄像头系统和空气悬挂弹簧的密封性',
      consequence: '延误会导致悬挂系统完全失效，失去劳斯莱斯标志性的魔毯驾乘体验，空压机过度工作可能损坏',
      author: '技术总监',
    },

    ownerAdvice: {
      title: 'Phantom Suspension Care',
      tips: [
        {
          icon: '💧',
          title: 'Use Touchless Car Washes Only',
          description: 'High-pressure washes can damage Flagbearer camera seals (per Rolls-Royce SIB-72-2019). Hand wash or touchless only.',
        },
        {
          icon: '🎥',
          title: 'Keep Windshield Area Clear',
          description: 'Flagbearer cameras need unobstructed view. Avoid parking under trees (sap), and clean windshield regularly.',
        },
        {
          icon: '⚙️',
          title: 'Annual Air Spring Inspection',
          description: 'Air springs develop slow leaks over time. Annual inspection catches leaks before they cause compressor overwork.',
        },
        {
          icon: '📊',
          title: 'Suspension Calibration After Tire Change',
          description: 'Changing tire sizes (even within spec) affects ride height calculations. Recalibrate after tire replacements.',
        },
      ],
    },

    technicalSpecs: {
      flagbearerCameraResolution: '2.3 megapixels (stereo)',
      roadPreviewDistance: 'Up to 10 meters (33 feet)',
      suspensionResponseTime: '< 30 milliseconds',
      airSpringPressureRange: '2-16 bar (29-232 PSI)',
      rideHeightAdjustment: '50mm (2 inches) total range',
      compressorCapacity: '45 liters/minute',
      systemVoltage: '12V (BMW architecture)',
    },

    relatedCases: [],

    tags: ['Rolls-Royce', 'Flagbearer', 'Air Suspension', 'Magic Carpet Ride', 'Camera System'],
    shareImage: '/images/case-studies/phantom-share.jpg',
  },

  // ==================== BENTLEY ====================
  {
    id: 'bentley-continental-gt-w12-turbo-failure',
    slug: 'bentley-continental-gt-w12-turbo-failure',
    brandSlug: 'bentley',
    modelId: 'bentley-continental-gt',
    featured: true,
    featuredRank: 5,
    title: '2020 Bentley Continental GT: Twin-Turbo W12 Failure',
    subtitle: 'Catastrophic turbocharger failure requiring engine-out service',
    excerpt: 'Twin-turbo system failure caused by oil starvation led to complete W12 turbocharger replacement with updated VTG units.',
    coverImage: '/images/case-studies/bentley-gt-hero.jpg',
    date: '2024-07-18',
    readTime: '9 min read',
    category: 'powertrain',
    difficulty: 'expert',
    laborHours: 22,
    vehicle: {
      year: 2020,
      make: 'Bentley',
      model: 'Continental GT W12',
      vin: 'SCB***9012 (redacted)',
      mileage: 28400,
      color: 'Dark Sapphire / Linen Hide',
    },
    problem: {
      eyebrow: 'The Challenge',
      title: 'Catastrophic Twin-Turbo Failure on W12 Engine',
      description: [
        'Owner reported sudden loss of power on highway accompanied by loud grinding noise from engine bay. Vehicle entered limp mode with multiple fault codes. Tow truck delivered the Continental GT with visible smoke from exhaust.',
        'Initial diagnosis revealed complete failure of both turbochargers—metal fragments found in intercooler piping suggesting catastrophic internal turbo damage. Root cause traced to oil starvation from clogged oil feed lines.',
      ],
      symptoms: [
        'Sudden power loss during highway acceleration',
        'Loud grinding/whistling noise from engine bay',
        'Blue-white smoke from exhaust on startup',
        'Check engine light with multiple turbo fault codes',
        'Engine in permanent limp mode (limited to 3000 RPM)',
      ],
      faultCodes: [
        'P0299: Turbocharger A Underboost Condition',
        'P0234: Turbocharger B Overboost Condition',
        'P0046: Turbo Boost Control Solenoid - Range/Performance',
        'P0045: Turbo/Super Charger Boost Control - Circuit Malfunction',
      ],
    },
    diagnosis: {
      eyebrow: 'Investigation',
      title: 'Root Cause Analysis of Twin-Turbo Failure',
      steps: [
        {
          title: '1. Turbocharger Inspection',
          description: 'Removed both turbochargers and found severe compressor wheel damage on both units. Turbine blades showed gouging and contact marks. Internal bearing play exceeded 5mm (spec: <0.5mm). Metal shavings found in oil drain.',
        },
        {
          title: '2. Oil System Analysis',
          description: 'Inspected turbo oil feed lines and discovered both lines 70% blocked with carbon buildup. Oil analysis showed fuel dilution (5.2%) suggesting extended oil change intervals. Client admitted 18,000 miles since last oil change (spec: 10,000 miles).',
        },
        {
          title: '3. Intercooler Contamination Check',
          description: 'Removed intercoolers and found metal fragments throughout piping—confirming catastrophic turbo failure had sent debris into intake system. All intercooler piping required replacement to prevent engine damage.',
        },
      ],
      conclusion: 'Extended oil change intervals caused carbon buildup in turbo oil feed lines, starving bearings of lubrication. This led to bearing failure, turbine wheel contact, and complete destruction of both Variable Turbine Geometry (VTG) units. Engine-out service required to replace turbos and clean entire intake system.',
    },
    solution: {
      eyebrow: 'The Solution',
      title: 'Complete Twin-Turbo System Replacement',
      approach: 'Engine removal for turbocharger replacement, intake system cleaning, oil system flush, and installation of updated VTG turbochargers with revised oil feed design.',
      procedures: [
        {
          title: 'Phase 1: Engine Removal',
          duration: '6 hours',
          description: 'Complete engine-out procedure required for W12 turbo access. Removed front subframe, drained coolant/oil, disconnected all engine harnesses, and lifted engine/transmission assembly using specialized Bentley tooling.',
          partsUsed: ['Engine Mount Hardware Kit', 'Coolant (20L)', 'Engine Oil (9L Mobil 1 0W-40)'],
        },
        {
          title: 'Phase 2: Turbocharger Replacement',
          duration: '8 hours',
          description: 'Replaced both turbochargers with updated Bentley/BorgWarner VTG units (part numbers 07C145701P for left, 07C145702P for right). Installed revised oil feed lines with larger internal diameter and improved anti-coking design.',
          partsUsed: [
            'Turbocharger Left Bank (07C145701P)',
            'Turbocharger Right Bank (07C145702P)',
            'Turbo Oil Feed Lines Updated Design (set)',
            'Turbo Gasket Kit',
            'Wastegate Actuators (pair)',
          ],
        },
        {
          title: 'Phase 3: Intake System Cleaning',
          duration: '4 hours',
          description: 'Removed all intercooler piping, intercoolers, and throttle bodies. Performed chemical cleaning to remove metal contamination. Replaced intake manifold gaskets and all boost hoses showing degradation.',
          partsUsed: ['Intercooler Pipe Set', 'Boost Hose Kit', 'Intake Manifold Gasket Set'],
        },
        {
          title: 'Phase 4: Engine Reinstallation & Calibration',
          duration: '4 hours',
          description: 'Reinstalled engine, performed alignment of engine mounts, refilled fluids, and completed VAS diagnostic coding. Ran turbo adaptation procedure and boost pressure leak test.',
          toolsUsed: ['VAS 5054A Diagnostic System', 'Bentley Engine Alignment Tool Set', 'Boost Pressure Tester'],
        },
      ],
      totalLaborHours: 22,
      turnaroundTime: '10 business days (turbo special order)',
    },
    technicalInsights: {
      eyebrow: 'Technical Analysis',
      title: 'Understanding W12 Twin-Turbo Architecture',
      content: [
        {
          heading: 'Bentley W12 Engine Design',
          text: 'The 6.0L W12 TSI engine is essentially two VR6 engines joined at 72° angle, creating a compact 12-cylinder with twin Variable Turbine Geometry (VTG) turbochargers. Each turbo feeds 6 cylinders. This design creates unique packaging constraints—turbos are tucked deep in the valley, requiring engine removal for service.',
        },
        {
          heading: 'Why Oil Change Intervals Matter',
          text: 'Turbocharged engines operate at extreme temperatures (exhaust gas temps >1800°F). Turbo bearings spin at 200,000+ RPM and rely on oil film for cooling and lubrication. Extended oil changes cause oil breakdown, creating carbon deposits that clog the tiny (3mm) oil feed lines. Once oil flow is restricted, bearing failure occurs within minutes.',
        },
        {
          heading: 'The Carbon Buildup Problem',
          text: 'Direct injection engines (like the W12 TSI) are prone to carbon buildup due to lack of fuel wash on intake valves. This carbon migrates into turbo oil feed lines when oil change intervals are extended. Bentley updated the oil feed line design in 2019 to use larger diameter (4mm) lines—a running change not publicized to owners.',
        },
      ],
      images: ['/images/case-studies/w12-turbo-diagram.jpg', '/images/case-studies/bentley-turbo-damage.jpg'],
    },
    results: {
      eyebrow: 'The Outcome',
      title: 'W12 Performance Restored',
      achievements: [
        'Full power restored: 626 HP / 664 lb-ft (dyno verified)',
        'Boost pressure stable at 1.2 bar across all cylinders',
        'All fault codes cleared with no reoccurrence after 500+ miles',
        'Included 2-year warranty on turbocharger assembly',
      ],
      clientTestimonial: {
        quote: 'My Continental GT is my daily driver, and when the turbos failed, I was devastated. These guys did it in 10 days and explained exactly what caused it—my fault for ignoring oil changes. Car pulls harder than ever.',
        author: 'Michael R.',
        location: 'Newport Beach, CA',
        vehicle: '2020 Bentley Continental GT W12',
      },
      afterImages: ['/images/case-studies/bentley-gt-after.jpg'],
    },

    // Mechanic's Expert Summary
    mechanicSummary: {
      symptoms: [
        'Sudden power loss during highway acceleration',
        'Loud grinding/whistling noise from engine bay',
        'Blue-white smoke from exhaust on startup',
        'Engine in permanent limp mode (limited to 3000 RPM)',
      ],
      recommendation: '立即检查涡轮增压器的机油供给系统和轴承状况',
      consequence: '延误会导致涡轮叶片碎片进入进气系统，污染中冷器和发动机内部，维修成本可能超过 $30,000',
      author: '店长',
    },

    ownerAdvice: {
      title: 'W12 Turbo Maintenance Tips',
      tips: [
        {
          icon: '🛢️',
          title: 'Strict 7,500-Mile Oil Changes',
          description: 'Never exceed 10,000 miles on W12 engines. Use only VW 504.00/507.00 approved oil (Mobil 1 0W-40 or Castrol Edge 0W-40). Turbos will not survive extended intervals.',
        },
        {
          icon: '🔥',
          title: 'Cooldown Period After Hard Driving',
          description: 'After spirited driving, idle for 60 seconds before shutting off. This allows turbos to cool and prevents oil coking in feed lines.',
        },
        {
          icon: '📊',
          title: 'Annual Boost Pressure Test',
          description: 'Have boost pressure tested annually. Loss of boost pressure is early warning of turbo degradation or boost leak.',
        },
        {
          icon: '⚠️',
          title: 'Watch for Early Warning Signs',
          description: 'Turbo failure symptoms: whistling noise on acceleration, blue smoke on startup, loss of power above 3000 RPM. Catch it early to prevent engine contamination.',
        },
      ],
    },
    technicalSpecs: {
      engineDisplacement: '5,950 cc (6.0L W12)',
      turboType: 'Twin BorgWarner VTG (Variable Turbine Geometry)',
      boostPressure: '1.2 bar (17.4 PSI)',
      maxPower: '626 HP @ 6,000 RPM',
      maxTorque: '664 lb-ft @ 1,350-4,500 RPM',
      compressionRatio: '10.5:1',
      fuelSystem: 'Direct Injection TSI',
    },
    relatedCases: [],
    tags: ['Bentley', 'W12', 'Turbocharger', 'Engine Repair', 'Continental GT'],
    shareImage: '/images/case-studies/bentley-gt-share.jpg',
  },

  {
    id: 'bentley-flying-spur-air-suspension-fault',
    slug: 'bentley-flying-spur-air-suspension-fault',
    brandSlug: 'bentley',
    modelId: 'bentley-flying-spur',
    featured: false,
    title: '2017 Bentley Flying Spur: Air Suspension Compressor Replacement',
    subtitle: 'Restoring ride height control after compressor failure',
    excerpt: 'Failed air suspension compressor causing vehicle sag required replacement with updated high-output unit.',
    coverImage: '/images/case-studies/bentley-spur-hero.jpg',
    date: '2024-06-10',
    readTime: '5 min read',
    category: 'suspension',
    difficulty: 'intermediate',
    laborHours: 7,
    vehicle: {
      year: 2017,
      make: 'Bentley',
      model: 'Flying Spur V8',
      vin: 'SCB***3344 (redacted)',
      mileage: 42100,
      color: 'Onyx Black / Magnolia Hide',
    },
    problem: {
      eyebrow: 'The Challenge',
      title: 'Air Suspension System Failure',
      description: [
        'Owner reported vehicle sitting progressively lower over 2 weeks, especially after sitting overnight. "Suspension Fault" warning appeared on startup. Vehicle eventually sagged to bump stops on all four corners.',
      ],
      symptoms: [
        'Vehicle sagging to minimum ride height',
        'Compressor running constantly (audible from cabin)',
        'Suspension fault warning on cluster',
        'Inability to adjust ride height (stuck in low mode)',
      ],
      faultCodes: ['C1111: Air Suspension Compressor - Pressure Low', 'C1130: Air Suspension Level Control - System Timeout'],
    },
    diagnosis: {
      eyebrow: 'Investigation',
      title: 'Compressor Failure Diagnosis',
      steps: [
        {
          title: '1. System Pressure Test',
          description: 'Connected manometer to air suspension system. Compressor unable to build pressure above 4 bar (spec: 16 bar). Compressor motor running but not generating pressure—indicates internal piston seal failure.',
        },
        {
          title: '2. Air Spring Leak Test',
          description: 'Performed soapy water test on all four air springs and air lines. No leaks detected—confirmed compressor as sole failure point.',
        },
      ],
      conclusion: 'Air suspension compressor internal seals failed due to age and duty cycle. Common failure on 2014-2018 Flying Spur models at 40-50K miles. Replacement with updated high-output compressor required.',
    },
    solution: {
      eyebrow: 'The Solution',
      title: 'Air Suspension Compressor Replacement',
      approach: 'Replace failed compressor with Bentley/VW updated design featuring improved piston seals and thermal protection.',
      procedures: [
        {
          title: 'Compressor Replacement',
          duration: '4 hours',
          description: 'Removed trunk liner to access compressor. Replaced unit with updated design (part# 3D0616005M). Flushed air dryer cartridge and replaced air filter.',
          partsUsed: ['Air Suspension Compressor (3D0616005M)', 'Air Dryer Cartridge', 'Compressor Mounting Kit'],
        },
        {
          title: 'System Calibration',
          duration: '1 hour',
          description: 'Performed VAS-guided air suspension calibration. Verified all four corners reaching correct ride height in all modes (Comfort, Dynamic, High).',
        },
      ],
      totalLaborHours: 5,
      turnaroundTime: '2 days',
    },
    results: {
      eyebrow: 'The Outcome',
      title: 'Ride Height Control Restored',
      achievements: [
        'All four corners maintaining correct ride height',
        'Compressor pressure stable at 16 bar',
        'Ride height adjustment working in all modes',
        'No fault codes after 300+ miles',
      ],
    },

    // Mechanic's Expert Summary
    mechanicSummary: {
      symptoms: [
        'Vehicle sagging to minimum ride height',
        'Compressor running constantly (audible from cabin)',
        'Suspension fault warning on cluster',
        'Inability to adjust ride height (stuck in low mode)',
      ],
      recommendation: '立即检查空气悬挂压缩机的内部密封件和压力输出',
      consequence: '延误会导致压缩机过热损坏，车辆无法行驶，可能需要拖车救援',
      author: '技术总监',
    },

    ownerAdvice: {
      title: 'Air Suspension Maintenance',
      tips: [
        {
          icon: '🔍',
          title: 'Inspect Compressor Every 40K Miles',
          description: 'Preventive replacement of compressor at 40-50K miles prevents being stranded on bump stops.',
        },
        {
          icon: '⚙️',
          title: 'Avoid Extended Use of High Mode',
          description: 'Running in High mode constantly increases compressor duty cycle and accelerates wear.',
        },
      ],
    },
    technicalSpecs: {
      compressorType: 'AMK Single-Piston with Thermal Protection',
      maxPressure: '16 bar (232 PSI)',
      airDryerType: 'Integrated cartridge with desiccant',
      rideHeightRange: '60mm adjustment range',
    },
    relatedCases: ['bentley-continental-gt-w12-turbo-failure'],
    tags: ['Bentley', 'Air Suspension', 'Compressor', 'Flying Spur'],
    shareImage: '/images/case-studies/bentley-spur-share.jpg',
  },

  {
    id: 'bentley-bentayga-hybrid-charging-fault',
    slug: 'bentley-bentayga-hybrid-charging-fault',
    brandSlug: 'bentley',
    modelId: 'bentley-bentayga',
    featured: false,
    title: '2021 Bentley Bentayga Hybrid: High-Voltage Charging System Fault',
    subtitle: 'Diagnosing intermittent HV battery charging failure',
    excerpt: 'Intermittent charging faults traced to corroded high-voltage connector in battery coolant housing.',
    coverImage: '/images/case-studies/bentayga-hero.jpg',
    date: '2024-05-28',
    readTime: '6 min read',
    category: 'hybrid',
    difficulty: 'expert',
    laborHours: 9,
    vehicle: {
      year: 2021,
      make: 'Bentley',
      model: 'Bentayga Hybrid',
      vin: 'SCB***7788 (redacted)',
      mileage: 16800,
      color: 'Verdant Green / Cricket Ball Hide',
    },
    problem: {
      eyebrow: 'The Challenge',
      title: 'Intermittent High-Voltage Charging Failure',
      description: [
        'Owner reported intermittent failure to charge HV battery. Some charging sessions completed normally, others stopped at 20-40% with "Charging System Fault" message. Dealer performed three diagnostics over 6 weeks but could not reproduce fault.',
      ],
      symptoms: [
        'Intermittent charging failures (no pattern)',
        'Charging sometimes stopping at random SOC%',
        'Reduced electric-only range (EV mode)',
        'No fault codes stored (intermittent)',
      ],
      faultCodes: ['U111300: High Voltage Battery - Communication Lost (Intermittent)'],
    },
    diagnosis: {
      eyebrow: 'Investigation',
      title: 'Intermittent Fault Root Cause Analysis',
      steps: [
        {
          title: '1. Data Logging During Charging',
          description: 'Installed VAS data logger to record HV battery voltage, current, and temperature during multiple charge cycles. Captured fault occurrence showing voltage drop to 0V for 200ms during charging.',
        },
        {
          title: '2. High-Voltage Connector Inspection',
          description: 'Removed HV battery service cover and inspected all HV connectors. Found green corrosion on HV main contactor connector inside battery coolant housing. Caused by coolant leak from housing gasket.',
        },
      ],
      conclusion: 'Coolant leak from battery housing gasket allowed glycol to contact HV connector, causing intermittent connection loss during charging thermal cycles. Required connector replacement and housing gasket repair.',
    },
    solution: {
      eyebrow: 'The Solution',
      title: 'HV Connector & Coolant System Repair',
      approach: 'Replace corroded HV connector, repair coolant housing gasket, and flush HV battery cooling system.',
      procedures: [
        {
          title: 'Phase 1: HV System Isolation',
          duration: '2 hours',
          description: 'Performed HV system shutdown procedure, removed HV service disconnect, verified 0V on all HV lines, and installed safety lockout.',
          toolsUsed: ['HV Safety Kit', 'Insulated Tool Set', 'Fluke HV Multimeter'],
        },
        {
          title: 'Phase 2: Connector & Gasket Replacement',
          duration: '5 hours',
          description: 'Replaced HV main contactor connector assembly and battery coolant housing gasket. Cleaned all corrosion with electrical contact cleaner.',
          partsUsed: ['HV Connector Assembly (04E971636)', 'Battery Housing Gasket', 'HV Connector Grease'],
        },
        {
          title: 'Phase 3: System Testing',
          duration: '2 hours',
          description: 'Performed HV system leak test, refilled battery coolant circuit, and completed VAS HV system commissioning. Monitored 3 full charge cycles with data logger.',
        },
      ],
      totalLaborHours: 9,
      turnaroundTime: '3 days',
    },
    results: {
      eyebrow: 'The Outcome',
      title: 'Charging System Fully Restored',
      achievements: [
        '15 consecutive successful charge cycles (0-100%)',
        'HV connector resistance within 0.001 ohm spec',
        'No communication loss during thermal stress testing',
      ],
    },

    // Mechanic's Expert Summary
    mechanicSummary: {
      symptoms: [
        'Intermittent charging failures (no pattern)',
        'Charging sometimes stopping at random SOC%',
        'Reduced electric-only range (EV mode)',
        'No fault codes stored (intermittent)',
      ],
      recommendation: '立即检查高压电池的连接器和冷却系统密封性',
      consequence: '延误会导致高压连接器腐蚀加剧，可能引发高压系统故障，需要更换整个电池组（成本超过 $25,000）',
      author: '店长',
    },

    ownerAdvice: {
      title: 'Hybrid System Care',
      tips: [
        {
          icon: '🔌',
          title: 'Charge Regularly',
          description: 'Charge HV battery at least once per week to prevent cell imbalance and maintain battery health.',
        },
        {
          icon: '💧',
          title: 'Monitor Coolant Levels',
          description: 'Check HV battery coolant reservoir monthly. Coolant loss indicates potential leak near HV components.',
        },
      ],
    },
    technicalSpecs: {
      hvBatteryCapacity: '17.3 kWh',
      hvBatteryVoltage: '288-403V',
      chargingPower: '7.2 kW (240V)',
      electricRange: '24 miles (EPA)',
    },
    relatedCases: [],
    tags: ['Bentley', 'Bentayga', 'Hybrid', 'HV Charging', 'High Voltage'],
    shareImage: '/images/case-studies/bentayga-share.jpg',
  },

  {
    id: 'bentley-mulsanne-v8-timing-chain',
    slug: 'bentley-mulsanne-v8-timing-chain',
    brandSlug: 'bentley',
    modelId: 'bentley-mulsanne',
    featured: false,
    title: '2015 Bentley Mulsanne: 6.75L V8 Timing Chain Replacement',
    subtitle: 'Preventive timing chain service on iconic twin-turbo V8',
    excerpt: 'Preventive replacement of timing chain and guides on high-mileage Mulsanne V8 to prevent catastrophic failure.',
    coverImage: '/images/case-studies/mulsanne-hero.jpg',
    date: '2024-04-15',
    readTime: '7 min read',
    category: 'powertrain',
    difficulty: 'expert',
    laborHours: 18,
    vehicle: {
      year: 2015,
      make: 'Bentley',
      model: 'Mulsanne',
      vin: 'SCB***9988 (redacted)',
      mileage: 68900,
      color: 'Beluga Black / Newmarket Tan Hide',
    },
    problem: {
      eyebrow: 'The Challenge',
      title: 'Timing Chain Wear at High Mileage',
      description: [
        'Owner brought Mulsanne for preventive timing chain service after reading about common 60-70K mile chain failures on 6.75L V8. No symptoms present, but wanted to prevent catastrophic engine damage.',
      ],
      symptoms: ['No symptoms (preventive service)', 'Slight rattle on cold start (1-2 seconds)'],
      faultCodes: [],
    },
    diagnosis: {
      eyebrow: 'Investigation',
      title: 'Timing Chain Condition Assessment',
      steps: [
        {
          title: '1. Endoscope Inspection',
          description: 'Used borescope through spark plug holes to inspect timing chain guides. Found plastic guide wear exceeding 3mm (spec: replace at 2mm). Chain stretch measured at 1.2° (spec: replace at 1.0°).',
        },
      ],
      conclusion: 'Timing chain and guides showing age-appropriate wear. Preventive replacement recommended before catastrophic failure occurs (typically 75-85K miles on this engine).',
    },
    solution: {
      eyebrow: 'The Solution',
      title: 'Complete Timing Chain System Replacement',
      approach: 'Replace timing chain, guides, tensioners, and cam phasers with updated Bentley components.',
      procedures: [
        {
          title: 'Timing Chain Service',
          duration: '16 hours',
          description: 'Removed front covers, replaced timing chain, all guides, tensioners, cam phasers, and water pump (preventive). Set timing to factory spec using Bentley dial indicator tooling.',
          partsUsed: [
            'Timing Chain Kit (Iwis OEM)',
            'Cam Phaser Set (both banks)',
            'Timing Guide Set',
            'Tensioner Set',
            'Water Pump',
            'Front Cover Gasket Set',
          ],
        },
      ],
      totalLaborHours: 16,
      turnaroundTime: '5 days',
    },
    results: {
      eyebrow: 'The Outcome',
      title: 'Engine Longevity Secured',
      achievements: [
        'Timing chain replaced before failure',
        'Cold-start rattle eliminated',
        'Cam timing verified within 0.5° of spec',
        'Client secured another 60-80K miles of worry-free motoring',
      ],
    },

    // Mechanic's Expert Summary
    mechanicSummary: {
      symptoms: [
        'No symptoms (preventive service)',
        'Slight rattle on cold start (1-2 seconds)',
      ],
      recommendation: '立即检查正时链条的张紧器和导轨磨损情况',
      consequence: '延误会导致正时链条断裂，气门与活塞碰撞，需要完整发动机重建，维修成本超过 $50,000',
      author: '技术总监',
    },

    ownerAdvice: {
      title: 'Mulsanne V8 Maintenance',
      tips: [
        {
          icon: '🔗',
          title: 'Timing Chain Service at 60K Miles',
          description: 'Preventive replacement at 60-70K miles prevents costly engine rebuild from chain failure.',
        },
        {
          icon: '🛢️',
          title: 'Use Only VW 502.00 Spec Oil',
          description: 'Incorrect oil viscosity accelerates timing chain wear. Use only Mobil 1 0W-40 or equivalent.',
        },
      ],
    },
    technicalSpecs: {
      engineDisplacement: '6,750 cc (6.75L V8)',
      timingSystem: 'Single-row roller chain with VVT',
      camPhasers: 'Hydraulic dual cam phasers (intake & exhaust)',
      serviceInterval: '60-70K miles (preventive)',
    },
    relatedCases: [],
    tags: ['Bentley', 'Mulsanne', '6.75L V8', 'Timing Chain', 'Preventive Maintenance'],
    shareImage: '/images/case-studies/mulsanne-share.jpg',
  },

  // ==================== MAYBACH (Additional) ====================
  {
    id: 'maybach-s580-massaging-seat-repair',
    slug: 'maybach-s580-massaging-seat-repair',
    brandSlug: 'maybach',
    modelId: 'maybach-s580',
    featured: false,
    title: '2023 Maybach S580: Rear Seat Massaging System Fault',
    subtitle: 'Restoring executive rear seat comfort systems',
    excerpt: 'Complete rear seat massage system failure required harness repair and control module replacement.',
    coverImage: '/images/case-studies/maybach-s580-seat-hero.jpg',
    date: '2024-08-05',
    readTime: '5 min read',
    category: 'comfort',
    difficulty: 'intermediate',
    laborHours: 8,
    vehicle: {
      year: 2023,
      make: 'Mercedes-Maybach',
      model: 'S580 4MATIC',
      vin: 'WDD***4455 (redacted)',
      mileage: 12300,
      color: 'Selenite Grey / Nappa Leather Exclusive',
    },
    problem: {
      eyebrow: 'The Challenge',
      title: 'Rear Seat Massage System Complete Failure',
      description: [
        'Owner reported both rear massaging seats stopped functioning. MBUX display showed "Massage Function Unavailable."',
      ],
      symptoms: [
        'Both rear massage functions inoperative',
        'Massage menu greyed out in MBUX',
        'Seat position memory still functional',
      ],
      faultCodes: ['B1234: Rear Left Massage Module - Communication Lost', 'B1235: Rear Right Massage Module - No Signal'],
    },
    diagnosis: {
      eyebrow: 'Investigation',
      title: 'Seat Harness Diagnostic',
      steps: [
        {
          title: '1. Control Module Testing',
          description: 'Used XENTRY to ping massage modules - both modules unresponsive. Voltage test showed 0V at module connectors (spec: 12V).',
        },
        {
          title: '2. Harness Inspection',
          description: 'Removed rear seat bases and found chafed harness under seat rail mechanism. Wire insulation worn through from repeated seat adjustments.',
        },
      ],
      conclusion: 'Harness damage from seat travel caused short circuit, disabling both massage modules. Harness repair and module reset required.',
    },
    solution: {
      eyebrow: 'The Solution',
      title: 'Harness Repair and Module Replacement',
      approach: 'Repair damaged harness section, replace left module (internal damage from short), and recalibrate system.',
      procedures: [
        {
          title: 'Harness Repair',
          duration: '4 hours',
          description: 'Replaced damaged harness section with Mercedes updated routing design (TSB ref: LI51.20-P-074512). Added protective sleeving.',
          partsUsed: ['Seat Harness Repair Kit', 'Protective Conduit'],
        },
        {
          title: 'Module Replacement & Calibration',
          duration: '3 hours',
          description: 'Replaced left rear massage module (damaged by short circuit) and performed XENTRY calibration for both seats.',
          partsUsed: ['Massage Control Module Left (A2229006003)'],
        },
      ],
      totalLaborHours: 7,
      turnaroundTime: '2 days',
    },
    results: {
      eyebrow: 'The Outcome',
      title: 'Executive Comfort Restored',
      achievements: [
        'Both rear massage functions fully operational',
        'All 8 massage programs responding correctly',
        'Harness rerouted to prevent future chafing',
      ],
    },

    // Mechanic's Expert Summary
    mechanicSummary: {
      symptoms: [
        'Both rear massage functions inoperative',
        'Massage menu greyed out in MBUX',
        'Seat position memory still functional',
      ],
      recommendation: '立即检查座椅底部线束的磨损和短路情况',
      consequence: '延误会导致线束短路加剧，可能损坏座椅控制模块和其他电气系统',
      author: '店长',
    },

    ownerAdvice: {
      title: 'Maybach Seat Care',
      tips: [
        {
          icon: '🪑',
          title: 'Periodic Seat Inspection',
          description: 'Have seat base harnesses inspected every 20K miles to catch wear before failure.',
        },
        {
          icon: '⚙️',
          title: 'Avoid Excessive Seat Cycling',
          description: 'Limit memory preset cycling during car shows/demos to reduce harness wear.',
        },
      ],
    },
    technicalSpecs: {
      massagePrograms: '8 programs with 3 intensity levels',
      pneumaticChambers: '14 per seat',
      controlVoltage: '12V CAN-controlled',
    },
    relatedCases: [],
    tags: ['Maybach', 'S580', 'Massage Seats', 'Comfort Systems'],
    shareImage: '/images/case-studies/maybach-s580-share.jpg',
  },

  {
    id: 'maybach-s680-night-vision-calibration',
    slug: 'maybach-s680-night-vision-calibration',
    brandSlug: 'maybach',
    modelId: 'maybach-s680',
    featured: false,
    title: '2022 Maybach S680: Night View Assist Plus Calibration',
    subtitle: 'Restoring thermal imaging after windshield replacement',
    excerpt: 'Windshield replacement caused Night View Assist misalignment requiring specialized thermal camera calibration.',
    coverImage: '/images/case-studies/maybach-night-vision-hero.jpg',
    date: '2024-07-22',
    readTime: '4 min read',
    category: 'safety',
    difficulty: 'expert',
    laborHours: 4,
    vehicle: {
      year: 2022,
      make: 'Mercedes-Maybach',
      model: 'S680 4MATIC',
      vin: 'WDD***7766 (redacted)',
      mileage: 15600,
      color: 'Obsidian Black / Nappa Two-Tone',
    },
    problem: {
      eyebrow: 'The Challenge',
      title: 'Night View System Inoperative After Glass Replacement',
      description: [
        'After windshield replacement by third-party glass shop, Night View Assist Plus showed "Camera Blocked" warning and displayed no thermal image.',
      ],
      symptoms: [
        'Night View display blank',
        'Camera Blocked warning persistent',
        'Pedestrian detection alerts inactive',
      ],
      faultCodes: ['C1A67: Night View Camera - Misalignment Detected'],
    },
    diagnosis: {
      eyebrow: 'Investigation',
      title: 'Thermal Camera Alignment Check',
      steps: [
        {
          title: '1. Camera Mounting Inspection',
          description: 'Verified thermal camera physically secure in grille housing. Glass shop had not touched camera hardware.',
        },
        {
          title: '2. Calibration Status Check',
          description: 'XENTRY showed camera calibration values out of tolerance after windshield HUD recalibration. HUD and Night View share alignment parameters.',
        },
      ],
      conclusion: 'Windshield HUD calibration altered shared geometry values, requiring separate Night View camera recalibration.',
    },
    solution: {
      eyebrow: 'The Solution',
      title: 'Night View Thermal Camera Recalibration',
      approach: 'Perform Mercedes ADAS calibration protocol for thermal imaging camera system.',
      procedures: [
        {
          title: 'Thermal Camera Calibration',
          duration: '3 hours',
          description: 'Used XENTRY SCN coding and Mercedes thermal calibration panel to re-establish camera aim point and thermal sensitivity.',
          toolsUsed: ['XENTRY Diagnostics', 'Mercedes Thermal Calibration Panel', 'Laser Alignment Tools'],
        },
      ],
      totalLaborHours: 3,
      turnaroundTime: '1 day',
    },
    results: {
      eyebrow: 'The Outcome',
      title: 'Night Vision Fully Restored',
      achievements: [
        'Thermal image display operational',
        'Pedestrian/animal detection active',
        'Camera calibration within Mercedes spec',
        'All ADAS functions verified operational',
      ],
    },

    // Mechanic's Expert Summary
    mechanicSummary: {
      symptoms: [
        'Night View display blank',
        'Camera Blocked warning persistent',
        'Pedestrian detection alerts inactive',
      ],
      recommendation: '立即检查夜视热成像摄像头的校准状态和对准参数',
      consequence: '延误会导致夜间行驶安全功能失效，无法检测行人和动物，增加事故风险',
      author: '技术总监',
    },

    ownerAdvice: {
      title: 'ADAS Maintenance After Glass Work',
      tips: [
        {
          icon: '📹',
          title: 'Always Recalibrate After Windshield Replacement',
          description: 'HUD and Night View systems MUST be recalibrated after any windshield work, even if camera wasn\'t touched.',
        },
        {
          icon: '🏪',
          title: 'Use MB-Certified Glass Shops',
          description: 'Only use glass shops with Mercedes ADAS calibration equipment to avoid post-repair issues.',
        },
      ],
    },
    technicalSpecs: {
      cameraType: 'Far-Infrared Thermal (FLIR-based)',
      detectionRange: '500 meters',
      thermalSensitivity: '< 0.05°C',
      calibrationTolerance: '±0.1° horizontal/vertical',
    },
    relatedCases: [],
    tags: ['Maybach', 'S680', 'Night Vision', 'ADAS', 'Calibration'],
    shareImage: '/images/case-studies/maybach-night-vision-share.jpg',
  },

  {
    id: 'maybach-gls600-air-suspension-leak',
    slug: 'maybach-gls600-air-suspension-leak',
    brandSlug: 'maybach',
    modelId: 'maybach-gls600',
    featured: false,
    title: '2021 Maybach GLS600: E-ACTIVE Body Control Air Spring Leak',
    subtitle: 'Repairing air spring failure on ultra-luxury SUV',
    excerpt: 'Rear air spring leak causing vehicle sag required replacement with updated design and system recalibration.',
    coverImage: '/images/case-studies/maybach-gls-hero.jpg',
    date: '2024-06-18',
    readTime: '5 min read',
    category: 'suspension',
    difficulty: 'intermediate',
    laborHours: 6,
    vehicle: {
      year: 2021,
      make: 'Mercedes-Maybach',
      model: 'GLS600 4MATIC',
      vin: 'WDD***3322 (redacted)',
      mileage: 31200,
      color: 'Designo Diamond White / Nappa Black/Macchiato',
    },
    problem: {
      eyebrow: 'The Challenge',
      title: 'Rear Air Spring Leak Causing Vehicle Sag',
      description: [
        'Owner reported vehicle sitting low in rear after overnight parking. "AIRMATIC Visit Workshop" warning appeared. Compressor running excessively.',
      ],
      symptoms: [
        'Rear end sagging after sitting',
        'Compressor cycling every 5 minutes',
        'AIRMATIC warning on cluster',
        'E-ACTIVE curve function degraded',
      ],
      faultCodes: ['C1525: Air Spring Rear Right - Pressure Loss'],
    },
    diagnosis: {
      eyebrow: 'Investigation',
      title: 'Air Spring Leak Detection',
      steps: [
        {
          title: '1. Soap Test',
          description: 'Applied soapy water solution to all air springs and lines. Found leak at upper crimp seal of right rear air spring.',
        },
        {
          title: '2. System Pressure Test',
          description: 'Monitored system pressure with XENTRY - confirmed 0.5 bar loss per hour from rear right corner (spec: <0.1 bar/hour).',
        },
      ],
      conclusion: 'Upper crimp seal failure on rear right air spring. Common failure point at 30-40K miles due to E-ACTIVE high-frequency damping cycles.',
    },
    solution: {
      eyebrow: 'The Solution',
      title: 'Air Spring Replacement with Updated Design',
      approach: 'Replace failed air spring with Mercedes updated reinforced crimp design (running change part number).',
      procedures: [
        {
          title: 'Air Spring Replacement',
          duration: '4 hours',
          description: 'Raised vehicle, depressurized air system, replaced right rear air spring with updated part (A1663200425), and refilled/bled system.',
          partsUsed: ['Air Spring Rear Right (A1663200425 - Updated)', 'Air Spring Clip Kit'],
        },
        {
          title: 'E-ACTIVE Recalibration',
          duration: '1.5 hours',
          description: 'Performed XENTRY E-ACTIVE BODY CONTROL recalibration to re-establish ride height sensors and damping parameters.',
        },
      ],
      totalLaborHours: 5.5,
      turnaroundTime: '2 days',
    },
    results: {
      eyebrow: 'The Outcome',
      title: 'Air Suspension Restored',
      achievements: [
        'Rear ride height stable overnight',
        'Compressor duty cycle normal (1-2 cycles/hour)',
        'E-ACTIVE curve tilting fully functional',
        'All fault codes cleared',
      ],
    },

    // Mechanic's Expert Summary
    mechanicSummary: {
      symptoms: [
        'Rear end sagging after sitting',
        'Compressor cycling every 5 minutes',
        'AIRMATIC warning on cluster',
        'E-ACTIVE curve function degraded',
      ],
      recommendation: '立即检查空气弹簧的压接密封件和系统压力损失',
      consequence: '延误会导致空气压缩机过度工作而损坏，车辆无法保持正常高度，维修成本增加数倍',
      author: '店长',
    },

    ownerAdvice: {
      title: 'Maybach Air Suspension Care',
      tips: [
        {
          icon: '🔍',
          title: 'Inspect Air Springs Annually',
          description: 'Visual inspection at 30K miles catches early cracks/leaks before complete failure.',
        },
        {
          icon: '🚗',
          title: 'Avoid Excessive "High" Mode Use',
          description: 'Extended use of High ride setting increases air spring stress and shortens lifespan.',
        },
      ],
    },
    technicalSpecs: {
      suspensionType: 'E-ACTIVE BODY CONTROL with 48V',
      airSpringPressure: '16 bar max',
      rideHeightRange: '80mm adjustment',
      dampingFrequency: 'Up to 5 Hz active control',
    },
    relatedCases: [],
    tags: ['Maybach', 'GLS600', 'Air Suspension', 'E-ACTIVE', 'Air Spring'],
    shareImage: '/images/case-studies/maybach-gls-share.jpg',
  },

  // ==================== ROLLS-ROYCE (Additional) ====================
  {
    id: 'rolls-royce-ghost-satellite-aided-transmission',
    slug: 'rolls-royce-ghost-satellite-aided-transmission',
    brandSlug: 'rolls-royce',
    modelId: 'rolls-royce-ghost',
    featured: false,
    title: '2021 Rolls-Royce Ghost: Satellite Aided Transmission Fault',
    subtitle: 'Restoring GPS-assisted gearbox pre-selection',
    excerpt: 'GPS antenna failure disabled Satellite Aided Transmission, requiring antenna and module replacement.',
    coverImage: '/images/case-studies/ghost-sat-hero.jpg',
    date: '2024-08-14',
    readTime: '6 min read',
    category: 'drivetrain',
    difficulty: 'expert',
    laborHours: 7,
    vehicle: {
      year: 2021,
      make: 'Rolls-Royce',
      model: 'Ghost Extended',
      vin: 'SCA***4466 (redacted)',
      mileage: 14200,
      color: 'Andalusian White / Navy Blue Leather',
    },
    problem: {
      eyebrow: 'The Challenge',
      title: 'SAT System Malfunction - Gearbox Pre-Selection Lost',
      description: [
        'Owner noticed transmission no longer downshifting in anticipation of corners. "Gearbox Fault" message appeared intermittently. Rolls-Royce dealer confirmed SAT system offline.',
      ],
      symptoms: [
        'Transmission no longer pre-selecting gears for corners',
        'GPS navigation showing "No GPS Signal"',
        'Gearbox Fault warning (intermittent)',
        'Loss of predictive gear selection behavior',
      ],
      faultCodes: ['P1770: SAT System - GPS Signal Lost', 'U0100: GPS Module - No Communication'],
    },
    diagnosis: {
      eyebrow: 'Investigation',
      title: 'SAT System Diagnostic',
      steps: [
        {
          title: '1. GPS Signal Testing',
          description: 'Confirmed zero GPS satellites detected by vehicle systems. Navigation system also affected. Points to GPS antenna failure.',
        },
        {
          title: '2. Antenna Inspection',
          description: 'Removed roof liner and found GPS antenna connector corroded (water intrusion from panoramic roof drain). Antenna module showing internal corrosion.',
        },
      ],
      conclusion: 'Clogged panoramic roof drain allowed water intrusion to GPS antenna housing, corroding antenna and disabling all GPS-dependent systems including SAT.',
    },
    solution: {
      eyebrow: 'The Solution',
      title: 'GPS Antenna Replacement and Drain Service',
      approach: 'Replace GPS antenna, clean roof drains, and recalibrate SAT system.',
      procedures: [
        {
          title: 'Roof Drain Service',
          duration: '2 hours',
          description: 'Cleared all four panoramic roof drains using compressed air and flexible cleaning wire. Tested water flow.',
        },
        {
          title: 'GPS Antenna Replacement',
          duration: '4 hours',
          description: 'Replaced GPS antenna module (part# 65509395645) and connector. Resealed roof liner penetrations.',
          partsUsed: ['GPS Antenna Module (65509395645)', 'Antenna Connector', 'Roof Seal Kit'],
        },
        {
          title: 'SAT Recalibration',
          duration: '1 hour',
          description: 'Performed Rolls-Royce diagnostic tool recalibration for SAT system after GPS signal restored.',
        },
      ],
      totalLaborHours: 7,
      turnaroundTime: '3 days',
    },
    results: {
      eyebrow: 'The Outcome',
      title: 'SAT System Fully Operational',
      achievements: [
        'GPS signal acquiring 12+ satellites',
        'SAT pre-selecting gears correctly for upcoming terrain',
        'Navigation system restored',
        'Roof drains clear - no water intrusion risk',
      ],
    },

    // Mechanic's Expert Summary
    mechanicSummary: {
      symptoms: [
        'Transmission no longer pre-selecting gears for corners',
        'GPS navigation showing "No GPS Signal"',
        'Gearbox Fault warning (intermittent)',
        'Loss of predictive gear selection behavior',
      ],
      recommendation: '立即检查 GPS 天线和全景天窗排水系统',
      consequence: '延误会导致水侵蚀加剧，损坏更多电子模块，失去劳斯莱斯独有的卫星辅助变速功能',
      author: '技术总监',
    },

    ownerAdvice: {
      title: 'Rolls-Royce Panoramic Roof Maintenance',
      tips: [
        {
          icon: '💧',
          title: 'Clean Roof Drains Every 12 Months',
          description: 'Panoramic roof drains clog with debris and cause expensive water damage. Annual cleaning prevents this.',
        },
        {
          icon: '📡',
          title: 'SAT System Requires GPS',
          description: 'If navigation shows "No GPS", SAT will not function. Address GPS issues immediately.',
        },
      ],
    },
    technicalSpecs: {
      gpsAccuracy: '±3 meters',
      satPreSelectionTime: '500 meters ahead',
      transmission: 'ZF 8HP 8-speed with SAT integration',
    },
    relatedCases: [],
    tags: ['Rolls-Royce', 'Ghost', 'SAT', 'GPS', 'Transmission'],
    shareImage: '/images/case-studies/ghost-sat-share.jpg',
  },

  {
    id: 'rolls-royce-cullinan-air-suspension-compressor',
    slug: 'rolls-royce-cullinan-air-suspension-compressor',
    brandSlug: 'rolls-royce',
    modelId: 'rolls-royce-cullinan',
    featured: false,
    title: '2020 Rolls-Royce Cullinan: Air Suspension Compressor Failure',
    subtitle: 'Restoring Magic Carpet Ride to the ultra-luxury SUV',
    excerpt: 'Complete air suspension compressor failure required replacement and full system calibration.',
    coverImage: '/images/case-studies/cullinan-air-hero.jpg',
    date: '2024-07-08',
    readTime: '7 min read',
    category: 'suspension',
    difficulty: 'expert',
    laborHours: 9,
    vehicle: {
      year: 2020,
      make: 'Rolls-Royce',
      model: 'Cullinan',
      vin: 'SCA***8899 (redacted)',
      mileage: 22100,
      color: 'Black Diamond / Seashell Leather',
    },
    problem: {
      eyebrow: 'The Challenge',
      title: 'Complete Air Suspension System Failure',
      description: [
        'Vehicle sitting on bump stops all four corners. "Air Suspension Inactive - Visit Workshop" warning. Compressor running continuously but generating no pressure.',
      ],
      symptoms: [
        'Vehicle sagged to minimum height',
        'Compressor motor running constantly',
        'No ride height adjustment possible',
        'Harsh ride quality (on bump stops)',
      ],
      faultCodes: ['C1A12: Air Suspension Compressor - Insufficient Pressure', 'C1A25: Air Supply System - Leak Detected'],
    },
    diagnosis: {
      eyebrow: 'Investigation',
      title: 'Compressor and System Pressure Testing',
      steps: [
        {
          title: '1. Pressure Test',
          description: 'Connected pressure gauge to system - compressor unable to generate above 3 bar (spec: 16 bar). Compressor motor operational but no compression.',
        },
        {
          title: '2. Compressor Inspection',
          description: 'Removed compressor and found piston ring failure. Internal scoring on cylinder wall from metal debris (likely from piston ring fragments).',
        },
      ],
      conclusion: 'Compressor piston seal failure at 22K miles. Common on 2019-2020 Cullinans due to supplier defect (BMW/RR issued silent recall for 2021+ models with updated design).',
    },
    solution: {
      eyebrow: 'The Solution',
      title: 'Air Compressor Replacement with Updated Unit',
      approach: 'Replace failed compressor with Rolls-Royce updated 2021+ design featuring reinforced piston seals.',
      procedures: [
        {
          title: 'Compressor Removal and Replacement',
          duration: '5 hours',
          description: 'Removed luggage floor and side panels to access compressor. Replaced with updated unit (part# 37206889382). Cleaned air dryer.',
          partsUsed: ['Air Suspension Compressor Updated (37206889382)', 'Air Dryer Cartridge', 'Compressor Relay'],
        },
        {
          title: 'System Calibration',
          duration: '3 hours',
          description: 'Performed Rolls-Royce ISTA calibration for air suspension, including ride height calibration at all four corners and self-leveling verification.',
        },
      ],
      totalLaborHours: 8,
      turnaroundTime: '4 days (special order compressor)',
    },
    results: {
      eyebrow: 'The Outcome',
      title: 'Magic Carpet Ride Restored',
      achievements: [
        'System pressure stable at 16 bar',
        'All ride height modes functional',
        'Self-leveling operational',
        'Compressor duty cycle normal',
      ],
    },

    // Mechanic's Expert Summary
    mechanicSummary: {
      symptoms: [
        'Vehicle sagged to minimum height',
        'Compressor motor running constantly',
        'No ride height adjustment possible',
        'Harsh ride quality (on bump stops)',
      ],
      recommendation: '立即检查空气悬挂压缩机的活塞密封件和压力输出能力',
      consequence: '延误会导致压缩机电机烧毁，车辆完全无法行驶，需要拖车救援',
      author: '店长',
    },

    ownerAdvice: {
      title: 'Cullinan Air Suspension Care',
      tips: [
        {
          icon: '🔧',
          title: 'Check TSB for Compressor Update',
          description: '2019-2020 Cullinans may be eligible for goodwill compressor replacement even outside warranty.',
        },
        {
          icon: '⏱️',
          title: 'Listen for Excessive Compressor Runtime',
          description: 'If compressor runs longer than 2 minutes during startup, have system inspected immediately.',
        },
      ],
    },
    technicalSpecs: {
      compressorType: 'AMK Twin-Piston',
      maxPressure: '16 bar (232 PSI)',
      rideHeightRange: '60mm total adjustment',
      systemCapacity: '8 liters compressed air',
    },
    relatedCases: [],
    tags: ['Rolls-Royce', 'Cullinan', 'Air Suspension', 'Compressor'],
    shareImage: '/images/case-studies/cullinan-air-share.jpg',
  },

  {
    id: 'rolls-royce-wraith-starlight-headliner-repair',
    slug: 'rolls-royce-wraith-starlight-headliner-repair',
    brandSlug: 'rolls-royce',
    modelId: 'rolls-royce-wraith',
    featured: false,
    title: '2019 Rolls-Royce Wraith: Starlight Headliner LED Repair',
    subtitle: 'Restoring the iconic fiber-optic starlight ceiling',
    excerpt: 'Multiple starlight LED failures required partial fiber-optic panel replacement and control module repair.',
    coverImage: '/images/case-studies/wraith-starlight-hero.jpg',
    date: '2024-05-30',
    readTime: '6 min read',
    category: 'electrical',
    difficulty: 'expert',
    laborHours: 12,
    vehicle: {
      year: 2019,
      make: 'Rolls-Royce',
      model: 'Wraith Black Badge',
      vin: 'SCA***5577 (redacted)',
      mileage: 18900,
      color: 'Gunmetal / Black Leather',
    },
    problem: {
      eyebrow: 'The Challenge',
      title: 'Starlight Headliner Dark Zones',
      description: [
        'Owner reported approximately 200 "stars" (fiber-optic lights) inoperative in passenger-side headliner. Created noticeable dark patch in starfield.',
      ],
      symptoms: [
        'Dark zone in passenger-side starlight headliner',
        'Approximately 200 fiber-optic points dark',
        'Remaining stars functioning normally',
        'Shooting star feature still operational',
      ],
      faultCodes: [],
    },
    diagnosis: {
      eyebrow: 'Investigation',
      title: 'Fiber-Optic System Diagnosis',
      steps: [
        {
          title: '1. LED Light Engine Test',
          description: 'Accessed trunk-mounted LED light engine. Found one of four LED modules (passenger-side module) completely dark. Module failed internally.',
        },
        {
          title: '2. Fiber Bundle Inspection',
          description: 'Inspected fiber-optic bundles - all intact. Dark zone caused purely by LED module failure, not fiber damage.',
        },
      ],
      conclusion: 'LED module failure (common at 5-6 years due to heat cycles). Module not serviceable - requires replacement as complete assembly.',
    },
    solution: {
      eyebrow: 'The Solution',
      title: 'Starlight LED Module Replacement',
      approach: 'Replace failed LED module and perform light distribution calibration.',
      procedures: [
        {
          title: 'LED Module Replacement',
          duration: '6 hours',
          description: 'Removed trunk trim to access light engine. Replaced passenger-side LED module (part# 63319246554). Verified fiber bundle seating.',
          partsUsed: ['Starlight LED Module (63319246554)', 'Fiber Optic Connector Seal'],
        },
        {
          title: 'Light Distribution Calibration',
          duration: '2 hours',
          description: 'Used Rolls-Royce ISTA tool to calibrate brightness distribution across all four LED modules for even starfield appearance.',
        },
      ],
      totalLaborHours: 8,
      turnaroundTime: '5 days (special order LED module)',
    },
    results: {
      eyebrow: 'The Outcome',
      title: 'Starfield Fully Illuminated',
      achievements: [
        'All 1,340 fiber-optic stars illuminated',
        'Even brightness distribution across headliner',
        'Shooting star animation functional',
        'Original starfield pattern restored',
      ],
    },

    // Mechanic's Expert Summary
    mechanicSummary: {
      symptoms: [
        'Dark zone in passenger-side starlight headliner',
        'Approximately 200 fiber-optic points dark',
        'Remaining stars functioning normally',
        'Shooting star feature still operational',
      ],
      recommendation: '立即检查星光顶 LED 光引擎模块的工作状态',
      consequence: '延误可能导致更多 LED 模块失效，失去劳斯莱斯标志性的星光车顶体验',
      author: '技术总监',
    },

    ownerAdvice: {
      title: 'Starlight Headliner Care',
      tips: [
        {
          icon: '✨',
          title: 'LED Modules Have Limited Lifespan',
          description: 'Starlight LED modules typically last 6-8 years. Failure is normal wear, not a defect.',
        },
        {
          icon: '🚫',
          title: 'Never Attempt DIY Repair',
          description: 'Starlight system requires specialized RR tools for calibration. DIY attempts will cause uneven lighting.',
        },
      ],
    },
    technicalSpecs: {
      fiberOpticPoints: '1,340 individual strands',
      ledModules: '4 (one per headliner quadrant)',
      ledLifespan: '50,000 hours typical',
      shootingStarSpeed: 'Randomized 3-7 second cycle',
    },
    relatedCases: [],
    tags: ['Rolls-Royce', 'Wraith', 'Starlight Headliner', 'LED', 'Fiber Optic'],
    shareImage: '/images/case-studies/wraith-starlight-share.jpg',
  },

  {
    id: 'rolls-royce-phantom-spirit-of-ecstasy-actuator',
    slug: 'rolls-royce-phantom-spirit-of-ecstasy-actuator',
    brandSlug: 'rolls-royce',
    modelId: 'rolls-royce-phantom',
    featured: false,
    title: '2018 Rolls-Royce Phantom: Spirit of Ecstasy Retraction Failure',
    subtitle: 'Repairing the iconic motorized hood ornament',
    excerpt: 'Spirit of Ecstasy failed to retract into grille, requiring actuator motor and sensor replacement.',
    coverImage: '/images/case-studies/phantom-soe-hero.jpg',
    date: '2024-04-25',
    readTime: '5 min read',
    category: 'electrical',
    difficulty: 'intermediate',
    laborHours: 5,
    vehicle: {
      year: 2018,
      make: 'Rolls-Royce',
      model: 'Phantom VIII',
      vin: 'SCA***6688 (redacted)',
      mileage: 26700,
      color: 'English White / Seashell Leather',
    },
    problem: {
      eyebrow: 'The Challenge',
      title: 'Spirit of Ecstasy Won\'t Retract',
      description: [
        'Owner reported Spirit of Ecstasy ornament failing to retract when vehicle locked. Ornament stuck in raised position, creating theft and damage risk.',
      ],
      symptoms: [
        'Spirit of Ecstasy remains raised when locked',
        'Audible motor grinding noise when lock attempted',
        'Manual retraction button in glovebox inoperative',
        'Warning: "Spirit of Ecstasy Malfunction"',
      ],
      faultCodes: ['B3A12: Spirit of Ecstasy Actuator - Position Sensor Fault'],
    },
    diagnosis: {
      eyebrow: 'Investigation',
      title: 'Actuator Mechanism Diagnosis',
      steps: [
        {
          title: '1. Actuator Motor Test',
          description: 'Accessed actuator beneath grille. Motor operational but position sensor showing erratic values. Sensor unable to detect retracted position.',
        },
        {
          title: '2. Mechanical Inspection',
          description: 'Manual actuation revealed binding in retraction mechanism. Corrosion found on position sensor magnet from water intrusion.',
        },
      ],
      conclusion: 'Position sensor failure due to water intrusion (car wash or rain with open grille vent). Sensor replacement required.',
    },
    solution: {
      eyebrow: 'The Solution',
      title: 'Actuator Position Sensor Replacement',
      approach: 'Replace position sensor assembly and reseal actuator housing.',
      procedures: [
        {
          title: 'Actuator Service',
          duration: '4 hours',
          description: 'Removed grille surround to access actuator. Replaced position sensor assembly (part# 51647285876) and resealed housing with updated gasket.',
          partsUsed: ['Spirit of Ecstasy Position Sensor (51647285876)', 'Actuator Housing Gasket', 'Dielectric Grease'],
        },
        {
          title: 'Recalibration',
          duration: '1 hour',
          description: 'Performed ISTA recalibration to establish new sensor end-stop positions.',
        },
      ],
      totalLaborHours: 5,
      turnaroundTime: '2 days',
    },
    results: {
      eyebrow: 'The Outcome',
      title: 'Retraction Mechanism Restored',
      achievements: [
        'Spirit of Ecstasy retracts/extends smoothly',
        'Position sensor reading correctly',
        'Manual button functional',
        'Actuator sealed against water intrusion',
      ],
    },

    // Mechanic's Expert Summary
    mechanicSummary: {
      symptoms: [
        'Spirit of Ecstasy remains raised when locked',
        'Audible motor grinding noise when lock attempted',
        'Manual retraction button in glovebox inoperative',
        'Warning: "Spirit of Ecstasy Malfunction"',
      ],
      recommendation: '立即检查欢庆女神伸缩执行器的位置传感器和密封性',
      consequence: '延误会导致欢庆女神被盗或损坏，执行器电机过热烧毁',
      author: '店长',
    },

    ownerAdvice: {
      title: 'Spirit of Ecstasy Care',
      tips: [
        {
          icon: '💧',
          title: 'Avoid Pressure Washers Near Grille',
          description: 'High-pressure water can enter actuator housing and damage position sensor.',
        },
        {
          icon: '🔄',
          title: 'Test Retraction Monthly',
          description: 'Use glovebox button monthly to verify smooth operation. Catch issues early.',
        },
      ],
    },
    technicalSpecs: {
      actuatorType: 'Stepper motor with Hall Effect sensor',
      retractedPosition: 'Fully concealed in grille housing',
      retractTime: '2.5 seconds',
      illumination: 'LED backlight (when extended)',
    },
    relatedCases: [],
    tags: ['Rolls-Royce', 'Phantom', 'Spirit of Ecstasy', 'Actuator'],
    shareImage: '/images/case-studies/phantom-soe-share.jpg',
  },

  // ==================== BENTLEY (Additional - need 1 more) ====================
  {
    id: 'bentley-continental-gtc-convertible-top-hydraulics',
    slug: 'bentley-continental-gtc-convertible-top-hydraulics',
    brandSlug: 'bentley',
    modelId: 'bentley-continental-gtc',
    featured: false,
    title: '2019 Bentley Continental GTC: Convertible Top Hydraulic Failure',
    subtitle: 'Repairing complex power-folding roof system',
    excerpt: 'Convertible top stuck mid-cycle required hydraulic pump and ram replacement.',
    coverImage: '/images/case-studies/bentley-gtc-hero.jpg',
    date: '2024-06-28',
    readTime: '7 min read',
    category: 'convertible',
    difficulty: 'expert',
    laborHours: 11,
    vehicle: {
      year: 2019,
      make: 'Bentley',
      model: 'Continental GTC W12',
      vin: 'SCB***4477 (redacted)',
      mileage: 19400,
      color: 'St. James Red / Beluga Leather',
    },
    problem: {
      eyebrow: 'The Challenge',
      title: 'Convertible Top Stuck Half-Open',
      description: [
        'Top stopped mid-retraction cycle with error "Convertible Top Malfunction - Close Manually." Unable to complete retraction or raise top. Vehicle stuck with exposed interior.',
      ],
      symptoms: [
        'Top stuck at 45° angle (partially open)',
        'Hydraulic pump running but no movement',
        'Error message: "Close Manually"',
        'Trunk lid partially raised',
      ],
      faultCodes: ['B1234: Convertible Top - Hydraulic Pressure Loss', 'B1237: Convertible Top Hydraulic Ram Rear - Position Timeout'],
    },
    diagnosis: {
      eyebrow: 'Investigation',
      title: 'Hydraulic System Diagnosis',
      steps: [
        {
          title: '1. Hydraulic Pressure Test',
          description: 'Connected pressure gauge to hydraulic system. Pump building pressure to only 80 bar (spec: 200 bar). Pressure immediately dropping when pump stops.',
        },
        {
          title: '2. Hydraulic Ram Inspection',
          description: 'Found hydraulic fluid leaking from rear ram seal. Ram piston seal failed, causing pressure loss and preventing top movement.',
        },
      ],
      conclusion: 'Rear hydraulic ram seal failure caused pressure loss. Pump also showing wear from running overloaded trying to compensate. Both components require replacement.',
    },
    solution: {
      eyebrow: 'The Solution',
      title: 'Hydraulic Pump and Ram Replacement',
      approach: 'Replace failed rear ram, replace worn hydraulic pump, and recalibrate top system.',
      procedures: [
        {
          title: 'Hydraulic Component Replacement',
          duration: '8 hours',
          description: 'Removed rear seat and trunk panels to access hydraulic system. Replaced rear ram (3W7871791) and pump assembly (3W0871795). Flushed and refilled hydraulic system.',
          partsUsed: ['Hydraulic Ram Rear (3W7871791)', 'Hydraulic Pump Assembly (3W0871795)', 'Hydraulic Fluid (2L Pentosin CHF202)'],
        },
        {
          title: 'Top Recalibration',
          duration: '2 hours',
          description: 'Performed VAS-guided convertible top calibration cycle to re-establish limit switches and hydraulic pressure curves.',
        },
      ],
      totalLaborHours: 10,
      turnaroundTime: '6 days (hydraulic pump special order)',
    },
    results: {
      eyebrow: 'The Outcome',
      title: 'Convertible Top Fully Operational',
      achievements: [
        'Top opening/closing smoothly (19-second cycle)',
        'Hydraulic pressure stable at 200 bar',
        'All limit switches operational',
        'No leaks after 50+ test cycles',
      ],
    },

    // Mechanic's Expert Summary
    mechanicSummary: {
      symptoms: [
        'Top stuck at 45° angle (partially open)',
        'Hydraulic pump running but no movement',
        'Error message: "Close Manually"',
        'Trunk lid partially raised',
      ],
      recommendation: '立即检查敞篷顶液压系统的油缸密封件和液压泵压力',
      consequence: '延误会导致液压泵过载损坏，车辆内饰暴露在外受损，维修成本翻倍',
      author: '技术总监',
    },

    ownerAdvice: {
      title: 'Convertible Top Care',
      tips: [
        {
          icon: '🔧',
          title: 'Cycle Top Monthly (Even in Winter)',
          description: 'Monthly operation keeps hydraulic seals lubricated and prevents seal dry-rot.',
        },
        {
          icon: '🅿️',
          title: 'Avoid Operating on Inclines',
          description: 'Operating top on steep inclines increases hydraulic system stress and accelerates wear.',
        },
      ],
    },
    technicalSpecs: {
      hydraulicPressure: '200 bar (2,900 PSI)',
      cycleTime: '19 seconds (open or close)',
      ramCount: '4 (2 main, 2 locking)',
      fluidType: 'Pentosin CHF 202',
    },
    relatedCases: [],
    tags: ['Bentley', 'Continental GTC', 'Convertible Top', 'Hydraulics'],
    shareImage: '/images/case-studies/bentley-gtc-share.jpg',
  },

  // ==================== LAMBORGHINI ====================
  {
    id: 'lamborghini-aventador-engine-fire-rebuild',
    slug: 'lamborghini-aventador-engine-fire-rebuild',
    brandSlug: 'lamborghini',
    modelId: 'lamborghini-aventador',
    featured: true,
    featuredRank: 7,
    title: '2018 Lamborghini Aventador S: Engine Fire Repair & Rebuild',
    subtitle: 'Complete engine bay restoration after exhaust-induced fire',
    excerpt: 'Exhaust heat shield failure caused engine fire requiring complete wiring harness replacement and carbon fiber bodywork repair.',
    coverImage: '/images/case-studies/aventador-fire-hero.jpg',
    date: '2024-09-10',
    readTime: '10 min read',
    category: 'fire-damage',
    difficulty: 'expert',
    laborHours: 62,
    vehicle: {
      year: 2018,
      make: 'Lamborghini',
      model: 'Aventador S',
      vin: 'ZHW***2233 (redacted)',
      mileage: 6400,
      color: 'Giallo Orion / Black Alcantara',
    },
    problem: {
      eyebrow: 'The Challenge',
      title: 'Engine Bay Fire From Exhaust Heat Shield Failure',
      description: [
        'Owner noticed smoke from engine bay during highway cruise. Pulled over and fire erupted from passenger-side engine compartment. Fire extinguisher deployed but significant damage to wiring, fuel lines, and carbon fiber engine cover.',
        'Initial inspection revealed exhaust heat shield had detached, allowing 1000°C exhaust gases to contact wiring harness and carbon fiber components.',
      ],
      symptoms: [
        'Smoke and flames from engine bay',
        'Complete electrical failure',
        'Melted wiring harness',
        'Damaged carbon fiber engine cover and rear clamshell',
        'Fuel smell from damaged fuel line insulation',
      ],
      faultCodes: ['Multiple CAN communication faults - all control modules offline'],
    },
    diagnosis: {
      eyebrow: 'Investigation',
      title: 'Fire Damage Assessment',
      steps: [
        {
          title: '1. Exhaust System Inspection',
          description: 'Found passenger-side exhaust heat shield mounting bolts failed due to vibration. Heat shield dropped onto harness area. Known issue on 2017-2018 Aventador S models (Lamborghini TSB LM-18-042).',
        },
        {
          title: '2. Electrical Damage Assessment',
          description: 'Complete engine bay harness destroyed. Rear body control module melted. Fuel injector harness compromised. Estimated 90% of engine bay wiring required replacement.',
        },
        {
          title: '3. Carbon Fiber Damage',
          description: 'Engine cover severely heat-damaged. Rear clamshell showed burn marks but structurally intact. Left rear quarter panel carbon fiber blistered.',
        },
      ],
      conclusion: 'Heat shield failure (known TSB issue) caused catastrophic fire. Required complete engine bay rewiring, carbon fiber bodywork replacement, and exhaust system upgrade.',
    },
    solution: {
      eyebrow: 'The Solution',
      title: 'Complete Engine Bay Restoration',
      approach: 'Full electrical system replacement, carbon fiber bodywork repair, and exhaust system upgrade with Lamborghini updated heat shield design.',
      procedures: [
        {
          title: 'Phase 1: Engine Removal',
          duration: '12 hours',
          description: 'Removed engine, transmission, and exhaust system to access damaged wiring and components. Documented all connection points.',
        },
        {
          title: 'Phase 2: Wiring Harness Replacement',
          duration: '28 hours',
          description: 'Replaced complete engine bay harness, rear body harness, and fuel system wiring. Installed new rear body control module and all damaged sensors.',
          partsUsed: [
            'Engine Bay Harness Complete (470971279)',
            'Rear Body Harness (470971235)',
            'Body Control Module Rear (470907063M)',
            'Engine Harness Clips/Mounts Kit',
          ],
        },
        {
          title: 'Phase 3: Carbon Fiber Repair',
          duration: '16 hours',
          description: 'Replaced engine cover carbon fiber panel. Repaired and refinished rear clamshell and quarter panel using OEM Lamborghini carbon weave.',
          partsUsed: ['Engine Cover Carbon Fiber (470817111)', 'Carbon Fiber Repair Kit', 'OEM Clear Coat'],
        },
        {
          title: 'Phase 4: Exhaust System Upgrade',
          duration: '6 hours',
          description: 'Installed Lamborghini updated exhaust with revised heat shield design (TSB LM-18-042). Includes upgraded mounting hardware and additional clearance.',
          partsUsed: ['Heat Shield Kit Updated (470253466B)', 'Exhaust Mounting Hardware Upg Kit'],
        },
      ],
      totalLaborHours: 62,
      turnaroundTime: '6 weeks (carbon fiber parts special order)',
    },
    results: {
      eyebrow: 'The Outcome',
      title: 'Aventador Fully Restored',
      achievements: [
        'All electrical systems operational',
        'Carbon fiber bodywork indistinguishable from original',
        'Updated exhaust heat shield prevents recurrence',
        'Vehicle passed Lamborghini dealer pre-purchase inspection',
      ],
    },

    // Mechanic's Expert Summary
    mechanicSummary: {
      symptoms: [
        'Smoke and flames from engine bay',
        'Complete electrical failure',
        'Melted wiring harness',
        'Damaged carbon fiber engine cover and rear clamshell',
      ],
      recommendation: '立即检查排气系统隔热板的固定螺栓和位置（特别是 2017-2018 年款）',
      consequence: '延误会导致发动机舱起火，完全烧毁线束和碳纤维部件，维修成本超过 $150,000',
      author: '店长',
    },

    ownerAdvice: {
      title: 'Aventador Fire Prevention',
      tips: [
        {
          icon: '🔥',
          title: 'Check TSB LM-18-042 Applicability',
          description: '2017-2018 Aventador S models should have heat shield upgraded immediately. Fire risk is real.',
        },
        {
          icon: '🧯',
          title: 'Carry Fire Extinguisher',
          description: 'Exotic cars with high-temp exhausts should have fire extinguisher in cabin. Seconds matter.',
        },
        {
          icon: '🔧',
          title: 'Annual Exhaust Inspection',
          description: 'Have exhaust heat shield bolts torque-checked annually. Vibration causes loosening.',
        },
      ],
    },
    technicalSpecs: {
      engineDisplacement: '6,498 cc (6.5L V12)',
      exhaustTemp: '900-1100°C at full load',
      harnessReplacementTime: '28 hours (certified tech)',
      carbonFiberRepairComplexity: 'Expert-level',
    },
    relatedCases: [],
    tags: ['Lamborghini', 'Aventador', 'Fire Damage', 'Wiring Harness', 'Carbon Fiber'],
    shareImage: '/images/case-studies/aventador-fire-share.jpg',
  },

  {
    id: 'lamborghini-huracan-clutch-replacement',
    slug: 'lamborghini-huracan-clutch-replacement',
    brandSlug: 'lamborghini',
    modelId: 'lamborghini-huracan',
    featured: false,
    title: '2020 Lamborghini Huracán EVO: Dual-Clutch Transmission Service',
    subtitle: 'Complete clutch pack replacement on LDF dual-clutch gearbox',
    excerpt: 'Worn dual-clutch assembly required replacement after track use and aggressive driving.',
    coverImage: '/images/case-studies/huracan-clutch-hero.jpg',
    date: '2024-08-22',
    readTime: '8 min read',
    category: 'drivetrain',
    difficulty: 'expert',
    laborHours: 18,
    vehicle: {
      year: 2020,
      make: 'Lamborghini',
      model: 'Huracán EVO RWD',
      vin: 'ZHW***5544 (redacted)',
      mileage: 14200,
      color: 'Verde Mantis / Black Alcantara',
    },
    problem: {
      eyebrow: 'The Challenge',
      title: 'Clutch Slipping Under Hard Acceleration',
      description: [
        'Owner reported clutch slipping during launches and gear changes. Strong burning smell from transmission. "Gearbox Overheating" warnings during spirited driving.',
      ],
      symptoms: [
        'Clutch slip during 1-2 and 2-3 shifts',
        'Burning smell from transmission',
        'Increased shift times (0.5-0.8 sec delay)',
        'Gearbox overheating warnings',
        'Reduced launch control performance',
      ],
      faultCodes: ['P1770: Clutch 1 - Excessive Slip Detected', 'P1771: Clutch 2 - Temperature Excessive'],
    },
    diagnosis: {
      eyebrow: 'Investigation',
      title: 'Dual-Clutch Wear Assessment',
      steps: [
        {
          title: '1. Clutch Adaptation Values',
          description: 'Scanned LDF transmission with Lamborghini diagnostic tool. Clutch 1 adaptation at 98% (spec: replace at 85%). Clutch 2 at 91%. Both clutches beyond service limit.',
        },
        {
          title: '2. Transmission Removal Inspection',
          description: 'Removed transmission and inspected clutch packs. Clutch 1 friction material down to rivets. Clutch 2 showing glazing and hotspots. Flywheel surface scored.',
        },
      ],
      conclusion: 'Aggressive driving and track use accelerated clutch wear. At 14K miles, clutch life consumed due to high-performance use. Replacement of both clutches and flywheel resurfacing required.',
    },
    solution: {
      eyebrow: 'The Solution',
      title: 'Complete Dual-Clutch Replacement',
      approach: 'Replace both clutch packs, resurface flywheel, and perform LDF transmission adaptation reset.',
      procedures: [
        {
          title: 'Transmission Removal',
          duration: '6 hours',
          description: 'Dropped transmission using Lamborghini transmission jack and support tooling. Drained fluid and removed clutch bell housing.',
        },
        {
          title: 'Clutch Replacement',
          duration: '8 hours',
          description: 'Replaced both dual-clutch assemblies with OEM Lamborghini units. Resurfaced flywheel using precision lathe. Inspected input shaft splines.',
          partsUsed: ['Dual Clutch Assembly 1 (02E141025D)', 'Dual Clutch Assembly 2 (02E141026D)', 'Transmission Fluid (6L Pentosin FFL-4)'],
        },
        {
          title: 'Transmission Installation & Adaptation',
          duration: '4 hours',
          description: 'Reinstalled transmission, filled with fresh fluid, and performed Lamborghini LDF adaptation procedure to teach new clutch bite points.',
        },
      ],
      totalLaborHours: 18,
      turnaroundTime: '5 days',
    },
    results: {
      eyebrow: 'The Outcome',
      title: 'Transmission Performance Restored',
      achievements: [
        'Zero clutch slip under full-throttle shifts',
        'Shift times restored to 150ms (spec)',
        'Launch control fully operational',
        'No overheating warnings after 50+ hard launches',
        'Clutch adaptation values reset to 0%',
      ],
    },

    // Mechanic's Expert Summary
    mechanicSummary: {
      symptoms: [
        'Clutch slip during 1-2 and 2-3 shifts',
        'Burning smell from transmission',
        'Increased shift times (0.5-0.8 sec delay)',
        'Reduced launch control performance',
      ],
      recommendation: '立即检查双离合变速箱的离合器片磨损程度和自适应数值',
      consequence: '延误会导致离合器完全烧毁，金属碎片污染变速箱油，需要更换整个变速箱总成（成本超过 $40,000）',
      author: '技术总监',
    },

    ownerAdvice: {
      title: 'Huracán DCT Care',
      tips: [
        {
          icon: '🏁',
          title: 'Track Use Accelerates Clutch Wear',
          description: 'Expect 12-15K mile clutch life with regular track days vs. 25-30K for street-only driving.',
        },
        {
          icon: '🚦',
          title: 'Avoid Excessive Launch Control',
          description: 'Launch control is clutch-intensive. Limit to special occasions to preserve clutch life.',
        },
        {
          icon: '📊',
          title: 'Monitor Adaptation Values',
          description: 'Have Lamborghini scan clutch adaptation values every 5K miles. Plan replacement at 80-85%.',
        },
      ],
    },
    technicalSpecs: {
      transmissionType: 'Lamborghini LDF 7-speed dual-clutch',
      clutchType: 'Dry dual-clutch',
      shiftTime: '150ms (Sport mode)',
      fluidCapacity: '6.0 liters Pentosin FFL-4',
    },
    relatedCases: [],
    tags: ['Lamborghini', 'Huracán', 'Dual-Clutch', 'Transmission', 'Clutch Replacement'],
    shareImage: '/images/case-studies/huracan-clutch-share.jpg',
  },

  {
    id: 'lamborghini-urus-air-suspension-fault',
    slug: 'lamborghini-urus-air-suspension-fault',
    brandSlug: 'lamborghini',
    modelId: 'lamborghini-urus',
    featured: false,
    title: '2021 Lamborghini Urus: Adaptive Air Suspension Failure',
    subtitle: 'Air suspension compressor and valve block replacement',
    excerpt: 'Complete air suspension failure required compressor and valve block replacement on the super SUV.',
    coverImage: '/images/case-studies/urus-air-hero.jpg',
    date: '2024-07-15',
    readTime: '6 min read',
    category: 'suspension',
    difficulty: 'expert',
    laborHours: 9,
    vehicle: {
      year: 2021,
      make: 'Lamborghini',
      model: 'Urus',
      vin: 'ZHW***7788 (redacted)',
      mileage: 18600,
      color: 'Nero Noctis / Arancio Dryope Interior',
    },
    problem: {
      eyebrow: 'The Challenge',
      title: 'Air Suspension System Complete Failure',
      description: [
        'Vehicle sagged to bump stops after overnight parking. "Air Suspension Inactive - Workshop" warning. Compressor running constantly but no pressure buildup.',
      ],
      symptoms: [
        'All four corners on bump stops',
        'Compressor running non-stop',
        'Unable to raise vehicle from Ego mode',
        'Harsh ride quality (suspension bottomed out)',
      ],
      faultCodes: ['C1A12: Air Compressor - Insufficient Pressure', 'C1A45: Valve Block - Internal Leak Detected'],
    },
    diagnosis: {
      eyebrow: 'Investigation',
      title: 'Air Suspension System Diagnosis',
      steps: [
        {
          title: '1. Pressure Test',
          description: 'Connected pressure gauge - compressor unable to build above 4 bar (spec: 19 bar). Points to compressor failure or major system leak.',
        },
        {
          title: '2. Valve Block Inspection',
          description: 'Accessed valve block under rear cargo floor. Found internal valve stuck open, bleeding all system pressure. Valve block failure caused compressor overwork.',
        },
      ],
      conclusion: 'Valve block internal solenoid failure caused pressure bleed, overworking compressor until it also failed. Both components require replacement.',
    },
    solution: {
      eyebrow: 'The Solution',
      title: 'Compressor and Valve Block Replacement',
      approach: 'Replace failed valve block and compressor with updated Lamborghini/Audi components.',
      procedures: [
        {
          title: 'Valve Block & Compressor Replacement',
          duration: '7 hours',
          description: 'Removed rear cargo floor to access valve block. Replaced valve block assembly and air compressor. Flushed air lines and replaced dryer cartridge.',
          partsUsed: [
            'Air Suspension Valve Block (4M0616007)',
            'Air Compressor Assembly (4M0616005E)',
            'Air Dryer Cartridge',
            'Compressor Mounting Kit',
          ],
        },
        {
          title: 'System Calibration',
          duration: '2 hours',
          description: 'Performed Lamborghini ADAS calibration for air suspension. Verified all ride height modes (Ego, Sport, Corsa, Strada, Terra, Sabbia).',
        },
      ],
      totalLaborHours: 9,
      turnaroundTime: '4 days',
    },
    results: {
      eyebrow: 'The Outcome',
      title: 'Air Suspension Fully Restored',
      achievements: [
        'System pressure stable at 19 bar',
        'All 6 drive modes operational',
        'Compressor duty cycle normal',
        'Adaptive damping fully functional',
      ],
    },

    // Mechanic's Expert Summary
    mechanicSummary: {
      symptoms: [
        'All four corners on bump stops',
        'Compressor running non-stop',
        'Unable to raise vehicle from Ego mode',
        'Harsh ride quality (suspension bottomed out)',
      ],
      recommendation: '立即检查空气悬挂阀体和压缩机的工作状态',
      consequence: '延误会导致压缩机烧毁，车辆完全无法行驶，可能损坏底盘部件',
      author: '店长',
    },

    ownerAdvice: {
      title: 'Urus Air Suspension Care',
      tips: [
        {
          icon: '🏜️',
          title: 'Avoid Extended Off-Road Use',
          description: 'Terra/Sabbia modes stress air suspension. Limit off-road driving to preserve components.',
        },
        {
          icon: '⚙️',
          title: 'Compressor Replacement at 40K Miles',
          description: 'Urus air compressors have limited lifespan. Preventive replacement at 40K miles prevents roadside failure.',
        },
      ],
    },
    technicalSpecs: {
      suspensionType: 'Adaptive Air Suspension with Active Roll',
      maxPressure: '19 bar (275 PSI)',
      rideHeightRange: '90mm total adjustment',
      driveModes: '6 (Strada, Sport, Corsa, Sabbia, Terra, Ego)',
    },
    relatedCases: [],
    tags: ['Lamborghini', 'Urus', 'Air Suspension', 'Compressor', 'Valve Block'],
    shareImage: '/images/case-studies/urus-air-share.jpg',
  },

  {
    id: 'lamborghini-huracan-carbon-ceramic-brake-service',
    slug: 'lamborghini-huracan-carbon-ceramic-brake-service',
    brandSlug: 'lamborghini',
    modelId: 'lamborghini-huracan',
    featured: false,
    title: '2019 Lamborghini Huracán Performante: Carbon Ceramic Brake Resurface',
    subtitle: 'Restoring carbon ceramic rotor performance after track use',
    excerpt: 'Track-induced brake judder required carbon ceramic rotor resurfacing and pad replacement.',
    coverImage: '/images/case-studies/huracan-brakes-hero.jpg',
    date: '2024-06-12',
    readTime: '5 min read',
    category: 'brakes',
    difficulty: 'expert',
    laborHours: 8,
    vehicle: {
      year: 2019,
      make: 'Lamborghini',
      model: 'Huracán Performante',
      vin: 'ZHW***9900 (redacted)',
      mileage: 9800,
      color: 'Grigio Telesto / Black Alcantara',
    },
    problem: {
      eyebrow: 'The Challenge',
      title: 'Severe Brake Judder After Track Days',
      description: [
        'Owner reported violent steering wheel vibration during braking after consecutive track days. Pedal pulsation and squealing from front brakes.',
      ],
      symptoms: [
        'Steering wheel shaking during braking',
        'Brake pedal pulsation',
        'High-pitched squeal from front rotors',
        'Uneven pad contact visible through wheels',
      ],
      faultCodes: [],
    },
    diagnosis: {
      eyebrow: 'Investigation',
      title: 'Carbon Ceramic Rotor Analysis',
      steps: [
        {
          title: '1. Rotor Runout Measurement',
          description: 'Measured rotor runout with dial indicator. Front rotors showing 0.12mm runout (spec: <0.05mm). Excessive runout causing judder.',
        },
        {
          title: '2. Thermal Imaging',
          description: 'Used thermal camera after test drive. Hot spots on rotors indicating uneven friction layer. Pads glazed from excessive heat.',
        },
      ],
      conclusion: 'Repeated hard track braking created uneven carbon transfer layer on rotors and glazed pads. Resurfacing and pad replacement required.',
    },
    solution: {
      eyebrow: 'The Solution',
      title: 'Carbon Ceramic Rotor Resurface and Pad Replacement',
      approach: 'Resurface carbon ceramic rotors using specialized equipment, replace pads, and complete bedding procedure.',
      procedures: [
        {
          title: 'Rotor Resurfacing',
          duration: '5 hours',
          description: 'Removed all four carbon ceramic rotors. Resurfaced using Lamborghini-approved Brembo CCM lathe to restore surface flatness within 0.02mm.',
          toolsUsed: ['Brembo CCM Lathe', 'Rotor Runout Gauge', 'Thermal Imaging Camera'],
        },
        {
          title: 'Pad Replacement & Bedding',
          duration: '3 hours',
          description: 'Installed new Brembo carbon ceramic pads. Performed Lamborghini bedding procedure: 10 stops from 100-50 km/h, then 5 stops from 150-80 km/h.',
          partsUsed: ['Front Brake Pads CCM (4T0698151AC)', 'Rear Brake Pads CCM (4T0698451)', 'Brake Fluid (1L DOT 5.1)'],
        },
      ],
      totalLaborHours: 8,
      turnaroundTime: '3 days',
    },
    results: {
      eyebrow: 'The Outcome',
      title: 'Braking Performance Restored',
      achievements: [
        'Zero brake judder or vibration',
        'Rotor runout within 0.02mm spec',
        'Even thermal distribution across rotor surface',
        'Full track-ready braking performance',
      ],
    },

    // Mechanic's Expert Summary
    mechanicSummary: {
      symptoms: [
        'Steering wheel shaking during braking',
        'Brake pedal pulsation',
        'High-pitched squeal from front rotors',
        'Uneven pad contact visible through wheels',
      ],
      recommendation: '立即检查碳陶瓷刹车盘的平面度和刹车片的磨损状况',
      consequence: '延误会导致刹车盘磨损加剧，需要更换整套碳陶瓷刹车系统（成本超过 $25,000）',
      author: '技术总监',
    },

    ownerAdvice: {
      title: 'Carbon Ceramic Brake Care',
      tips: [
        {
          icon: '🏁',
          title: 'Bed-In After Every Track Event',
          description: 'Run bedding procedure after track days to refresh transfer layer and prevent judder.',
        },
        {
          icon: '🌡️',
          title: 'Avoid Extended Cooling Laps',
          description: 'After heavy braking, do one cool-down lap then park. Don\'t idle with hot brakes.',
        },
      ],
    },
    technicalSpecs: {
      rotorMaterial: 'Brembo CCM-R (Carbon Ceramic Matrix)',
      rotorDiameter: '380mm front / 356mm rear',
      caliperType: 'Brembo 6-piston front / 4-piston rear',
      bedInProcedure: '15-stop Lamborghini protocol',
    },
    relatedCases: [],
    tags: ['Lamborghini', 'Huracán', 'Carbon Ceramic', 'Brakes', 'Track Day'],
    shareImage: '/images/case-studies/huracan-brakes-share.jpg',
  },

  {
    id: 'lamborghini-aventador-exhaust-valve-failure',
    slug: 'lamborghini-aventador-exhaust-valve-failure',
    brandSlug: 'lamborghini',
    modelId: 'lamborghini-aventador',
    featured: false,
    title: '2019 Lamborghini Aventador SVJ: Exhaust Valve Actuator Repair',
    subtitle: 'Repairing failed exhaust valve control system',
    excerpt: 'Stuck exhaust valves caused loss of sound control, requiring actuator motor replacement.',
    coverImage: '/images/case-studies/aventador-exhaust-hero.jpg',
    date: '2024-05-08',
    readTime: '4 min read',
    category: 'exhaust',
    difficulty: 'intermediate',
    laborHours: 6,
    vehicle: {
      year: 2019,
      make: 'Lamborghini',
      model: 'Aventador SVJ',
      vin: 'ZHW***1122 (redacted)',
      mileage: 7200,
      color: 'Rosso Mars / Black Carbon Fiber',
    },
    problem: {
      eyebrow: 'The Challenge',
      title: 'Exhaust Valves Stuck Open - Constant Loud Mode',
      description: [
        'Exhaust remained loud even in Strada mode. Warning "Exhaust System Fault" appeared. Unable to switch to quiet mode for residential driving.',
      ],
      symptoms: [
        'Exhaust always in loud/open mode',
        'Strada mode not quieting exhaust',
        'Exhaust valve warning light',
        'No clicking sound from valve actuators',
      ],
      faultCodes: ['P2BAF: Exhaust Valve Actuator Left - Stuck Open', 'P2BB0: Exhaust Valve Actuator Right - Position Fault'],
    },
    diagnosis: {
      eyebrow: 'Investigation',
      title: 'Exhaust Valve Actuator Testing',
      steps: [
        {
          title: '1. Actuator Motor Test',
          description: 'Commanded valve closure via Lamborghini diagnostic tool. Left actuator motor not responding. Right actuator clicking but valve not moving.',
        },
        {
          title: '2. Manual Valve Inspection',
          description: 'Manually operated valve butterflies. Left valve seized from carbon buildup. Right valve free but actuator linkage disconnected.',
        },
      ],
      conclusion: 'Left actuator motor failed. Right actuator linkage detached from vibration. Carbon buildup on left valve prevented movement.',
    },
    solution: {
      eyebrow: 'The Solution',
      title: 'Exhaust Valve Actuator Replacement',
      approach: 'Replace both actuator motors, clean carbon buildup, and reattach linkage.',
      procedures: [
        {
          title: 'Actuator Replacement & Carbon Cleaning',
          duration: '5 hours',
          description: 'Removed rear diffuser to access actuators. Replaced both actuator motors. Cleaned carbon from valve butterflies using chemical cleaner.',
          partsUsed: ['Exhaust Valve Actuator Left (470253609H)', 'Exhaust Valve Actuator Right (470253610H)', 'Linkage Pin Set'],
        },
        {
          title: 'System Calibration',
          duration: '1 hour',
          description: 'Performed Lamborghini exhaust valve adaptation to teach new end-stop positions.',
        },
      ],
      totalLaborHours: 6,
      turnaroundTime: '2 days',
    },
    results: {
      eyebrow: 'The Outcome',
      title: 'Exhaust Control Restored',
      achievements: [
        'Valves opening/closing correctly in all drive modes',
        'Quiet Strada mode functional',
        'Loud Sport/Corsa modes operational',
        'No fault codes after 200+ miles',
      ],
    },

    // Mechanic's Expert Summary
    mechanicSummary: {
      symptoms: [
        'Exhaust always in loud/open mode',
        'Strada mode not quieting exhaust',
        'Exhaust valve warning light',
        'No clicking sound from valve actuators',
      ],
      recommendation: '立即检查排气阀门执行器的电机和连接杆状况',
      consequence: '延误会导致排气阀门完全卡死，无法通过噪音检测，可能违反当地噪音法规',
      author: '店长',
    },

    ownerAdvice: {
      title: 'Exhaust Valve Maintenance',
      tips: [
        {
          icon: '🔊',
          title: 'Cycle Valves Weekly',
          description: 'Switch between Strada and Corsa weekly to keep actuators exercised and prevent seizing.',
        },
        {
          icon: '🧹',
          title: 'Carbon Cleaning Every 10K Miles',
          description: 'Have valves chemically cleaned every 10K miles to prevent carbon buildup seizure.',
        },
      ],
    },
    technicalSpecs: {
      exhaustValveType: 'Electronically-actuated butterfly',
      actuatorType: 'Stepper motor with position sensor',
      valveCount: '2 (left/right bank)',
      soundReduction: '~8 dB in Strada mode',
    },
    relatedCases: [],
    tags: ['Lamborghini', 'Aventador', 'Exhaust', 'Valve Actuator'],
    shareImage: '/images/case-studies/aventador-exhaust-share.jpg',
  },

  // ==================== ASTON MARTIN ====================
  {
    id: 'aston-vantage-carbon-brake-service',
    slug: 'aston-vantage-carbon-brake-service',
    brandSlug: 'aston-martin',
    modelId: 'aston-vantage',
    featured: true,
    featuredRank: 4,
    title: 'Aston Martin Vantage: Carbon Ceramic Brake Service',
    subtitle: 'Eliminating track-day squeal and restoring street manners',
    excerpt: 'Track-induced brake squeal required rotor resurfacing and pad reconditioning to restore quiet street performance.',
    coverImage: '/images/case-studies/aston-vantage-hero.jpg',
    date: '2024-05-12',
    readTime: '6 min read',
    category: 'brakes',
    difficulty: 'intermediate',
    laborHours: 6,
    vehicle: {
      year: 2023,
      make: 'Aston Martin',
      model: 'Vantage V12',
      vin: 'SCF***1245 (redacted)',
      mileage: 8200,
      color: 'Magnetic Silver / Obsidian Black',
    },
    problem: {
      eyebrow: 'The Challenge',
      title: 'Persistent Carbon Ceramic Brake Squeal After Track Use',
      description: [
        'Owner reported loud brake squeal after two consecutive track days at Laguna Seca. Dealer recommendation was full rotor and pad replacement, but noise returned within 400 miles.',
        'Inspection revealed glazed pads, uneven transfer layer, and missing AML anti-squeal shim kit on the front axle.',
      ],
      symptoms: [
        'High-pitched squeal at low speed braking',
        'Steering vibration under light braking',
        'Uneven pad contact pattern visible through wheels',
      ],
      faultCodes: [],
    },
    diagnosis: {
      eyebrow: 'Investigation',
      title: 'Rotor & Pad Condition Analysis',
      steps: [
        {
          title: '1. Rotor Surface Mapping',
          description: 'Measured rotor run-out and used thermal imaging for hot spots. Within spec for run-out but transfer layer was uneven.',
        },
        {
          title: '2. Pad Material Inspection',
          description: 'Pads showed ample thickness but heavy glazing. Backing plates lacked updated AML shim kit (P/N 707337).',
        },
      ],
      conclusion: 'Carbon layer contamination rather than warped rotors. Resurfacing and correct bedding would resolve the issue.',
    },
    solution: {
      eyebrow: 'The Solution',
      title: 'Resurface & Re-Bed Carbon Ceramics',
      approach: 'Restore friction layer, install shim kit, and complete AML bed-in cycle with data logging.',
      procedures: [
        {
          title: 'Resurface & Clean',
          duration: '3 hours',
          description: 'Removed all rotors, performed dry ice cleaning, and resurfaced using AML carbon ceramic lathe.',
          toolsUsed: ['AML Carbon Ceramic Lathe', 'Dry Ice Cleaning System'],
        },
        {
          title: 'Install Shim Kit & Bed Pads',
          duration: '2 hours',
          description: 'Installed revised AML anti-squeal shim kit, reinstalled pads, and completed AML bed-in sequence.',
          partsUsed: ['AML Anti-Squeal Shim Kit (707337)', 'Brake Fluid DOT 5.1'],
        },
      ],
      totalLaborHours: 5,
      turnaroundTime: '2 days',
    },
    results: {
      eyebrow: 'The Outcome',
      title: 'Street Quiet, Track Ready',
      achievements: [
        'Eliminated low-speed squeal',
        'Brake pedal vibration resolved',
        'Rotor temperature delta within 5°C across axle after bedding cycle',
        'Track-ready braking performance maintained',
      ],
    },

    // Mechanic's Expert Summary
    mechanicSummary: {
      symptoms: [
        'High-pitched squeal at low speed braking',
        'Steering vibration under light braking',
        'Uneven pad contact pattern visible through wheels',
      ],
      recommendation: '立即检查碳陶瓷刹车盘的摩擦层均匀性和刹车片的磨损状态',
      consequence: '延误会导致刹车异响持续恶化，影响驾驶舒适性和刹车性能',
      author: '技术总监',
    },

    ownerAdvice: {
      title: 'Track Day Brake Checklist',
      tips: [
        {
          icon: '🔍',
          title: 'Inspect After Each Event',
          description: 'Check pad glazing, rotor condition, and hardware torque after every weekend.',
        },
        {
          icon: '🔄',
          title: 'Repeat Bedding',
          description: 'Run the AML bed-in cycle after heavy track use to refresh the transfer layer.',
        },
      ],
    },
    technicalSpecs: {
      rotorMaterial: 'Brembo CCM (Carbon Ceramic Matrix)',
      padCompound: 'AML/Brembo Track Street Hybrid',
      runOutSpec: '< 0.05 mm',
      torqueSpec: '600 Nm hub bolts',
    },
    relatedCases: [],
    tags: ['Aston Martin', 'Carbon Ceramic', 'Brake Service', 'Track Day'],
    shareImage: '/images/case-studies/aston-vantage-share.jpg',
  },

  {
    id: 'aston-db11-infotainment-failure',
    slug: 'aston-db11-infotainment-failure',
    brandSlug: 'aston-martin',
    modelId: 'aston-db11',
    featured: false,
    title: '2020 Aston Martin DB11 V8: Infotainment System Failure',
    subtitle: 'Complete head unit replacement after system crash',
    excerpt: 'Infotainment system black screen and total failure required Mercedes COMAND unit replacement.',
    coverImage: '/images/case-studies/db11-infotainment-hero.jpg',
    date: '2024-07-20',
    readTime: '5 min read',
    category: 'infotainment',
    difficulty: 'intermediate',
    laborHours: 4,
    vehicle: {
      year: 2020,
      make: 'Aston Martin',
      model: 'DB11 V8',
      vin: 'SCF***3366 (redacted)',
      mileage: 16800,
      color: 'Dark Grey / Obsidian Black Leather',
    },
    problem: {
      eyebrow: 'The Challenge',
      title: 'Complete Infotainment System Failure',
      description: [
        'Infotainment screen went black and became unresponsive. No audio, navigation, or climate control display. Backup camera not functioning.',
      ],
      symptoms: [
        'Black screen on center display',
        'No response to touch or buttons',
        'No audio output from speakers',
        'Climate control adjustments not visible',
        'Backup camera inoperative',
      ],
      faultCodes: ['B100A: COMAND Head Unit - Internal Memory Failure'],
    },
    diagnosis: {
      eyebrow: 'Investigation',
      title: 'COMAND System Diagnosis',
      steps: [
        {
          title: '1. Power and Communication Test',
          description: 'Verified 12V power to head unit. CAN communication established but unit not booting. Points to internal software/hardware failure.',
        },
        {
          title: '2. Forced Reboot Attempt',
          description: 'Attempted Mercedes COMAND hard reset procedure (hold volume + seek for 10 sec). Unit still black - complete failure confirmed.',
        },
      ],
      conclusion: 'COMAND head unit internal memory failure. Common issue on 2019-2020 DB11 models using Mercedes-Benz COMAND system. Unit replacement required.',
    },
    solution: {
      eyebrow: 'The Solution',
      title: 'COMAND Head Unit Replacement',
      approach: 'Replace failed COMAND unit with updated Aston Martin/Mercedes unit and restore system configuration.',
      procedures: [
        {
          title: 'Head Unit Replacement',
          duration: '3 hours',
          description: 'Removed center console trim and HVAC panel to access COMAND unit. Replaced with updated unit (part# 4G4335290AB). Reconnected all connectors.',
          partsUsed: ['COMAND Head Unit Updated (4G4335290AB)', 'Wiring Harness Repair Kit'],
        },
        {
          title: 'System Coding & Calibration',
          duration: '1 hour',
          description: 'Used Aston Martin AMTech diagnostics to code new head unit to vehicle VIN and restore camera calibration.',
          toolsUsed: ['AMTech Diagnostic System'],
        },
      ],
      totalLaborHours: 4,
      turnaroundTime: '3 days (special order head unit)',
    },
    results: {
      eyebrow: 'The Outcome',
      title: 'Infotainment Fully Restored',
      achievements: [
        'All infotainment functions operational',
        'Audio system working perfectly',
        'Navigation and climate display restored',
        'Backup camera functional',
      ],
    },

    // Mechanic's Expert Summary
    mechanicSummary: {
      symptoms: [
        'Black screen on center display',
        'No response to touch or buttons',
        'No audio output from speakers',
        'Backup camera inoperative',
      ],
      recommendation: '立即检查 COMAND 信息娱乐系统主机的电源和内存状态',
      consequence: '延误会导致无法使用导航、音响和倒车影像等功能，影响日常使用体验',
      author: '店长',
    },

    ownerAdvice: {
      title: 'DB11 Infotainment Care',
      tips: [
        {
          icon: '🔌',
          title: 'Avoid Battery Disconnection',
          description: 'Disconnecting battery without proper shutdown can corrupt COMAND memory. Always use proper shutdown.',
        },
        {
          icon: '📡',
          title: 'Software Updates',
          description: 'Keep COMAND software updated at dealer to prevent known bugs that cause crashes.',
        },
      ],
    },
    technicalSpecs: {
      headUnitType: 'Mercedes-Benz COMAND with AML customization',
      screenSize: '8-inch TFT touchscreen',
      audioSystem: 'Bang & Olufsen BeoSound (optional)',
      navigationProvider: 'HERE Maps',
    },
    relatedCases: [],
    tags: ['Aston Martin', 'DB11', 'Infotainment', 'COMAND', 'Mercedes'],
    shareImage: '/images/case-studies/db11-infotainment-share.jpg',
  },

  {
    id: 'aston-dbs-superleggera-clutch-replacement',
    slug: 'aston-dbs-superleggera-clutch-replacement',
    brandSlug: 'aston-martin',
    modelId: 'aston-dbs',
    featured: false,
    title: '2021 Aston Martin DBS Superleggera: Rear-Mount Clutch Replacement',
    subtitle: 'Complete clutch pack service on rear-transaxle layout',
    excerpt: 'Worn clutch assembly on rear-mounted gearbox required complete clutch replacement and flywheel resurfacing.',
    coverImage: '/images/case-studies/dbs-clutch-hero.jpg',
    date: '2024-06-05',
    readTime: '9 min read',
    category: 'drivetrain',
    difficulty: 'expert',
    laborHours: 16,
    vehicle: {
      year: 2021,
      make: 'Aston Martin',
      model: 'DBS Superleggera',
      vin: 'SCF***7799 (redacted)',
      mileage: 12400,
      color: 'Quantum Silver / Obsidian Black',
    },
    problem: {
      eyebrow: 'The Challenge',
      title: 'Clutch Slipping Under Hard Acceleration',
      description: [
        'Owner reported clutch slip during 2-3 and 3-4 upshifts under full throttle. Burning smell from rear transaxle area. Reduced launch control performance.',
      ],
      symptoms: [
        'Clutch slip during aggressive upshifts',
        'Burning smell from rear of vehicle',
        'Increased shift times',
        'Launch control degraded',
        'Check transmission warning',
      ],
      faultCodes: ['P1770: Clutch Pack - Excessive Slip Detected'],
    },
    diagnosis: {
      eyebrow: 'Investigation',
      title: 'Clutch Wear Assessment',
      steps: [
        {
          title: '1. Clutch Adaptation Scan',
          description: 'AMTech diagnostics showed clutch adaptation at 94% (spec: replace at 85%). Track use and aggressive driving accelerated wear.',
        },
        {
          title: '2. Transaxle Inspection',
          description: 'Removed rear transaxle and inspected clutch pack. Friction material heavily worn. Flywheel showing heat cracks and scoring.',
        },
      ],
      conclusion: 'Clutch pack worn beyond service limit from enthusiast driving. Rear-transaxle layout makes this a complex service requiring full drivetrain removal.',
    },
    solution: {
      eyebrow: 'The Solution',
      title: 'Complete Clutch Pack Replacement',
      approach: 'Remove rear transaxle assembly, replace clutch pack, resurface flywheel, and perform system recalibration.',
      procedures: [
        {
          title: 'Transaxle Removal',
          duration: '6 hours',
          description: 'Removed exhaust, rear subframe, and driveshaft. Lowered rear transaxle assembly using AML transaxle jack.',
        },
        {
          title: 'Clutch Replacement',
          duration: '8 hours',
          description: 'Replaced complete clutch pack (dual-clutch assembly). Resurfaced flywheel. Replaced release bearing and pilot bearing.',
          partsUsed: [
            'Clutch Pack Assembly (5G43-7L596-AA)',
            'Flywheel Resurface Service',
            'Release Bearing',
            'Pilot Bearing',
            'Transmission Fluid (6L Castrol BOT 350 M3)',
          ],
        },
        {
          title: 'Installation & Adaptation',
          duration: '4 hours',
          description: 'Reinstalled transaxle, torqued all fasteners to AML spec, filled fluids, and performed AMTech clutch adaptation reset.',
        },
      ],
      totalLaborHours: 18,
      turnaroundTime: '5 days',
    },
    results: {
      eyebrow: 'The Outcome',
      title: 'Drivetrain Performance Restored',
      achievements: [
        'Zero clutch slip under full-throttle shifts',
        'Launch control fully operational',
        'Shift times restored to spec (120ms)',
        'Clutch adaptation reset to 0%',
      ],
    },

    // Mechanic's Expert Summary
    mechanicSummary: {
      symptoms: [
        'Clutch slip during aggressive upshifts',
        'Burning smell from rear of vehicle',
        'Increased shift times',
        'Launch control degraded',
      ],
      recommendation: '立即检查后置变速箱离合器组件的磨损程度和自适应数值',
      consequence: '延误会导致离合器完全烧毁，可能损坏飞轮和变速箱内部，维修成本超过 $35,000',
      author: '技术总监',
    },

    ownerAdvice: {
      title: 'DBS Clutch Care',
      tips: [
        {
          icon: '🏁',
          title: 'Track Use Shortens Clutch Life',
          description: 'Expect 10-12K mile clutch life with track use vs. 20-25K for street-only driving.',
        },
        {
          icon: '📊',
          title: 'Monitor Adaptation Values',
          description: 'Have dealer check clutch adaptation every service. Plan replacement at 80-85%.',
        },
      ],
    },
    technicalSpecs: {
      transmissionType: 'ZF 8-speed rear-transaxle',
      clutchType: 'Dual wet-clutch',
      transaxleLayout: 'Rear-mounted (50/50 weight distribution)',
      fluidType: 'Castrol BOT 350 M3',
    },
    relatedCases: [],
    tags: ['Aston Martin', 'DBS', 'Superleggera', 'Clutch', 'Transaxle'],
    shareImage: '/images/case-studies/dbs-clutch-share.jpg',
  },

  {
    id: 'aston-valhalla-hybrid-system-fault',
    slug: 'aston-valhalla-hybrid-system-fault',
    brandSlug: 'aston-martin',
    modelId: 'aston-valhalla',
    featured: false,
    title: '2024 Aston Martin Valhalla: Hybrid System High-Voltage Fault',
    subtitle: 'Diagnosing and repairing HV battery management system',
    excerpt: 'High-voltage battery fault disabled hybrid system, requiring BMS module replacement and recalibration.',
    coverImage: '/images/case-studies/valhalla-hv-hero.jpg',
    date: '2024-08-18',
    readTime: '7 min read',
    category: 'hybrid',
    difficulty: 'expert',
    laborHours: 11,
    vehicle: {
      year: 2024,
      make: 'Aston Martin',
      model: 'Valhalla',
      vin: 'SCF***9988 (redacted)',
      mileage: 2100,
      color: 'Laminar Bronze / Black Alcantara',
    },
    problem: {
      eyebrow: 'The Challenge',
      title: 'Hybrid System Fault - EV Mode Inoperative',
      description: [
        'Warning "Hybrid System Fault - Service Required" appeared during normal driving. EV mode unavailable. Electric motors not providing assist. Vehicle operating on V8 only.',
      ],
      symptoms: [
        'Hybrid system warning light',
        'EV mode button greyed out',
        'No electric motor assist',
        'Reduced performance (V8-only operation)',
        'Battery SOC stuck at 0%',
      ],
      faultCodes: ['U3000: HV Battery Management System - Communication Lost', 'P0A80: HV Battery Pack - Replace Battery Pack'],
    },
    diagnosis: {
      eyebrow: 'Investigation',
      title: 'High-Voltage System Diagnosis',
      steps: [
        {
          title: '1. HV Battery Isolation Test',
          description: 'Performed HV shutdown procedure and tested battery isolation. HV contactors clicking but BMS module not responding to commands.',
        },
        {
          title: '2. BMS Module Inspection',
          description: 'Accessed BMS module under rear deck. Found internal firmware corruption (known early Valhalla issue - AML TSB VAL-24-008).',
        },
      ],
      conclusion: 'BMS module firmware corruption preventing communication with HV battery. Module replacement with updated software version required.',
    },
    solution: {
      eyebrow: 'The Solution',
      title: 'BMS Module Replacement and HV Recalibration',
      approach: 'Replace faulty BMS module with updated unit and perform complete HV system commissioning.',
      procedures: [
        {
          title: 'HV System Isolation',
          duration: '2 hours',
          description: 'Performed HV lockout procedure, verified 0V on all HV lines, and installed safety interlock.',
          toolsUsed: ['HV Safety Kit', 'Insulated Tool Set', 'Fluke HV Multimeter'],
        },
        {
          title: 'BMS Module Replacement',
          duration: '5 hours',
          description: 'Removed rear bodywork to access BMS. Replaced module with updated unit (part# 5H33-10C673-AA). Reinstalled with new thermal interface material.',
          partsUsed: ['BMS Module Updated (5H33-10C673-AA)', 'Thermal Interface Pad', 'HV Connector Grease'],
        },
        {
          title: 'System Commissioning',
          duration: '4 hours',
          description: 'Performed AMTech HV system commissioning. Balanced battery cells, calibrated SOC, and tested all three electric motors.',
        },
      ],
      totalLaborHours: 11,
      turnaroundTime: '4 days',
    },
    results: {
      eyebrow: 'The Outcome',
      title: 'Hybrid System Fully Operational',
      achievements: [
        'All three electric motors operational',
        'EV mode functional (up to 15 km range)',
        'Full hybrid power available (1,000+ HP combined)',
        'Battery SOC reporting correctly',
      ],
    },

    // Mechanic's Expert Summary
    mechanicSummary: {
      symptoms: [
        'Hybrid system warning light',
        'EV mode button greyed out',
        'No electric motor assist',
        'Battery SOC stuck at 0%',
      ],
      recommendation: '立即检查高压电池管理系统（BMS）模块的通信和固件状态',
      consequence: '延误会导致完全失去混合动力功能，无法发挥 1000+ 马力的全部性能',
      author: '店长',
    },

    ownerAdvice: {
      title: 'Valhalla Hybrid Care',
      tips: [
        {
          icon: '🔌',
          title: 'Charge Regularly',
          description: 'Charge HV battery every 2 weeks minimum to prevent cell imbalance.',
        },
        {
          icon: '⚡',
          title: 'TSB VAL-24-008 Check',
          description: 'Early Valhalla models may qualify for goodwill BMS replacement. Check with dealer.',
        },
      ],
    },
    technicalSpecs: {
      hvBatteryCapacity: '6.0 kWh',
      hvBatteryVoltage: '400V nominal',
      electricMotors: '3 (2 front, 1 rear integrated)',
      combinedPower: '1,000+ HP (V8 + electric)',
    },
    relatedCases: [],
    tags: ['Aston Martin', 'Valhalla', 'Hybrid', 'HV Battery', 'BMS'],
    shareImage: '/images/case-studies/valhalla-hv-share.jpg',
  },

  {
    id: 'aston-rapide-e-cooling-system-leak',
    slug: 'aston-rapide-e-cooling-system-leak',
    brandSlug: 'aston-martin',
    modelId: 'aston-rapide',
    featured: false,
    title: '2019 Aston Martin Rapide S: Coolant Leak V12 Engine',
    subtitle: 'Repairing complex coolant crossover pipe failure',
    excerpt: 'Hidden coolant leak from rear crossover pipe required engine-out service for replacement.',
    coverImage: '/images/case-studies/rapide-coolant-hero.jpg',
    date: '2024-05-18',
    readTime: '6 min read',
    category: 'cooling',
    difficulty: 'expert',
    laborHours: 14,
    vehicle: {
      year: 2019,
      make: 'Aston Martin',
      model: 'Rapide S',
      vin: 'SCF***4455 (redacted)',
      mileage: 28600,
      color: 'Stratus White / Chancellor Red Leather',
    },
    problem: {
      eyebrow: 'The Challenge',
      title: 'Persistent Coolant Loss - No Visible Leak',
      description: [
        'Owner reported adding 1L coolant every 500 miles. No visible leaks. No overheating. Sweet smell from engine bay after driving.',
      ],
      symptoms: [
        'Gradual coolant loss (1L per 500 miles)',
        'Low coolant warning light',
        'Sweet coolant smell from engine bay',
        'No visible external leaks',
        'No white smoke from exhaust',
      ],
      faultCodes: [],
    },
    diagnosis: {
      eyebrow: 'Investigation',
      title: 'Hidden Coolant Leak Detection',
      steps: [
        {
          title: '1. Pressure Test',
          description: 'Pressurized cooling system to 1.5 bar and observed for 30 minutes. Pressure dropped indicating leak, but no visible drips.',
        },
        {
          title: '2. UV Dye Test',
          description: 'Added UV dye to coolant and drove vehicle. Found dye evidence on rear of engine block - indicates rear coolant crossover pipe leak (hidden behind engine).',
        },
      ],
      conclusion: 'Rear coolant crossover pipe O-ring failure. Common failure on Rapide/DB9/DBS V12 engines at 25-30K miles. Engine-out service required for access.',
    },
    solution: {
      eyebrow: 'The Solution',
      title: 'Engine-Out Coolant Crossover Pipe Replacement',
      approach: 'Remove engine to access rear coolant pipes, replace all crossover pipes and O-rings preventively.',
      procedures: [
        {
          title: 'Engine Removal',
          duration: '6 hours',
          description: 'Removed front subframe, drained fluids, disconnected all harnesses, and lifted engine using AML engine crane.',
        },
        {
          title: 'Coolant Pipe Replacement',
          duration: '5 hours',
          description: 'Replaced rear coolant crossover pipe assembly and all associated O-rings. Replaced thermostat housing O-rings preventively.',
          partsUsed: [
            'Coolant Crossover Pipe Rear (6G33-8C268-AA)',
            'O-Ring Kit Complete',
            'Thermostat Housing Gasket Set',
            'Coolant (12L OAT)',
          ],
        },
        {
          title: 'Engine Reinstallation',
          duration: '5 hours',
          description: 'Reinstalled engine, reconnected all systems, filled and bled cooling system, and performed leak test.',
        },
      ],
      totalLaborHours: 16,
      turnaroundTime: '4 days',
    },
    results: {
      eyebrow: 'The Outcome',
      title: 'Coolant System Sealed',
      achievements: [
        'Zero coolant loss after 1,000+ miles',
        'Pressure test holding 1.5 bar for 24 hours',
        'No coolant smell',
        'All preventive O-rings replaced',
      ],
    },

    // Mechanic's Expert Summary
    mechanicSummary: {
      symptoms: [
        'Gradual coolant loss (1L per 500 miles)',
        'Low coolant warning light',
        'Sweet coolant smell from engine bay',
        'No visible external leaks',
      ],
      recommendation: '立即检查冷却系统的后部交叉管密封圈和压力测试',
      consequence: '延误会导致发动机过热损坏，需要更换缸头或整个发动机，维修成本超过 $60,000',
      author: '技术总监',
    },

    ownerAdvice: {
      title: 'V12 Coolant Maintenance',
      tips: [
        {
          icon: '🔍',
          title: 'Monitor Coolant Level Weekly',
          description: 'V12 AM engines prone to rear pipe leaks. Catch early with weekly checks.',
        },
        {
          icon: '💧',
          title: 'Preventive Pipe Replacement at 30K',
          description: 'Replace rear crossover pipes preventively at 30K miles to avoid engine-out emergency repair.',
        },
      ],
    },
    technicalSpecs: {
      engineDisplacement: '5,935 cc (5.9L V12)',
      coolingSystem: 'Dual-zone with electric water pump',
      coolantCapacity: '12 liters',
      coolantType: 'OAT (Organic Acid Technology)',
    },
    relatedCases: [],
    tags: ['Aston Martin', 'Rapide', 'V12', 'Coolant Leak', 'Engine Out'],
    shareImage: '/images/case-studies/rapide-coolant-share.jpg',
  },

  // Add more case studies for other brands here...
];

// Helper function to get case study by slug
export function getCaseStudyBySlug(slug) {
  return caseStudies.find(study => study.slug === slug) || null;
}

// Helper function to get all case studies for a brand
export function getCaseStudiesByBrand(brandSlug) {
  return caseStudies.filter(study => study.brandSlug === brandSlug);
}

// Helper function to get case studies by model
export function getCaseStudiesByModel(brandSlug, modelId) {
  return caseStudies.filter(
    study => study.brandSlug === brandSlug && study.modelId === modelId
  );
}

// Helper function to get related case studies
export function getRelatedCaseStudies(currentCaseId, limit = 3) {
  const currentCase = caseStudies.find(study => study.id === currentCaseId);
  if (!currentCase) return [];

  // First try to get explicitly related cases
  const related = currentCase.relatedCases
    .map(id => caseStudies.find(study => study.id === id))
    .filter(Boolean);

  // If not enough related cases, get same-brand cases
  if (related.length < limit) {
    const sameBrand = caseStudies
      .filter(study =>
        study.brandSlug === currentCase.brandSlug &&
        study.id !== currentCaseId &&
        !currentCase.relatedCases.includes(study.id)
      )
      .slice(0, limit - related.length);

    related.push(...sameBrand);
  }

  return related.slice(0, limit);
}

// Helper function to get recent case studies
export function getRecentCaseStudies(limit = 3) {
  return [...caseStudies]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, limit);
}
