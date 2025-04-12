import React, { useState, useEffect, useRef } from 'react';
import { useAuth } from '@/App';
import AuthModal from './AuthModal';
import { motion, AnimatePresence } from 'framer-motion';
import { Bell } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { useLanguage } from '@/contexts/LanguageContext';
import { translate } from '@/lib/utils';

interface ScrollListenerProps {
  children: React.ReactNode;
}

const ScrollListener = ({ children }: ScrollListenerProps) => {
  const [showAuth, setShowAuth] = useState(false);
  const [isBlurred, setIsBlurred] = useState(false);
  const [showReminder, setShowReminder] = useState(false);
  const { session, loading } = useAuth();
  const hasTriggered = useRef(false);
  const { language } = useLanguage();
  
  // Check session storage on component mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const dismissed = sessionStorage.getItem('authModalDismissed');
      
      // If modal was previously dismissed but user not logged in, show reminder
      if (dismissed === 'true' && !session) {
        setShowReminder(true);
      }
      
      // If user previously triggered modal this session, restore the state
      const wasTriggered = sessionStorage.getItem('authModalTriggered');
      if (wasTriggered === 'true') {
        hasTriggered.current = true;
      }
    }
  }, [session]);
  
  useEffect(() => {
    if (loading) return;
    
    if (!session) {
      const handleScroll = () => {
        // Check if already triggered this session
        if (window.scrollY > 150 && !hasTriggered.current) {
          hasTriggered.current = true;
          sessionStorage.setItem('authModalTriggered', 'true');
          
          // Only show modal if not previously dismissed
          const dismissed = sessionStorage.getItem('authModalDismissed');
          if (dismissed !== 'true') {
            setIsBlurred(true);
            setTimeout(() => setShowAuth(true), 300);
          } else {
            // If previously dismissed, just show reminder
            setShowReminder(true);
          }
        }
      };
      
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    } else {
      // Reset states if user logs in
      setIsBlurred(false);
      setShowReminder(false);
      hasTriggered.current = false;
      
      // Clear session storage when logged in
      if (typeof window !== 'undefined') {
        sessionStorage.removeItem('authModalTriggered');
        sessionStorage.removeItem('authModalDismissed');
      }
    }
  }, [session, loading]);
  
  const handleAuthModalClose = (open: boolean) => {
    setShowAuth(open);
    
    if (!open && !session) {
      // When modal is closed without logging in
      setTimeout(() => setIsBlurred(false), 300);
      
      // Mark as dismissed in session storage
      sessionStorage.setItem('authModalDismissed', 'true');
      
      // Show reminder notification
      setShowReminder(true);
    }
  };

  const handleReminderClick = () => {
    setIsBlurred(true);
    setTimeout(() => setShowAuth(true), 300);
    setShowReminder(false);
  };

  const blurStyles = isBlurred && !session 
    ? 'blur-sm after:absolute after:inset-0 after:bg-gradient-to-tr after:from-[#006600]/20 after:via-[#141414]/15 after:to-[#BB1600]/20 after:z-[-1]' 
    : '';
  
  return (
    <>
      <motion.div
        className={`relative transition-all duration-300 ${blurStyles}`}
        animate={{ 
          filter: isBlurred && !session ? 'blur(8px)' : 'blur(0px)' 
        }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
      
      {/* Auth Reminder Notification */}
      <AnimatePresence>
        {showReminder && !session && !showAuth && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            className="fixed top-20 right-4 z-50"
          >
            <TooltipProvider delayDuration={0}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button 
                    onClick={handleReminderClick}
                    className="flex items-center justify-center p-3 bg-kenya-green rounded-full shadow-lg animate-pulse hover:animate-none"
                    aria-label={translate("Sign in reminder", language)}
                  >
                    <Bell className="text-white" />
                  </button>
                </TooltipTrigger>
                <TooltipContent side="left" className="bg-white p-3 shadow-md text-sm">
                  <p>{translate("Sign-in Reminder", language)}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </motion.div>
        )}
      </AnimatePresence>

      <AuthModal 
        open={showAuth} 
        onOpenChange={handleAuthModalClose} 
      />
    </>
  );
};

export default ScrollListener;
