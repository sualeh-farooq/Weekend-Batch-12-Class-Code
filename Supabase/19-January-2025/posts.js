let postContent = document.getElementById("postContent");
let postFile = document.getElementById("postFile");
let postButton = document.getElementById("postBtn");

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
                    console.log(postUpdateData);
                  }
                } catch (error) {
                  console.log(error);
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

postButton.addEventListener("click", AddPost);
