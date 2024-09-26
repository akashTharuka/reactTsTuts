// 1. when you type 'props.' it suggests you what you need
// This will help you identify type errors when assigning values to props from the parent component 

// use type for applications
// use interface for libraries
type GreetProps = {
    name: string
    msgCount: number
    isLoggedIn: boolean
    optionalProp?: number
}

const Greet = (props: GreetProps) => {
    const { optionalProp = 0 } = props;
    return (
        <div>
            {
                props.isLoggedIn ? 
                    <>
                        <p>{props.name}, You have {props.msgCount} unread messages</p>
                        <p>This is an optional prop of type number - value = {optionalProp}</p>
                    </>
                : <p>user not logged in</p>
            }
        </div>
    );
}

export default Greet;