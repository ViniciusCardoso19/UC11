



import { Car } from "../src/car";
import { Garage } from "../src/garage";

describe("testes da classe Car", () => {

    test("criar um carro", () => {
        //arange
        const car = new Car("Toyota", "Corolla", 2025);
        //act
        let result = car.getBrand() === "Toyota";
        //assert
        expect(result).toBe(true);
    });

    test("verificar o estado inicial de stored", () => {
        //arange
        const car = new Car("Toyota", "Corolla", 2025);
        //act
        let result = car.getStored() === false;
        //assert
        expect(result).toBe(true);
    });

    test("alterar stored para true", () => {
        //arange
        const car = new Car("Toyota", "Corolla", 2025);
        //act
        car.setStored(true);
        let result = car.getStored() === true;
        //assert
        expect(result).toBe(true);
    });

    test("alterar stored para false", () => {
        //arange
        const car = new Car("Toyota", "Corolla", 2025);
        //act
        car.setStored(true);
        car.setStored(false);
        let result = car.getStored() === false;
        //assert
        expect(result).toBe(true);
    });
});

describe("testes da classe Garage", () => {

    test("adicionar um carro", () => {
        //arange
        const garage = new Garage();
        const car = new Car("Toyota", "Corolla", 2025);
        //act
        garage.addCar(car);
        let result = garage.getCarCount() === 1;
        //assert
        expect(result).toBe(true);
    });

    test("verificar stored após adicionar", () => {
        //arange
        const garage = new Garage();
        const car = new Car("Toyota", "Corolla", 2025);
        //act
        garage.addCar(car);
        let result = car.getStored() === true;
        //assert
        expect(result).toBe(true);
    });

    test("adicionar vários carros", () => {
        //arange
        const garage = new Garage();
        const car1 = new Car("Toyota", "Corolla", 2025);
        const car2 = new Car("Honda", "Civic", 2024);
        const car3 = new Car("Ford", "Focus", 2023);
        //act
        garage.addCar(car1);
        garage.addCar(car2);
        garage.addCar(car3);
        let result = garage.getCarCount() === 3;
        //assert
        expect(result).toBe(true);
    });

    test("remover um carro", () => {
        //arange
        const garage = new Garage();
        const car = new Car("Toyota", "Corolla", 2025);
        garage.addCar(car);
        //act
        garage.removeCar(car);
        let result = garage.getCarCount() === 0;
        //assert
        expect(result).toBe(true);
    });

    test("verificar stored após remover", () => {
        //arange
        const garage = new Garage();
        const car = new Car("Toyota", "Corolla", 2025);
        garage.addCar(car);
        //act
        garage.removeCar(car);
        let result = car.getStored() === false;
        //assert
        expect(result).toBe(true);
    });

    test("procurar um carro existente", () => {
        //arange
        const garage = new Garage();
        const car = new Car("Toyota", "Corolla", 2025);
        garage.addCar(car);
        //act
        let result = garage.findCarByModel("Corolla") === car;
        //assert
        expect(result).toBe(true);
    });

    test("procurar um carro inexistente", () => {
        //arange
        const garage = new Garage();
        //act
        let result = garage.findCarByModel("Civic") === undefined;
        //assert
        expect(result).toBe(true);
    });

    test("não permitir carros duplicados", () => {
        //arange
        const garage = new Garage();
        const car1 = new Car("Toyota", "Corolla", 2025);
        const car2 = new Car("Toyota", "Corolla", 2025);
        garage.addCar(car1);
        //act
        let result = () => garage.addCar(car2);
        //assert
        expect(result).toThrow();
    });

    test("verificar a marca do carro encontrado", () => {
        //arange
        const garage = new Garage();
        const car = new Car("Toyota", "Corolla", 2025);
        garage.addCar(car);
        //act
        let result = garage.findCarByModel("Corolla")?.getBrand() === "Toyota";
        //assert
        expect(result).toBe(true);
    });

    test("verificar o ano do carro encontrado", () => {
        //arange
        const garage = new Garage();
        const car = new Car("Toyota", "Corolla", 2025);
        garage.addCar(car);
        //act
        let result = garage.findCarByModel("Corolla")?.getYear() === 2025;
        //assert
        expect(result).toBe(true);
    });

    test("remover um carro entre vários", () => {
        //arange
        const garage = new Garage();
        const car1 = new Car("Toyota", "Corolla", 2025);
        const car2 = new Car("Honda", "Civic", 2024);
        const car3 = new Car("Ford", "Focus", 2023);

        garage.addCar(car1);
        garage.addCar(car2);
        garage.addCar(car3);
        //act
        garage.removeCar(car2);
        let result =
            garage.getCarCount() === 2 &&
            garage.findCarByModel("Corolla") === car1 &&
            garage.findCarByModel("Focus") === car3;
        //assert
        expect(result).toBe(true);
    });

    test("verificar estados após remover um carro", () => {
        //arange
        const garage = new Garage();
        const car1 = new Car("Toyota", "Corolla", 2025);
        const car2 = new Car("Honda", "Civic", 2024);
        const car3 = new Car("Ford", "Focus", 2023);

        garage.addCar(car1);
        garage.addCar(car2);
        garage.addCar(car3);
        //act
        garage.removeCar(car2);
        let result =
            car2.getStored() === false &&
            car1.getStored() === true &&
            car3.getStored() === true;
        //assert
        expect(result).toBe(true);
    });
});
