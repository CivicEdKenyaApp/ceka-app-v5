
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Bell, Users, FileText, Calendar, HandHelping, Check, X, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Mock notification data
const notificationData = [
  {
    id: 1,
    type: 'legislative',
    title: 'Public Feedback Now Open',
    content: 'The Healthcare Access Act is now accepting public feedback. Would you like to contribute your opinion?',
    date: '2 hours ago',
    isRead: false,
    link: '/legislative-tracker/2',
    action: 'View Bill'
  },
  {
    id: 2,
    type: 'volunteer',
    title: 'New Volunteer Opportunity',
    content: 'A new opportunity "Civic Education Workshop Facilitator" has been posted in your area.',
    date: '1 day ago',
    isRead: false,
    link: '/volunteer/1',
    action: 'View Opportunity'
  },
  {
    id: 3,
    type: 'community',
    title: 'Comment on Your Post',
    content: 'User @CivicChampion commented on your discussion "Electoral Reform Proposals".',
    date: '2 days ago',
    isRead: true,
    link: '/community/discussions/5',
    action: 'View Comment'
  },
  {
    id: 4,
    type: 'resource',
    title: 'Resource Approved',
    content: 'Your uploaded document "Guide to County Budgeting Process" has been approved.',
    date: '3 days ago',
    isRead: true,
    link: '/resources/12',
    action: 'View Resource'
  },
  {
    id: 5,
    type: 'community',
    title: 'New Campaign Started',
    content: 'A new campaign "Digital Rights for Youth" has been started that matches your interests.',
    date: '4 days ago',
    isRead: true,
    link: '/community/campaigns/3',
    action: 'View Campaign'
  },
  {
    id: 6,
    type: 'legislative',
    title: 'Bill Passed to Next Stage',
    content: 'The Environmental Protection Amendment has moved to Second Reading stage.',
    date: '5 days ago',
    isRead: true,
    link: '/legislative-tracker/4',
    action: 'View Bill'
  }
];

const NotificationIcon = ({ type }: { type: string }) => {
  switch (type) {
    case 'legislative':
      return <FileText className="h-8 w-8 p-1.5 bg-blue-100 text-blue-600 rounded-full" />;
    case 'volunteer':
      return <HandHelping className="h-8 w-8 p-1.5 bg-kenya-green/20 text-kenya-green rounded-full" />;
    case 'community':
      return <Users className="h-8 w-8 p-1.5 bg-purple-100 text-purple-600 rounded-full" />;
    case 'resource':
      return <Bell className="h-8 w-8 p-1.5 bg-amber-100 text-amber-600 rounded-full" />;
    default:
      return <Bell className="h-8 w-8 p-1.5 bg-gray-100 text-gray-600 rounded-full" />;
  }
};

const Notifications = () => {
  const [notifications, setNotifications] = useState(notificationData);
  
  const markAsRead = (id: number) => {
    setNotifications(notifications.map(notification => 
      notification.id === id ? { ...notification, isRead: true } : notification
    ));
  };
  
  const markAllAsRead = () => {
    setNotifications(notifications.map(notification => ({ ...notification, isRead: true })));
  };
  
  const unreadCount = notifications.filter(notification => !notification.isRead).length;

  return (
    <Layout>
      <div className="container py-8 md:py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Notifications</h1>
            <p className="text-muted-foreground">Stay updated on civic activities and engagements</p>
          </div>
          
          <div className="mt-4 md:mt-0">
            <Button variant="outline" onClick={markAllAsRead} disabled={unreadCount === 0}>
              <Check className="mr-2 h-4 w-4" />
              Mark all as read
            </Button>
          </div>
        </div>
        
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="all">
              All
              {unreadCount > 0 && (
                <Badge className="ml-2 bg-kenya-green" variant="default">
                  {unreadCount}
                </Badge>
              )}
            </TabsTrigger>
            <TabsTrigger value="legislative">Legislative</TabsTrigger>
            <TabsTrigger value="community">Community</TabsTrigger>
            <TabsTrigger value="resource">Resources</TabsTrigger>
            <TabsTrigger value="volunteer">Volunteer</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="mt-0 space-y-4">
            {notifications.map((notification) => (
              <Card key={notification.id} className={`overflow-hidden transition-colors ${!notification.isRead ? 'bg-muted/40' : ''}`}>
                <CardContent className="p-0">
                  <div className="flex items-start p-4 gap-4">
                    <NotificationIcon type={notification.type} />
                    
                    <div className="flex-grow">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-medium">{notification.title}</h3>
                          <p className="text-muted-foreground text-sm mt-1">{notification.content}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          {!notification.isRead && (
                            <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">New</Badge>
                          )}
                          <Button 
                            variant="ghost" 
                            size="icon"
                            className="h-8 w-8 rounded-full"
                            onClick={() => markAsRead(notification.id)}
                          >
                            <X className="h-4 w-4" />
                            <span className="sr-only">Dismiss</span>
                          </Button>
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-xs text-muted-foreground">{notification.date}</span>
                        <Button variant="ghost" size="sm" asChild className="gap-1">
                          <Link to={notification.link}>
                            {notification.action}
                            <ChevronRight className="h-3 w-3" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
          
          <TabsContent value="legislative" className="mt-0 space-y-4">
            {notifications
              .filter(notification => notification.type === 'legislative')
              .map((notification) => (
                <Card key={notification.id} className={`overflow-hidden transition-colors ${!notification.isRead ? 'bg-muted/40' : ''}`}>
                  <CardContent className="p-0">
                    <div className="flex items-start p-4 gap-4">
                      <NotificationIcon type={notification.type} />
                      
                      <div className="flex-grow">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-medium">{notification.title}</h3>
                            <p className="text-muted-foreground text-sm mt-1">{notification.content}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            {!notification.isRead && (
                              <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">New</Badge>
                            )}
                            <Button 
                              variant="ghost" 
                              size="icon"
                              className="h-8 w-8 rounded-full"
                              onClick={() => markAsRead(notification.id)}
                            >
                              <X className="h-4 w-4" />
                              <span className="sr-only">Dismiss</span>
                            </Button>
                          </div>
                        </div>
                        
                        <div className="flex justify-between items-center mt-2">
                          <span className="text-xs text-muted-foreground">{notification.date}</span>
                          <Button variant="ghost" size="sm" asChild className="gap-1">
                            <Link to={notification.link}>
                              {notification.action}
                              <ChevronRight className="h-3 w-3" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </TabsContent>
          
          <TabsContent value="community" className="mt-0 space-y-4">
            {notifications
              .filter(notification => notification.type === 'community')
              .map((notification) => (
                <Card key={notification.id} className={`overflow-hidden transition-colors ${!notification.isRead ? 'bg-muted/40' : ''}`}>
                  <CardContent className="p-0">
                    <div className="flex items-start p-4 gap-4">
                      <NotificationIcon type={notification.type} />
                      
                      <div className="flex-grow">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-medium">{notification.title}</h3>
                            <p className="text-muted-foreground text-sm mt-1">{notification.content}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            {!notification.isRead && (
                              <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">New</Badge>
                            )}
                            <Button 
                              variant="ghost" 
                              size="icon"
                              className="h-8 w-8 rounded-full"
                              onClick={() => markAsRead(notification.id)}
                            >
                              <X className="h-4 w-4" />
                              <span className="sr-only">Dismiss</span>
                            </Button>
                          </div>
                        </div>
                        
                        <div className="flex justify-between items-center mt-2">
                          <span className="text-xs text-muted-foreground">{notification.date}</span>
                          <Button variant="ghost" size="sm" asChild className="gap-1">
                            <Link to={notification.link}>
                              {notification.action}
                              <ChevronRight className="h-3 w-3" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </TabsContent>
          
          <TabsContent value="resource" className="mt-0 space-y-4">
            {notifications
              .filter(notification => notification.type === 'resource')
              .map((notification) => (
                <Card key={notification.id} className={`overflow-hidden transition-colors ${!notification.isRead ? 'bg-muted/40' : ''}`}>
                  <CardContent className="p-0">
                    <div className="flex items-start p-4 gap-4">
                      <NotificationIcon type={notification.type} />
                      
                      <div className="flex-grow">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-medium">{notification.title}</h3>
                            <p className="text-muted-foreground text-sm mt-1">{notification.content}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            {!notification.isRead && (
                              <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">New</Badge>
                            )}
                            <Button 
                              variant="ghost" 
                              size="icon"
                              className="h-8 w-8 rounded-full"
                              onClick={() => markAsRead(notification.id)}
                            >
                              <X className="h-4 w-4" />
                              <span className="sr-only">Dismiss</span>
                            </Button>
                          </div>
                        </div>
                        
                        <div className="flex justify-between items-center mt-2">
                          <span className="text-xs text-muted-foreground">{notification.date}</span>
                          <Button variant="ghost" size="sm" asChild className="gap-1">
                            <Link to={notification.link}>
                              {notification.action}
                              <ChevronRight className="h-3 w-3" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </TabsContent>
          
          <TabsContent value="volunteer" className="mt-0 space-y-4">
            {notifications
              .filter(notification => notification.type === 'volunteer')
              .map((notification) => (
                <Card key={notification.id} className={`overflow-hidden transition-colors ${!notification.isRead ? 'bg-muted/40' : ''}`}>
                  <CardContent className="p-0">
                    <div className="flex items-start p-4 gap-4">
                      <NotificationIcon type={notification.type} />
                      
                      <div className="flex-grow">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-medium">{notification.title}</h3>
                            <p className="text-muted-foreground text-sm mt-1">{notification.content}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            {!notification.isRead && (
                              <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">New</Badge>
                            )}
                            <Button 
                              variant="ghost" 
                              size="icon"
                              className="h-8 w-8 rounded-full"
                              onClick={() => markAsRead(notification.id)}
                            >
                              <X className="h-4 w-4" />
                              <span className="sr-only">Dismiss</span>
                            </Button>
                          </div>
                        </div>
                        
                        <div className="flex justify-between items-center mt-2">
                          <span className="text-xs text-muted-foreground">{notification.date}</span>
                          <Button variant="ghost" size="sm" asChild className="gap-1">
                            <Link to={notification.link}>
                              {notification.action}
                              <ChevronRight className="h-3 w-3" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Notifications;
