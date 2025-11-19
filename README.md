# Angular-20

A collection of examples, projects, and experiments exploring the latest features of Angular 20 — from standalone APIs to performance optimization.

Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass

this.userFrom = this.formBuilder.group({});
this.fields.forEach((formField) => {
const validator = [];
if (formField.required) validator.push(Validators.required);
if (formField.name == 'email') validator.push(Validators.email);

      this.userFrom.addControl(
        formField.name, // field name
        this.formBuilder.control('', validator) //arra of validator
      );
    });


    ---------
    <form [formGroup]="userFrom">

    @for(field of fields; track field.name){

    @if(field.type == "radio" || field.type == "checkbox"){
    <div>
        @for(rad of field.options;track rad.key ){

        <label [for]="field.name + '-' + rad.key">{{rad.label }}</label>
        <input [type]="field.type" [id]="field.name + '-' + rad.key" [name]="field.name" [formControlName]="field.name">
        }
    </div><br />

    }

    @if(field.type == "dropdown"){
    <div>
        <select [name]="field.name" [id]="field.name" [formControlName]="field.name">
            <option disabled selected>Select a country</option>
            <option *ngFor="let col of field.options">
                {{col.label}}
            </option>
        </select>
        @if(userFrom.get(field.name)?.hasError('required')){
        <div>Required</div>
        }
    </div>
    }
    @if(field.type == "text" ){
    <div>
        <label>{{ field.label }}</label>
        <input [type]=field.type [formControlName]="field.name">
    </div>
    @if(userFrom.get(field.name)?.touched || userFrom.get(field.name)?.dirty){
    @if(userFrom.get(field.name)?.hasError('required')){
    <div>
        Required
    </div>
    }
    @if(userFrom.get(field.name)?.hasError('email')){
    <div>
        Invalid Email
    </div>
    }
    }
    <br />
    }
    }
    <button type="submit" (click)="onClick()">Submit</button>

</form>
