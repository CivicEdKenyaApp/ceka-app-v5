
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
  MapPin, 
  Calendar, 
  Clock, 
  Filter,
  HandHelping,
  Building,
  Users
} from 'lucide-react';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';

// Mock data for volunteer opportunities
const opportunities = [
  {
    id: 1,
    title: "Civic Education Workshop Facilitator",
    organization: "Democracy Kenya Foundation",
    location: "Nairobi",
    type: "Local",
    date: "May 15, 2025",
    time: "9:00 AM - 4:00 PM",
    commitment: "One-time",
    description: "Lead workshops teaching citizens about their rights and civic responsibilities."
  },
  {
    id: 2,
    title: "Youth Voter Registration Drive",
    organization: "Kenya Electoral Commission",
    location: "Multiple Locations",
    type: "Grassroots",
    date: "May 20-21, 2025",
    time: "Various shifts available",
    commitment: "Short-term",
    description: "Help register young voters for upcoming elections and educate them on the importance of voting."
  },
  {
    id: 3,
    title: "Online Content Developer",
    organization: "Civic Rights Kenya",
    location: "Remote",
    type: "Online",
    date: "Flexible",
    time: "5-10 hours per week",
    commitment: "Ongoing",
    description: "Create engaging digital content to educate citizens about civic issues and rights."
  },
  {
    id: 4,
    title: "Community Forum Moderator",
    organization: "Civic Engagement Network",
    location: "Remote",
    type: "Online",
    date: "Ongoing",
    time: "Flexible hours",
    commitment: "Ongoing",
    description: "Moderate online discussions to ensure constructive dialogue about civic issues."
  },
  {
    id: 5,
    title: "Legal Aid Assistant",
    organization: "Justice Access Kenya",
    location: "Mombasa",
    type: "Local",
    date: "Weekends",
    time: "10:00 AM - 2:00 PM",
    commitment: "Regular",
    description: "Assist lawyers in providing free legal advice to citizens who cannot afford representation."
  },
  {
    id: 6,
    title: "Rural Civic Education Outreach",
    organization: "Grassroots Democracy Initiative",
    location: "Various Rural Counties",
    type: "Grassroots",
    date: "Monthly Visits",
    time: "Full Day Events",
    commitment: "Regular",
    description: "Travel to rural areas to conduct civic education programs for underserved communities."
  }
];

const Volunteer = () => {
  return (
    <Layout>
      <div className="container py-8 md:py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Volunteer Opportunities</h1>
            <p className="text-muted-foreground">Make a difference in your community through civic engagement</p>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1 space-y-4">
            <Card>
              <CardHeader className="pb-3">
                <h3 className="font-medium text-lg">Filters</h3>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Search</label>
                  <div className="relative">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search opportunities..." className="pl-8" />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Location</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="All Locations" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Locations</SelectItem>
                      <SelectItem value="nairobi">Nairobi</SelectItem>
                      <SelectItem value="mombasa">Mombasa</SelectItem>
                      <SelectItem value="kisumu">Kisumu</SelectItem>
                      <SelectItem value="remote">Remote</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Commitment</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Any Commitment" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="any">Any Commitment</SelectItem>
                      <SelectItem value="one-time">One-time</SelectItem>
                      <SelectItem value="short-term">Short-term</SelectItem>
                      <SelectItem value="regular">Regular</SelectItem>
                      <SelectItem value="ongoing">Ongoing</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Type</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="All Types" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Types</SelectItem>
                      <SelectItem value="local">Local</SelectItem>
                      <SelectItem value="grassroots">Grassroots</SelectItem>
                      <SelectItem value="online">Online</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <Button variant="outline" className="w-full">
                  <Filter className="mr-2 h-4 w-4" />
                  Apply Filters
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-3">
                <h3 className="font-medium text-lg">Stats</h3>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <HandHelping className="h-5 w-5 text-kenya-green" />
                    <span className="text-sm">Opportunities</span>
                  </div>
                  <span className="font-medium">68</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Building className="h-5 w-5 text-kenya-green" />
                    <span className="text-sm">Organizations</span>
                  </div>
                  <span className="font-medium">24</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-kenya-green" />
                    <span className="text-sm">Active Volunteers</span>
                  </div>
                  <span className="font-medium">547</span>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="lg:col-span-3">
            <Tabs defaultValue="all">
              <TabsList className="mb-6">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="local">Local</TabsTrigger>
                <TabsTrigger value="grassroots">Grassroots</TabsTrigger>
                <TabsTrigger value="online">Online</TabsTrigger>
              </TabsList>
              
              <TabsContent value="all" className="space-y-6 mt-0">
                <div className="grid md:grid-cols-2 gap-6">
                  {opportunities.map((opportunity) => (
                    <Card key={opportunity.id} className="h-full flex flex-col">
                      <CardHeader>
                        <Badge 
                          variant={
                            opportunity.type === "Online" 
                              ? "outline" 
                              : opportunity.type === "Local" 
                                ? "default" 
                                : "secondary"
                          }
                          className={opportunity.type === "Local" ? "bg-kenya-green hover:bg-kenya-green/80" : ""}
                        >
                          {opportunity.type}
                        </Badge>
                        <h3 className="text-lg font-semibold mt-3">{opportunity.title}</h3>
                        <p className="text-sm text-kenya-green font-medium">{opportunity.organization}</p>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <p className="text-muted-foreground text-sm mb-4">{opportunity.description}</p>
                        <div className="space-y-3 text-sm">
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <MapPin className="h-4 w-4" />
                            <span>{opportunity.location}</span>
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Calendar className="h-4 w-4" />
                            <span>{opportunity.date}</span>
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Clock className="h-4 w-4" />
                            <span>{opportunity.time}</span>
                          </div>
                          <div className="mt-3">
                            <Badge variant="outline" className="bg-muted font-normal text-muted-foreground">
                              {opportunity.commitment}
                            </Badge>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button asChild className="w-full bg-kenya-green hover:bg-kenya-green/90">
                          <Link to={`/volunteer/${opportunity.id}`}>
                            Apply Now
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
                
                <div className="flex justify-center">
                  <Button variant="outline">Load more opportunities</Button>
                </div>
              </TabsContent>
              
              <TabsContent value="local">
                <div className="p-8 text-center bg-muted rounded-md">
                  <HandHelping className="h-12 w-12 mx-auto text-muted-foreground mb-3" />
                  <h3 className="font-medium">Local Opportunities</h3>
                  <p className="text-sm text-muted-foreground mt-1">Filter applied to show only local volunteer opportunities.</p>
                </div>
              </TabsContent>
              
              <TabsContent value="grassroots">
                <div className="p-8 text-center bg-muted rounded-md">
                  <Users className="h-12 w-12 mx-auto text-muted-foreground mb-3" />
                  <h3 className="font-medium">Grassroots Opportunities</h3>
                  <p className="text-sm text-muted-foreground mt-1">Filter applied to show only grassroots volunteer opportunities.</p>
                </div>
              </TabsContent>
              
              <TabsContent value="online">
                <div className="p-8 text-center bg-muted rounded-md">
                  <Building className="h-12 w-12 mx-auto text-muted-foreground mb-3" />
                  <h3 className="font-medium">Online Opportunities</h3>
                  <p className="text-sm text-muted-foreground mt-1">Filter applied to show only online volunteer opportunities.</p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
        
        <div className="mt-12 p-8 rounded-lg bg-kenya-green/10 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-3">Want to list a volunteer opportunity?</h2>
            <p className="mb-6 text-muted-foreground">
              If your organization has volunteer opportunities related to civic education or engagement,
              we'd love to help you connect with passionate volunteers.
            </p>
            <Button asChild>
              <Link to="/volunteer/add-opportunity">
                List Your Opportunity
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Volunteer;
