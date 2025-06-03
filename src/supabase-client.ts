// EyFEQVRxWsC2goq3  password

//1
import { createClient } from "@supabase/supabase-js";

//2
const supabaseURL = "https://vhurkibfsolxozcoogly.supabase.co";
// const supabaseAnonKey =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZodXJraWJmc29seG96Y29vZ2x5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg5MDQwNTUsImV4cCI6MjA2NDQ4MDA1NX0.slWhA0-KkKt4USik7IY7KvS3LyCHmWZICCfc1TDyGC0";

const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

//3
export const supabase = createClient(supabaseURL, supabaseAnonKey);

// console.log("supabaseURL" , supabaseAnonKey);
