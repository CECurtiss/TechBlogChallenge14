const updatePost = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector("#editposttitleform").value.trim();
    const content = document.querySelector("#editpostcontentform").value.trim();
    const postID =

    if (title && content) {
      const response = await fetch("/api/blogs/", {
        method: "PUT",
        body: JSON.stringify({ title, content }),
        headers: { "Content-Type": "application/json" },
      });
  
      if (response.ok) {
        document.location.replace("/dashboard");
      } else {
        alert("Failed to update post");
      }
    }
  };
  
  document.querySelector("#updatepostbtn").addEventListener("click", updatePost);