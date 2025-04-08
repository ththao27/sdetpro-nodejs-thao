"use strict";
/*
// Outer Class
export default class HouseWithBuilderDesignPattern {
    private topRoofColor: string;
    private windowNumber: number;
    private color: string;
    private mainDoorNumber: number;

    private constructor() {

    }
    
    // Getters - READ ONLY

    getTopRoofColor(): string {
        return this.topRoofColor;
    }

    getWindowNumber(): number {
        return this.windowNumber;
    }

    getColor(): string {
        return this.color;
    }

    getMainDoorNumber(): number {
        return this.mainDoorNumber;
    }

    // Sale Department - Inner Class: một class nằm trong 1 class khác - WRITE ONLY
    public static Builder = class {
        private house: HouseWithBuilderDesignPattern;

        public setTopRoofColor(topRoofColor: string): this { // this: trả về đối tượng đã tạo ra nó, tham chiếu vào đối tượng tạo ra trong class này
            this.house.topRoofColor = topRoofColor;
            return this; // method chaining
        }

        public setWindowNumber(windowNumber: number): this {
            this.house.windowNumber = windowNumber;
            return this;
        }

        public setColor(color: string): this {
            this.house.color = color;
            return this;
        }

        public setMainDoorNumber(mainDoorNumber: number): this {
            this.house.mainDoorNumber = mainDoorNumber;
            return this;
        }

        // Sign the contract method

        public build(): HouseWithBuilderDesignPattern {
            return this.house;
        }
    }

}

*/ 
