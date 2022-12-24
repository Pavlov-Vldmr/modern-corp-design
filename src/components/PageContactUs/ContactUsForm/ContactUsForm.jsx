import  React, {useState } from "react";
import styles from "./ContactUsForm.module.css"
import { useForm } from "react-hook-form";
// import { useState } from "react";

export function ContactUsForm() {

        const {register,
            formState: {
                errors,
            },
             handleSubmit,
            } = useForm();
        const [data, setData] = useState("");

        return (
        <form className={styles.cuntactUsForm} onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
            
            <input {...register("fullName")} placeholder="Full name" />
            <input {...register("email")} placeholder="Email adress" />
            
            <textarea {...register("message")} placeholder="Message" />
            <p>{data}</p>
            <input type="submit" value="SUBMIT"/>
        </form>
        );

    };
        

export default ContactUsForm;