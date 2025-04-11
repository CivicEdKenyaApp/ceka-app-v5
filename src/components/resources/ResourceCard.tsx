
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { FileText, Video, Image, Download, Clock, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ResourceCardProps {
  id: string;
  title: string;
  description: string;
  type: string;
  category: string;
  icon?: React.ReactNode;
  downloadable?: boolean;
  status?: 'approved' | 'pending';
  className?: string;
}

const ResourceCard = ({
  id,
  title,
  description,
  type,
  category,
  downloadable = true,
  status = 'approved',
  className
}: ResourceCardProps) => {
  
  const getResourceIcon = () => {
    switch (type.toLowerCase()) {
      case 'pdf':
        return <FileText className="h-6 w-6" />;
      case 'video':
        return <Video className="h-6 w-6" />;
      case 'infographic':
        return <Image className="h-6 w-6" />;
      default:
        return <FileText className="h-6 w-6" />;
    }
  };

  return (
    <Card className={cn("flex flex-col h-full group", className)}>
      <CardHeader className="bg-muted/50 py-6 text-center">
        <div className="mx-auto bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
          {getResourceIcon()}
        </div>
      </CardHeader>
      <CardContent className="pt-6 flex-grow">
        <div className="flex justify-between items-start mb-3">
          <Badge>{type}</Badge>
          {status === 'pending' && (
            <Badge variant="outline" className="bg-amber-100 text-amber-800 border-amber-200">
              <Clock className="h-3 w-3 mr-1" />
              Awaiting Approval
            </Badge>
          )}
          {status === 'approved' && category === 'Popular' && (
            <Badge variant="secondary" className="bg-kenya-red/80 hover:bg-kenya-red text-white">
              Popular
            </Badge>
          )}
        </div>
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm">{description}</p>
        {category && category !== 'Popular' && (
          <Badge variant="outline" className="mt-3">
            {category}
          </Badge>
        )}
      </CardContent>
      <CardFooter className="flex justify-between items-center border-t pt-4">
        <Button variant="outline" size="sm" className="text-xs" asChild>
          <Link to={`/resources/${id}`}>
            View details
          </Link>
        </Button>
        {downloadable && status === 'approved' && (
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Download className="h-4 w-4" />
            <span className="sr-only">Download {title}</span>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ResourceCard;
