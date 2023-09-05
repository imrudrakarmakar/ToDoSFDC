/**
 * @description       : 
 * @author            : 
 * @group             : 
 * @last modified on  : 08-23-2023
 * @last modified by  : 
**/
import { LightningElement } from 'lwc';
import { CloseActionScreenEvent } from 'lightning/actions';

export default class CreateTaskAction extends LightningElement {
    isAction = true;

    handleClick() {
        this.refs.createToDo.handleParentClick();
    }

    closeAction() {
        this.dispatchEvent(new CloseActionScreenEvent());
    }
}