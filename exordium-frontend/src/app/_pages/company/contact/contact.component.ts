import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { jarallax } from 'jarallax';

import { ContactService } from 'src/app/__services/contact.service';

import * as jQuery from 'jquery';
const $ = jQuery;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;

  constructor(
    private contactService: ContactService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService
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
    const sourceButton = $('.submitContact');

    sourceButton.attr('disabled', true);
    sourceButton.addClass('m-progress');

    if (this.contactForm.invalid) {
      this.toastr.error('Please make sure you entered the contact form in correctly!');
    } else {
      this.contactService.sendContact(this.contactForm.value).subscribe((res) => {
        this.toastr.success('Your contact request has been submitted to our customer support team, we will get back to you soon!');
      }, (err) => {
        this.toastr.error(err);
      });
    }

    setTimeout(() => {
      sourceButton.removeAttr('disabled');
      sourceButton.removeClass('m-progress');
    }, 2000);

  }

}
