import { OnInit } from '@angular/core';

export class Satellite implements OnInit{
    name: string;
    orbitType: string;
    type: string;
    operational: boolean;
    launchDate: string;

sourceList = []
satellites = []

constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean){
    this.name = name;
    this.type= type;
    this.launchDate = launchDate;
    this.orbitType = orbitType;
    this.operational = operational;
}

shouldShowWarning() {
    return (this.type.toLowerCase() === 'space debris');
}

    ngOnInit(): void {
        throw new Error("Method not implemented.");
    }
}