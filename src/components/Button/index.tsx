import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

export function ButtonYellow({ link, label }) {
    return (
        <Link to={link}>
            <button
                className={clsx(
                    styles.container,
                    styles.yellow,
                )}>
                {label}
            </button>
        </Link>
    )
}

export function ButtonGreen({ link, label }) {
    return (
        <Link to={link}>
            <button
                className={clsx(
                    styles.container,
                    styles.green,
                )}>
                {label}
            </button>
        </Link>
    )
}