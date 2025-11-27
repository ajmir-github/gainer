// Define your type
export interface User {
	id?: string;
	name: string;
	age: number;
	isAdmin: boolean;
}

// Optional: Another related model (example)
export interface Profile {
	id?: string;
	userId: string;
	bio: string;
}
