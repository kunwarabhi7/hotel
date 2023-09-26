import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://lfykoyesjozmmgmozhbc.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxmeWtveWVzam96bW1nbW96aGJjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTUyMDAwNTQsImV4cCI6MjAxMDc3NjA1NH0.OZLzSacWKPyJoU0e2iV47mhT3a4fStT21pszyubE6E4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
