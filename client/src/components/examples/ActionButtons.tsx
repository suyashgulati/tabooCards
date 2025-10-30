import ActionButtons from '../ActionButtons';

export default function ActionButtonsExample() {
  return (
    <ActionButtons
      onSkip={() => console.log('Skip clicked')}
      onCorrect={() => console.log('Correct clicked')}
    />
  );
}
