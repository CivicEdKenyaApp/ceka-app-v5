
import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, Download, FileText, Video, Image, BookOpen, ArrowDown, Upload } from 'lucide-react';
import ResourceCard from '@/components/resources/ResourceCard';
import ResourceTypeFilter from '@/components/resources/ResourceTypeFilter';
import { supabase } from '@/integrations/supabase/client';
import { Tables } from '@/integrations/supabase/types';
import { useToast } from '@/components/ui/use-toast';
import { useAuth } from '@/App';

type Resource = Tables<'resources'>;

// Mock data for initial display
const mockResources = [
  {
    id: "1",
    title: "Understanding the Constitution of Kenya",
    type: "PDF",
    category: "Constitution",
    description: "A comprehensive guide to the Kenyan Constitution and its key provisions.",
    url: "https://example.com/constitution-guide.pdf",
    is_downloadable: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: "2",
    title: "How Laws Are Made in Kenya",
    type: "Video",
    category: "Governance",
    description: "Visual explanation of the legislative process from bill proposal to enactment.",
    url: "https://example.com/laws-video.mp4",
    is_downloadable: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: "3",
    title: "Your Rights as a Kenyan Citizen",
    type: "Infographic",
    category: "Rights",
    description: "Visual representation of fundamental rights guaranteed by the Constitution.",
    url: "https://example.com/rights-infographic.png",
    is_downloadable: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: "4",
    title: "County Governments Explained",
    type: "PDF",
    category: "Governance",
    description: "Detailed explanation of how county governments work and their responsibilities.",
    url: "https://example.com/county-gov.pdf",
    is_downloadable: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: "5",
    title: "Introduction to Public Participation",
    type: "PDF",
    category: "Participation",
    description: "Guide on how citizens can participate in governance and decision-making processes.",
    url: "https://example.com/participation.pdf",
    is_downloadable: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: "6",
    title: "Kenya's Electoral System",
    type: "Video",
    category: "Elections",
    description: "Explains how elections work in Kenya, from voter registration to results announcement.",
    url: "https://example.com/elections-video.mp4",
    is_downloadable: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: "7",
    title: "Understanding the Judiciary",
    type: "Infographic",
    category: "Judiciary",
    description: "Visual guide to Kenya's court system and how the judiciary functions.",
    url: "https://example.com/judiciary.png",
    is_downloadable: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: "8",
    title: "Civic Education for Youth",
    type: "PDF",
    category: "Education",
    description: "Resources specifically designed for young Kenyans to learn about civic participation.",
    url: "https://example.com/youth-civic.pdf",
    is_downloadable: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  // Adding new documents for the Documents tab
  {
    id: "9",
    title: "National Civic Education Framework",
    type: "Document",
    category: "Framework",
    description: "Official framework outlining civic education implementation at County and National levels.",
    url: "https://example.com/ncef-document.pdf",
    is_downloadable: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: "10",
    title: "Guide to Devolved Government",
    type: "Document",
    category: "Governance",
    description: "Comprehensive document explaining Kenya's devolved system of government.",
    url: "https://example.com/devolution-guide.pdf",
    is_downloadable: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: "11",
    title: "Civil Society Engagement Handbook",
    type: "Document",
    category: "Participation",
    description: "A handbook for civil society organizations on effective engagement with government.",
    url: "https://example.com/cso-handbook.pdf",
    is_downloadable: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: "12",
    title: "Public Finance Management Guide",
    type: "Document",
    category: "Finance",
    description: "Document explaining public finance management processes in Kenya.",
    url: "https://example.com/pfm-guide.pdf",
    is_downloadable: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  }
];

const ResourceHub = () => {
  const [resources, setResources] = useState<Resource[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const { type } = useParams();
  const { toast } = useToast();
  const navigate = useNavigate();
  const { session } = useAuth();

  // Fetch resources from Supabase or use mock data for initial display
  useEffect(() => {
    const fetchResources = async () => {
      try {
        // In a real implementation, this would fetch from Supabase
        // For now, we'll just use the mock data after a brief delay
        setTimeout(() => {
          // Filter by type if specified in URL
          let filteredResources = [...mockResources];
          
          if (type) {
            filteredResources = mockResources.filter(resource => 
              resource.type.toLowerCase() === type.toLowerCase() ||
              resource.category.toLowerCase() === type.toLowerCase()
            );
          }
          
          setResources(filteredResources as Resource[]);
          setLoading(false);
        }, 500);
        
        // Actual Supabase implementation would look like this:
        /*
        let query = supabase
          .from('resources')
          .select('*')
          .eq('status', 'approved');
          
        if (type) {
          query = query.eq('type', type);
        }
        
        const { data, error } = await query;
        
        if (error) throw error;
        
        setResources(data || []);
        */
      } catch (error) {
        console.error('Error fetching resources:', error);
        toast({
          title: "Error",
          description: "Could not load resources. Please try again.",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchResources();
  }, [type, toast]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Filter resources by search query
    // This would be handled by the database in a real implementation
    console.log("Searching for:", searchQuery);
  };

  const handleCategoryFilter = (category: string) => {
    if (activeCategory === category) {
      setActiveCategory(null);
    } else {
      setActiveCategory(category);
    }
  };

  const filteredResources = activeCategory
    ? resources.filter(resource => resource.category === activeCategory)
    : resources;

  const popularResources = resources.filter((_, index) => index < 3);

  const handleGoToUpload = () => {
    if (!session) {
      toast({
        title: "Authentication required",
        description: "Please sign in to upload resources",
      });
      navigate('/auth');
    } else {
      navigate('/resources/upload');
    }
  };

  return (
    <Layout>
      <div className="container py-8 md:py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Resource Hub</h1>
            <p className="text-muted-foreground">Educational materials on civic rights, governance, and public participation</p>
          </div>
          <div className="mt-4 md:mt-0 flex gap-2">
            <Button 
              onClick={handleGoToUpload}
              className="bg-kenya-green hover:bg-kenya-green/90"
            >
              <Upload className="mr-2 h-4 w-4" />
              Submit Resource
            </Button>
            {session && (
              <Button variant="outline" asChild>
                <Link to="/resources/pending">
                  My Submissions
                </Link>
              </Button>
            )}
          </div>
        </div>
        
        <div className="mb-8">
          <ResourceTypeFilter />
        </div>
        
        <div className="flex flex-col md:flex-row gap-6 mb-8">
          <form onSubmit={handleSearch} className="relative flex-1">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search resources..." 
              className="pl-9" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </form>
          
          <div className="flex gap-2 flex-wrap">
            <Button 
              variant={activeCategory === "Constitution" ? "default" : "outline"} 
              size="sm"
              onClick={() => handleCategoryFilter("Constitution")}
            >
              Constitution
            </Button>
            <Button 
              variant={activeCategory === "Rights" ? "default" : "outline"} 
              size="sm"
              onClick={() => handleCategoryFilter("Rights")}
            >
              Rights
            </Button>
            <Button 
              variant={activeCategory === "Governance" ? "default" : "outline"} 
              size="sm"
              onClick={() => handleCategoryFilter("Governance")}
            >
              Governance
            </Button>
            <Button 
              variant={activeCategory === "Participation" ? "default" : "outline"} 
              size="sm"
              onClick={() => handleCategoryFilter("Participation")}
            >
              Participation
            </Button>
          </div>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {loading ? (
            [1, 2, 3, 4, 5, 6].map((n) => (
              <div key={n} className="animate-pulse">
                <div className="h-40 bg-muted rounded-t-lg"></div>
                <div className="p-4 space-y-2">
                  <div className="h-4 bg-muted rounded w-1/4"></div>
                  <div className="h-6 bg-muted rounded w-3/4"></div>
                  <div className="h-4 bg-muted rounded w-full"></div>
                  <div className="h-4 bg-muted rounded w-2/3"></div>
                </div>
              </div>
            ))
          ) : filteredResources.length === 0 ? (
            <div className="col-span-full text-center py-12">
              <BookOpen className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <h2 className="text-xl font-semibold mb-2">No Resources Found</h2>
              <p className="text-muted-foreground mb-6">
                {type 
                  ? `No ${type} resources are available currently.` 
                  : "No resources match your search criteria."}
              </p>
              <Button asChild>
                <Link to="/resources">View All Resources</Link>
              </Button>
            </div>
          ) : (
            filteredResources.map((resource) => (
              <ResourceCard
                key={resource.id}
                id={resource.id}
                title={resource.title}
                description={resource.description}
                type={resource.type}
                category={resource.category}
                downloadable={resource.is_downloadable || false}
              />
            ))
          )}
        </div>
        
        {filteredResources.length > 0 && (
          <div className="flex justify-center mt-10">
            <Button variant="outline" className="flex items-center gap-2">
              Load More Resources
              <ArrowDown className="h-4 w-4" />
            </Button>
          </div>
        )}
        
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
