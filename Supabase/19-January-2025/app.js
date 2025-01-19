// async function checkSession() {
//   try {
//     const { data, error } = await supabase.auth.getSession();

//     const authPages = ["/index.html", "/login.html", "/"];
//     const currentPath = window.location.pathname;
//     const isAuthPage = authPages.some((page) => page.includes(currentPath));

//     const { session } = data;

//     // // it will first check the session , if it's true then it will check Auth Page
//     if(session) {
//       if(isAuthPage) {
//         window.location.href = '/dashboard.html'
//     }
//     } else {
//         if(!isAuthPage) {
//             window.location.href = '/login.html'
//         }
//     }

//     // console.log(session);
//   } catch (error) {
//     console.log(error);
//   }
// }

// window.onload = checkSession;

async function USERDETAILS() {
  console.log("getUserr ...");
  try {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (user) {
      console.log(user);

      try {
        const { data, error } = await supabase
          .from("users")
          .select("name, email , id")
          .eq("userId", user.id);
        if (data) {
          console.log(data);

          let currentUser = {
            name: data[0].name ,
            userId: user.id ,
            id: data[0].id ,
            email: data[0].email
          }
          localStorage.setItem('currentUser' , JSON.stringify(currentUser))
        }
      } catch (error) {
        console.log(error);
      }
    }
  } catch (error) {
    console.log(error);
  }
}

window.onload = USERDETAILS;
