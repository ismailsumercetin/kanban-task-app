interface IProps {
  task_type: string
  content: string
  name: string
  bio: string
}

const TaskCard = ({
  task_type,
  content,
  name,
  bio
}: IProps) => {
  return (
    <div className="card__taskcard">
      <div className="card__taskcard__header">
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Bill_Gates_2017_%28cropped%29.jpg/220px-Bill_Gates_2017_%28cropped%29.jpg'/>
        <div className="card__taskcard__header__userinfo">
          <div>{name}</div>
          <div>{bio}</div>
        </div>
      </div>
      <div className="card__taskcard__content">
        {content}
      </div>
      <div className="card__taskcard__footer">
        <span className="card__taskcard__typeindicator" />
        <span>{task_type}</span>
      </div>
    </div>
  );
};

export default TaskCard;
