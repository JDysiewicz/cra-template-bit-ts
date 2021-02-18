import React from "react";

interface Props {
	name: string;
}

const App: React.FC<Props> = ({ name }): JSX.Element => {
	return <div>Hello, {name}</div>;
};

export default App;
