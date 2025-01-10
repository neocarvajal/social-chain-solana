import { Heart, MessageCircle, Share2, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

interface DappCardProps {
  handle: string;
  name: string;
  description: string;
  imageUrl: string;
  state?: 'new' | 'installing' | 'installed';
}

const DappCard = ({ handle, name, description, imageUrl, state = 'new' }: DappCardProps) => {
  const { toast } = useToast();
  const [isLiked, setIsLiked] = useState(false);
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [touchStart, setTouchStart] = useState({ x: 0, y: 0 });

  const handleInstall = () => {
    toast({
      title: "Installation Started",
      description: "Setting up your dapp experience...",
    });
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  const handleComment = () => {
    toast({
      title: "Comment Posted! 🎉",
      description: "Your thoughts have been shared with the community",
    });
  };

  const handleShare = () => {
    setIsShareOpen(true);
    setRotation(360);
    setTimeout(() => setRotation(0), 500);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart({
      x: e.touches[0].clientX,
      y: e.touches[0].clientY
    });
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    const deltaX = e.touches[0].clientX - touchStart.x;
    setRotation(deltaX * 0.5); // Smooth rotation based on touch movement
  };

  const handleTouchEnd = () => {
    setRotation(0);
  };

  const renderButton = () => {
    switch (state) {
      case 'installing':
        return (
          <Button 
            disabled
            className="w-full bg-primary/50 text-white cursor-not-allowed"
          >
            Installing...
          </Button>
        );
      case 'installed':
        return (
          <Button 
            variant="outline"
            className="w-full border-primary text-primary hover:bg-primary/10"
          >
            Open Dapp
          </Button>
        );
      default:
        return (
          <Button 
            onClick={handleInstall}
            className="w-full bg-primary hover:bg-primary-hover text-white"
          >
            Install Now
          </Button>
        );
    }
  };

  return (
    <>
      <div className="bg-dapp-card rounded-lg overflow-hidden mb-4 animate-fadeIn">
        <div className="p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center">
              <Avatar className="h-10 w-10 border border-dapp-border">
                <AvatarImage src={imageUrl} alt={name} />
                <AvatarFallback>
                  <Package className="h-5 w-5 text-primary" />
                </AvatarFallback>
              </Avatar>
              <div className="ml-3">
                <h3 className="font-semibold text-dapp-text">{name}</h3>
                <p className="text-sm text-dapp-textSecondary">@{handle}</p>
              </div>
            </div>
            {state === 'installed' && (
              <div className="px-2 py-1 rounded-full bg-primary/20 text-primary text-xs">
                Installed
              </div>
            )}
          </div>
          <p className="text-dapp-text mb-3">{description}</p>
        </div>
        
        <div 
          className="relative"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{
            transform: `perspective(1000px) rotateY(${rotation}deg)`,
            transition: 'transform 0.3s ease-out'
          }}
        >
          <img 
            src={imageUrl} 
            alt={name} 
            className="w-full aspect-video object-cover bg-dapp-border"
          />
        </div>
        
        <div className="p-4">
          <div className="flex justify-between mb-4">
            <div className="flex space-x-4">
              <button 
                onClick={handleLike}
                className={cn(
                  "text-dapp-textSecondary hover:text-primary transition-all duration-300 transform hover:scale-110",
                  isLiked && "text-primary scale-110"
                )}
              >
                <Heart 
                  size={24} 
                  className={cn(
                    "transition-all",
                    isLiked && "fill-current"
                  )} 
                />
              </button>
              <button 
                onClick={handleComment}
                className="text-dapp-textSecondary hover:text-primary transition-all duration-300 transform hover:scale-110"
              >
                <MessageCircle size={24} />
              </button>
              <button 
                onClick={handleShare}
                className="text-dapp-textSecondary hover:text-primary transition-all duration-300 transform hover:scale-110"
              >
                <Share2 size={24} />
              </button>
            </div>
          </div>
          
          {renderButton()}
        </div>
      </div>

      <Dialog open={isShareOpen} onOpenChange={setIsShareOpen}>
        <DialogContent 
          className="bg-dapp-card border-dapp-border text-dapp-text"
          style={{
            transform: `perspective(1000px) rotateY(${rotation}deg)`,
            transition: 'transform 0.5s ease-out'
          }}
        >
          <DialogHeader>
            <DialogTitle>Share this Dapp</DialogTitle>
          </DialogHeader>
          <div className="grid grid-cols-2 gap-4 p-4">
            <Button variant="outline" className="w-full">
              Copy Link
            </Button>
            <Button variant="outline" className="w-full">
              Share to Twitter
            </Button>
            <Button variant="outline" className="w-full">
              Share to Telegram
            </Button>
            <Button variant="outline" className="w-full">
              Share via Email
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default DappCard;