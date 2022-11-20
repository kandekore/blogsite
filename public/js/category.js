const newCategoryHandler = async (event) => {
  event.preventDefault();

  const catname = document.querySelector("#category").value.trim();

  if (catname) {
    const catRes = await fetch(`/api/categories`, {
      method: "POST",
      body: JSON.stringify({ catname }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log(user_id);

    console.log(catRes);

    if (catRes) {
      window.location.href = "/";
      // window.location.reload();
    } else {
      alert("Failed to create category");
    }
  }
};

document
  .getElementById("newcat")
  .addEventListener("submit", newCategoryHandler);
