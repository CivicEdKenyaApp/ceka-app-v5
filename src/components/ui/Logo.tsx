
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface LogoProps {
  variant?: 'full' | 'icon-only' | 'text-only';
  className?: string;
}

const Logo = ({ variant = 'full', className }: LogoProps) => {
  return (
    <Link to="/" className={cn("flex items-center gap-2", className)}>
      {(variant === 'full' || variant === 'icon-only') && (
        <img 
          src="/lovable-uploads/60eebae9-7ca2-4cb0-823d-bcecccb0027f.png" 
          alt="CEKA Logo" 
          className="h-8 w-8"
        />
      )}
      
      {(variant === 'full' || variant === 'text-only') && (
        <div className="flex flex-col">
          <span className="font-bold text-kenya-green">CEKA</span>
          {variant === 'full' && (
            <span className="hidden sm:block text-xs font-normal text-muted-foreground">
              Civic Education Kenya App
            </span>
          )}
        </div>
      )}
    </Link>
  );
};

export default Logo;
