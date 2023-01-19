
const loginToBlog = async (event) => {
   try { event.preventDefault();

    // retrieve username & pw from form
    const username = document.querySelector('#usernamelogin').value
    const password = document.querySelector('#passwordlogin').value
    
    if (username && password) {
        const response = await fetch('/api/users/login',
        {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json'}
            });
            
        if (response.ok) {
            document.location.replace('/');
        } 
        
    }
    } catch(err) {
        console.log('hello')
    }
    }


    document.querySelector('#loginbtn').addEventListener('click', loginToBlog)