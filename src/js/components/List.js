import React from "react";
import { connect } from "react-redux";

// Connect Redux store state to comp prop
const mapStateToProps = state => {
    return { articles: state.articles }
}

const ConnectedList = ({articles}) => (

<ul className="list-group list-group-flush">
    {articles.map(el => (
     <ul>
       <li className="list-group-item" key={el.id}>
        {el.title}, {el.name}, {el.age}
      </li>
     </ul>
    ))}
  </ul>
);

const List = connect(mapStateToProps) (ConnectedList);
export default List;
