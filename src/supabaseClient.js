import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://cajrvemigxghnfmyopiy.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNhanJ2ZW1pZ3hnaG5mbXlvcGl5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQyOTU1OTAsImV4cCI6MjA1OTg3MTU5MH0.sgItW4OBC9i-eKnnUDxdMB6qgGdXyiKAD9c6C2u40As'; // Use anon key for client-side
export const supabase = createClient(supabaseUrl, supabaseKey);
