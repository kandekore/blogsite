// const { response } = require("express");

const newCommentHandler = async (event) => {
  event.preventDefault();
  console.log("test");
  // const user = document.querySelector("#userid").value.trim();
  const post_id = document.querySelector("#pstid").value.trim();
  const comment = document.querySelector("#comment").value.trim();
  const user_id = 1;

  if (post_id && comment && user_id) {
    const responseCom = await fetch(`/api/comments`, {
      method: "POST",
      body: JSON.stringify({ post_id, comment }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log(responseCom);
    console.log(req.session.logged_in);
    if (responseCom.ok) {
      //   res.status(200).json(response);
      // window.location.href = "/";
    } else {
      alert("Failed to create booking");
    }
  }
};

const newPostHandler = async (event) => {
  event.preventDefault();
  console.log("test");
  // const user = document.querySelector("#userid").value.trim();
  const title = document.querySelector("#ptinput").value.trim();
  const content = document.querySelector("#pstcnt").value.trim();

  if (title && content) {
    const response = await fetch(`/api/posts`, {
      method: "POST",
      body: JSON.stringify({ title, content }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log("r1", response);
    console.log("r1", req.session.logged_in);
    if (response.ok) {
      //   res.status(200).json(response);
      window.location.href = "/";
    } else {
      alert("Failed to create booking");
    }
  }
};

document
  .querySelector(".submitpost")
  .addEventListener("submit", newPostHandler);
document
  .getElementById("leavecomment")
  .addEventListener("submit", newCommentHandler);
