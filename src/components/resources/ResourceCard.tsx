import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Download, BookOpen } from 'lucide-react';
import { formatDate } from '@/lib/utils';

interface ResourceCardProps {
  resource: {
    id: number;
    title: string;
    description: string;
    type: string;
    uploadDate: string;
    uploadedBy: string;
    downloadUrl: string;
    videoUrl?: string;
    status?: 'pending' | 'approved' | 'rejected';
  };
}

const ResourceCard = ({ resource }: ResourceCardProps) => {
  const getBadgeColor = (type: string) => {
    switch (type) {
      case 'constitution':
        return 'bg-kenya-red/10 text-kenya-red border-kenya-red/30';
      case 'infographic':
        return 'bg-kenya-green/10 text-kenya-green border-kenya-green/30';
      case 'video':
        return 'bg-kenya-blue/10 text-kenya-blue border-kenya-blue/30';
      case 'document':
        return 'bg-kenya-yellow/10 text-kenya-yellow border-kenya-yellow/30';
      default:
        return 'bg-muted-foreground/10 text-muted-foreground border-muted-foreground/30';
    }
  };

  const getResourceThumbnail = (resource: any) => {
    if (resource.type === 'video' && resource.videoUrl) {
      // Extract video ID from YouTube URL
      const videoId = resource.videoUrl.split('v=')[1];
      const ampersandPosition = videoId.indexOf('&');
      const videoIdClean = ampersandPosition !== -1 ? videoId.substring(0, ampersandPosition) : videoId;
      
      return (
        <iframe
          src={`https://www.youtube.com/embed/${videoIdClean}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute top-0 left-0 w-full h-full"
        ></iframe>
      );
    } else {
      return <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-muted-foreground">No Thumbnail</div>;
    }
  };

  // Add special handling for constitution resources
  const isConstitutionResource = resource.type === 'constitution';
  
  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="pb-4">
        <div className="flex justify-between items-start">
          <Badge variant="outline" className={`${getBadgeColor(resource.type)} font-normal`}>
            {resource.type}
          </Badge>
          {resource.status === 'pending' && (
            <Badge variant="outline" className="bg-yellow-100 text-yellow-800 border-yellow-300">
              Pending Approval
            </Badge>
          )}
        </div>
        <div className="mt-3">
          <Link to={`/resources/${resource.id}`} className="hover:text-kenya-green transition-colors">
            <h3 className="font-semibold text-lg">{resource.title}</h3>
          </Link>
          <p className="text-muted-foreground text-sm mt-1">{resource.description}</p>
        </div>
      </CardHeader>
      <CardContent className="grow">
        <div className="relative aspect-video bg-muted rounded-md overflow-hidden mb-4">
          {getResourceThumbnail(resource)}
        </div>
        <div className="mt-4 text-sm text-muted-foreground">
          <p>Uploaded: {formatDate(resource.uploadDate)}</p>
          <p className="mt-1">By: {resource.uploadedBy}</p>
        </div>
      </CardContent>
      <CardFooter className="border-t pt-4 pb-4 flex flex-col sm:flex-row gap-2 justify-between">
        <Button variant="outline" size="sm" asChild>
          <Link to={`/resources/${resource.id}`}>
            <ExternalLink className="mr-1.5 h-3.5 w-3.5" />
            View Details
          </Link>
        </Button>
        
        {isConstitutionResource && (
          <Button variant="outline" size="sm" asChild>
            <Link to="/constitution">
              <BookOpen className="mr-1.5 h-3.5 w-3.5" />
              Constitution Guide
            </Link>
          </Button>
        )}
        
        {!isConstitutionResource && (
          <Button variant="outline" size="sm" asChild>
            <a href={resource.downloadUrl} target="_blank" rel="noopener noreferrer">
              <Download className="mr-1.5 h-3.5 w-3.5" />
              Download
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ResourceCard;
