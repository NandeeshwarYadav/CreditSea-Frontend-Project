import { useNavigate } from "react-router-dom";

import Cookies from "js-cookie";

import {Bg,Heading,HeadingListContainer,Navbar,Icons} from "./styledComponents.js"

import { BsList,BsFillBellFill} from "react-icons/bs";
import { AiFillMessage } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { MdLogout } from "react-icons/md";

const Header=()=> {
    const navigate = useNavigate();

     const handleLogout = () => {

    Cookies.remove("jwt_token"); 

    navigate("/login");
  };

    return <Bg>
        <Navbar>
            <HeadingListContainer>
            <Heading>CREDIT APP</Heading>
            <Icons>  <BsList /></Icons>
        </HeadingListContainer>
        <HeadingListContainer>
          <Icons>  <BsFillBellFill /></Icons>
          <Icons>  <AiFillMessage /> </Icons>
          <Icons>  <CgProfile /></Icons>
           <Icons onClick={handleLogout}>  <MdLogout /></Icons>
        </HeadingListContainer>
        </Navbar>
        
    </Bg>}

export default Header