import React, { useState } from "react";
import styles from "./ContactUsForm.module.css"
import { useForm } from "react-hook-form";
// import { useState } from "react";

export function ContactUsForm() {

    const {
        register,
        formState: {
            errors,
            isValid
        },
        handleSubmit,
        reset,
    } = useForm(
        {
            mode: "onBlur",
        }
    );
    // const [data, setData] = useState("");
    const onSubmit = (data) => {
        alert(JSON.stringify(data));
        reset();
    }

    return (
        <form className={styles.cuntactUsForm} onSubmit={handleSubmit(onSubmit)}>

            <input {...register("fullName", {
                required: "Need your full name",
                minLength: {
                    value: 3,
                    message: 'Minimum 3 symbols'
                }
            }
            )
            }
                placeholder="Full name" />

            <span>
                {errors?.fullName && errors?.fullName?.message}
            </span>
            <input {...register("email", {
                required: "required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Entered value does not match email format"
                }
            })} placeholder="Email adress" />
            <span>
                {errors?.email?.message}</span>

            <textarea {...register("message")} placeholder="Message" />

            <input type="submit" value="SUBMIT" disabled={!isValid} />
        </form>
    );

};


export default ContactUsForm;