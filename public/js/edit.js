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
  const id = document.querySelector("#pstid").value.trim();

  if (title && content && user_id && id) {
    const response = await fetch(`/api/posts/editpost/${id}`, {
      method: "PUT",
      body: JSON.stringify({ title, content }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      //   res.status(200).json(response);
      window.location.href = "/profile";
    } else {
      alert("Failed to create post");
    }
  }
};

document.querySelector(".editpost").addEventListener("submit", editPostHandler);
