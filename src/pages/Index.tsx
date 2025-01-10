import BottomNav from "@/components/BottomNav";
import DappCard from "@/components/DappCard";

const Index = () => {
  const dapps = [
    {
      handle: "endel",
      name: "Endel",
      description: "Personalized soundscapes to help you focus, relax, and sleep.",
      imageUrl: "/lovable-uploads/b0fe9289-b81e-4c6d-abb7-01fce0557040.png",
    },
    {
      handle: "magiceden",
      name: "Magic Eden",
      description: "The leading NFT marketplace on Solana.",
      imageUrl: "/placeholder.svg",
    },
  ];

  return (
    <div className="min-h-screen bg-dapp-background text-dapp-text pb-20">
      <header className="sticky top-0 z-10 bg-dapp-background border-b border-dapp-border p-4">
        <h1 className="text-xl font-bold">Discover Dapps</h1>
      </header>

      <main className="container max-w-md mx-auto p-4">
        {dapps.map((dapp) => (
          <DappCard key={dapp.handle} {...dapp} />
        ))}
      </main>

      <BottomNav />
    </div>
  );
};

export default Index;