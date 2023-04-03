import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ojheruhssynyqxehaipd.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9qaGVydWhzc3lueXF4ZWhhaXBkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA0NjUxMTAsImV4cCI6MTk5NjA0MTExMH0.klzuc_wo_Wt27xBmfQejt2490NzQ30hWDVspx7DBcRs';

export const supabase = createClient(supabaseUrl, supabaseKey)