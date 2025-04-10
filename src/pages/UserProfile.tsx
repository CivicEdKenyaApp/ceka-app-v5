
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { 
  Bell, 
  User, 
  FileText, 
  Bookmark, 
  MessageSquare, 
  Flag,
  Settings,
  Download
} from 'lucide-react';

const UserProfile = () => {
  return (
    <Layout>
      <div className="container py-8 md:py-12">
        <div className="flex flex-col md:flex-row gap-8 mb-8">
          <div className="flex-shrink-0 flex flex-col items-center">
            <Avatar className="h-28 w-28 border-4 border-background">
              <AvatarImage src="/placeholder.svg" alt="User" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <h1 className="text-2xl font-bold mt-4">John Doe</h1>
            <p className="text-muted-foreground">Member since 2025</p>
            <div className="flex gap-2 mt-2">
              <Badge variant="outline">Verified</Badge>
              <Badge className="bg-kenya-green hover:bg-kenya-green/90">Active Volunteer</Badge>
            </div>
          </div>
          
          <div className="flex-grow">
            <Card>
              <CardHeader>
                <h2 className="text-xl font-semibold">Activity Summary</h2>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                  <div className="p-3">
                    <div className="text-kenya-green">
                      <FileText className="h-6 w-6 mx-auto" />
                    </div>
                    <p className="text-2xl font-bold mt-2">8</p>
                    <p className="text-sm text-muted-foreground">Bills Followed</p>
                  </div>
                  <div className="p-3">
                    <div className="text-kenya-green">
                      <Bookmark className="h-6 w-6 mx-auto" />
                    </div>
                    <p className="text-2xl font-bold mt-2">12</p>
                    <p className="text-sm text-muted-foreground">Saved Resources</p>
                  </div>
                  <div className="p-3">
                    <div className="text-kenya-green">
                      <MessageSquare className="h-6 w-6 mx-auto" />
                    </div>
                    <p className="text-2xl font-bold mt-2">15</p>
                    <p className="text-sm text-muted-foreground">Forum Posts</p>
                  </div>
                  <div className="p-3">
                    <div className="text-kenya-green">
                      <Flag className="h-6 w-6 mx-auto" />
                    </div>
                    <p className="text-2xl font-bold mt-2">3</p>
                    <p className="text-sm text-muted-foreground">Campaigns Supported</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <Tabs defaultValue="followed">
          <TabsList className="mb-6">
            <TabsTrigger value="followed" className="flex items-center gap-1">
              <FileText className="h-4 w-4" />
              Followed Bills
            </TabsTrigger>
            <TabsTrigger value="saved" className="flex items-center gap-1">
              <Bookmark className="h-4 w-4" />
              Saved Resources
            </TabsTrigger>
            <TabsTrigger value="contributions" className="flex items-center gap-1">
              <MessageSquare className="h-4 w-4" />
              Contributions
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center gap-1">
              <Settings className="h-4 w-4" />
              Settings
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="followed" className="space-y-4 mt-0">
            <div className="grid md:grid-cols-2 gap-4">
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex justify-between">
                    <Badge variant="outline">Education</Badge>
                    <Badge>First Reading</Badge>
                  </div>
                  <h3 className="font-medium text-lg mt-2">Education Amendment Bill</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Enhances access to quality education for all Kenyan citizens through policy reforms.
                  </p>
                  <Button size="sm" variant="outline">Unfollow</Button>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex justify-between">
                    <Badge variant="outline">Health</Badge>
                    <Badge variant="secondary" className="text-white">Public Feedback</Badge>
                  </div>
                  <h3 className="font-medium text-lg mt-2">Healthcare Access Act</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Aims to provide universal healthcare coverage to all Kenyans through expanded schemes.
                  </p>
                  <Button size="sm" variant="outline">Unfollow</Button>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center">
              <Button variant="outline">View all followed bills</Button>
            </div>
          </TabsContent>
          
          <TabsContent value="saved" className="space-y-4 mt-0">
            <div className="grid md:grid-cols-3 gap-4">
              <Card>
                <CardHeader className="pb-2">
                  <Badge>PDF</Badge>
                  <h3 className="font-medium text-lg mt-2">Understanding the Constitution of Kenya</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    A comprehensive guide to the Kenyan Constitution and its key provisions.
                  </p>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="flex-1">Unsave</Button>
                    <Button size="sm" variant="ghost">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <Badge>Video</Badge>
                  <h3 className="font-medium text-lg mt-2">How Laws Are Made in Kenya</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Visual explanation of the legislative process from bill proposal to enactment.
                  </p>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="flex-1">Unsave</Button>
                    <Button size="sm" variant="ghost">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <Badge>Infographic</Badge>
                  <h3 className="font-medium text-lg mt-2">Your Rights as a Kenyan Citizen</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Visual representation of fundamental rights guaranteed by the Constitution.
                  </p>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="flex-1">Unsave</Button>
                    <Button size="sm" variant="ghost">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center">
              <Button variant="outline">View all saved resources</Button>
            </div>
          </TabsContent>
          
          <TabsContent value="contributions" className="space-y-4 mt-0">
            <div className="bg-muted p-8 rounded-md text-center">
              <MessageSquare className="h-12 w-12 mx-auto text-muted-foreground mb-3" />
              <h3 className="font-medium">Your Contributions</h3>
              <p className="text-sm text-muted-foreground mt-1 mb-4">View all your forum posts, comments, and legislative contributions.</p>
              <Button>View Contributions</Button>
            </div>
          </TabsContent>
          
          <TabsContent value="settings" className="mt-0">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <User className="h-5 w-5" />
                    <h3 className="font-medium text-lg">Account Settings</h3>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">Profile Visibility</p>
                      <p className="text-sm text-muted-foreground">Control who can see your profile and activity</p>
                    </div>
                    <Switch />
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">Two-Factor Authentication</p>
                      <p className="text-sm text-muted-foreground">Add an extra layer of security to your account</p>
                    </div>
                    <Switch />
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Bell className="h-5 w-5" />
                    <h3 className="font-medium text-lg">Notification Preferences</h3>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">Legislative Updates</p>
                      <p className="text-sm text-muted-foreground">Get notified about bills you're following</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">Forum Replies</p>
                      <p className="text-sm text-muted-foreground">Receive notifications about replies to your posts</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">Campaign Updates</p>
                      <p className="text-sm text-muted-foreground">Get updates on campaigns you support</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">Newsletter</p>
                      <p className="text-sm text-muted-foreground">Receive our weekly civic education newsletter</p>
                    </div>
                    <Switch />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default UserProfile;
