import { useState } from 'react';
import TabooCard from '../TabooCard';

export default function TabooCardExample() {
  const [hintVisible, setHintVisible] = useState(false);
  
  const sampleCard = {
    song: "Kabira",
    tabooWords: ["Yeh Jawaani", "Wedding", "Friends"],
    hint: "Bittersweet goodbye"
  };

  return (
    <TabooCard 
      card={sampleCard}
      hintVisible={hintVisible}
      onShowHint={() => setHintVisible(true)}
    />
  );
}
