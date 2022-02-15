import { Fragment} from "react";
import meals from '../../assets/meals3.webp';
import styles from './Header.module.css'

const Header = () => {
    return (
        <Fragment>
            <header className={styles.header}>React Meals</header>
            <button>Cart</button>
            <div className={styles['main-image']}>
                <img src={meals} alt='delicious food'/>
            </div>
        </Fragment>
    );
};

export default Header;