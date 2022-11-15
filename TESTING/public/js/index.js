// const { response } = require("express");

// const newCommentHandler = async (event) => {
//   event.preventDefault();
//   console.log("test");
//   // const user = document.querySelector("#userid").value.trim();
//   const post_id = document.querySelector("#pstid").value.trim();
//   const comment = document.querySelector("#comment").value.trim();
//   const user_id = 1;

//   if (post_id && comment && user_id) {
//     const responseCom = await fetch(`/api/comments`, {
//       method: "POST",
//       body: JSON.stringify({ post_id, comment, user_id }),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });

//     console.log(responseCom);

//     if (responseCom.ok) {
//       //   res.status(200).json(response);
//       window.location.href = "/";

//       console.log(responseCom);
//     } else {
//       alert("Failed to create booking");
//     }
//   }
// };

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

    console.log(response);

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
  .querySelector(".leavecomment")
  .addEventListener("submit", newCommentHandler);
