import { useEffect, useState } from "react";

export function useFormContact(){
    const [message,setMessage] =useState(null);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const submitContact = async (formData) => {
        setLoading(true);
        setMessage(null);
        setError(null);

        try {
            const res = await fetch("/api/contact",{method:"POST", body:JSON.stringify(formData ) })
            const data = await res.json();
            if (!res.ok) throw new Error(data.error || "Something went wrong");
            setMessage(data.success || "Message sent");

        } catch (error) {
            setError( error.message || "error occured")
        } finally{
            setLoading(false)
        }
    }
    return { submitContact,message,error,loading }
}