const {createClient} = supabase

const supabaseUrl = 'https://cjkbwqeajwdymjezghwr.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNqa2J3cWVhandkeW1qZXpnaHdyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzcyODk1MzMsImV4cCI6MjA1Mjg2NTUzM30.zda9Vj0KD6BjJEQvX3oC7w6qkpwL3vKeXNeQHHSb8hY'
const supabaseClient = createClient(supabaseUrl, supabaseKey)

window.supabase = supabaseClient 