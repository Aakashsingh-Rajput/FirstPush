import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { LogOut, User, Mail, Calendar } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const UserProfile: React.FC = () => {
  const { user, signOut } = useAuth();
  const { toast } = useToast();

  const handleSignOut = async () => {
    try {
      const { error } = await signOut();
      if (error) {
        toast({
          title: "Sign out failed",
          description: "Please try again.",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Signed out successfully",
          description: "You have been signed out.",
        });
      }
    } catch (error) {
      toast({
        title: "Sign out failed",
        description: "An unexpected error occurred.",
        variant: "destructive",
      });
    }
  };

  if (!user) {
    return null;
  }

  const userInitials = user.user_metadata?.name
    ? user.user_metadata.name.split(' ').map((n: string) => n[0]).join('').toUpperCase()
    : user.email?.[0].toUpperCase() || 'U';

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <User className="h-5 w-5" />
          User Profile
        </CardTitle>
        <CardDescription>
          Your account information
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center space-x-4">
          <Avatar className="h-16 w-16">
            <AvatarImage src={user.user_metadata?.avatar_url} />
            <AvatarFallback className="text-lg">{userInitials}</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h3 className="text-lg font-semibold">
              {user.user_metadata?.name || 'User'}
            </h3>
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              <Mail className="h-3 w-3" />
              {user.email}
            </p>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span>Member since: {new Date(user.created_at).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <User className="h-4 w-4" />
            <span>ID: {user.id.slice(0, 8)}...</span>
          </div>
        </div>

        <Button 
          onClick={handleSignOut} 
          variant="outline" 
          className="w-full"
        >
          <LogOut className="mr-2 h-4 w-4" />
          Sign Out
        </Button>
      </CardContent>
    </Card>
  );
};

export default UserProfile;
