import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";

interface ScoreBoardProps {
  score: number;
  onNewSession: () => void;
}

export default function ScoreBoard({ score, onNewSession }: ScoreBoardProps) {
  return (
    <div className="flex items-center justify-between mb-8 gap-4">
      <div className="flex items-center gap-4">
        <div className="text-lg font-semibold text-foreground">
          Score: <span className="text-2xl font-bold text-primary" data-testid="text-score">{score.toFixed(1)}</span>
        </div>
      </div>
      <Button
        data-testid="button-new-session"
        onClick={onNewSession}
        variant="outline"
        className="gap-2"
      >
        <RefreshCw className="h-4 w-4" />
        New Session
      </Button>
    </div>
  );
}
