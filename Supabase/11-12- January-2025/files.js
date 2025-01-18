let uploadBtn = document.getElementById("upload-img-btn");

let fileUpload = document.getElementById("fileUpload");

async function uploadFile() {
  try {
    const uploadedFile = fileUpload.files[0];

    console.log(uploadedFile);

    const { data, error } = await supabase.storage
      .from("usersProfiles") // bucket name
      .upload(`public/${uploadedFile.name}`, uploadedFile, {
        cacheControl: "3600",
        upsert: false,
      });

    if (error) throw error;

    if (data) {
      Swal.fire({
        icon: "success",
        title: "Image Uploaded Succesfully ..",
      });
    }
  } catch (error) {
    console.log(error);
  }
}



async function getAllFiles() {
    try {
        const { data, error } = await supabase
  .storage
  .from('usersProfiles')
  .list('public', {
    limit: 100,
    offset: 0,
    sortBy: { column: 'name', order: 'asc' },
  })

  if(error) throw error

  if(data) {


    console.log(data)


        try {
            const { data: filesList  , error} = supabase
  .storage
  .from('usersProfiles')
  .getPublicUrl(`public/${data[0].name}`)

            if(error) throw error

  if(filesList) {
    console.log(filesList)
  }

        } catch (error) {
                console.log(error)
        }
  }

    } catch (error) {
            console.log(error)
    }
}


window.onload = getAllFiles()
uploadBtn.addEventListener("click", uploadFile);
