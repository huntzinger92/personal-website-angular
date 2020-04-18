import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { musical_works } from '../music';

declare var paypal;

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MusicComponent implements OnInit {
  @ViewChild('paypal', {static: true}) paypalElement: ElementRef;

  customDonationAmount = new FormGroup({
    amount: new FormControl('')
  });

  paidFor = false;
  musical_works = musical_works;
  display_donation = false;
  donationButtonHref = ''
  donationOrder = {
    description: 'Donate and help me produce more content like this!',
    price: 6
  };

  toggleDonationDisplay(e, href='') {
    console.log('display toggled');
    console.log('href: ', href);
    if (!this.paidFor) {
      this.display_donation = !this.display_donation;
      if (this.display_donation) {
        this.donationButtonHref = href;
      };
    } else {
      //this is redundant assurance that donation prompt will not come up if this.paidFor is true
      this.display_donation = false;
      this.donationButtonHref = href;
      this.openWindow();
    };
  };

  onDonationValueChange(): void {
    this.customDonationAmount.valueChanges.subscribe(val => {
      this.donationOrder.price = val.amount;
    });
  };

  openWindow() {
    window.open(this.donationButtonHref);
  };

  handlePayment() {
    if (this.paidFor) {
      //alert('Thank you!');
      //considered prompting user for every download, but seemed obnoxious from user side, so after one donation, won't prompt again
      //this.paidFor = false;
      //hide display
      this.display_donation = !this.display_donation;
    };
    if (this.donationButtonHref.length > 0) {
      this.openWindow();
    };
  };

  constructor() { }

  ngOnInit() {
    this.onDonationValueChange();

    paypal
    .Buttons({
      createOrder: (data, actions) => {
        return actions.order.create({
          purchase_units: [
            {
              description: this.donationOrder.description,
              amount: {
                currency_code: 'USD',
                value: this.donationOrder.price
              }
            }
          ],
          application_context: {
            shipping_preference: "NO_SHIPPING"
          }
        });
      },
      onApprove: async (data, actions) => {
        const order = await actions.order.capture();
        this.paidFor = true;
        this.handlePayment();
        //console.log('this.paidFor is now: ', this.paidFor);
      },
      onError: err => {
        console.log(err);
      }
    })
    .render(this.paypalElement.nativeElement);
  }
}
