let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let company = document.getElementById("company");
let address = document.getElementById("address");
let email = document.getElementById("email");

let addUserBtn = document.getElementById("add-user-btn");

let userTableBody = document.getElementById("user_table_body");

async function addUser() {
  try {
    const { error } = await supabase
      .from("users") // table name
      .insert({
        first_name: firstName.value,
        last_name: lastName.value,
        company: company.value,
        address: address.value,
        email: email.value,
      });

    if (error) throw error;
    firstName.value = "";
    lastName.value = "";
    company.value = "";
    address.value = "";
    email.value = "";

    Swal.fire({
      title: "User Added",
      text: "User Sucesfully Added in the System",
      icon: "success",
    });

    userTableBody.innerHTML = "";

    getUsers();
  } catch (error) {
    console.log(error);
  }
}

async function getUsers() {
  try {
    const { data, error } = await supabase.from("users").select();
    if (error) throw error;

    userTableBody.innerHTML = ''

    if (data) {
      data.map((val, index) => {
        return (userTableBody.innerHTML += `
     <tr>
                        <td scope="col">${val.first_name}</td>
                        <td scope="col">${val.last_name}</td>
                        <td scope="col">${val.company}</td>
                        <td scope="col">${val.email}</td>
                        <td scope="col">${val.address}</td>
                        <td> <span> <i id="delete_user" onclick="deleteUser(${val.id})" class="fa-solid fa-trash"></i> </span> </td>
                      </tr>
    `);
      });
    }
  } catch (error) {
    console.log(error);
  }
}

async function deleteUser(userId) {
  try {
    Swal.fire({
      title: "Are you sure want to delete the user",
      showCancelButton: true,
      confirmButtonText: "Delete",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const { data, error } = await supabase
          .from("users")
          .delete()
          .eq("id", userId)
          .select();

        if (error) throw error;
      

        if(data) {
          Swal.fire({
            icon: 'success' ,
            title: 'User Deleted Succesfully '
          })

          getUsers()
        }

       

      }
    });
  } catch (error) {
    console.log(error);
  }
}

let deleteBtn = document.getElementById("delete_user");

if (deleteBtn) {
  deleteBtn.addEventListener("click", function () {
    let deleteUserId = localStorage.getItem("deleteUserId");
    console.log(deleteUserId);
  });
}


if(addUserBtn) {
  addUserBtn.addEventListener("click", addUser);
}

window.onload = getUsers();
window.deleteUser = deleteUser;
