import { Fragment} from "react";
import HeaderCartButton from "./HeaderCartButton";
import meals from '../../assets/meals3.webp';
import styles from './Header.module.css'

const Header = () => {
    return (
        <Fragment>
            <header className={styles.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton />
            </header>
            <div className={styles['main-image']}>
                <img src={meals} alt='delicious food'/>
            </div>
        </Fragment>
    );
};

export default Header;