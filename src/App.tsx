import Greet from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";
import Heading from "./components/Heading";
import Oscar from "./components/Oscar";

function App() {

	const personName = {
		first: "Akash",
		last: "Tharuka"
	}

	const contactList = [
		{
			first: "Nirmal",
			last: "Eranda"
		},
		{
			first: "Clark",
			last: "Kent"
		},
		{
			first: "Princess",
			last: "Diana"
		}
	];

    return (
		<div className="App">
			<Person name={personName} />
			<Greet 
				name="Akash" 
				msgCount={10} 
				isLoggedIn={true} 
			/>
			<PersonList names={contactList} />
			<Status status="loading" />
			<Oscar>
				<Heading>Placeholder text</Heading>
			</Oscar>
		</div>
    )
}

export default App;
