async function checkSession() {
  try {
    const { data, error } = await supabase.auth.getSession();

    const authPages = ["/index.html", "/login.html", "/"];
    const currentPath = window.location.pathname;
    const isAuthPage = authPages.some((page) => page.includes(currentPath));

    const { session } = data;   

    // it will first check the session , if it's true then it will check Auth Page
    if(session) {
        if(isAuthPage) {
            window.location.href = '/dashboard.html'
        }
    } else {
        if(!isAuthPage) {
            window.location.href = '/login.html'
        }
    }

    console.log(session);
  } catch (error) {
    console.log(error);
  }
}

window.onload = checkSession;
