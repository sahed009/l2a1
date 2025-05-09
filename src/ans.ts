function formatString(input: string, toUpper?: boolean): string {
	return toUpper === false ? input.toLowerCase() : input.toUpperCase();
}

function filterByRating(
	items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
	return items.filter((item) => item.rating >= 4);
}

function concatenateArrays<T>(...arrays: T[][]): T[] {
	const result: T[] = [];
	for (const array of arrays) {
		result.push(...array);
	}
	return result;
}

class Vehicle {
	private make: string;
	private year: number;

	constructor(make: string, year: number) {
		this.make = make;
		this.year = year;
	}

	getInfo(): string {
		return `Make: ${this.make}, Year: ${this.year}`;
	}
}

class Car extends Vehicle {
	private model: string;

	constructor(make: string, year: number, model: string) {
		super(make, year);
		this.model = model;
	}

	getModel(): string {
		return `Model: ${this.model}`;
	}
}

function processValue(value: string | number): number {
	return typeof value === "string" ? value.length : value * 2;
}

interface Product {
	name: string;
	price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
	if (products.length === 0) return null;
	let best = products[0];
	for (const p of products) {
		if (p.price > best.price) {
			best = p;
		}
	}
	return best;
}

enum Day {
	Monday,
	Tuesday,
	Wednesday,
	Thursday,
	Friday,
	Saturday,
	Sunday,
}

function getDayType(day: Day): string {
	if (day === Day.Saturday || day === Day.Sunday) {
		return "Weekend";
	} else {
		return "Weekday";
	}
}

async function squareAsync(n: number): Promise<number> {
	return new Promise((resolve, reject) => {
		if (n < 0) {
			reject(new Error("Negative number not allowed"));
			return;
		}
		setTimeout(() => resolve(n * n), 1000);
	});
}
