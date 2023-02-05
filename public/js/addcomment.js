const createNewComment = async (event) => {
    event.preventDefault();
    
    const content = document.querySelector("#commentfieldform").value.trim();
    const blogPostId = document.querySelector("input[name='post-id'").value.trim()
    console.log(blogPostId)
    console.log(content)
    if (content) {
        const response = await fetch("/api/comments/", {
            method: "POST",
            body: JSON.stringify({ blogPostId, content }),
            headers: { "Content-Type": "application/json" },
        });
        
        if (response.ok) {
            document.location.reload();
        } else {
            alert("Failed to comment");
        }
    }
  };
  
  document.querySelector("#commentpostbtn").addEventListener("click", createNewComment);