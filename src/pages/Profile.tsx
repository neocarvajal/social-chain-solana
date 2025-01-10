import { Bell, Mail, MessageSquare, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Profile = () => {
  const profileData = {
    handle: "xgtsn.sol",
    followers: "209K",
    following: "190",
    posts: "318",
    name: "XGTSN",
    bio: "Building the future of decentralized applications on Solana.",
    verified: true,
    imageUrl: "/lovable-uploads/ee1f8e17-4d36-43b2-8e47-52919c6d09fc.png"
  };

  const posts = [
    { id: 1, type: 'image', url: '/lovable-uploads/ee1f8e17-4d36-43b2-8e47-52919c6d09fc.png' },
    { id: 2, type: 'image', url: '/lovable-uploads/ee1f8e17-4d36-43b2-8e47-52919c6d09fc.png' },
    { id: 3, type: 'image', url: '/lovable-uploads/ee1f8e17-4d36-43b2-8e47-52919c6d09fc.png' },
    { id: 4, type: 'image', url: '/lovable-uploads/ee1f8e17-4d36-43b2-8e47-52919c6d09fc.png' },
    { id: 5, type: 'image', url: '/lovable-uploads/ee1f8e17-4d36-43b2-8e47-52919c6d09fc.png' },
    { id: 6, type: 'image', url: '/lovable-uploads/ee1f8e17-4d36-43b2-8e47-52919c6d09fc.png' },
    { id: 7, type: 'image', url: '/lovable-uploads/ee1f8e17-4d36-43b2-8e47-52919c6d09fc.png' },
    { id: 8, type: 'image', url: '/lovable-uploads/ee1f8e17-4d36-43b2-8e47-52919c6d09fc.png' },
    { id: 9, type: 'image', url: '/lovable-uploads/ee1f8e17-4d36-43b2-8e47-52919c6d09fc.png' },
  ];

  return (
    <div className="min-h-screen bg-dapp-background text-dapp-text pb-20">
      <header className="sticky top-0 z-10 bg-dapp-background border-b border-dapp-border p-4 flex items-center justify-between">
        <h1 className="text-xl font-bold flex items-center gap-2">
          @{profileData.handle}
          {profileData.verified && (
            <span className="text-primary text-sm">●</span>
          )}
        </h1>
        <Bell className="w-6 h-6" />
      </header>

      <main className="container max-w-md mx-auto p-4">
        <div className="flex items-start justify-between mb-6">
          <Avatar className="w-20 h-20 border-2 border-dapp-border">
            <AvatarImage src={profileData.imageUrl} alt={profileData.handle} />
            <AvatarFallback>{profileData.handle[0]}</AvatarFallback>
          </Avatar>
          
          <div className="flex gap-4 text-center">
            <div>
              <div className="font-bold">{profileData.posts}</div>
              <div className="text-sm text-dapp-textSecondary">posts</div>
            </div>
            <div>
              <div className="font-bold">{profileData.followers}</div>
              <div className="text-sm text-dapp-textSecondary">followers</div>
            </div>
            <div>
              <div className="font-bold">{profileData.following}</div>
              <div className="text-sm text-dapp-textSecondary">following</div>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="font-bold">{profileData.name}</h2>
          <p className="text-sm text-dapp-textSecondary">{profileData.bio}</p>
        </div>

        <div className="flex gap-2 mb-8">
          <Button variant="outline" className="flex-1">
            Following
          </Button>
          <Button variant="outline" className="flex-1">
            Message
          </Button>
          <Button variant="outline" className="px-3">
            <Mail className="w-4 h-4" />
          </Button>
        </div>

        <div className="grid grid-cols-4 gap-4 border-t border-dapp-border pt-4 mb-8">
          <button className="flex flex-col items-center gap-1 text-xs text-dapp-textSecondary">
            <div className="w-16 h-16 bg-dapp-card rounded-lg flex items-center justify-center">
              <Settings className="w-6 h-6" />
            </div>
            For ADHD
          </button>
          <button className="flex flex-col items-center gap-1 text-xs text-dapp-textSecondary">
            <div className="w-16 h-16 bg-dapp-card rounded-lg flex items-center justify-center">
              <MessageSquare className="w-6 h-6" />
            </div>
            Community
          </button>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-3 gap-1">
          {posts.map((post) => (
            <div 
              key={post.id} 
              className="aspect-square bg-dapp-card overflow-hidden"
            >
              <img 
                src={post.url} 
                alt={`Post ${post.id}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Profile;