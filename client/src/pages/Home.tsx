import { useState } from "react";
import TabooCard from "@/components/TabooCard";
import ActionButtons from "@/components/ActionButtons";
import { type TabooCard as TabooCardType } from "@shared/schema";

//todo: remove mock functionality - sample cards for demo
const sampleCards: TabooCardType[] = [
  {
    song: "Kabira",
    tabooWords: ["Yeh Jawaani", "Wedding", "Friends"],
    hint: "Bittersweet goodbye"
  },
  {
    song: "Tum Hi Ho",
    tabooWords: ["Dil", "Ishaq", "Pyar"],
    hint: "Aashiqui returns"
  },
  {
    song: "Channa Mereya",
    tabooWords: ["Ae Dil", "Ranbir", "Arijit"],
    hint: "Unrequited love song"
  },
  {
    song: "Gerua",
    tabooWords: ["Dilwale", "SRK", "Kajol"],
    hint: "Iceland romance"
  },
  {
    song: "Kal Ho Naa Ho",
    tabooWords: ["Preity", "Heartbreak", "Tomorrow"],
    hint: "Cherish today"
  }
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  const handleNext = () => {
    setFadeOut(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % sampleCards.length);
      setFadeOut(false);
    }, 200);
  };

  const handleSkip = () => {
    console.log('Card skipped');
    handleNext();
  };

  const handleCorrect = () => {
    console.log('Card marked correct');
    handleNext();
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="w-full max-w-2xl">
        <div
          className={`transition-opacity duration-200 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}
        >
          <TabooCard card={sampleCards[currentIndex]} />
          <ActionButtons onSkip={handleSkip} onCorrect={handleCorrect} />
        </div>
      </div>
    </div>
  );
}
