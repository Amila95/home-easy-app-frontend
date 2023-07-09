import { useSignIn } from "react-auth-kit";
import { useNavigate } from "react-router-dom";

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
      .then((response) => response.json())
      .then((data) => {
        // Handle the response data
        console.log(data);
        handleSignIn(data);
        navigate("/home");

        //();
      })
      .catch((error) => {
        // Handle any errors
        console.error("Error:" + error);
      });
    //   .finally(() => {
    //     setFirstName(null);
    //     setLastName(null);
    //     setEmail(null);
    //     setPassword(null);
    //   });
  };

  return <button onClick={handleClick}>Click Me</button>;
};

export default HandleClickComponent;
