import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://tnzumxscialsshfopuza.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRuenVteHNjaWFsc3NoZm9wdXphIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI3OTM0ODksImV4cCI6MjAzODM2OTQ4OX0.U3V9JBBwzrM9K8CNGm8_l1v7loq8GQkj93GVizwNs9Y'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)