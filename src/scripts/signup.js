// let URL = 'http://bakery.galvanizelabs.net/api/users/register'
let URL = 'http://localhost:9100/api/users/register'

const signup = async (data) => {
    try {
        const response = await fetch(URL, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
              },
            body: JSON.stringify(data)
        });
    
        if (response.ok) {
    
         //   const data = await response.json();
            URL = 'http://a25868876df6a4d7a8a76c0eed8f6a5d-1397542208.us-west-2.elb.amazonaws.com/auth'
            
                const response = await fetch(URL, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(data)
            });
    
            const data = await response.json();
    
          return data; 
        }
        
        return "Something went wrong!";
    } catch (error) {
        console.log(error);
    }
    
   
}

export default signup;