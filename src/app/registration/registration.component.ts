import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JobServiceService } from '../job-service.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent  {
  empForm:FormGroup; 
    
    
  constructor(private _fb:FormBuilder,private _empService: JobServiceService, private _dialogRef: MatDialogRef<RegistrationComponent>){
    this.empForm=this._fb.group({
      name:['',Validators.required],
      email:['',Validators.required],
      location:['',Validators.required],
      skills:['',Validators.required],
      salary:['',Validators.required],

    })
  }
  onFormSubmit(){
    if(this.empForm.valid){
      this._empService.addUser(this.empForm.value).subscribe({
        next: (val: any) => {
        alert('employee added successfully');
        this._dialogRef.close();
        },
        error: (err: any) => {
          console.error(err);
        },
      });
    }
  }
  
  }


