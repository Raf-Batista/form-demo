
 let URL = 'http://bakery.galvanizelabs.net/api/auth'
//let URL = 'http://localhost:9100/api/auth'

const login = async (data) => {
  try {
    const response = await fetch(URL, {
      method: 'POST',
      headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
      body: JSON.stringify(data)
  });

  if (response.ok) {
      
      const data = await data.JSON();

    return data;
  }
  
  return "Something went wrong!";
  } catch (error) {
    console.log(error);
  }
    
   
}

export default login;