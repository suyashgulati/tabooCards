import TabooCard from '../TabooCard';

export default function TabooCardExample() {
  const sampleCard = {
    song: "Kabira",
    tabooWords: ["Yeh Jawaani", "Wedding", "Friends"],
    hint: "Bittersweet goodbye"
  };

  return <TabooCard card={sampleCard} />;
}
