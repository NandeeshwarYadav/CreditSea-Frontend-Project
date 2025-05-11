import { useState } from "react";
import { Navigate } from "react-router-dom";
import {
  Bg,
  Card,
  Form,
  LabelInputContainer,
  Label,
  Input,
  CustomSelect,
  SubmitButton,
  ErrMsg,
} from "./styledComponents.js";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("admin");
  const [errMsg, setErrMsg] = useState("");
  const [redirectToLogin, setRedirectToLogin] = useState(false);

  const OnSubmitForm = async (event) => {
    event.preventDefault();
    if (!username || !email || !password) {
      alert("Enter all the details before submitting");
    } else {
      const url = `https://creditsea-backend-project.onrender.com/api/user/register`;
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          username,
          password,
          role,
        }),
      };
      const response = await fetch(url, options);
      const data = await response.text();

      if (!response.ok) {
        setErrMsg(data);
      } else {
        setErrMsg("");
        setUsername("");
        setEmail("");
        setPassword("");
        setRole("admin");
        setRedirectToLogin(true);
      }
    }
  };

  if (redirectToLogin) {
    return <Navigate to="/login" replace />;
  }

  return (
    <Bg>
      <Card>
        <h1>REGISTER</h1>
        <Form onSubmit={OnSubmitForm}>
          <LabelInputContainer>
            <Label htmlFor="input-1">USERNAME</Label>
            <Input
              type="text"
              id="input-1"
              placeholder="Enter username"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="input-2">EMAIL</Label>
            <Input
              type="text"
              id="input-2"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="input-3">PASSWORD</Label>
            <Input
              type="password"
              id="input-3"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <CustomSelect value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="admin">admin</option>
              <option value="verifier">verifier</option>
              <option value="user">user</option>
            </CustomSelect>
          </LabelInputContainer>
          <SubmitButton type="submit">Submit</SubmitButton>
          {errMsg && <ErrMsg>*{errMsg}*</ErrMsg>}
        </Form>
      </Card>
    </Bg>
  );
};

export default SignUp;
