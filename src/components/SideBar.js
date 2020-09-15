import React from "react"
import styled from "styled-components"
import { MdPhoneIphone } from "react-icons/md"
import { FiMail } from "react-icons/fi"
import { GoLocation } from "react-icons/go";
import { FaPhoneAlt } from "react-icons/fa"



const SideBar = () => {
    return (
      <Wrapper>
        <p><span><GoLocation />  </span>   Marijane Gregoran 34a, Beograd</p>
        <p><span><MdPhoneIphone / >  </span>   064/270 94 70, 061/60 512 71</p>
        <p><span><FaPhoneAlt />  </span>   011/29-70-419</p>
        <p><span><FiMail />  </span>   fenrir019@gmail.com</p>
      </Wrapper>
    );
};

const Wrapper = styled.div`
  flex-basis: 200px;
  color: var(--mainBlack);
  font-weight: 400;
  border-left: 1px solid var(--mainBlack);
  font-size: 0.9rem;
  padding: 15px 0px 15px 20px;
  line-height: 50px;
  align-items: end;

  @media (max-width: 576px) {
    line-height: 20px;
  }

  span {
    color: var(--primaryColor);
    font-size: 1rem;
  }
`

export default SideBar;
