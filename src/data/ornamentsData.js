export const ATELIER_INFO = {
  name: "KGN.R Gold Finishing & Designing Works",
  subname: "Platinum, Gold & Silver Digital Finishing Works",
  proprietor: "Rabbani Shaik",
  experienceYears: "25+",
  tagline: "The Whisper of Pure Gold & Sacred Temple Craftsmanship",
  address: {
    line1: "#19/156, N, R, N, complex",
    street: "Korada Street, Chinna Bazaar",
    city: "Nellore",
    state: "Andhra Pradesh",
    pincode: "524001",
    country: "India",
  },
  phones: [
    { label: "Mobile / WhatsApp", number: "+91 9440055996", clean: "919440055996" },
    { label: "WhatsApp Secondary", number: "+91 9347101857", clean: "919347101857" },
    { label: "Workshop Landline", number: "095500 81300", clean: "919550081300" },
  ],
  email: "kgnrgoldfinishingworks@gmail.com",
  hours: {
    weekdays: "10:00 AM – 9:00 PM",
    saturday: "10:00 AM – 9:30 PM",
    sunday: "11:00 AM – 5:00 PM (By Appointment)",
  },
  servicesSummary: [
    "Gold & Silver Polish Works",
    "Platinum Polish",
    "Radium Colours",
    "Enamel Colours (Meenakari)",
    "Antic Colours & Machine Cutting",
    "Temple Jewellery & Repairing Works",
  ]
};

export const LIVE_METAL_RATES = {
  gold24k: { name: "24K Fine Gold (999)", ratePerGram: 7420, change: "+0.45%", trend: "up" },
  gold22k: { name: "22K Standard Hallmark (916)", ratePerGram: 6802, change: "+0.42%", trend: "up" },
  gold18k: { name: "18K Diamond Jewellery (750)", ratePerGram: 5565, change: "+0.38%", trend: "up" },
  platinum950: { name: "Platinum 950", ratePerGram: 3350, change: "+0.15%", trend: "up" },
  silverFine: { name: "Fine Silver (999)", ratePerGram: 92.5, change: "+0.80%", trend: "up" },
  lastUpdated: "Today, Real-time Market Ticker (INR / g)"
};

export const CATEGORIES = [
  { id: "all", label: "All Masterpieces" },
  { id: "temple", label: "Temple Jewellery" },
  { id: "necklaces", label: "Regal Necklaces & Haar" },
  { id: "rings", label: "Rings & Bangles" },
  { id: "enamel", label: "Meenakari & Enamel" },
  { id: "finishing", label: "Digital Cutting & Polish" },
];

export const ORNAMENTS = [
  {
    id: "ganesha-temple-haar",
    name: "Sri Ganesha Royal Temple Ruby Haar",
    category: "temple",
    karat: "22K (916 Hallmark)",
    weightGrams: 86.4,
    purity: "91.6% Pure Gold",
    tag: "SIGNATURE HEIRLOOM",
    offerLabel: "22K BIS HALLMARKED • TEMPLE RESTORATION",
    featured: true,
    image: "/assets/ganesha_haar.jpg",
    alternateImage: "/assets/necklace_antique.jpg",
    leadDescription: "A magnificent South Indian temple necklace crowned by a deeply sculpted Lord Ganesha medallion flanked by sacred peacocks, strung with four cascading tiers of natural faceted ruby beads.",
    description: "Handcrafted using traditional Nakshi repoussé and antique gold oxidation. Every micro-detail on Lord Ganesha's trunk, crown (kireedam), and modaka conveys divine sanctity. Finished with KGN.R's proprietary warm antique gold lustre.",
    craftsmanship: "Hand Chased Nakshi & High-Precision Ultrasonic Gold Buffing",
    gemstones: "Natural Mozambique faceted rubies, emerald accent drops, CZ solitaire highlights",
    dimensions: "Medallion: 92mm x 78mm; Chain length: 24 inches adjustable",
    approxCostINR: "₹6,85,000",
    specifications: [
      { label: "Purity", value: "22 Karat (91.6% BIS Standard)" },
      { label: "Gross Weight", value: "86.40 grams" },
      { label: "Net Gold Weight", value: "68.20 grams" },
      { label: "Bead Stones", value: "Faceted natural ruby beads" },
      { label: "Finish", value: "KGN.R Deep Antique Patina + Satin Buff" },
      { label: "Certification", value: "100% HUID & BIS Hallmarked" }
    ]
  },
  {
    id: "peacock-royal-enamel",
    name: "Royal Peacock Vitreous Enamel Motif",
    category: "enamel",
    karat: "22K (916 Hallmark)",
    weightGrams: 28.5,
    purity: "91.6% Pure Gold",
    tag: "MASTER ENAMELWORK",
    offerLabel: "DIGITAL MEENAKARI • COBALT & EMERALD ENAMEL",
    featured: true,
    image: "/assets/peacock_enamel.jpg",
    alternateImage: "/assets/peacock_gold.jpg",
    leadDescription: "Exquisite dancing peacock pendant showcasing the transition from raw diamond-studded gold framework to breathtaking vitreous royal blue and vivid emerald green enamel.",
    description: "Demonstrates KGN.R's mastery of high-fire digital enamel. The plumage is set with brilliant pavé cubic zirconia, while the hand-filled translucent vitreous enamel reproduces the iridescent sheen of peacock feathers.",
    craftsmanship: "Precision Micro-Setting, Vitreous Enameling & Digital Edge Polish",
    gemstones: "64 micro-pavé round brilliant stones & vitreous enamel glass pigments",
    dimensions: "72mm width x 28mm height",
    approxCostINR: "₹2,25,000",
    specifications: [
      { label: "Purity", value: "22 Karat (91.6% Pure Gold)" },
      { label: "Gross Weight", value: "28.50 grams" },
      { label: "Net Gold Weight", value: "23.80 grams" },
      { label: "Enamel Technique", value: "Multi-layer high gloss Meenakari" },
      { label: "Finish", value: "High-lustre 24K micro-gold plating edge" },
      { label: "Hallmark", value: "Government certified BIS 916" }
    ]
  },
  {
    id: "balaji-divine-ring",
    name: "Lord Venkateswara Prabhavali Ring",
    category: "rings",
    karat: "22K (916 Hallmark)",
    weightGrams: 22.8,
    purity: "91.6% Pure Gold",
    tag: "SACRED ICONOGRAPHY",
    offerLabel: "TIRUPATI BALAJI • MULTI-COLOR ENAMELWORK",
    featured: true,
    image: "/assets/balaji_ring.jpg",
    alternateImage: "/assets/balaji_ring_side.jpg",
    leadDescription: "A revered architectural gold signet ring encapsulating Lord Venkateswara of Tirumala, framed by an ornate pierced prabhavali archway with ruby and emerald stone detailing.",
    description: "The sanctum idol is rendered in obsidian black patinated relief with sacred namam, ruby-red chest kavacham, and green gemstone garlands. Deep floral scrollwork flanks the ring shank for supreme comfort and royal presence.",
    craftsmanship: "Micro-sculpting, Radium accents, Laser-assisted engraving",
    gemstones: "Micro pavé accents, synthetic ruby and emerald cabochons",
    dimensions: "Crown Height: 34mm, Width: 21mm, Ring size: Custom fit (16–26 Indian size)",
    approxCostINR: "₹1,82,000",
    specifications: [
      { label: "Purity", value: "22 Karat Gold (916)" },
      { label: "Gross Weight", value: "22.80 grams" },
      { label: "Ring Shank", value: "Solid comfort-fit floral shank" },
      { label: "Icons", value: "Shankha, Chakra, & Lotus Prabhavali" },
      { label: "Finish", value: "Antique dual-tone gold + Black oxide idol" },
      { label: "Guarantee", value: "Lifetime polish & maintenance support" }
    ]
  },
  {
    id: "divine-goddess-mukhavata",
    name: "Sri Mahalakshmi Sacred Temple Mukhavata",
    category: "temple",
    karat: "Pure Brass & Antique Gold Leaf",
    weightGrams: 420.0,
    purity: "Sacred Temple Alloy / Gold Plated",
    tag: "TEMPLE HERITAGE",
    offerLabel: "TEMPLE IDOL RESTORATION • DEVOTIONAL CRAFT",
    featured: true,
    image: "/assets/temple_mukhavata.jpg",
    alternateImage: "/assets/ganesha_haar.jpg",
    leadDescription: "A magnificent 7.5-inch temple mukhavata representing the divine mother, sculpted with serene eyes, ornate tiered crown (mukut), sacred kundalas, and traditional red-lacquered lips.",
    description: "Revered in temple sanctums and home pooja altars. KGN.R provides complete restoration, traditional gold plating, and protective lacquer to endure generations of temple rituals and abhishekam.",
    craftsmanship: "Repoussé Temple Casting, Hand Chasing & Protective Gold Sealing",
    gemstones: "Sacred Kumkum enamel finish on lips and third-eye bindu",
    dimensions: "Height: 190mm (7.5 inches), Width: 110mm",
    approxCostINR: "₹48,000 (Brass) / Custom in Solid 22K Gold",
    specifications: [
      { label: "Material Options", value: "Solid 22K Gold OR Panchaloha with Gold Leaf" },
      { label: "Weight Range", value: "420g alloy / 350g-1.2kg solid gold" },
      { label: "Ritual Grade", value: "Abhishekam-resistant antique finish" },
      { label: "Artisan", value: "KGN.R Temple Goldsmith Guild, Nellore" }
    ]
  },
  {
    id: "antique-filigree-bangles",
    name: "Heritage Nizam Filigree & Floral Kadas",
    category: "rings",
    karat: "22K (916 Hallmark)",
    weightGrams: 64.2,
    purity: "91.6% Pure Gold",
    tag: "BRIDAL COLLECTION",
    offerLabel: "PAIR OF 2 • MACHINE FACETED & HAND CHASED",
    featured: false,
    image: "/assets/bangles_antique.jpg",
    alternateImage: "/assets/balaji_ring.jpg",
    leadDescription: "Pair of substantial antique gold openable bangles featuring intricate openwork filigree lattice and faceted machine diamond-cuts that catch every ray of light.",
    description: "Constructed with secure screw clasps for everyday ease. The finish combines antique matte texture with laser-sharpened reflective grooves, delivering unmatched radiance on bridal wrists.",
    craftsmanship: "High-speed CNC Diamond Cutting & Antique Patina Finish",
    gemstones: "Pure gold ornamentation without stones",
    dimensions: "Size: 2.4 / 2.6 / 2.8 available",
    approxCostINR: "₹5,10,000 (Pair)",
    specifications: [
      { label: "Purity", value: "22K (916 BIS Hallmark)" },
      { label: "Gross Weight", value: "64.20 grams (Pair)" },
      { label: "Closure", value: "Concealed screw clasp with safety hinge" },
      { label: "Surface Finish", value: "Dual matte and mirror diamond facet" }
    ]
  },
  {
    id: "antique-kasu-necklace",
    name: "Vedic Kasu Mala Antique Choker",
    category: "necklaces",
    karat: "22K (916 Hallmark)",
    weightGrams: 52.0,
    purity: "91.6% Pure Gold",
    tag: "CLASSIC SOUTH INDIAN",
    offerLabel: "LAKSHMI COIN MALA • KEMP RUBY SETTINGS",
    featured: false,
    image: "/assets/necklace_antique.jpg",
    alternateImage: "/assets/ganesha_haar.jpg",
    leadDescription: "Timeless South Indian bridal choker adorned with embossed Goddess Lakshmi coins, crowned with cabochon kemp rubies and emerald drops.",
    description: "Each coin is individually stamped, hand-linked, and polished to a warm antique glow that echoes heirlooms passed down from centuries past.",
    craftsmanship: "Stamping, Hand Assembly, Kemp Prong Setting",
    gemstones: "Kemp red rubies and cabochon green emeralds",
    dimensions: "16 inches with adjustable gold zari dori",
    approxCostINR: "₹4,15,000",
    specifications: [
      { label: "Purity", value: "22 Karat (916)" },
      { label: "Gross Weight", value: "52.00 grams" },
      { label: "Coin Motif", value: "Gaja Lakshmi with dual elephants" },
      { label: "Origin", value: "Nellore Goldsmith Tradition" }
    ]
  },
  {
    id: "royal-nakshi-pendant",
    name: "Royal Nakshi Medallion Pendant",
    category: "finishing",
    karat: "22K (916 Hallmark)",
    weightGrams: 34.5,
    purity: "91.6% Pure Gold",
    tag: "HIGH RELIEF NAKSHI",
    offerLabel: "ANTIQUE FINISHING • SOUTH INDIAN ARTISTRY",
    featured: false,
    image: "/assets/craft_pendant.jpg",
    alternateImage: "/assets/peacock_enamel.jpg",
    leadDescription: "Elaborate medallion pendant carved with sculptural 3D relief, featuring floral scrolls and suspended jhumka bell beads.",
    description: "Finished with KGN.R's signature digital micro-blasting and antique chemical coloration to highlight depths and silhouettes.",
    craftsmanship: "Digital Finishing & Antique Oxidation",
    gemstones: "Natural cabochon ruby center",
    dimensions: "65mm x 45mm",
    approxCostINR: "₹2,75,000",
    specifications: [
      { label: "Purity", value: "22K BIS Hallmarked" },
      { label: "Gross Weight", value: "34.50 grams" },
      { label: "Bail", value: "Extra-wide bail for thick gold chains" }
    ]
  },
  {
    id: "heritage-temple-earrings",
    name: "Kemp Studded Temple Jhumkas",
    category: "temple",
    karat: "22K (916 Hallmark)",
    weightGrams: 26.8,
    purity: "91.6% Pure Gold",
    tag: "ANTIQUE CLASSIC",
    offerLabel: "NATURAL PEARL DROPS • TEMPLE DESIGN",
    featured: false,
    image: "/assets/craft_earrings.jpg",
    alternateImage: "/assets/bangles_antique.jpg",
    leadDescription: "Grand architectural jhumkas crowned by peacock studs with cascading seed pearls and deep red kemp stones.",
    description: "Designed for royal weddings and classical dancers, engineered with hollow core technology for supreme featherlight comfort.",
    craftsmanship: "Repoussé Bell & Hand Wire-Wrapping",
    gemstones: "Natural basra pearls, kemp rubies",
    dimensions: "Length: 55mm, Bell Diameter: 24mm",
    approxCostINR: "₹2,10,000",
    specifications: [
      { label: "Purity", value: "22 Karat (916)" },
      { label: "Gross Weight", value: "26.80 grams" },
      { label: "Post Type", value: "Traditional South Indian screw back" }
    ]
  }
];

export const SERVICES = [
  {
    id: "gold-silver-polish",
    title: "Gold & Silver Polish Works",
    subtitle: "Ultrasonic Buffing & 24K Electro-Lustre",
    description: "Restore aged, tarnished, or dull gold and silver ornaments to brilliant showroom lustre without gold loss, using state-of-the-art ultrasonic cleansing and micron buffing wheels.",
    badge: "ZERO GOLD LOSS",
    turnaround: "Same-Day / 2 Hours",
    specs: ["Multi-stage ultrasonic chemical degreasing", "High-speed centrifugal rouge buffing", "24K micro-gold flashing coating available"],
    image: "/assets/video_finishing.mp4",
    isVideo: true,
  },
  {
    id: "platinum-polish",
    title: "Platinum Digital Polish",
    subtitle: "Diamond-Lustre Mirror Finish",
    description: "Platinum requires specialized diamond paste and extreme-temperature finishing due to its extreme density. We bring international mirror-finish lustre to wedding bands and solitaire mounts.",
    badge: "PRECISION PLATING",
    turnaround: "24 Hours",
    specs: ["950 Platinum specialized diamond abrasives", "Rhodium plating options for icy brilliance", "Micro-scratch burnishing & structural check"],
    image: "/assets/balaji_ring_side.jpg",
    isVideo: false,
  },
  {
    id: "enamel-meenakari",
    title: "Enamel Colours (Meenakari)",
    subtitle: "Vitreous & Cold Glass Enameling",
    description: "Transform plain gold castings into vibrant royal heirlooms with high-fire vitreous enamel in imperial peacock blue, emerald green, and pigeon-blood ruby shades.",
    badge: "HERITAGE MEENAKARI",
    turnaround: "2-3 Days",
    specs: ["Vitreous glass powder enamel (fired at 800°C)", "Cold UV curable jewellers resin for fragile stones", "Micro-fine brushwork & color gradient shading"],
    image: "/assets/peacock_enamel.jpg",
    isVideo: false,
  },
  {
    id: "radium-colours",
    title: "Radium & Luminescent Accents",
    subtitle: "Contemporary High-Contrast Highlights",
    description: "Precision application of black radium, luminous white, and multi-color accents on modern and traditional gold jewelry to emphasize intricate carvings.",
    badge: "ACCENT SPECIALIST",
    turnaround: "Same-Day",
    specs: ["Black radium background shading on diamond jewelry", "High-contrast border lining", "Moisture and sweat resistant coating"],
    image: "/assets/balaji_ring.jpg",
    isVideo: false,
  },
  {
    id: "antic-machine-cutting",
    title: "Antic Colours & Machine Cutting",
    subtitle: "CNC Faceting & Authentic Antique Oxidation",
    description: "Diamond-faceted machine cutting cuts geometric facets into gold surfaces, producing dazzling sparkle. Combined with traditional antique patina for royal heirloom resonance.",
    badge: "CNC PRECISION",
    turnaround: "1-2 Days",
    specs: ["Precision diamond-flywheel machine cutting", "Customizable antique patina depths", "Preserves intricate relief while adding sparkle"],
    image: "/assets/bangles_antique.jpg",
    isVideo: false,
  },
  {
    id: "temple-repair",
    title: "Temple Jewellery & Repairing Works",
    subtitle: "Sacred Deities & Heritage Restoration",
    description: "Trusted by prominent temples and royal families across Andhra Pradesh and Tamil Nadu for restoring sacred gold mukhavatas, deity crowns, kavachams, and vintage heirlooms.",
    badge: "SACRED RESTORATION",
    turnaround: "Tailored to Project",
    specs: ["Structural reinforcement of antique gold", "Re-setting fallen kemp and precious gemstones", "Traditional temple alloy blending & gold gilding"],
    image: "/assets/temple_mukhavata.jpg",
    isVideo: false,
  }
];

export const TESTIMONIALS = [
  {
    quote: "KGN.R restored our 60-year-old family Ganesha temple haar with such divine perfection. The peacock enamel and antique gold finishing made it look even more magnificent than when my grandmother wore it.",
    author: "Lakshmi Narayana Rao",
    location: "Chinna Bazaar, Nellore",
    rating: 5,
    tag: "Temple Haar Restoration"
  },
  {
    quote: "Rabbani Shaik's digital finishing and platinum polish work is simply world-class. No other jeweler in Nellore has this level of precision buffing without losing a single milligram of gold.",
    author: "M. S. K. Jewellers",
    location: "Commercial Jewellers Guild, AP",
    rating: 5,
    tag: "Commercial Goldsmith Partner"
  },
  {
    quote: "The Lord Balaji ring with micro-enamel work is mesmerizing. The intricate detail on the sanctum idol and prabhavali is something only true master artisans can achieve.",
    author: "Dr. K. Ravichandran",
    location: "Tirupati / Chennai",
    rating: 5,
    tag: "Bespoke Balaji Ring"
  }
];
