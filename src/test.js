.ads-select .p-select {
  align-items: center;
  cursor: pointer;
  display: flex;
  gap: var(--ads-size-space-200);
}

.ads-select .p-select-label {
  background: transparent;
  border: none;
  color: inherit;
  flex: 1 1 auto;
  font: inherit;
  overflow: hidden;
  padding: 0;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.ads-select .p-select-label.p-placeholder {
  color: var(--ads-color-medium-gray);
}

.ads-select .p-select-dropdown,
.ads-select .p-select-clear-icon {
  align-items: center;
  background: transparent;
  border: none;
  color: var(--ads-color-anthracite-gray);
  display: flex;
  padding: 0;
}

.ads-select .p-select-dropdown-icon,
.ads-select .p-select-clear-icon {
  height: 0.875rem;
  width: 0.875rem;
}

.p-select-overlay.ads-select-overlay {
  background-color: var(--ads-color-white);
  border: var(--ads-size-stroke-border) solid var(--ads-color-light-gray);
  border-radius: var(--ads-size-radius-200);
  box-shadow: 0 4px 12px color-mix(in srgb, var(--ads-color-black), transparent 88%);
  font-family: var(--ads-typography-family-sans);
  margin-top: var(--ads-size-space-100);
  overflow: hidden;
}

.ads-select-overlay .p-select-list {
  display: flex;
  flex-direction: column;
  gap: var(--ads-size-space-050);
  list-style: none;
  margin: 0;
  padding: var(--ads-size-space-100);
}

.ads-select-overlay .p-select-option {
  align-items: center;
  border-radius: var(--ads-size-radius-100);
  color: var(--ads-color-anthracite-gray);
  cursor: pointer;
  display: flex;
  font-size: var(--ads-typography-scale-02);
  padding-block: var(--ads-size-space-200);
  padding-inline: var(--ads-size-space-300);
  transition: background-color 0.25s ease-in-out;
}

.ads-select-overlay .p-select-option:hover {
  background-color: var(--ads-color-light-gray);
}

.ads-select-overlay .p-select-option[aria-selected="true"] {
  background-color: color-mix(in srgb, var(--ads-color-light-blue), transparent 75%);
  font-weight: var(--ads-typography-weight-medium);
}

.ads-select-overlay .p-select-empty-message {
  color: var(--ads-color-medium-gray);
  font-size: var(--ads-typography-scale-02);
  padding-block: var(--ads-size-space-200);
  padding-inline: var(--ads-size-space-300);
}



import type { Meta, StoryObj } from "@storybook/angular";

import { AdsSelect } from "./select";

const crewbases = [
  { label: "Boston", value: "BOS" },
  { label: "New York", value: "NYP" },
  { label: "Philadelphia", value: "PHL" },
  { label: "Washington", value: "WAS" },
  { label: "Chicago", value: "CHI" },
];

const meta: Meta<AdsSelect> = {
  title: "Components/Forms/Select",
  component: AdsSelect,
  argTypes: {
    disabled: { control: "boolean" },
    invalid: { control: "boolean" },
    clearable: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<AdsSelect>;

export const Default: Story = {
  args: {
    label: "Crewbase",
    placeholder: "Select Crewbase",
    options: crewbases,
    optionLabel: "label",
    optionValue: "value",
  },
};

export const PrimitiveOptions: Story = {
  args: {
    label: "Craft",
    placeholder: "Select Craft",
    options: ["Engineer", "Conductor", "Assistant Conductor"],
  },
};

export const Clearable: Story = {
  args: {
    label: "Status",
    options: ["Open", "Awarded", "Closed"],
    clearable: true,
  },
};

export const Disabled: Story = {
  args: {
    label: "Crewbase",
    placeholder: "Select Crewbase",
    options: crewbases,
    optionLabel: "label",
    optionValue: "value",
    disabled: true,
  },
};



import {
  Component,
  computed,
  forwardRef,
  input,
  output,
  ViewEncapsulation,
} from "@angular/core";
import { FormsModule, NG_VALUE_ACCESSOR } from "@angular/forms";
import { SelectModule } from "primeng/select";
import { adsFieldId, AdsValueAccessor } from "../valueAccessor";

@Component({
  selector: "ads-select",
  standalone: true,
  imports: [FormsModule, SelectModule],
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AdsSelect),
      multi: true,
    },
  ],
  template: `
    <div
      class="ads-field ads-select"
      [class.ads-field--invalid]="invalid()"
      [class.ads-field--disabled]="isDisabled()"
      (focusout)="onTouched()"
    >
      @if (label()) {
        <label class="ads-field__label" [for]="fieldId">{{ label() }}</label>
      }
      <p-select
        [inputId]="fieldId"
        [options]="options()"
        [optionLabel]="optionLabel()"
        [optionValue]="optionValue()"
        [placeholder]="placeholder()"
        [disabled]="isDisabled()"
        [showClear]="clearable()"
        [ngModel]="innerValue()"
        (ngModelChange)="handleChange($event)"
        panelStyleClass="ads-select-overlay"
      />
    </div>
  `,
  styleUrls: ["../field.css", "./select.css"],
})
export class AdsSelect extends AdsValueAccessor<unknown> {
  /** Label rendered above the select. */
  label = input<string>();

  /** Choices shown in the dropdown. Required. */
  options = input.required<unknown[]>();

  /** Property used as the display label when options are objects. */
  optionLabel = input<string>();

  /** Property used as the selected value when options are objects. */
  optionValue = input<string>();

  /** Placeholder shown while nothing is selected. Defaults to 'Select'. */
  placeholder = input<string>("Select");

  /** Shows a clear icon when a value is selected. */
  clearable = input<boolean>(false);

  /** Disables the select. */
  disabled = input<boolean>(false);

  /** Applies the invalid (error) style. */
  invalid = input<boolean>(false);

  /** Emits the selected value. */
  valueChange = output<unknown>();

  protected readonly fieldId = adsFieldId("ads-select");
  protected readonly isDisabled = computed(
    () => this.disabled() || this.cvaDisabled(),
  );

  protected handleChange(value: unknown): void {
    this.commitValue(value);
    this.valueChange.emit(value);
  }
}
