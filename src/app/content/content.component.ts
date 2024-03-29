import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {

  skills: string[] = [
    'Angular',
    'TypeScript',
    'Node.js',
    'HTML5',
    'CSS3',
    'JavaScript',
    'Reactive Forms'
    // Add more skills as needed
  ];

  contactForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
      this.contactForm.reset();
    } else {
      this.markFormGroupTouched(this.contactForm);
    }
  }

  markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();

      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }

  downloadResume() {
    // Replace 'resume.pdf' with the actual path to your resume file
    const resumeUrl = 'assets/resume.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Chandu_Varma_Resume.pdf'; // Specify the filename for download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
