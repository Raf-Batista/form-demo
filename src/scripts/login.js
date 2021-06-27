
// let URL = 'http://bakery.galvanizelabs.net/api/auth'
let URL = 'http://localhost:9100/api/auth'

const login = async (data) => {
  try {
    const response = await fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(data)
  });

  const authHeader = response.headers.get('Authorization');

  if (response.ok && authHeader && authHeader.includes('Bearer'))  {
    const token = authHeader.split(' ')[1];
   
    return token;
  }
  
   return "Something went wrong!";
  } catch (error) {
    console.log(error);
  }
    
   
}

export default login;