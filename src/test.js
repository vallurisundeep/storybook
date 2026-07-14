.ads-action-menu {
  display: inline-flex;
}

.p-menu.ads-menu {
  background-color: var(--ads-color-white);
  border: var(--ads-size-stroke-border) solid var(--ads-color-light-gray);
  border-radius: var(--ads-size-radius-200);
  box-shadow: 0 4px 12px color-mix(in srgb, var(--ads-color-black), transparent 88%);
  font-family: var(--ads-typography-family-sans);
  margin-top: var(--ads-size-space-100);
  min-width: 10rem;
  padding: var(--ads-size-space-100);
}

.ads-menu .p-menu-list {
  display: flex;
  flex-direction: column;
  gap: var(--ads-size-space-050);
  list-style: none;
  margin: 0;
  padding: 0;
}

.ads-menu .p-menu-item-content {
  border-radius: var(--ads-size-radius-100);
  transition: background-color 0.25s ease-in-out;
}

.ads-menu .p-menu-item-content:hover {
  background-color: var(--ads-color-light-gray);
}

.ads-menu .p-menu-item-link {
  align-items: center;
  color: var(--ads-color-anthracite-gray);
  cursor: pointer;
  display: flex;
  font-size: var(--ads-typography-scale-02);
  gap: var(--ads-size-space-200);
  padding-block: var(--ads-size-space-200);
  padding-inline: var(--ads-size-space-300);
  text-decoration: none;
}

.ads-menu .p-menu-item.p-disabled {
  opacity: 0.5;
  pointer-events: none;
}





import type { Meta, StoryObj } from "@storybook/angular";

import { AdsActionMenu } from "./actionMenu";

const meta: Meta<AdsActionMenu> = {
  title: "Components/Forms/Action Menu",
  component: AdsActionMenu,
};

export default meta;
type Story = StoryObj<AdsActionMenu>;

export const Default: Story = {
  args: {
    label: "Action",
    items: [
      { id: "view", label: "View Details" },
      { id: "edit", label: "Edit" },
      { id: "export", label: "Export" },
      { id: "delete", label: "Delete", disabled: true },
    ],
  },
};






import {
  Component,
  computed,
  input,
  output,
  ViewEncapsulation,
} from "@angular/core";
import type { MenuItem } from "primeng/api";
import { MenuModule } from "primeng/menu";
import { AdsButton } from "@/components/buttons/button/button";

export interface ActionMenuItem {
  id?: string;
  label: string;
  disabled?: boolean;
}

@Component({
  selector: "ads-action-menu",
  standalone: true,
  imports: [AdsButton, MenuModule],
  encapsulation: ViewEncapsulation.None,
  template: `
    <div class="ads-action-menu">
      <ads-button
        [label]="label()"
        type="outline"
        trailingIcon="mdi:chevron-down"
        (onClick)="menu.toggle($event)"
      />
      <p-menu #menu [model]="menuModel()" [popup]="true" styleClass="ads-menu" />
    </div>
  `,
  styleUrls: ["./actionMenu.css"],
})
export class AdsActionMenu {
  /** Text on the trigger button. Defaults to 'Action'. */
  label = input<string>("Action");

  /** Menu entries. Required. */
  items = input.required<ActionMenuItem[]>();

  /** Emits the chosen item. */
  onSelect = output<ActionMenuItem>();

  protected readonly menuModel = computed<MenuItem[]>(() =>
    this.items().map((item) => ({
      label: item.label,
      disabled: item.disabled,
      command: () => this.onSelect.emit(item),
    })),
  );
}
