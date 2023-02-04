const createNewComment = async (event) => {
    event.preventDefault();
    
    const content = document.querySelector("#commentfieldform").value.trim();
    const blogPostId = document.querySelector("input[name='post-id']").value.trim()
    
    if (content) {
        const response = await fetch("/api/comments/", {
            method: "POST",
            body: JSON.stringify({ blogPostId, content }),
            headers: { "Content-Type": "application/json" },
        });
        
        // if (response.ok) {
        //     document.location.replace('/')
        // } else {
        //     alert("Failed to comment");
        // }
    }
    console.log("hello")
    console.log(blogPostId)
    console.log(content)
  };
  
  document.querySelector("#commentpostbtn").addEventListener("click", createNewComment);