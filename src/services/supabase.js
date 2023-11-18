import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://lppzqezyjrlmpwdzmevz.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxwcHpxZXp5anJsbXB3ZHptZXZ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTYzNzQ2MDIsImV4cCI6MjAxMTk1MDYwMn0.Cl3kq-OMaPlPM5WaxvjsoSlEnSV6s8sO9QIG0JOj72Y';
const supabase = createClient(supabaseUrl, supabaseKey);

export { supabaseUrl };
export default supabase;
