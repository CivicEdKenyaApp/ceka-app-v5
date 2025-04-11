
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ArrowRight, MessageSquare, Heart, HandHelping, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const CommunityPortal = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Discussion keywords
  const discussionKeywords = ["President", "Bill", "Butere Girls", "County", "Education"];
  
  // Campaign keywords
  const campaignKeywords = ["Youth", "Digital", "Girls", "Climate", "Agriculture"];

  // Mock discussions data
  const discussions = [
    {
      id: 1,
      title: "How can we improve voter education in rural areas?",
      author: {
        name: "Jane Mwangi",
        avatar: "JM"
      },
      comments: 15,
      likes: 32,
      date: "2025-04-01"
    },
    {
      id: 2,
      title: "Understanding the new Education Bill proposals",
      author: {
        name: "David Omondi",
        avatar: "DO"
      },
      comments: 23,
      likes: 41,
      date: "2025-03-29"
    },
    {
      id: 3,
      title: "Let's discuss the upcoming county budget allocations",
      author: {
        name: "Sarah Njoroge",
        avatar: "SN"
      },
      comments: 8,
      likes: 19,
      date: "2025-03-27"
    },
    {
      id: 4,
      title: "Digital identity systems: Privacy concerns vs. benefits",
      author: {
        name: "Michael Kamau",
        avatar: "MK"
      },
      comments: 34,
      likes: 56,
      date: "2025-03-25"
    }
  ];

  // Mock campaigns data
  const campaigns = [
    {
      id: 1,
      title: "Youth Voices in Digital Rights",
      organizer: "Digital Kenya Coalition",
      participants: 347,
      goal: "Advocate for youth-centered digital policies",
      type: "Digital"
    },
    {
      id: 2,
      title: "Clean Rivers Initiative",
      organizer: "Environmental Advocates Kenya",
      participants: 215,
      goal: "Restoration of urban waterways",
      type: "Environment"
    },
    {
      id: 3,
      title: "Girls in STEM",
      organizer: "Education Equality Network",
      participants: 156,
      goal: "Increase female participation in technology education",
      type: "Education"
    },
    {
      id: 4,
      title: "Rural Healthcare Access",
      organizer: "Healthcare for All Kenya",
      participants: 298,
      goal: "Improve healthcare facilities in rural communities",
      type: "Healthcare"
    }
  ];

  // Handle search for discussions
  const handleDiscussionSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching discussions for:", searchQuery);
    // Implement search logic here
  };

  // Handle search for campaigns
  const handleCampaignSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching campaigns for:", searchQuery);
    // Implement search logic here
  };

  // Handle keyword click
  const handleKeywordClick = (keyword: string) => {
    setSearchQuery(keyword);
  };

  return (
    <Layout>
      <div className="container py-8 md:py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Community Portal</h1>
            <p className="text-muted-foreground">Connect with other citizens and join civic campaigns</p>
          </div>
        </div>
        
        <Tabs defaultValue="discussions" className="w-full">
          <TabsList className="mb-8">
            <TabsTrigger value="discussions">Discussions</TabsTrigger>
            <TabsTrigger value="campaigns">Campaigns</TabsTrigger>
          </TabsList>
          
          <TabsContent value="discussions" className="space-y-8">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <form onSubmit={handleDiscussionSearch} className="relative w-full md:w-1/2">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Search discussions..." 
                  className="pl-9 pr-12" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Button type="submit" size="sm" className="absolute right-1.5 top-1.5">
                  Search
                </Button>
              </form>
              <div className="flex flex-wrap gap-2">
                {discussionKeywords.map((keyword) => (
                  <Badge 
                    key={keyword} 
                    variant="outline" 
                    className="cursor-pointer hover:bg-muted"
                    onClick={() => handleKeywordClick(keyword)}
                  >
                    {keyword}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {discussions.map((discussion) => (
                <Card key={discussion.id}>
                  <CardHeader className="pb-3">
                    <div className="flex justify-between">
                      <div className="flex items-center gap-2">
                        <Avatar>
                          <AvatarFallback>{discussion.author.avatar}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm font-medium">{discussion.author.name}</p>
                          <p className="text-xs text-muted-foreground">
                            {new Date(discussion.date).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <h3 className="text-lg font-semibold">
                      <Link to={`/community/discussions/${discussion.id}`} className="hover:text-kenya-green transition-colors">
                        {discussion.title}
                      </Link>
                    </h3>
                  </CardContent>
                  <CardFooter className="border-t pt-4 pb-4 flex justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <MessageSquare className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{discussion.comments}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Heart className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{discussion.likes}</span>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" asChild>
                      <Link to={`/community/discussions/${discussion.id}`} className="flex items-center">
                        Join discussion
                        <ArrowRight className="ml-1 h-3.5 w-3.5" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            
            <div className="text-center">
              <Button variant="outline">
                Load More Discussions
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="campaigns" className="space-y-8">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <form onSubmit={handleCampaignSearch} className="relative w-full md:w-1/2">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Search campaigns..." 
                  className="pl-9 pr-12" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Button type="submit" size="sm" className="absolute right-1.5 top-1.5">
                  Search
                </Button>
              </form>
              <div className="flex flex-wrap gap-2">
                {campaignKeywords.map((keyword) => (
                  <Badge 
                    key={keyword} 
                    variant="outline" 
                    className="cursor-pointer hover:bg-muted"
                    onClick={() => handleKeywordClick(keyword)}
                  >
                    {keyword}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {campaigns.map((campaign) => (
                <Card key={campaign.id}>
                  <CardHeader>
                    <Badge className="w-fit mb-2">{campaign.type}</Badge>
                    <h3 className="text-lg font-semibold">
                      <Link to={`/community/campaigns/${campaign.id}`} className="hover:text-kenya-green transition-colors">
                        {campaign.title}
                      </Link>
                    </h3>
                    <p className="text-sm text-muted-foreground">Organized by: {campaign.organizer}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm mb-4">Goal: {campaign.goal}</p>
                    <div className="flex items-center gap-1.5">
                      <HandHelping className="h-4 w-4 text-kenya-green" />
                      <span className="text-sm font-medium">{campaign.participants} participants</span>
                    </div>
                  </CardContent>
                  <CardFooter className="border-t pt-4 pb-4">
                    <Button asChild className="w-full bg-kenya-green hover:bg-kenya-green/90">
                      <Link to={`/community/campaigns/${campaign.id}`}>
                        Join Campaign
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            
            <div className="text-center">
              <Button variant="outline">
                Load More Campaigns
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default CommunityPortal;
