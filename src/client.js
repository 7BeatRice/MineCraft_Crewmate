import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://zqeqlbxxfweuoxzitdrz.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpxZXFsYnh4ZndldW94eml0ZHJ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI5MDQwMTIsImV4cCI6MjA3ODQ4MDAxMn0.tGJvDU4epkRSMqnm9MnCEjs5nL5Gme0pc0ixKVpgvhk"
export const supabase = createClient(supabaseUrl, supabaseKey)