
import {Bg,Heading,HeadingListContainer,Navbar,Icons} from "./styledComponents.js"

import { BsList,BsFillBellFill} from "react-icons/bs";
import { AiFillMessage } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";

const Header=()=> 
    <Bg>
        <Navbar>
            <HeadingListContainer>
            <Heading>CREDIT APP</Heading>
            <Icons>  <BsList /></Icons>
        </HeadingListContainer>
        <HeadingListContainer>
          <Icons>  <BsFillBellFill /></Icons>
          <Icons>  <AiFillMessage /> </Icons>
          <Icons>  <CgProfile /></Icons>
           
        </HeadingListContainer>
        </Navbar>
        
    </Bg>

export default Header