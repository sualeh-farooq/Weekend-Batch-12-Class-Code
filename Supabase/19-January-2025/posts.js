let postContent = document.getElementById("postContent");
let postFile = document.getElementById("postFile");
let postButton = document.getElementById("postBtn");
let postsContainer = document.getElementById("posts-container");

async function AddPost() {
  let currentUser = JSON.parse(localStorage.getItem("currentUser"));
  console.log(currentUser);
  try {
    // adding post content in DB
    const { data, error } = await supabase
      .from("posts")
      .insert({ content: postContent.value, userId: currentUser.userId })
      .select();

    if (error) throw error;

    if (data) {
      console.log(data);
      // checking if any image Upload for that post , so saving image in Storage
      if (postFile.files.length > 0) {
        let currentFile = postFile.files[0];
        try {
          const { data: imageStoreData, error: imageStoreError } =
            await supabase.storage
              .from("postimages") // bucket name
              .upload(
                `${data[0].id}`, // file name , post id
                currentFile,
                {
                  cacheControl: "3600",
                  upsert: false,
                }
              );

          if (imageStoreError) throw imageStoreError;

          if (imageStoreData) {
            // check and return if image properly stored in storage
            console.log(imageStoreData);
            // console.log(imageStoreData.path)

            try {
              const { data: publicUrlData } = await supabase.storage
                .from("postimages")
                .getPublicUrl(imageStoreData.path); // current received path of file from supabase

              if (publicUrlData) {
                console.log(publicUrlData.publicUrl);

                try {
                  // update imageURL in the current POST
                  const { data: postUpdateData, error: postUpdateError } =
                    await supabase
                      .from("posts")
                      .update({ imageURL: publicUrlData.publicUrl })
                      .eq("id", data[0].id)
                      .select();

                  if (postUpdateError) throw postUpdateError;

                  if (postUpdateData) {
                  }
                } catch (error) {
                  console.log(error);
                } finally {
                  postsContainer.innerHTML = "";
                  loadPosts();
                }
              }
            } catch (error) {
              console.log(error);
            }
          }
        } catch (error) {
          console.log(error);
        }
      }
    }
  } catch (error) {
    console.log(error);
  }
}

async function loadPosts() {
  try {
    const { data: postData, error: postError } = await supabase
      .from("posts")
      .select("");

    if (postError) throw postError;

    if (postData) {
      try {
        const { data: usersData, error: usersError } = await supabase
          .from("users")
          .select("");
        if (usersError) throw usersError;

        if (usersData) {
          let usersMap = {};

          usersData.forEach((user) => {
            usersMap[user.userId] = user;
          });


          var myId = JSON.parse(localStorage.getItem("currentUser"));

          let myPost = false;

          postData.forEach((post) => {
            let currentUser = usersMap[post.userId];

            if (currentUser.userId === myId.userId) {
              myPost = true;
            }

            postsContainer.innerHTML += `

               <div class="card w-100 my-2">

                        <div class="card-header d-flex gap-2 align-items-start">
                            <div>
                                <img class="mt-1" src="user.png" width="30" height="30" alt="">
                            </div>
                            <div class="d-flex flex-column ">
                                <h5 class="card-title p-0 m-0">${
                                  currentUser.name
                                }</h5>
                                <small> ${new Date(
                                  post.created_at
                                ).toLocaleString()}  </small>
                            </div>


                            ${
                              myPost
                                ? `<button onclick="deleteMyPost(${post.id})" >Delete </button> `
                                : ""
                            }
                        </div>
                        <div class="card-body">

                            <p class="card-text"> ${post.content}
                            </p>
                            <img style="width: 100%; "
                                src="${post.imageURL}"
                                alt="">
                        </div>
                    </div>
              `;
          });

          // console.log(usersMap);
        }
      } catch (error) {
        console.log(error);
      }
    }
  } catch (error) {
    console.log(error);
  }
}

async function deleteMyPost(postId) {
  try {
    const { data, error } = await supabase
      .from("posts")
      .delete()
      .eq("id", postId)
      .select();

    if (error) throw error;

    if (data) {
      postsContainer.innerHTML = "";
      loadPosts();
    }
  } catch (error) {
    console.log(error);
  }
}

window.deleteMyPost = deleteMyPost;

window.onload = loadPosts();

postButton.addEventListener("click", AddPost);
