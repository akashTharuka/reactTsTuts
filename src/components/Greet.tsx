// 1. when you type 'props.' it suggests you what you need
// This will help you identify type errors when assigning values to props from the parent component 

// use type for applications
// use interface for libraries
type GreetProps = {
    name: string
    msgCount: number
    isLoggedIn: boolean
}

const Greet = (props: GreetProps) => {
    return (
        <div>
            {
                props.isLoggedIn ? 
                    <>
                        <p>{props.name}, You have {props.msgCount} unread messages</p>
                    </>
                : <p>user not logged in</p>
            }
        </div>
    );
}

export default Greet;