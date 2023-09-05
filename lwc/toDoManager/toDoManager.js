/**
 * @description       : 
 * @author            : 
 * @group             : 
 * @last modified on  : 08-23-2023
 * @last modified by  : 
**/
import { LightningElement } from 'lwc';

export default class ToDoManager extends LightningElement {
    refreshToDo() {
        this.refs.pendingToDo.refreshList();
        this.refs.completedToDo.refreshList();
    }
}