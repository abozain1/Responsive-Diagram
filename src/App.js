import React, { Fragment, useState } from "react";
import "beautiful-react-diagrams/styles.css";
import Diagram, { createSchema, useSchema } from "beautiful-react-diagrams";
import classes from "./App.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiOutlineMinusCircle } from "react-icons/ai";
import Modal from "./Modal";

const Comp = ({ id, content, data }) => (
  <div className={classes.compmain}>
    <div className={classes.iconholder}>
      <AiOutlineMinusCircle
        onClick={() => data.remove(id)}
        className={classes.cross}
      />
      <AiOutlinePlusCircle
        onClick={() => data.add(id)}
        className={classes.plus}
      />
    </div>

    <p className={classes.p}>{content}</p>
  </div>
);

const initialSchema = createSchema({
  nodes: [],
  links: [],
});

export default function App() {
  const [show, setshow] = useState(false);
  const [modal, setmodal] = useState(false);
  const [parent, setparent] = useState("");
  const [schema, { onChange, addNode, removeNode }] = useSchema(initialSchema);

  function deleteNodeFromSchema(id) {
    let holder = [];
    for (let a = 0; a < schema.nodes.length; a++) {
      // console.log("d");
      if (schema.links[a] && schema.links[a].output === id) {
        schema.links.splice(a, 1);
        holder.push(id);
        a = -1;
      }
      if (schema.links[a] && schema.links[a].input === id) {
        holder.push(schema.links[a].output);
        schema.links.splice(a, 1);
        a = -1;
      }
      for (let b = 0; b < schema.nodes.length; b++) {
        if (
          schema.links[b] &&
          holder[a] &&
          schema.links[b].input === holder[a]
        ) {
          holder.push(schema.links[b].output);
          schema.links.splice(b, 1);
          b = -1;
          a = -1;
        }
      }
    }
    for (let c = 0; c < schema.nodes.length; c++) {
      for (let d = 0; d < schema.nodes.length; d++) {
        if (
          schema.nodes[d] &&
          holder[c] &&
          schema.nodes[d].id === holder[c]
        ) {
          schema.nodes.splice(d, 1);
          holder.splice(c, 1);
          d = -1;
          c = -1;
        }
      }
    }

    let demoNode = {
      id: "demo",
      content: "demo",
      coordinates: [10, 10],
      render: Comp,
    };
    addNode(demoNode);

    if (id === "master-1") {
      setshow(false);
      schema.nodes.splice(0);
    }
    
  }

  const addNewNode = (content, id) => {
    setshow(true);
    let nextNode = {};
    if (schema.nodes.length < 1) {
      nextNode = {
        id: id,
        content: content,
        coordinates: [250, 160],
        render: Comp,
        data: { remove: deleteNodeFromSchema, add: showmodal },
      };
    } else {
      nextNode = {
        id: `node-${Math.random()}`,
        content: content,
        coordinates: [250, 160],
        render: Comp,
        data: { remove: deleteNodeFromSchema, add: showmodal },
      };
    }

    if (schema.nodes.length > 0) {
      schema.links.push({
        input: id,
        output: nextNode.id,
        readonly: true,
      });
    }

    addNode(nextNode);
  };

  const showmodal = (id) => {
    setmodal(true);
    setparent(id);
  };
  const choose = (content) => {
    setmodal(false);
    addNewNode(content, parent);
  };

  for (let d = 0; d < schema.nodes.length; d++) {
    if (schema.nodes[d] && schema.nodes[d].id === "demo") {
      schema.nodes.splice(d, 1);

      d = -1;
    }
  }

  return (
    <Fragment>
      {modal && (
        <Modal>
          <p className={classes.category} onClick={() => choose("Alpha")}>
            Alpha
          </p>
          <p className={classes.category} onClick={() => choose("Beta")}>
            {" "}
            Beta
          </p>
          <p className={classes.category} onClick={() => choose("Sigma")}>
            Sigma
          </p>
        </Modal>
      )}
      <div className={classes.dia}>
        {!show && (
          <button onClick={() => addNewNode("Master", "master-1")}>
            Add new node
          </button>
        )}

        {show && <Diagram schema={schema} onChange={onChange} />}
      </div>
    </Fragment>
  );
}
