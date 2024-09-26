type PersonListProps = {
    names: {
        first: string
        last: string
    }[]
}

const PersonList = (props: PersonListProps) => {
    return (
        <div>
            <ul>
                {
                    props.names.map(name => {
                        return (
                            <li>{name.first} {name.last}</li>
                        )
                    })
                }
            </ul>
        </div>
    );
}

export default PersonList;