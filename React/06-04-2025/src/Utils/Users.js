import { createClient } from "@supabase/supabase-js";


const supabaseUrl = import.meta.env.SUPABASE_PROJECT_URL;
const supabaseKey = import.meta.env.SUPABASE_ANON_KEY;


const supabase = createClient( 'https://ozvgaljsleqebwiyuglr.supabase.co' , 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im96dmdhbGpzbGVxZWJ3aXl1Z2xyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM5NDM4NjIsImV4cCI6MjA1OTUxOTg2Mn0.PUxnTo6daw2TqXKD-5XiMTuDmbuBar3aOBr3lelKJJs');

export async function getUsers() {
  try {
    const { data, error } = await supabase.from("users").select();

    if (error) {
      return { success: false, message: error };
    }

    if (data) {
        console.log(data)
      return {
        success: true,
        data: data,
        message: "User list succesfully Fetch",
      };
    }
  } catch (error) {
    console.log(error);
  }
}
