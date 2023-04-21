import styled from "styled-components";

const AttackMessage = ({ name, attack }) => {
  return (
    <AttackMessageBox>
      <Message>
        <span>{name}</span> setzt <span>{attack}</span> ein.
      </Message>
    </AttackMessageBox>
  );
};

export default AttackMessage;

const AttackMessageBox = styled.section`
  position: absolute;
  background-image: url("/sprites/text-box.png");
  background-position: center;
  background-size: 100% 100%;
  background-repeat: no-repeat;

  width: 100%;
  height: 80px;
  left: 0%;
  bottom: 0%;
  z-index: 2;
`;

const Message = styled.p`
  font-size: 1.5rem;
  line-height: 16px;
  position: relative;
  left: 6%;
  color: white;
  span {
    text-transform: uppercase;
  }
`;
