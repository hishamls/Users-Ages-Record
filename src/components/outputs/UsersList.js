import Card from "../ui/card/Card";
import styles from "./UsersList.module.css";

export default function UsersList(props) {
  return (
    <Card className={styles.users}>
      <ul className={styles.ul}>
        {props.users.map((user) => (
          <li className={styles.li} key={user.id}>
            {user.Name} ({user.Age} Years old)
          </li>
        ))}
      </ul>
    </Card>
  );
}
