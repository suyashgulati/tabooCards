import ScoreBoard from '../ScoreBoard';

export default function ScoreBoardExample() {
  return (
    <ScoreBoard
      score={5.5}
      onNewSession={() => console.log('New session started')}
    />
  );
}
