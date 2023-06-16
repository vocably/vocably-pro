import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { isEligibleForTrial, UserData } from '@vocably/model';
import { getAvailableProducts } from '../getAvailableProducts';
import { SubscriptionProduct } from '../paddle';

@Component({
  selector: 'app-subscription-product',
  templateUrl: './subscription-product.component.html',
  styleUrls: ['./subscription-product.component.scss'],
})
export class SubscriptionProductComponent implements OnInit {
  @Input() selectedProduct: SubscriptionProduct | null = null;
  @Input() userData!: UserData;
  @Output() select = new EventEmitter<SubscriptionProduct>();

  public isSubmitted = false;
  public subscriptionProducts: SubscriptionProduct[] = [];
  public isEligibleForTrial = false;

  constructor() {}

  ngOnInit(): void {
    this.subscriptionProducts = getAvailableProducts(this.userData);
    this.isEligibleForTrial = isEligibleForTrial(this.userData);
  }

  onSubmit() {
    this.isSubmitted = true;
    if (this.selectedProduct !== null) {
      this.select.emit(this.selectedProduct);
    }
  }
}
