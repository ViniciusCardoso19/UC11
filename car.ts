
export class Car {
    protected brand: string;
    protected model: string;
    protected year: number;
    protected stored: boolean;

    constructor(brand: string, model: string, year: number) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.stored = false;
    }

    public getBrand(): string{
        return this.brand
    }

    public setBrand(){
       return this.brand
    }

    

    getModel(): string {
        return this.model;
    }

    setModel(){
        return this.model;
    }

    getYear(): number {
        return this.year;
    }

    setYear(){
        return this.year;
    }
    

    setStored(value: boolean):void {
        this.stored = value;
    }
    getStored(): boolean {
        return this.stored;
    }
}


