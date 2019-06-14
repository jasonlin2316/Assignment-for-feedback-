import React from "react";
import { Title, Ul, Li, Button } from "../styled-component/styled-component";

const MyList = props => {
  const { listName, list, callback } = props;
  return (
    <div>
      <Title>{listName}</Title>
      <Ul>
        {list.map(item => (
          <Li key={item.id}>
            <p style={{ color: "white" }}>{item.title}</p>
            <img src={item.img} alt={item.title} />
            <Button id={item.id} onClick={() => callback(item)}>
              {listName === "Recommendations" ? "Add" : "Remove"}
            </Button>
          </Li>
        ))}
      </Ul>
    </div>
  );
};

export default MyList;
