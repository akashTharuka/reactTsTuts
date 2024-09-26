import Greet from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";

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
			<Greet name="Akash" msgCount={10} isLoggedIn={true} />
			<PersonList names={contactList} />
		</div>
    )
}

export default App;
