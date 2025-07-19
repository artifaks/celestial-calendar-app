export interface Ebook {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  coverImage: string;
  price: number;
  priceId: string;
  features: string[];
  highlights: string[];
  targetAudience: string[];
  longDescription: string;
  category: 'astrology' | 'healing' | 'spirituality' | 'crystals' | 'meditation';
  pageCount: number;
  format: 'PDF' | 'EPUB';
  isNew?: boolean;
  isBestseller?: boolean;
  releaseDate: string;
}

export const ebooks: Ebook[] = [
  {
    id: 'complete-collection',
    title: 'Celestia Scope Complete Collection',
    subtitle: 'All 4 eBooks: Your Complete Spiritual Journey',
    description: 'Get all 4 Celestia Scope eBooks in one complete collection. Save $5 and unlock your full spiritual potential.',
    coverImage: "https://pmhvmdojpbazijthcskg.supabase.co/storage/v1/object/public/ebook-covers//Celestial%20Rhythms:%20Navigating%20the%20Cosmos%20Through%20Time.png",
    price: 14.99,
    priceId: 'price_ebook_bundle',
    category: 'astrology',
    pageCount: 522,
    format: 'PDF',
    isNew: true,
    isBestseller: true,
    releaseDate: '2024-01-30',
    features: [
      'All 5 Celestia Scope eBooks included',
      'Celestial Rhythms: Navigating the Cosmos Through Time',
      'Herbal Healing: A Beginner\'s Journey into Natural Medicine',
      'Unlocking the Stars: A Beginner\'s Guide to Your Birth Chart',
      'The Moon\'s Embrace: Simple Practices for Emotional Recovery',
      'Celestial Insights: Unlocking Your Birth Chart',
      'Save $10 compared to buying individually',
      'Instant download of all books'
    ],
    highlights: [
      'Complete spiritual journey in one collection',
      'Save $10 with bundle pricing',
      'Instant access to all 5 books',
      'Perfect for spiritual seekers and beginners'
    ],
    targetAudience: [
      'Spiritual seekers wanting comprehensive guidance',
      'Beginners to astrology and healing',
      'Anyone interested in cosmic wisdom and natural healing',
      'People looking for complete spiritual education'
    ],
    longDescription: `The Celestia Scope Complete Collection is your comprehensive guide to spiritual growth and cosmic wisdom. This exclusive bundle includes all five of our most popular eBooks, providing you with a complete spiritual education that covers astrology, healing, birth charts, emotional wellness, and advanced birth chart interpretation.

**What's Included:**

1. **Celestial Rhythms: Navigating the Cosmos Through Time** - Discover humanity's relationship with the cosmos throughout history, from ancient civilizations to modern applications.

2. **Herbal Healing: A Beginner's Journey into Natural Medicine** - Learn the fundamentals of herbal medicine and how to use plants for natural healing and wellness.

3. **Unlocking the Stars: A Beginner's Guide to Your Birth Chart** - Master the art of reading and interpreting your birth chart to understand your personality, strengths, and life purpose.

4. **The Moon's Embrace: Simple Practices for Emotional Recovery** - Transform your emotional well-being through lunar cycles, journaling, meditation, and self-care rituals.

5. **Celestial Insights: Unlocking Your Birth Chart** - Advanced guide to comprehensive birth chart interpretation, including planetary influences, house systems, and career guidance.

**Why Choose the Complete Collection?**

- **Save $10** compared to buying each book individually
- **Instant access** to all 5 books immediately after purchase
- **Comprehensive education** covering all aspects of spiritual growth
- **Perfect for beginners** and experienced practitioners alike
- **Lifetime access** to all content

Whether you're just beginning your spiritual journey or looking to deepen your existing practice, this collection provides everything you need to unlock your full spiritual potential and connect with the cosmic wisdom that surrounds us all.`
  },
  {
    id: 'celestial-insights',
    title: 'Celestial Insights: Unlocking Your Birth Chart',
    subtitle: 'A Comprehensive Guide to Understanding Your Astrological Blueprint',
    description: 'Master the art of reading and interpreting your birth chart to understand your personality, strengths, and life purpose with this comprehensive guide.',
    coverImage: "https://pmhvmdojpbazijthcskg.supabase.co/storage/v1/object/public/ebook-covers//Celestial%20Insights:%20Unlocking%20Your%20Birth%20Chart%20COVER.png",
    price: 7.99,
    priceId: 'price_ebook_799',
    category: 'astrology',
    pageCount: 184,
    format: 'PDF',
    isNew: true,
    releaseDate: '2024-01-30',
    features: [
      'Comprehensive birth chart interpretation guide',
      'Step-by-step natal chart analysis',
      'Planet meanings and zodiac sign characteristics',
      'House system explanations and interpretations',
      'Aspect analysis and relationship dynamics',
      'Moon phase interpretations and lunar influences',
      'Career guidance through astrology',
      'Timing life events with celestial wisdom',
      'Practical exercises and self-reflection prompts',
      'Sample birth chart readings and examples'
    ],
    highlights: [
      'Learn to calculate and interpret your own birth chart',
      'Understand the meaning of planets, signs, and houses',
      'Discover how aspects influence your personality and relationships',
      'Master moon phase interpretations for emotional insights',
      'Gain career guidance through astrological analysis',
      'Learn to time life events with cosmic wisdom'
    ],
    targetAudience: [
      'Astrology beginners and enthusiasts',
      'People seeking self-discovery and personal growth',
      'Those interested in understanding their life purpose',
      'Anyone curious about how cosmic energies influence personality',
      'Individuals wanting to master birth chart interpretation'
    ],
    longDescription: `"Celestial Insights: Unlocking Your Birth Chart" is your comprehensive guide to understanding the profound wisdom encoded in your astrological blueprint. This meticulously crafted book takes you on a journey through the intricate world of birth chart interpretation, revealing how the positions of celestial bodies at the moment of your birth shape your personality, relationships, and life path.

**What You'll Discover:**

**Chapter 1: Introduction to Astrology**
- The rich history of astrology from ancient Babylonians to modern practice
- Understanding the zodiac and its four elements (fire, earth, air, water)
- How moon phases influence our emotional landscape
- The transition from predictive tool to self-discovery method

**Chapter 2: The Birth Chart Unveiled**
- What is a birth chart and why it matters
- The significance of sun, moon, and rising signs
- How planetary positions shape your unique personality
- Understanding the twelve houses and their life areas

**Chapter 3: Planetary Influences**
- Deep dive into each planet's meaning and influence
- How Mars affects ambition and drive
- Venus and its role in love and beauty
- Mercury's impact on communication and learning
- Jupiter's influence on growth and expansion
- Saturn's lessons in discipline and structure

**Chapter 4: The Houses of Life**
- First House: Your identity and self-expression
- Second House: Values, money, and possessions
- Third House: Communication, siblings, and short trips
- Fourth House: Home, family, and emotional foundation
- Fifth House: Creativity, romance, and children
- Sixth House: Work, health, and daily routines
- Seventh House: Partnerships and relationships
- Eighth House: Transformation, shared resources, and intimacy
- Ninth House: Higher learning, travel, and philosophy
- Tenth House: Career, reputation, and public image
- Eleventh House: Friends, groups, and future goals
- Twelfth House: Spirituality, subconscious, and hidden matters

**Chapter 5: Aspects and Relationships**
- Understanding how planets interact with each other
- Conjunctions, oppositions, trines, and squares
- How aspects influence your personality and relationships
- Reading relationship compatibility through synastry

**Chapter 6: Moon Phases and Emotional Wisdom**
- How your birth moon phase affects your emotional nature
- New Moon personalities: Introspection and new beginnings
- Full Moon personalities: Emotional awareness and completion
- Waxing and waning moon influences
- Using lunar cycles for personal growth

**Chapter 7: Career Guidance Through Astrology**
- Identifying your vocational calling through your chart
- The Midheaven (10th house) and career direction
- Planetary influences on work style and success
- Timing career changes with transits
- Moon phase influences on professional development

**Chapter 8: Timing Life Events**
- Using astrology for optimal timing
- Understanding transits and their effects
- Planning important decisions with cosmic wisdom
- Lunar phases and their impact on timing
- How to align personal goals with favorable energies

**Chapter 9: Practical Applications**
- Step-by-step birth chart calculation
- Interpreting your own chart with confidence
- Creating personalized rituals based on your chart
- Using astrology for daily decision-making
- Building a spiritual practice around your chart

**Chapter 10: Community and Growth**
- Connecting with the astrological community
- Resources for further learning
- Embracing your unique astrological journey
- Sharing insights with others
- Continuing your cosmic education

**Why This Book is Essential:**

- **Comprehensive Coverage**: From basic concepts to advanced interpretation techniques
- **Practical Approach**: Step-by-step guidance for reading your own chart
- **Modern Relevance**: Connects ancient wisdom with contemporary life
- **Emotional Depth**: Explores the moon's influence on our emotional landscape
- **Career Focus**: Special attention to vocational guidance and timing
- **Community Building**: Encourages connection with fellow astrology enthusiasts

Whether you're completely new to astrology or have some basic knowledge, this book provides the tools and understanding you need to unlock the wisdom of your birth chart and use it as a guide for personal growth and self-discovery. Your birth chart is a unique cosmic fingerprint that reveals your divine blueprint - let this book be your key to understanding it.`
  },
  {
    id: 'celestial-rhythms',
    title: 'Celestial Rhythms: Navigating the Cosmos Through Time',
    subtitle: 'A Comprehensive Guide to Humanity\'s Relationship with the Cosmos',
    description: 'Explore the fascinating journey of how humanity has measured, understood, and connected with the cosmos throughout history.',
    coverImage: "https://pmhvmdojpbazijthcskg.supabase.co/storage/v1/object/public/ebook-covers//Celestial%20Rhythms:%20Navigating%20the%20Cosmos%20Through%20Time.png",
    price: 4.99,
    priceId: 'price_ebook_499',
    category: 'astrology',
    pageCount: 156,
    format: 'PDF',
    isNew: true,
    releaseDate: '2024-01-15',
    features: [
      'Comprehensive exploration of timekeeping evolution',
      'Cultural traditions and cosmic connections',
      'Navigation history and celestial guidance',
      'Modern applications and future insights',
      'Beautiful illustrations and diagrams',
      'Interactive exercises and reflections'
    ],
    highlights: [
      'Discover how ancient civilizations used the stars for navigation and timekeeping',
      'Learn about the cultural significance of celestial events across different societies',
      'Understand the scientific principles behind astronomical observations',
      'Explore modern applications of cosmic knowledge in technology and spirituality'
    ],
    targetAudience: [
      'Astronomy enthusiasts and history buffs',
      'Spiritual seekers interested in cosmic wisdom',
      'Students of cultural anthropology and ancient civilizations',
      'Anyone curious about humanity\'s relationship with the universe'
    ],
    longDescription: `"Celestial Rhythms: Navigating the Cosmos Through Time" is a comprehensive exploration of humanity's enduring relationship with the cosmos. This meticulously researched book takes readers on a journey through the evolution of timekeeping, from ancient civilizations' observations of celestial bodies to modern applications of cosmic knowledge.

The book begins with an examination of how early humans used the stars, sun, and moon to navigate, mark time, and understand their place in the universe. It explores the sophisticated astronomical knowledge of ancient civilizations such as the Egyptians, Babylonians, Mayans, and Chinese, revealing how they developed complex calendars and prediction systems based on celestial observations.

Readers will discover the cultural significance of cosmic events across different societies, from the construction of Stonehenge to the precise astronomical alignments of ancient temples. The book also examines how celestial knowledge influenced art, religion, philosophy, and daily life throughout history.

Moving into the modern era, "Celestial Rhythms" explores how our understanding of the cosmos has evolved through scientific discovery, while maintaining the spiritual and cultural connections that have always existed between humanity and the stars. The book concludes with a look at contemporary applications of cosmic knowledge, from space exploration to spiritual practices that continue to draw inspiration from celestial rhythms.

Whether you're an astronomy enthusiast, a history buff, or simply curious about humanity's relationship with the universe, this book offers a fascinating perspective on how the cosmos has shaped human civilization and continues to influence our understanding of time, space, and our place in the universe.`
  },
  {
    id: 'herbal-healing',
    title: 'Herbal Healing: A Beginner\'s Journey into Natural Medicine',
    subtitle: 'Discover the Power of Plants for Health and Wellness',
    description: 'Learn the fundamentals of herbal medicine and how to use plants for natural healing and wellness.',
    coverImage: "https://pmhvmdojpbazijthcskg.supabase.co/storage/v1/object/public/ebook-covers//Herbal%20Healing:%20A%20Beginner\'s%20Journey%20into%20Natural%20Medicine.png",
    price: 4.99,
    priceId: 'price_ebook_499',
    category: 'healing',
    pageCount: 142,
    format: 'PDF',
    isNew: true,
    releaseDate: '2024-01-20',
    features: [
      'Comprehensive guide to herbal medicine basics',
      'Safe preparation methods and dosages',
      'Common herbs and their healing properties',
      'DIY herbal remedies and recipes',
      'Safety guidelines and contraindications',
      'Growing and harvesting your own herbs'
    ],
    highlights: [
      'Master the fundamentals of herbal medicine and plant identification',
      'Learn safe preparation methods for various herbal remedies',
      'Discover the healing properties of common herbs and plants',
      'Create your own herbal medicine cabinet with DIY recipes'
    ],
    targetAudience: [
      'Natural health enthusiasts and wellness seekers',
      'Beginners interested in herbal medicine',
      'Gardeners wanting to grow medicinal plants',
      'Anyone seeking natural alternatives for health and wellness'
    ],
    longDescription: `"Herbal Healing: A Beginner's Journey into Natural Medicine" is your comprehensive guide to understanding and using the healing power of plants. This accessible book demystifies herbal medicine and provides practical knowledge for incorporating natural remedies into your daily life.

The journey begins with the fundamentals of herbal medicine, including the history and philosophy behind plant-based healing. You'll learn about the different parts of plants used in medicine, how to identify common medicinal herbs, and the basic principles of herbal preparation.

The book provides detailed profiles of 25 essential herbs, including their medicinal properties, traditional uses, and modern applications. Each herb profile includes information on how to grow, harvest, and prepare the plant for medicinal use, along with safety considerations and contraindications.

Practical sections guide you through various preparation methods, from simple teas and infusions to more complex tinctures and salves. You'll find step-by-step instructions for creating your own herbal remedies, along with recipes for common health concerns such as stress relief, immune support, digestive health, and skin care.

Safety is a primary focus throughout the book, with clear guidelines on proper dosages, potential interactions, and when to seek professional medical advice. The book also includes information on growing your own medicinal herbs, from garden planning to harvesting and storage techniques.

Whether you're completely new to herbal medicine or looking to expand your knowledge, this book provides the foundation you need to safely and effectively incorporate plant-based healing into your wellness routine.`
  },
  {
    id: 'unlocking-stars',
    title: 'Unlocking the Stars: A Beginner\'s Guide to Your Birth Chart',
    subtitle: 'Understanding Your Cosmic Blueprint and Life Path',
    description: 'Learn to read and interpret your birth chart to understand your personality, strengths, and life purpose.',
    coverImage: "https://pmhvmdojpbazijthcskg.supabase.co/storage/v1/object/public/ebook-covers//Unlocking%20the%20Stars:%20A%20Beginner\'s%20Guide%20to%20Your%20Birth%20Chart.png",
    price: 4.99,
    priceId: 'price_ebook_499',
    category: 'astrology',
    pageCount: 168,
    format: 'PDF',
    isNew: true,
    releaseDate: '2024-01-25',
    features: [
      'Step-by-step birth chart interpretation',
      'Planet meanings and zodiac sign characteristics',
      'House system explanations and interpretations',
      'Aspect analysis and relationship dynamics',
      'Practical exercises and self-reflection prompts',
      'Sample birth chart readings and examples'
    ],
    highlights: [
      'Learn to calculate and interpret your own birth chart',
      'Understand the meaning of planets, signs, and houses',
      'Discover how aspects influence your personality and relationships',
      'Gain insights into your life purpose and potential'
    ],
    targetAudience: [
      'Astrology beginners and enthusiasts',
      'People seeking self-discovery and personal growth',
      'Those interested in understanding their life purpose',
      'Anyone curious about how cosmic energies influence personality'
    ],
    longDescription: `"Unlocking the Stars: A Beginner's Guide to Your Birth Chart" is your comprehensive introduction to understanding the cosmic blueprint that was created at the moment of your birth. This accessible guide demystifies astrology and teaches you how to read and interpret your birth chart to gain profound insights into your personality, relationships, and life path.

The book begins with the fundamentals of astrology, explaining what a birth chart is and how it serves as a snapshot of the sky at the exact moment you were born. You'll learn about the significance of the sun, moon, and planets, and how their positions in different zodiac signs and houses create your unique cosmic signature.

Each chapter focuses on a different component of the birth chart, starting with the sun sign (your core identity), moon sign (your emotional nature), and rising sign (your outer personality). The book then explores the meanings of all the planets and their significance in different areas of life, from communication and relationships to career and spirituality.

The house system is explained in detail, showing how the twelve houses represent different areas of life experience. You'll learn how to interpret the planets in each house and understand how they influence various aspects of your life, from family and home to career and public image.

Aspect analysis is covered comprehensively, teaching you how to understand the relationships between planets and how these connections shape your personality and life experiences. The book includes practical exercises and reflection prompts to help you apply what you learn to your own chart.

Whether you're completely new to astrology or have some basic knowledge, this book provides the tools and understanding you need to unlock the wisdom of your birth chart and use it as a guide for personal growth and self-discovery.`
  },
  {
    id: 'moons-embrace',
    title: "The Moon's Embrace: Simple Practices for Emotional Recovery",
    subtitle: 'Transform Your Emotional Well-being Through the Power of Lunar Cycles',
    description: 'A gentle, beginner-friendly guide to emotional healing through lunar cycles, journaling, meditation, and self-care rituals.',
    coverImage: "https://pmhvmdojpbazijthcskg.supabase.co/storage/v1/object/public/ebook-covers//The%20Moon\'s%20Embrace:%20Simple%20Practices%20for%20Emotional%20Recovery.png",
    price: 5.99,
    priceId: 'price_moons_embrace',
    category: 'healing',
    pageCount: 56,
    format: 'PDF',
    isNew: true,
    releaseDate: '2024-06-10',
    features: [
      'Science and history of lunar influence on emotions',
      'Phase-by-phase healing practices for each moon phase',
      'Journaling, meditation, visualization, and affirmations',
      'Emotional mastery: gratitude, forgiveness, self-compassion',
      'Daily integration and community-building tips',
    ],
    highlights: [
      'Learn how lunar phases affect your emotions and behaviors',
      'Set intentions and release negativity with the moon',
      'Develop sustainable self-care routines aligned with lunar cycles',
      'Accessible for beginners and those new to emotional healing',
    ],
    targetAudience: [
      'Beginners seeking gentle emotional healing approaches',
      'Anyone interested in lunar cycles and natural wellness',
      'Those looking to develop mindfulness and self-awareness',
      'People wanting to create meaningful self-care routines',
      'Individuals seeking alternatives to traditional recovery methods',
    ],
    longDescription: `Discover a gentle yet profound approach to emotional healing in "The Moon's Embrace," where ancient lunar wisdom meets modern wellness practices. This comprehensive guide offers beginners an accessible pathway to emotional recovery by aligning personal healing with the natural rhythms of the moon.\n\nWhat You'll Learn:\n\n- Understanding Lunar Influence: Explore the science and historical significance of how moon phases affect our emotions and behaviors\n- Phase-by-Phase Practices: Learn specific techniques for each lunar phase, from setting intentions during the New Moon to releasing negativity during the Full Moon\n- Practical Tools: Master simple yet effective practices including journaling, meditation, visualization, and affirmations\n- Emotional Mastery: Develop skills in gratitude, forgiveness, self-compassion, and overcoming challenges\n- Daily Integration: Create sustainable routines and build community connections that support your ongoing healing journey\n\nThis 11-chapter guide provides a structured yet flexible framework for emotional recovery, offering hope and practical wisdom for anyone ready to embrace healing through the moon's gentle guidance. Each phase becomes an opportunity for growth, reflection, and renewal in your journey toward emotional well-being.\n\nStart your transformative journey with the moon as your guide to lasting emotional recovery and inner peace.`,
  }
];

// Helper function to get eBook by ID
export const getEbookById = (id: string): Ebook | undefined => {
  return ebooks.find(ebook => ebook.id === id);
};

// Helper function to get eBooks by category
export const getEbooksByCategory = (category: Ebook['category']): Ebook[] => {
  return ebooks.filter(ebook => ebook.category === category);
};

// Helper function to get new eBooks
export const getNewEbooks = (): Ebook[] => {
  return ebooks.filter(ebook => ebook.isNew);
};

// Helper function to get bestseller eBooks
export const getBestsellerEbooks = (): Ebook[] => {
  return ebooks.filter(ebook => ebook.isBestseller);
}; 