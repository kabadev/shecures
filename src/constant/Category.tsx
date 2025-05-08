import { ReactNode } from "react";
import {
  Heart,
  Briefcase,
  DollarSign,
  Home,
  Smile,
  Users,
  Rocket,
  Droplet,
  BookOpen,
  Paintbrush,
  Shield,
  Scale,
  Brain,
  Activity,
  Sun,
} from "lucide-react"; // Import icons from Lucide

interface ForumCategory {
  name: string;
  slug: string;
  icon: ReactNode;
  description: string;
}

export const forumCategories: ForumCategory[] = [
  {
    name: "Health & Wellness",
    slug: "health-wellness",
    icon: <Heart />,
    description:
      "Discussions about physical, mental, and emotional health, including self-care tips and wellness strategies.",
  },
  {
    name: "Career & Finance",
    slug: "career-finance",
    icon: <Briefcase />,
    description:
      "Advice and resources for career development, job searching, and managing personal finances.",
  },
  {
    name: "Parenting & Family",
    slug: "parenting-family",
    icon: <Home />,
    description:
      "A supportive space for sharing experiences and advice on parenting and family life.",
  },
  {
    name: "Relationships & Support",
    slug: "relationships-support",
    icon: <Users />,
    description:
      "Open discussions on friendships, romantic relationships, and community support.",
  },
  {
    name: "Self-Care & Lifestyle",
    slug: "self-care-lifestyle",
    icon: <Smile />,
    description:
      "Exploration of self-care routines, personal growth, and maintaining a balanced lifestyle.",
  },
  {
    name: "Entrepreneurship & Business",
    slug: "entrepreneurship-business",
    icon: <Rocket />,
    description:
      "Resources and networking opportunities for women entrepreneurs and business leaders.",
  },
  {
    name: "Menstrual Health & Education",
    slug: "menstrual-health-education",
    icon: <Droplet />,
    description:
      "Focused discussions on menstrual health, education, and product recommendations.",
  },
  {
    name: "Fitness, Nutrition & Mental Health",
    slug: "fitness-nutrition-mental-health",
    icon: <Brain />,
    description:
      "Conversations on physical fitness, healthy eating, and mental wellness practices.",
  },
  {
    name: "Legal Rights & Advocacy",
    slug: "legal-rights-advocacy",
    icon: <Scale />,
    description:
      "Information and support on legal rights, advocacy, and navigating legal systems.",
  },
  {
    name: "Creative Hobbies & Crafts",
    slug: "creative-hobbies-crafts",
    icon: <Paintbrush />,
    description:
      "Connect over hobbies like crafting, cooking, and other creative pursuits.",
  },
];
export const comments = [
  {
    _id: "1",
    text: "I’ve been dealing with hormonal acne for years, and it’s really frustrating. I’ve tried so many treatments, but it seems like nothing works long-term. Has anyone found anything that really helped balance hormones or clear up acne? I’m open to natural remedies or prescribed treatments. Any advice would be appreciated!",
    replies: [
      {
        _id: "1.1",
        text: "I had similar issues with hormonal acne and found that cutting out dairy helped me a lot. I also started using tea tree oil, and it worked wonders for reducing pimples. Have you tried either of those?",
        parentComment: "1",
      },
      {
        _id: "1.2",
        text: "I used to struggle with acne too, but I’ve had great results with a gentle skincare routine and a hormonal treatment prescribed by my doctor. It took a few months, but it was worth the wait. If you haven’t already, maybe consider seeing a dermatologist for a more personalized treatment plan.",
        parentComment: "1",
      },
      {
        _id: "1.3",
        text: "I’ve found that adding zinc supplements to my routine really helped balance my hormones and improve my skin. I also switched to non-comedogenic makeup. It may take some time to notice results, but it’s worth a shot!",
        parentComment: "1",
      },
    ],
  },
  {
    _id: "2",
    text: "Postpartum recovery has been harder than I expected. I’m trying to find a balance between taking care of my newborn and taking care of myself. How did you manage self-care during postpartum? Any tips on getting back into a healthy routine?",
    replies: [
      {
        _id: "2.1",
        text: "The first few months after childbirth are the toughest, but it’s important to take small steps. I found that taking 10-minute walks every day and meditating really helped me feel better. It’s hard to find time, but even a few moments for yourself can make a big difference.",
        parentComment: "2",
      },
      {
        _id: "2.2",
        text: "I had to remind myself that recovery takes time. What helped me was starting with small, achievable goals. I also found a postpartum doula who helped me with some baby care, which gave me time to rest. Don’t hesitate to ask for help from family or friends.",
        parentComment: "2",
      },
      {
        _id: "2.3",
        text: "I recommend focusing on sleep as much as possible! It’s not easy with a newborn, but even taking naps during the day when your baby sleeps can help you feel more refreshed. Your body is healing, and sleep is so important during that time.",
        parentComment: "2",
      },
    ],
  },
  {
    _id: "3",
    text: "I’ve been struggling with low energy throughout my cycle, especially during the luteal phase. Does anyone have tips for boosting energy naturally during this time? I’ve tried eating more, but I still feel sluggish.",
    replies: [
      {
        _id: "3.1",
        text: "I totally get this! I noticed a huge difference when I started drinking more water and eating iron-rich foods, like spinach and legumes. That helped me feel more energetic, especially during my cycle.",
        parentComment: "3",
      },
      {
        _id: "3.2",
        text: "I’ve had similar issues, and what helped me was adding adaptogens like ashwagandha and maca root to my routine. They really helped with my energy levels and mood swings. You could try those to see if they work for you.",
        parentComment: "3",
      },
      {
        _id: "3.3",
        text: "I’ve found that getting regular exercise, even just light yoga or stretching, really boosts my energy during that time of the month. It may feel tough at first, but after a few sessions, I noticed I felt more energetic.",
        parentComment: "3",
      },
    ],
  },
  {
    _id: "4",
    text: "I’ve been hearing a lot about the benefits of a plant-based diet for hormonal health. Has anyone transitioned to a plant-based diet? If so, what changes did you notice in your health or skin?",
    replies: [
      {
        _id: "4.1",
        text: "I’ve been vegan for about a year now, and I can honestly say it’s helped regulate my cycle. My skin cleared up a lot too! I feel more energized and less bloated, so I definitely recommend trying it out.",
        parentComment: "4",
      },
      {
        _id: "4.2",
        text: "I’m not fully plant-based, but I’ve been cutting out meat a lot, and I’ve noticed my skin has improved. I’ve also been using plant-based proteins, which helped me stay fuller longer and gave me more energy.",
        parentComment: "4",
      },
      {
        _id: "4.3",
        text: "I transitioned to a plant-based diet for my hormonal health, and I did notice improvements in my digestion and overall skin health. However, I made sure to supplement with B12, iron, and omega-3s to avoid any deficiencies.",
        parentComment: "4",
      },
    ],
  },
  {
    _id: "5",
    text: "Has anyone tried mindfulness or meditation to reduce menstrual cramps or PMS symptoms? I’ve heard it can help, but I’m not sure where to start. Any tips or resources?",
    replies: [
      {
        _id: "5.1",
        text: "I’ve been practicing mindfulness meditation for about six months, and I’ve noticed a huge difference in my stress levels and how I cope with cramps. You can start with just 10 minutes a day, and there are plenty of apps to guide you through it.",
        parentComment: "5",
      },
      {
        _id: "5.2",
        text: "Meditation has been a game changer for me. I use guided meditation apps like Calm or Insight Timer, which have sessions specifically for menstrual cramps and PMS. I try to do it daily, but even a few times a week helps tremendously.",
        parentComment: "5",
      },
      {
        _id: "5.3",
        text: "I started using mindfulness techniques, and it has definitely helped me feel more centered. I also combine it with breathing exercises, and they really help with the physical pain of cramps. I’d recommend starting small, just focus on breathing deeply and clearing your mind.",
        parentComment: "5",
      },
    ],
  },
  {
    _id: "6",
    text: "I’m looking for ways to reduce bloating around my period. It’s something I’ve struggled with for a long time. Any suggestions on foods to avoid or habits that might help with this?",
    replies: [
      {
        _id: "6.1",
        text: "I struggled with bloating too, and I found that cutting back on salty foods and processed sugars helped a lot. I also started drinking ginger tea, which is great for digestion. It really helps me feel less bloated.",
        parentComment: "6",
      },
      {
        _id: "6.2",
        text: "For me, drinking plenty of water and staying away from carbonated drinks made a huge difference. Also, I try to avoid dairy during my cycle, as it can make bloating worse.",
        parentComment: "6",
      },
      {
        _id: "6.3",
        text: "A huge tip I have is to focus on eating more fiber-rich foods, like fruits, vegetables, and whole grains. I also take probiotics, which have really helped with my digestion and bloating.",
        parentComment: "6",
      },
    ],
  },
  {
    _id: "7",
    text: "How do you cope with hormonal mood swings? I feel like I get irritable and overwhelmed a lot around my cycle, and I’m looking for tips on how to manage these emotions better.",
    replies: [
      {
        _id: "7.1",
        text: "I completely understand! For me, yoga and meditation really helped with the emotional ups and downs. I also started taking magnesium supplements, which helped with my mood swings and cramps.",
        parentComment: "7",
      },
      {
        _id: "7.2",
        text: "I noticed that tracking my cycle helped me anticipate when my mood swings would hit. I also started drinking herbal teas like chamomile or lavender to calm myself down during those times.",
        parentComment: "7",
      },
      {
        _id: "7.3",
        text: "I try to make sure I’m eating regular, balanced meals and staying active. Exercise helps to release endorphins, which can improve mood. Also, journaling helps me process any emotional ups and downs during my cycle.",
        parentComment: "7",
      },
    ],
  },
];

export const commentData = [
  {
    id: 1,
    content: "This is the first comment",
    votes: 5,
    timestamp: "2024-06-16T10:00:00Z",
    replies: [
      {
        id: 2,
        content: "This is a reply to the first comment",
        votes: 3,
        timestamp: "2024-06-16T11:00:00Z",
        replies: [],
      },
      {
        id: 3,
        content: "This is another reply to the first comment",
        votes: 8,
        timestamp: "2024-06-16T12:00:00Z",
        replies: [],
      },
    ],
  },
  {
    id: 4,
    content: "This is the second comment",
    votes: 10,
    timestamp: "2024-06-16T09:00:00Z",
    replies: [
      {
        id: 5,
        content: "This is a reply to the second comment",
        votes: 4,
        timestamp: "2024-06-16T09:30:00Z",
        replies: [
          {
            id: 6,
            content: "This is a nested reply to the reply",
            votes: 2,
            timestamp: "2024-06-16T09:45:00Z",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    id: 7,
    content: "This is the third comment",
    votes: 1,
    timestamp: "2024-06-16T08:00:00Z",
    replies: [],
  },
  {
    id: 8,
    content: "This is the fourth comment",
    votes: 7,
    timestamp: "2024-06-16T07:00:00Z",
    replies: [
      {
        id: 9,
        content: "This is a reply to the fourth comment",
        votes: 5,
        timestamp: "2024-06-16T07:30:00Z",
        replies: [],
      },
    ],
  },
  {
    id: 10,
    content: "This is the fifth comment",
    votes: 3,
    timestamp: "2024-06-16T06:00:00Z",
    replies: [],
  },
  {
    id: 11,
    content: "This is the sixth comment",
    votes: 2,
    timestamp: "2024-06-15T10:00:00Z",
    replies: [],
  },
  {
    id: 12,
    content: "This is the seventh comment",
    votes: 9,
    timestamp: "2024-06-15T09:00:00Z",
    replies: [],
  },
  {
    id: 13,
    content: "This is the eighth comment",
    votes: 6,
    timestamp: "2024-06-15T08:00:00Z",
    replies: [],
  },
  {
    id: 14,
    content: "This is the ninth comment",
    votes: 4,
    timestamp: "2024-06-15T07:00:00Z",
    replies: [],
  },
  {
    id: 15,
    content: "This is the tenth comment",
    votes: 5,
    timestamp: "2024-06-15T06:00:00Z",
    replies: [],
  },
];
