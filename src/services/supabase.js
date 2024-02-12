import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://dzbtovlpqauiybttpfod.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR6YnRvdmxwcWF1aXlidHRwZm9kIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDExOTA2NTcsImV4cCI6MjAxNjc2NjY1N30.RgzCty4bjDhM9iTZi-LFBMUTsDIaBgOKy0bLW-C-M7g";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
