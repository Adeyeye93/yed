import { Flex, Text, Button } from "@radix-ui/themes";
import React from "react";
import ReactDOM from "react-dom/client";


export default function MyApp() {
	return (
		<Flex direction="column" gap="2">
			<Text>Hello from Radix Themes :)</Text>
			<Button>Let's go</Button>
		</Flex>
	);
}
