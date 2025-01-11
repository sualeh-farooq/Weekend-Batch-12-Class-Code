const {createClient} = supabase
const supabaseUrl = 'https://zksirzjqzrmwiuwajwjb.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inprc2lyempxenJtd2l1d2Fqd2piIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY1OTk1ODAsImV4cCI6MjA1MjE3NTU4MH0.A_kNhkX7HNw730zHIaqEHEwt9Ma3lrSu1pDVUaSc4gY'
const supabaseClient = createClient(supabaseUrl, supabaseKey)


window.supabase = supabaseClient