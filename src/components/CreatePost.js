import { useState } from "react";
import { useDispatch } from 'react-redux';
import { addPost } from '../redux/actions';
import { DATE } from "../redux/reducer";
import kyrie from '../pict/kyr.jpg'

const AUTHORS = [
  {
    imgFile: kyrie,
    name: "Kyrie Irving",
    link: "@worldInTurtle",
    date: DATE,
  },
  {
    imgFile: 'https://freesvg.org/img/basket.png',
    name: "Russell Westbrook",
    link: "@trueTurtle",
    date: DATE,
  },
]

export default function CreatePost() {
  const [author, setAuthor] = useState("");
  const [text, setText] = useState("");
  const [image, setImage] = useState("");

  const dispatch = useDispatch();

  const onCreatePost = (event) => {
    event.preventDefault();
    const selectedAuthor = AUTHORS.find((item) => item.name === author);
        dispatch(addPost({
            imgFile: selectedAuthor.imgFile,
            name: selectedAuthor.name,
            link: selectedAuthor.link,
            text, image
        }));
    setAuthor("");
    setText("");
    setImage("")
  };

  return (
    <form className="post-new" onSubmit={onCreatePost}>
      <select className="create-post-select" onChange={(e) => setAuthor(e.target.value)}>
        <option value='default' selected disabled>Select User</option>
        {AUTHORS.map((item, index) => (
          <option value={item.name} key={index}>{item.name}</option>
        ))}
      </select>

      <textarea
        placeholder="Text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <input
        type="text"
        placeholder="url"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <button type="submit" onClick={onCreatePost}>
        Create
      </button>
    </form>
  );
}
