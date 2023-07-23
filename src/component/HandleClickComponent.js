import { useSignIn } from "react-auth-kit";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';


const HandleClickComponent = ({ email, password }) => {
  let navigate = useNavigate();
  const signIn = useSignIn();

  const handleClick = () => {
    // console.log("click : " + itemName + itemQuentity + status);
    // if (itemName === null || itemName.trim() === "") {
    //   setItemNameError(true);
    //   return;
    // }

    console.log("email : " + email);
    console.log("password : " + password);

    const handleSignIn = (data) => {
      if (
        signIn({
          token: data.token,
          expiresIn: "300",
          tokenType: "Bearer",
        })
      );
      //();
    };

    fetch("/api/v1/auth/authenticate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
    // .then((response) => {
    //   console.log("status : " +(response.status));
    // })
      .then((responseData) => responseData.json())
      .then((data) => {
        if (data.token != undefined) {
        handleSignIn(data);
          navigate("/home");
       }
      })
      .catch((error) => {
        // Handle any errors
        console.error("Error:" + error);
      });

      // try {
      //   const response = await fetch("/api/v1/item", {
      //     headers: {
      //       Authorization: authHeader(),
      //       // Add any other headers if required
      //     },
      //   });
      //   if (response.ok) {
      //     const data = await response.json();
      //     setData(data);
      //   } else {
      //     setData([]);
      //   }
      // } catch (error) {
      //   console.error(error);
      // }
    //   .finally(() => {
    //     setFirstName(null);
    //     setLastName(null);
    //     setEmail(null);
    //     setPassword(null);
    //   });
  };

  return <Button variant="contained" onClick={handleClick}> Login</Button>;
};

export default HandleClickComponent;
