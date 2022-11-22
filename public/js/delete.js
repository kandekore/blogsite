const deleteHandler = async (event) => {
  event.preventDefault();

  const post_id = document.querySelector("#pstid").value.trim();
  // const user_id = async (req, res) => {
  //   await User.findByPk(req.session.user_id, {
  //     attributes: { exclude: ["password"] },
  //   });

  if (post_id) {
    fetch(`/api/posts/${post_id}`, {
      method: "DELETE",
      body: JSON.stringify({ post_id }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((deletedPost) => {
        res.json(deletedPost);
      })
      .catch((err) => res.json(err));
  }
};
document.querySelector(".deletebtn").addEventListener("submit", deleteHandler);
