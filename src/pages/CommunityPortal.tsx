
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Link } from 'react-router-dom';
import { 
  Search, 
  MessageSquare, 
  ThumbsUp, 
  Users, 
  Flag, 
  PieChart, 
  TrendingUp,
  PlusCircle 
} from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

// Mock data for forum discussions
const discussions = [
  {
    id: 1,
    title: "How can we improve civic education in rural areas?",
    author: {
      name: "Jane Muthoni",
      avatar: "/placeholder.svg"
    },
    replies: 12,
    likes: 32,
    category: "Education",
    preview: "I believe we need to focus on reaching citizens in rural areas who have limited access to information...",
    timeAgo: "2 hours ago",
    isHot: true
  },
  {
    id: 2,
    title: "Discussion on the new healthcare bill implications",
    author: {
      name: "David Ochieng",
      avatar: "/placeholder.svg"
    },
    replies: 8,
    likes: 24,
    category: "Health",
    preview: "The new healthcare bill will have significant impacts on how medical services are delivered across Kenya...",
    timeAgo: "1 day ago",
    isHot: false
  },
  {
    id: 3,
    title: "Youth participation in county governance",
    author: {
      name: "Peter Kamau",
      avatar: "/placeholder.svg"
    },
    replies: 15,
    likes: 42,
    category: "Governance",
    preview: "Young people need more opportunities to participate in county decision-making processes...",
    timeAgo: "3 days ago",
    isHot: true
  },
  {
    id: 4,
    title: "Environmental policies and community action",
    author: {
      name: "Susan Wanjiku",
      avatar: "/placeholder.svg"
    },
    replies: 7,
    likes: 19,
    category: "Environment",
    preview: "Communities can play a vital role in environmental conservation through local initiatives...",
    timeAgo: "1 week ago",
    isHot: false
  }
];

// Mock data for campaigns
const campaigns = [
  {
    id: 1,
    title: "Clean Water for Rural Schools",
    organizer: "Education Rights Kenya",
    supporters: 1245,
    goal: 5000,
    category: "Education",
    endDate: "2025-05-30",
    progress: 25
  },
  {
    id: 2,
    title: "Lobby for Youth Employment Bill",
    organizer: "Youth Alliance Kenya",
    supporters: 3620,
    goal: 10000,
    category: "Employment",
    endDate: "2025-06-15",
    progress: 36
  },
  {
    id: 3,
    title: "Digital Rights Awareness Campaign",
    organizer: "Tech4All Kenya",
    supporters: 890,
    goal: 2500,
    category: "Technology",
    endDate: "2025-04-30",
    progress: 35
  }
];

const CommunityPortal = () => {
  return (
    <Layout>
      <div className="container py-8 md:py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Community Portal</h1>
            <p className="text-muted-foreground">Join discussions and campaigns for civic change in Kenya</p>
          </div>
          <div className="flex gap-3 mt-4 md:mt-0">
            <Button asChild className="bg-kenya-green hover:bg-kenya-green/90">
              <Link to="/community/start-discussion">
                <PlusCircle className="mr-2 h-4 w-4" />
                New Discussion
              </Link>
            </Button>
          </div>
        </div>
        
        <Tabs defaultValue="discussions">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
            <TabsList>
              <TabsTrigger value="discussions" className="flex items-center gap-1">
                <MessageSquare className="h-4 w-4" />
                Discussions
              </TabsTrigger>
              <TabsTrigger value="campaigns" className="flex items-center gap-1">
                <Flag className="h-4 w-4" />
                Campaigns
              </TabsTrigger>
            </TabsList>
            
            <div className="relative mt-4 sm:mt-0 w-full sm:w-64">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search community..." className="pl-8" />
            </div>
          </div>
          
          <TabsContent value="discussions" className="space-y-6 mt-0">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
              <Card>
                <CardHeader className="pb-3 text-center">
                  <MessageSquare className="h-8 w-8 text-kenya-green mx-auto" />
                  <h3 className="font-medium">Total Discussions</h3>
                  <p className="text-2xl font-bold">426</p>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader className="pb-3 text-center">
                  <Users className="h-8 w-8 text-kenya-green mx-auto" />
                  <h3 className="font-medium">Community Members</h3>
                  <p className="text-2xl font-bold">1,287</p>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader className="pb-3 text-center">
                  <TrendingUp className="h-8 w-8 text-kenya-green mx-auto" />
                  <h3 className="font-medium">Active Today</h3>
                  <p className="text-2xl font-bold">84</p>
                </CardHeader>
              </Card>
            </div>
            
            {discussions.map((discussion) => (
              <Card key={discussion.id}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                      <Badge variant="outline" className="bg-muted font-normal w-fit">
                        {discussion.category}
                      </Badge>
                      
                      {discussion.isHot && (
                        <Badge variant="secondary" className="bg-kenya-red/80 hover:bg-kenya-red text-white w-fit">
                          <TrendingUp className="mr-1 h-3 w-3" />
                          Trending
                        </Badge>
                      )}
                    </div>
                    <span className="text-xs text-muted-foreground">{discussion.timeAgo}</span>
                  </div>
                  
                  <h3 className="font-semibold text-xl mt-2">
                    <Link to={`/community/discussion/${discussion.id}`} className="hover:text-kenya-green transition-colors">
                      {discussion.title}
                    </Link>
                  </h3>
                </CardHeader>
                
                <CardContent>
                  <p className="text-muted-foreground">{discussion.preview}</p>
                  
                  <div className="flex items-center mt-6 space-x-3">
                    <Avatar>
                      <AvatarImage src={discussion.author.avatar} alt={discussion.author.name} />
                      <AvatarFallback>{discussion.author.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">{discussion.author.name}</p>
                      <p className="text-xs text-muted-foreground">Community Member</p>
                    </div>
                  </div>
                </CardContent>
                
                <CardFooter className="flex justify-between text-sm text-muted-foreground border-t">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <MessageSquare className="h-4 w-4" />
                      <span>{discussion.replies} replies</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <ThumbsUp className="h-4 w-4" />
                      <span>{discussion.likes} likes</span>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" asChild>
                    <Link to={`/community/discussion/${discussion.id}`}>
                      Join discussion
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
            
            <div className="flex justify-center">
              <Button variant="outline">Load more discussions</Button>
            </div>
          </TabsContent>
          
          <TabsContent value="campaigns" className="space-y-6 mt-0">
            <div className="grid md:grid-cols-3 gap-3">
              <Card>
                <CardHeader className="pb-3 text-center">
                  <Flag className="h-8 w-8 text-kenya-red mx-auto" />
                  <h3 className="font-medium">Active Campaigns</h3>
                  <p className="text-2xl font-bold">32</p>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader className="pb-3 text-center">
                  <Users className="h-8 w-8 text-kenya-red mx-auto" />
                  <h3 className="font-medium">Total Supporters</h3>
                  <p className="text-2xl font-bold">24,718</p>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader className="pb-3 text-center">
                  <PieChart className="h-8 w-8 text-kenya-red mx-auto" />
                  <h3 className="font-medium">Success Rate</h3>
                  <p className="text-2xl font-bold">74%</p>
                </CardHeader>
              </Card>
            </div>
            
            <div className="flex justify-end">
              <Button className="bg-kenya-red hover:bg-kenya-red/90" asChild>
                <Link to="/community/start-campaign">
                  <Flag className="mr-2 h-4 w-4" />
                  Start a Campaign
                </Link>
              </Button>
            </div>
            
            {campaigns.map((campaign) => (
              <Card key={campaign.id}>
                <CardHeader>
                  <Badge variant="outline" className="mb-2 w-fit">
                    {campaign.category}
                  </Badge>
                  <h3 className="font-semibold text-xl">
                    <Link to={`/community/campaign/${campaign.id}`} className="hover:text-kenya-red transition-colors">
                      {campaign.title}
                    </Link>
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    By <span className="font-medium">{campaign.organizer}</span>
                  </p>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>{campaign.supporters.toLocaleString()} supporters</span>
                        <span>{campaign.goal.toLocaleString()} goal</span>
                      </div>
                      <div className="h-2 bg-muted rounded overflow-hidden">
                        <div 
                          className="h-full bg-kenya-red" 
                          style={{ width: `${campaign.progress}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <span>{campaign.progress}% complete</span>
                      </div>
                      <div>
                        Ends on {new Date(campaign.endDate).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                </CardContent>
                
                <CardFooter className="flex justify-between">
                  <Button variant="outline" asChild>
                    <Link to={`/community/campaign/${campaign.id}`}>
                      Learn More
                    </Link>
                  </Button>
                  <Button className="bg-kenya-red hover:bg-kenya-red/90" asChild>
                    <Link to={`/community/campaign/${campaign.id}/support`}>
                      Support Campaign
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
            
            <div className="flex justify-center">
              <Button variant="outline">View more campaigns</Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default CommunityPortal;
