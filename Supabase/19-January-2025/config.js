const {createClient} = supabase

const supabaseUrl = ''
const supabaseKey = ''
const supabaseClient = createClient(supabaseUrl, supabaseKey)


window.supabase = supabaseClient 