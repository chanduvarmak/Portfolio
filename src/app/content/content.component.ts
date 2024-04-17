import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Project } from '../interface/project';

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
  projects: Project[] = [
    {
      image: "assets/html-coding.png",
      title: "CodeMatcher",
      description: "CodeMatcher is a project I actively contributed to, focusing on improving code matching algorithms and UI/UX enhancements. My responsibilities included developing new features, refining existing codebase, and collaborating with the team to ensure seamless integration of functionalities."
    },
    {
      image: "assets/browser.png",
      title: "Credepress",
      description: "Currently, I'm deeply involved in Credepress, a hospital management system. My role primarily revolves around creating and refining various screens as per the specific requirements of the healthcare domain. Additionally, I'm actively engaged in setting up DevOps processes to streamline development and deployment pipelines."
    },
    {
      image: "assets/search-bar.png",
      title: "Personal GitHub Projects",
      description: "Apart from my professional engagements, I consistently upskill myself through personal projects hosted on my GitHub. These projects span various domains and technologies, showcasing my continuous learning journey. Some notable projects include <Project 1>, <Project 2>, and <Project 3>."
    }
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
