const editPostHandler = async (event) => {
  event.preventDefault();
  console.log("test");

  const user_id = async (req, res) => {
    await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
    });
  };

  console.log(user_id);
  // const user = document.querySelector("#userid").value.trim();
  const title = document.querySelector("#ptinput").value.trim();
  const content = document.querySelector("#pstcnt").value.trim();
  const cat_id = document.querySelector("#cat").value.trim();

  if (title && content && user_id && cat_id) {
    const response = await fetch(`/api/editpost/:id`, {
      method: "PUT",
      body: JSON.stringify({ title, content, cat_id }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log("r1", response);
    console.log("r1", req.session.logged_in);
    if (response.ok) {
      console.log(userData.id);
      console.log(req.session.logged_in);
      //   res.status(200).json(response);
      window.location.href = "/";
    } else {
      alert("Failed to create post");
    }
  }
};

document.querySelector(".editpost").addEventListener("submit", editPostHandler);
