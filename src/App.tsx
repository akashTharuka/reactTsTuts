import Greet from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";
import Heading from "./components/Heading";
import Oscar from "./components/Oscar";
import Button from "./components/Button";
import Input from "./components/Input";
import Container from "./components/Container";
import Counter from "./components/Counter";
import ThemeContextProvider from './components/context/ThemeContext';
import Box from './components/context/Box';
import { UserContextProvider } from "./components/context/UserContext";
import User from "./components/context/User";

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
			<ThemeContextProvider>
				<Box />
			</ThemeContextProvider>
			<UserContextProvider>
				<User />
			</UserContextProvider>
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
			<Button handleClick={(event, id) => {
				console.log('Button Clicked', event, id);
			}}/>
			<Input 
				value=""
				handleChange={(event) => {
					console.log(event.target.value);
				}}
			/>
			<Container styles={{border: "1px solid black", padding: "1rem"}} />
			<Counter />
		</div>
    )
}

export default App;
