
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Link } from 'react-router-dom';
import { Search, Download, FileText, Video, Image, BookOpen, ArrowDown } from 'lucide-react';

// Mock data for resources
const resources = [
  {
    id: 1,
    title: "Understanding the Constitution of Kenya",
    type: "PDF",
    category: "Constitution",
    description: "A comprehensive guide to the Kenyan Constitution and its key provisions.",
    icon: <FileText className="h-6 w-6" />,
    downloadable: true,
    popular: true
  },
  {
    id: 2,
    title: "How Laws Are Made in Kenya",
    type: "Video",
    category: "Governance",
    description: "Visual explanation of the legislative process from bill proposal to enactment.",
    icon: <Video className="h-6 w-6" />,
    downloadable: true,
    popular: true
  },
  {
    id: 3,
    title: "Your Rights as a Kenyan Citizen",
    type: "Infographic",
    category: "Rights",
    description: "Visual representation of fundamental rights guaranteed by the Constitution.",
    icon: <Image className="h-6 w-6" />,
    downloadable: true,
    popular: false
  },
  {
    id: 4,
    title: "County Governments Explained",
    type: "PDF",
    category: "Governance",
    description: "Detailed explanation of how county governments work and their responsibilities.",
    icon: <FileText className="h-6 w-6" />,
    downloadable: true,
    popular: false
  },
  {
    id: 5,
    title: "Introduction to Public Participation",
    type: "PDF",
    category: "Participation",
    description: "Guide on how citizens can participate in governance and decision-making processes.",
    icon: <FileText className="h-6 w-6" />,
    downloadable: true,
    popular: true
  },
  {
    id: 6,
    title: "Kenya's Electoral System",
    type: "Video",
    category: "Elections",
    description: "Explains how elections work in Kenya, from voter registration to results announcement.",
    icon: <Video className="h-6 w-6" />,
    downloadable: true,
    popular: false
  },
  {
    id: 7,
    title: "Understanding the Judiciary",
    type: "Infographic",
    category: "Judiciary",
    description: "Visual guide to Kenya's court system and how the judiciary functions.",
    icon: <Image className="h-6 w-6" />,
    downloadable: true,
    popular: false
  },
  {
    id: 8,
    title: "Civic Education for Youth",
    type: "PDF",
    category: "Education",
    description: "Resources specifically designed for young Kenyans to learn about civic participation.",
    icon: <FileText className="h-6 w-6" />,
    downloadable: true,
    popular: false
  }
];

const ResourceHub = () => {
  return (
    <Layout>
      <div className="container py-8 md:py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Resource Hub</h1>
            <p className="text-muted-foreground">Educational materials on civic rights, governance, and public participation</p>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-6 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search resources..." className="pl-9" />
          </div>
          
          <div className="flex gap-2 flex-wrap">
            <Button variant="outline" size="sm">
              Constitution
            </Button>
            <Button variant="outline" size="sm">
              Rights
            </Button>
            <Button variant="outline" size="sm">
              Governance
            </Button>
            <Button variant="outline" size="sm">
              Participation
            </Button>
          </div>
        </div>
        
        <Tabs defaultValue="all">
          <TabsList className="mb-6">
            <TabsTrigger value="all">All Resources</TabsTrigger>
            <TabsTrigger value="documents">Documents</TabsTrigger>
            <TabsTrigger value="videos">Videos</TabsTrigger>
            <TabsTrigger value="infographics">Infographics</TabsTrigger>
            <TabsTrigger value="popular">Popular</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="mt-0">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {resources.map((resource) => (
                <Card key={resource.id} className="flex flex-col h-full group">
                  <CardHeader className="bg-muted/50 py-6 text-center">
                    <div className="mx-auto bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                      {resource.icon}
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6 flex-grow">
                    <div className="flex justify-between items-start mb-3">
                      <Badge>{resource.type}</Badge>
                      {resource.popular && (
                        <Badge variant="secondary" className="bg-kenya-red/80 hover:bg-kenya-red text-white">
                          Popular
                        </Badge>
                      )}
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{resource.title}</h3>
                    <p className="text-muted-foreground text-sm">{resource.description}</p>
                    <Badge variant="outline" className="mt-3">
                      {resource.category}
                    </Badge>
                  </CardContent>
                  <CardFooter className="flex justify-between items-center border-t pt-4">
                    <Button variant="outline" size="sm" className="text-xs" asChild>
                      <Link to={`/resources/${resource.id}`}>
                        View details
                      </Link>
                    </Button>
                    {resource.downloadable && (
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Download className="h-4 w-4" />
                        <span className="sr-only">Download {resource.title}</span>
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              ))}
            </div>
            
            <div className="flex justify-center mt-10">
              <Button variant="outline" className="flex items-center gap-2">
                Load More Resources
                <ArrowDown className="h-4 w-4" />
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="documents">
            <div className="bg-muted rounded-md p-8 text-center">
              <BookOpen className="h-12 w-12 mx-auto text-muted-foreground mb-3" />
              <h3 className="font-medium">Documents Category</h3>
              <p className="text-sm text-muted-foreground mt-1">Filter applied to show only document resources.</p>
            </div>
          </TabsContent>
          
          <TabsContent value="videos">
            <div className="bg-muted rounded-md p-8 text-center">
              <Video className="h-12 w-12 mx-auto text-muted-foreground mb-3" />
              <h3 className="font-medium">Videos Category</h3>
              <p className="text-sm text-muted-foreground mt-1">Filter applied to show only video resources.</p>
            </div>
          </TabsContent>
          
          <TabsContent value="infographics">
            <div className="bg-muted rounded-md p-8 text-center">
              <Image className="h-12 w-12 mx-auto text-muted-foreground mb-3" />
              <h3 className="font-medium">Infographics Category</h3>
              <p className="text-sm text-muted-foreground mt-1">Filter applied to show only infographic resources.</p>
            </div>
          </TabsContent>
          
          <TabsContent value="popular">
            <div className="bg-muted rounded-md p-8 text-center">
              <h3 className="font-medium">Popular Resources</h3>
              <p className="text-sm text-muted-foreground mt-1">Filter applied to show only popular and trending resources.</p>
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="mt-12 p-6 bg-kenya-green/10 rounded-lg">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Download Resources for Offline Access</h2>
            <p className="mb-6 text-muted-foreground">
              Save resources to your device for access even when you're offline. 
              Perfect for areas with limited connectivity.
            </p>
            <Button className="bg-kenya-green hover:bg-kenya-green/90">
              <Download className="mr-2 h-4 w-4" />
              Download Selected Resources
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ResourceHub;
