import styles from './Cart.module.css';
import Modal from "../UI/Modal";

const Cart = props => {
    return (
        <Modal>
            {}
            <div className={styles.total}>
                <span>Total Amount</span>
                <span>35.62</span>
            </div>
            <div className={styles.actions}>
                <button className={styles['button--Alt']}>Close</button>
                <button className={styles.button}>Order</button>
            </div>
        </Modal>
    );
}

export default Cart;