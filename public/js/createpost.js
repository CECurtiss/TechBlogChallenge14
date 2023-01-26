const createNewPost = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector("#newposttitleform").value.trim();
    const content = document.querySelector("#newpostcontentform").value.trim();
  
    if (title && content) {
      const response = await fetch("/api/blogs/", {
        method: "POST",
        body: JSON.stringify({ title, content }),
        headers: { "Content-Type": "application/json" },
      });
  
      if (response.ok) {
        document.location.replace("/dashboard");
      } else {
        alert("Failed to create post");
      }
    }
  };
  
  document.querySelector("#createnewpostbtn").addEventListener("click", createNewPost);