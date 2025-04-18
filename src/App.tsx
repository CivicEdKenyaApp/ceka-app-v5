
import React, { useState, useEffect, createContext, useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { createClient } from '@supabase/supabase-js';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import LoadingScreen from '@/components/ui/LoadingScreen';
import Index from './pages/Index';
import AuthPage from './pages/AuthPage';
import LegislativeTracker from './pages/LegislativeTracker';
import LegislativeTrackerDetail from './pages/LegislativeTrackerDetail';
import ResourceHub from './pages/ResourceHub';
import ResourceDetail from './pages/ResourceDetail';
import ResourceUpload from './pages/ResourceUpload';
import PendingResources from './pages/PendingResources';
import CommunityPortal from './pages/CommunityPortal';
import JoinCommunity from './pages/JoinCommunity';
import Volunteer from './pages/Volunteer';
import VolunteerApplication from './pages/VolunteerApplication';
import AdvocacyToolkit from './pages/AdvocacyToolkit';
import AdvocacyToolkitDetail from './pages/AdvocacyToolkitDetail';
import ConstitutionPage from './pages/ConstitutionPage';
import Notifications from './pages/Notifications';
import UserProfile from './pages/UserProfile';
import FeedbackPage from './pages/FeedbackPage';
import NotFound from './pages/NotFound';
import PullToRefresh from '@/components/ui/PullToRefresh';

// Add these imports for settings pages:
import SettingsLayout from "./pages/settings/SettingsLayout";
import AccountSettings from "./pages/settings/AccountSettings";
import NotificationSettings from "./pages/settings/NotificationSettings";
import PrivacySettings from "./pages/settings/PrivacySettings";

const queryClient = new QueryClient();

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const AuthContext = createContext<any>(null);

const useAuth = () => useContext(AuthContext);

const App = () => {
  const [session, setSession] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setIsLoading(false);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  const signOut = async () => {
    await supabase.auth.signOut();
  };
  
  return (
    <QueryClientProvider client={queryClient}>
      <div className="dark:text-white">
        {isLoading ? (
          <LoadingScreen />
        ) : (
          <AuthContext.Provider value={{ session, signOut }}>
            <Toaster />
            <PullToRefresh>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/auth" element={<AuthPage />} />
                <Route path="/legislative-tracker" element={<LegislativeTracker />} />
                <Route path="/legislative-tracker/:id" element={<LegislativeTrackerDetail />} />
                <Route path="/resources" element={<ResourceHub />} />
                <Route path="/resources/:id" element={<ResourceDetail />} />
                <Route path="/resources/upload" element={<ResourceUpload />} />
                <Route path="/resources/pending" element={<PendingResources />} />
                <Route path="/community" element={<CommunityPortal />} />
                <Route path="/community/join" element={<JoinCommunity />} />
                <Route path="/volunteer" element={<Volunteer />} />
                <Route path="/volunteer/apply" element={<VolunteerApplication />} />
                <Route path="/advocacy-toolkit" element={<AdvocacyToolkit />} />
                <Route path="/advocacy-toolkit/:id" element={<AdvocacyToolkitDetail />} />
                <Route path="/constitution" element={<ConstitutionPage />} />
                <Route path="/notifications" element={<Notifications />} />
                <Route path="/profile" element={<UserProfile />} />
                <Route path="/feedback" element={<FeedbackPage />} />
                
                {/* New settings routes */}
                <Route path="/settings" element={<Navigate to="/settings/account" replace />} />
                <Route path="/settings" element={<SettingsLayout />}>
                  <Route path="account" element={<AccountSettings />} />
                  <Route path="notifications" element={<NotificationSettings />} />
                  <Route path="privacy" element={<PrivacySettings />} />
                </Route>
                
                <Route path="*" element={<NotFound />} />
              </Routes>
            </PullToRefresh>
          </AuthContext.Provider>
        )}
      </div>
    </QueryClientProvider>
  );
};

export default App;
export { useAuth };
