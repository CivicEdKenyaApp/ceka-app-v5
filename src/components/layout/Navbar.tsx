
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Search, Bell, User, Upload } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { useIsMobile } from '@/hooks/use-mobile';
import { useAuth } from '@/App';
import Logo from '@/components/ui/Logo';

const Navbar = () => {
  const isMobile = useIsMobile();
  const location = useLocation();
  const { session } = useAuth();
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Legislative Tracker', path: '/legislative-tracker' },
    { name: 'Resource Hub', path: '/resources' },
    { name: 'Community', path: '/community' },
    { name: 'Volunteer', path: '/volunteer' },
  ];

  const isResourcesSection = location.pathname.includes('/resources');

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Logo variant={isMobile ? 'icon-only' : 'full'} />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              className={`transition-colors hover:text-foreground/80 ${
                location.pathname === link.path || 
                (link.path === '/resources' && isResourcesSection) 
                  ? 'text-foreground font-medium' 
                  : 'text-foreground/60'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {!isMobile && (
            <div className="relative w-40 lg:w-64">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search..." className="pl-8" />
            </div>
          )}
          
          {isResourcesSection && !isMobile && (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" asChild>
                    <Link to="/resources/upload">
                      <Upload className="h-5 w-5" />
                    </Link>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  Upload Resource
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
          
          <Button variant="ghost" size="icon" asChild>
            <Link to="/notifications">
              <Bell className="h-5 w-5" />
            </Link>
          </Button>

          <Link to={session ? "/profile" : "/auth"}>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
          </Link>

          {/* Mobile Navigation */}
          {isMobile && (
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <div className="flex flex-col gap-4 pt-10">
                  <Logo variant="full" className="mb-6" />
                  
                  <div className="relative w-full mb-6">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search..." className="pl-8" />
                  </div>

                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={`py-2 hover:text-foreground transition-colors ${
                        location.pathname === link.path || 
                        (link.path === '/resources' && isResourcesSection) 
                          ? 'text-foreground font-medium' 
                          : 'text-foreground/60'
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                  
                  {isResourcesSection && (
                    <>
                      <div className="border-t my-2"></div>
                      <h3 className="font-medium text-sm text-muted-foreground mb-2">Resources</h3>
                      <Link to="/resources/upload" className="py-2 pl-2 text-foreground/60 hover:text-foreground transition-colors flex items-center">
                        <Upload className="h-4 w-4 mr-2" />
                        Upload Resource
                      </Link>
                      <Link to="/notifications" className="py-2 pl-2 text-foreground/60 hover:text-foreground transition-colors flex items-center">
                        <Bell className="h-4 w-4 mr-2" />
                        Notifications
                      </Link>
                    </>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
