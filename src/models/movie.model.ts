export interface Movie {
	id: string;
	name: string;
	description?: string;
	quantity: number;
	createdAt: Date;
	deletedAt?: Date;
}
