import { type TabooCard } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";

interface TabooCardProps {
  card: TabooCard;
  hintVisible: boolean;
  onShowHint: () => void;
}

export default function TabooCard({ card, hintVisible, onShowHint }: TabooCardProps) {
  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-card rounded-2xl shadow-2xl overflow-hidden border border-card-border">
        <div className="bg-[#3b4a7d] text-white px-8 py-6 text-center">
          <h1 className="text-4xl font-bold uppercase tracking-wide">
            {card.song}
          </h1>
        </div>

        <div className="bg-[#a8d5e2] px-8 py-12 border-y-4 border-black">
          <div className="space-y-6">
            {card.tabooWords.map((word, index) => (
              <div
                key={index}
                className="text-center"
              >
                <div className="text-2xl font-semibold uppercase text-black">
                  {word}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#d84f4f] text-white px-8 py-6 text-center min-h-[80px] flex items-center justify-center">
          {hintVisible ? (
            <p className="text-base font-normal italic">
              {card.hint}
            </p>
          ) : (
            <Button
              data-testid="button-show-hint"
              onClick={onShowHint}
              variant="ghost"
              className="text-white hover:bg-white/20 gap-2"
            >
              <Eye className="h-5 w-5" />
              Show Hint
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
