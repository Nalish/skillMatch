import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-application-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './application-form.component.html',
  styleUrl:'./application-form.component.css'
})
export class ApplicationFormComponent implements OnInit {

  seekerForm!: FormGroup;

  constructor(private fb: FormBuilder,private router:Router) {}

  ngOnInit(): void {
    this.seekerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      country: [''],
     
      birthday: ['', Validators.required],
      nationality: [''],
      education: this.fb.group({
        school: [''],
        level: ['']
      }),
      jobField: [''],
      portfolio: [null],
      cv: [null]
    });
  }

  onFileChange(event: any, field: string): void {
    const file = event.target.files[0];
    if (file) {
      this.seekerForm.patchValue({ [field]: file });
    }
  }

  onSubmit(): void {
    if (this.seekerForm.valid) {
      console.log('✅ Form Submitted:', this.seekerForm.value);
    } else {
      console.log('❌ Form Invalid');
    }
  }
  navigateToJobSeekerProfile(){
    {
  this.router.navigate(['/jobseeker-profile'])
    }
  }
}
