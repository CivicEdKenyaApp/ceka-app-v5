
import React from 'react';
import { FileText, Calendar, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

// Mock data for bills
const featuredBills = [
  {
    id: 1,
    title: "Education Amendment Bill",
    summary: "Enhances access to quality education for all Kenyan citizens through policy reforms and funding provisions.",
    status: "First Reading",
    category: "Education",
    date: "2025-03-15"
  },
  {
    id: 2,
    title: "Healthcare Access Act",
    summary: "Aims to provide universal healthcare coverage to all Kenyans through expanded health insurance schemes.",
    status: "Public Feedback",
    category: "Health",
    date: "2025-03-20"
  },
  {
    id: 3,
    title: "Digital Rights and Freedom Bill",
    summary: "Establishes fundamental rights and protections for Kenyan citizens in the digital environment.",
    status: "Committee Review",
    category: "Technology",
    date: "2025-03-10"
  }
];

const FeaturedLegislation = () => {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Featured Legislation</h2>
            <p className="text-muted-foreground">Stay informed about important bills moving through the legislative process</p>
          </div>
          <Button asChild variant="ghost" className="mt-4 md:mt-0">
            <Link to="/legislative-tracker" className="flex items-center">
              View all bills
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredBills.map((bill) => (
            <Card key={bill.id} className="h-full flex flex-col">
              <CardHeader className="pb-3 pt-5">
                <div className="flex justify-between items-start">
                  <Badge variant="outline" className="bg-muted font-normal">
                    {bill.category}
                  </Badge>
                  <Badge 
                    variant={bill.status === "Public Feedback" ? "secondary" : "outline"}
                    className={bill.status === "Public Feedback" ? "text-white" : ""}
                  >
                    {bill.status}
                  </Badge>
                </div>
                <CardTitle className="text-lg mt-3">
                  <Link to={`/legislative-tracker/${bill.id}`} className="hover:text-kenya-green transition-colors">
                    {bill.title}
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground text-sm">
                  {bill.summary}
                </p>
              </CardContent>
              <CardFooter className="flex justify-between pt-0 text-xs text-muted-foreground border-t">
                <div className="flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5" />
                  <span>Last updated: {new Date(bill.date).toLocaleDateString()}</span>
                </div>
                <Button variant="ghost" size="sm" asChild>
                  <Link to={`/legislative-tracker/${bill.id}`}>
                    <span className="sr-only">Learn more about {bill.title}</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedLegislation;
