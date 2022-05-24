import Stats from "./stats";

export default function PostItem(props) {

    return (
      <div className="post-item">
        <div className="userDiv">
          <img className="avatar" src={props.imgFile} alt=''/>
          <div className="userPanel">
            <span>{props.name}</span>
            <span>{props.link}</span>
            <span>{props.date}</span>
          </div>
        </div>
        <div className="textDiv">
          <p className="textArea">
            {props.text}
            <img className='content-image' src={props.image} alt='' />
          </p>
          <Stats />
        </div>
      </div>
    );
  }
  