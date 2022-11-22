const newCommentHandler = async (event) => {
  event.preventDefault();
  console.log("test");
  // const user = document.querySelector("#userid").value.trim();
  const post_id = document.querySelector("#pstid").value.trim();
  const comment = document.querySelector("#comment").value.trim();
  const user_id = async (req, res) => {
    await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
    });
  };
  console.log(user_id);

  if (post_id && comment && user_id) {
    const responseCom = await fetch(`/api/comments`, {
      method: "POST",
      body: JSON.stringify({ post_id, comment, user_id }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    // console.log(responseCom);
    // console.log(req.session.logged_in);
    if (responseCom.ok) {
      // window.location.href = "/";
      // window.location.reload();
    } else {
      alert("Failed to create comment");
    }
  }
};

document
  .getElementById("leavecomment")
  .addEventListener("submit", newCommentHandler);
