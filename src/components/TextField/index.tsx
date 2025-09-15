'use client'

import styles from './styles.module.css'
import { ChangeEvent, useState } from 'react';


type Props = {
    label:string;
    type: "text" | "email";
    multiline?: boolean;
    onChange?(texto: string): void;
}

export default function TextField(props: Props) {

    const [texto, setTexto] = useState("");

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setTexto(e.target.value);
        if (props.onChange){
            props.onChange(e.target.value);
        }
    }

    return(
        <span className={styles.root}>
        <label>
            <span className={styles.label}>{props.label}</span>
            {
                (props.multiline) ? (
                <textarea />
            ):(
                <input 
                type={props.type} 
                placeholder={props.label} 
                onChange={handleChange}
                />
            )
            }
            {texto}
        </label>
        </span>
    )
}