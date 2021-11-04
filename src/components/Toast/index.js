import { toast } from 'react-toastify';

export function Toast(props) {
    return (
        toast.error(props.content, {
            toastId: props.id
        })
    )
};