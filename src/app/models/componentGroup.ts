import { UUID } from 'angular2-uuid';
import { ComponentModel } from "./componentModel";

export class ComponentGroup {

    UUID : string;
    componentGroupName : string;
    component : [ComponentModel];

}