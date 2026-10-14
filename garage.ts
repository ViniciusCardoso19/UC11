import {Car} from "./car";

export class Garage {
    protected cars: Car[] = [];

    addCar(car: Car): void {
        const duplicate = this.cars.find(c =>
            c.getBrand() === car.getBrand() &&
            c.getModel() === car.getModel() &&
            c.getYear() === car.getYear()
        );
    
        if (duplicate) {
            throw new Error("Carro já existe na garagem!");
        }

        this.cars.push(car);
        car.setStored(true);
    }

    removeCar(car: Car): void {
        const index = this.cars.indexOf(car);

        if (index !== -1) {
            this.cars.splice(index, 1);
            car.setStored(false);
        }
    }

    getCarCount(): number {
        return this.cars.length;
    }

     
    findCarByModel(model: string): Car | undefined {
    return this.cars.find(car => car.getModel() === model);
    }

}
