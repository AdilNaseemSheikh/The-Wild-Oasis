import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://ufarhfwnvrkiaxjhjrnl.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVmYXJoZndudnJraWF4amhqcm5sIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY3NDU3ODAsImV4cCI6MjAxMjMyMTc4MH0.rcL1Two00xIBM4SkYVBJIxxerK0m0yGOYqIeVZ87S4g";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
