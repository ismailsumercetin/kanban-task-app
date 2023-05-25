const TaskCard = () => {
  return (
    <div className="card__taskcard">
      <div className="card__taskcard__header">
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Bill_Gates_2017_%28cropped%29.jpg/220px-Bill_Gates_2017_%28cropped%29.jpg'/>
        <div className="card__taskcard__header__userinfo">
          <div>Bill Gates</div>
          <div>Frontend Engineer at DevsHouse</div>
        </div>
      </div>
      <div className="card__taskcard__content">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro nostrum, optio cupiditate necessitatibus laudantium voluptatem, numquam saepe culpa.
      </div>
      <div className="card__taskcard__footer">
        <span className="card__taskcard__typeindicator" />
        <span>Bug</span>
      </div>
    </div>
  );
};

export default TaskCard;
