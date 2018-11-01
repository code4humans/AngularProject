import { Component, OnInit, TemplateRef, Input } from '@angular/core';
import { leftToRightAnimation, rightToLeftAnimation } from '../../animations/enter-leave/enter-leave.animation';

@Component({
  selector: 'app-switch-view',
  templateUrl: './switch-view.component.html',
  styleUrls: ['./switch-view.component.scss'],
  animations: [leftToRightAnimation, rightToLeftAnimation]
})
export class SwitchViewComponent implements OnInit {

  static readonly CARD_KEY = "cardViewTemplate";
	static readonly TABLE_KEY = "tableViewTemplate";

	@Input() templates: Map<string, TemplateRef<any>>;
	@Input() defaultTemplateKey?: string;
  isCardViewVisible: boolean = true;

  constructor() { }

  ngOnInit() {
    if (this.defaultTemplateKey) {
			this.isCardViewVisible = SwitchViewComponent.CARD_KEY === this.defaultTemplateKey;
		}
  }

  getCardKey(): string {
		return SwitchViewComponent.CARD_KEY;
	}
	getTableKey(): string {
		return SwitchViewComponent.TABLE_KEY;
	}

}
