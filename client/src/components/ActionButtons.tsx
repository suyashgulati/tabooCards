import { X, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ActionButtonsProps {
  onSkip: () => void;
  onCorrect: () => void;
}

export default function ActionButtons({ onSkip, onCorrect }: ActionButtonsProps) {
  return (
    <div className="flex items-center justify-center gap-16 mt-12">
      <Button
        data-testid="button-skip"
        size="icon"
        onClick={onSkip}
        className="h-20 w-20 rounded-full bg-[#d84f4f] hover:bg-[#c23b3b] text-white border-4 border-[#b83030] shadow-lg hover:scale-105 active:scale-95 transition-transform no-default-hover-elevate"
      >
        <X className="h-10 w-10" strokeWidth={3} />
      </Button>

      <Button
        data-testid="button-correct"
        size="icon"
        onClick={onCorrect}
        className="h-20 w-20 rounded-full bg-[#4caf50] hover:bg-[#45a049] text-white border-4 border-[#388e3c] shadow-lg hover:scale-105 active:scale-95 transition-transform no-default-hover-elevate"
      >
        <Check className="h-10 w-10" strokeWidth={3} />
      </Button>
    </div>
  );
}
