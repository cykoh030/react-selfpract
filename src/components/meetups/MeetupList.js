import classes from "./MeetupList.module.css";
import MeetupItem from "./MeetupItem";

const MeetupList = ({ meetups }) => {
  return (
    <ul className={classes.list}>
      {meetups.map(({id, image, address, description}) => (
        <MeetupItem
          key={id}
          id={id}
          image={image}
          address={address}
          description={description}
        />
      ))}
    </ul>
  );
};

export default MeetupList;
