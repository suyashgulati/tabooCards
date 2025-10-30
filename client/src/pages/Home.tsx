import { useState, useEffect } from "react";
import TabooCard from "@/components/TabooCard";
import ActionButtons from "@/components/ActionButtons";
import ScoreBoard from "@/components/ScoreBoard";
import { type TabooCard as TabooCardType } from "@shared/schema";

const allCards: TabooCardType[] = [
  {
    "song": "Chogada",
    "tabooWords": ["Navratri", "Garba", "Dance"],
    "hint": "Festival of devotion and love"
  },
  {
    "song": "Tujh Mein Rab Dikhta Hai",
    "tabooWords": ["Faith", "Devotion", "Marriage"],
    "hint": "Seeing god in your love"
  },
  {
    "song": "Senorita",
    "tabooWords": ["Spain", "Dance", "Guitar"],
    "hint": "Desi boys in Spanish mood"
  },
  {
    "song": "Phir Bhi Tumko Chaahunga",
    "tabooWords": ["Rain", "Pain", "Love"],
    "hint": "Endless devotion"
  },
  {
    "song": "Kala Chashma",
    "tabooWords": ["Sunglasses", "Party", "Dance"],
    "hint": "Everyone wears shades"
  },
  {
    "song": "Kabira",
    "tabooWords": ["Wedding", "Goodbye", "Travel"],
    "hint": "Bittersweet farewell song"
  },
  {
    "song": "Dus Bahane",
    "tabooWords": ["Excuse", "Dance", "Remix"],
    "hint": "Early 2000s party anthem"
  },
  {
    "song": "Tum Hi Ho",
    "tabooWords": ["Arijit", "Rain", "Love"],
    "hint": "Romantic ballad from early 2010s"
  },
  {
    "song": "Dil To Pagal Hai",
    "tabooWords": ["Dance", "SRK", "Madhuri"],
    "hint": "Mad about love"
  },
  {
    "song": "Sauda Khara Khara",
    "tabooWords": ["Remix", "Dance", "Punjabi"],
    "hint": "Energetic celebration track"
  },
  {
    "song": "Jhoome Jo Pathaan",
    "tabooWords": ["SRK", "Dance", "Beat"],
    "hint": "Swagger and groove"
  },
  {
    "song": "Desi Girl",
    "tabooWords": ["Pride", "Indian", "Girl"],
    "hint": "The hottest one in town"
  },
  {
    "song": "Param Sundari",
    "tabooWords": ["Dance", "Hot", "Item"],
    "hint": "Fierce female power song"
  },
  {
    "song": "Zinda",
    "tabooWords": ["Life", "Adventure", "Mountain"],
    "hint": "Feeling alive again"
  },
  {
    "song": "Mitwa",
    "tabooWords": ["Guitar", "SRK", "Love"],
    "hint": "Soft inspirational romance"
  },
  {
    "song": "London Thumakda",
    "tabooWords": ["Wedding", "Bride", "Dance"],
    "hint": "Energetic pre-wedding song"
  },
  {
    "song": "Apna Bana Le",
    "tabooWords": ["Pritam", "Sad", "Rain"],
    "hint": "Melancholic romantic tune"
  },
  {
    "song": "Lungi Dance",
    "tabooWords": ["South", "Style", "Chennai"],
    "hint": "Tribute to superstar swag"
  },
  {
    "song": "Senorita",
    "tabooWords": ["Spanish", "Dance", "Travel"],
    "hint": "Bollywood meets flamenco"
  },
  {
    "song": "Kar Gayi Chull",
    "tabooWords": ["Party", "Dance", "Cool"],
    "hint": "Trendy dance anthem"
  },
  {
    "song": "Samjhawan",
    "tabooWords": ["Heartbreak", "Soft", "Arijit"],
    "hint": "Painful love melody"
  },
  {
    "song": "Tera Ban Jaunga",
    "tabooWords": ["Promise", "Forever", "Love"],
    "hint": "Song about lifelong commitment"
  },
  {
    "song": "Malhari",
    "tabooWords": ["Victory", "War", "Celebration"],
    "hint": "Triumphant warrior dance"
  },
  {
    "song": "Raatan Lambiyan",
    "tabooWords": ["Love", "Night", "Longing"],
    "hint": "Romantic earworm"
  },
  {
    "song": "Jeene Ke Hain Chaar Din",
    "tabooWords": ["Holiday", "Shirtless", "Fun"],
    "hint": "Carefree beach vibe"
  },
  {
    "song": "Makhna",
    "tabooWords": ["Love", "Fun", "Rap"],
    "hint": "Playful romantic vibe"
  },
  {
    "song": "Mehendi Hai Rachnewali",
    "tabooWords": ["Bride", "Wedding", "Henna"],
    "hint": "Pre-wedding traditional song"
  },
  {
    "song": "Balam Pichkari",
    "tabooWords": ["Holi", "Colors", "Friends"],
    "hint": "Celebrating with water and color"
  },
  {
    "song": "Dil Dhadakne Do",
    "tabooWords": ["Cruise", "Family", "Drama"],
    "hint": "When the heart beats freely"
  },
  {
    "song": "Morni Banke",
    "tabooWords": ["Dance", "Wedding", "Punjabi"],
    "hint": "Vibrant party number"
  },
  {
    "song": "Saibo",
    "tabooWords": ["Soft", "Love", "Calm"],
    "hint": "Gentle romantic tune"
  },
  {
    "song": "Suraj Hua Maddham",
    "tabooWords": ["Pyramid", "Romance", "Desert"],
    "hint": "Love under the sun"
  },
  {
    "song": "Badtameez Dil",
    "tabooWords": ["Fun", "Crazy", "Dance"],
    "hint": "Uncontrollable energy"
  },
  {
    "song": "Kajra Re",
    "tabooWords": ["Eyes", "Dance", "Item"],
    "hint": "Flirty and mischievous"
  },
  {
    "song": "Agar Tum Saath Ho",
    "tabooWords": ["Sad", "Love", "Separation"],
    "hint": "Emotional ballad"
  },
  {
    "song": "Ghungroo",
    "tabooWords": ["Dance", "Beach", "Shack"],
    "hint": "Beach party anthem"
  },
  {
    "song": "Kal Ho Naa Ho",
    "tabooWords": ["Tomorrow", "Sad", "Love"],
    "hint": "Live life fully"
  },
  {
    "song": "Kesariya",
    "tabooWords": ["Love", "Orange", "Magic"],
    "hint": "Recent romantic chartbuster"
  },
  {
    "song": "Pasoori",
    "tabooWords": ["Coke Studio", "Fusion", "Pakistan"],
    "hint": "Global viral hit"
  },
  {
    "song": "Ghagra",
    "tabooWords": ["Dance", "Travel", "Folk"],
    "hint": "Vibrant and flirtatious"
  },
  {
    "song": "Tera Hone Laga Hoon",
    "tabooWords": ["Falling", "Romance", "Soft"],
    "hint": "Adorable confession song"
  },
  {
    "song": "Zara Si",
    "tabooWords": ["Dream", "College", "Hope"],
    "hint": "Ambition and love together"
  },
  {
    "song": "Blinding Lights (Hindi Mix)",
    "tabooWords": ["Weekend", "Remix", "English"],
    "hint": "Bollywood-inspired global remix"
  },
  {
    "song": "Subha Hone Na De",
    "tabooWords": ["Night", "Party", "Club"],
    "hint": "After-party energy"
  },
  {
    "song": "Ude Dil Befikre",
    "tabooWords": ["Paris", "Carefree", "Kiss"],
    "hint": "Live without worry"
  },
  {
    "song": "Tera Zikr",
    "tabooWords": ["Remember", "Love", "Sad"],
    "hint": "Missing someone deeply"
  },
  {
    "song": "Koi Kahe Kehta Rahe",
    "tabooWords": ["Dance", "Party", "Night"],
    "hint": "We do what we want"
  },
  {
    "song": "Naino Mein Sapna",
    "tabooWords": ["Dream", "Eyes", "Retro"],
    "hint": "Classic romantic duet"
  },
  {
    "song": "Tune Maari Entriyaan",
    "tabooWords": ["Entry", "Dance", "Fun"],
    "hint": "Grand arrival track"
  },
  {
    "song": "Aankh Marey",
    "tabooWords": ["Remake", "Wink", "Dance"],
    "hint": "Playful and loud number"
  },
  {
    "song": "Leja Leja Re",
    "tabooWords": ["Travel", "Journey", "Folk"],
    "hint": "Classic romantic fusion"
  },
  {
    "song": "Dilliwali Girlfriend",
    "tabooWords": ["Ex", "Fun", "Dance"],
    "hint": "Celebrating breakups"
  },
  {
    "song": "Besharam Rang",
    "tabooWords": ["Beach", "Dance", "Bold"],
    "hint": "Controversial beach number"
  },
  {
    "song": "Radha",
    "tabooWords": ["Shy", "Dance", "Stage"],
    "hint": "Girl showing off her charm"
  },
  {
    "song": "Tujhe Dekha To",
    "tabooWords": ["Train", "SRK", "Love"],
    "hint": "Iconic love at first sight"
  },
  {
    "song": "Dil Chahta Hai",
    "tabooWords": ["Friends", "Goa", "Trip"],
    "hint": "About friendship and freedom"
  },
  {
    "song": "Tera Yaar Hoon Main",
    "tabooWords": ["Friend", "Emotional", "Farewell"],
    "hint": "Emotional friendship song"
  },
  {
    "song": "Sheila Ki Jawani",
    "tabooWords": ["Katrina", "Sexy", "Item"],
    "hint": "A glamorous dance number"
  }
];

// Shuffle function
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export default function Home() {
  const [score, setScore] = useState(0);
  const [remainingCards, setRemainingCards] = useState<TabooCardType[]>([]);
  const [currentCard, setCurrentCard] = useState<TabooCardType | null>(null);
  const [hintVisible, setHintVisible] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  // Initialize or reset the game
  const startNewSession = () => {
    const shuffled = shuffleArray(allCards);
    setRemainingCards(shuffled);
    setCurrentCard(shuffled[0]);
    setScore(0);
    setHintVisible(false);
    setGameOver(false);
  };

  // Initialize on mount
  useEffect(() => {
    startNewSession();
  }, []);

  const handleShowHint = () => {
    setHintVisible(true);
    setScore(prev => prev - 0.5);
  };

  const handleNext = (scoreChange: number) => {
    setScore(prev => prev + scoreChange);
    setFadeOut(true);
    
    setTimeout(() => {
      const remaining = remainingCards.slice(1);
      
      if (remaining.length === 0) {
        setGameOver(true);
        setCurrentCard(null);
      } else {
        setRemainingCards(remaining);
        setCurrentCard(remaining[0]);
        setHintVisible(false);
      }
      
      setFadeOut(false);
    }, 200);
  };

  const handleSkip = () => {
    handleNext(-1);
  };

  const handleCorrect = () => {
    handleNext(1);
  };

  if (gameOver) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-6">
        <div className="w-full max-w-2xl text-center">
          <div className="bg-card rounded-2xl shadow-2xl p-12 border border-card-border">
            <h1 className="text-4xl font-bold mb-4 text-foreground">Game Over!</h1>
            <p className="text-6xl font-bold text-primary mb-8" data-testid="text-final-score">{score.toFixed(1)}</p>
            <p className="text-lg text-muted-foreground mb-8">You've completed all {allCards.length} cards!</p>
            <ScoreBoard score={score} onNewSession={startNewSession} />
          </div>
        </div>
      </div>
    );
  }

  if (!currentCard) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="w-full max-w-2xl">
        <ScoreBoard score={score} onNewSession={startNewSession} />
        <div
          className={`transition-opacity duration-200 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}
        >
          <TabooCard 
            card={currentCard} 
            hintVisible={hintVisible}
            onShowHint={handleShowHint}
          />
          <ActionButtons onSkip={handleSkip} onCorrect={handleCorrect} />
          <div className="text-center mt-4 text-sm text-muted-foreground">
            Cards remaining: {remainingCards.length - 1}
          </div>
        </div>
      </div>
    </div>
  );
}
