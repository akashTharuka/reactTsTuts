type StatusProps = {
    status: 'loading' | 'success' | 'error'
}

const Status = (props: StatusProps) => {
    let msg = props.status === 'loading' 
                ? 'loading' 
                : props.status === 'success' 
                    ? 'success'
                    : 'error';
    return (
        <div>
            <h2>status = {msg}</h2>
        </div>
    );
}

export default Status;