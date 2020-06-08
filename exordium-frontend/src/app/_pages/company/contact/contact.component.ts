import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { jarallax } from 'jarallax';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      realname: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      company: [null],
      phone: [null],
      message: [null, Validators.required],
      recaptcha: [null, Validators.required]
    });

    this.jarallaxInit();
  }

  jarallaxInit() {
    jarallax(document.querySelectorAll('.jarallax'), {
      speed: 0.6
    });
  }

  get f() {
    return this.contactForm.controls;
  }

  onSubmit() {

  }

}
