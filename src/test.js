.ads-field {
  display: flex;
  flex-direction: column;
  font-family: var(--ads-typography-family-sans);
  gap: var(--ads-size-space-100);
  min-width: 0;
}

.ads-field__label {
  color: var(--ads-color-midnight-blue);
  font-size: var(--ads-typography-scale-02);
  font-weight: var(--ads-typography-weight-medium);
  line-height: 1.4;
}

.ads-field__control,
.ads-field .p-select,
.ads-field .p-datepicker-input {
  background-color: var(--ads-color-white);
  border: var(--ads-size-stroke-border) solid var(--ads-color-light-gray-brand);
  border-radius: var(--ads-size-radius-200);
  color: var(--ads-color-anthracite-gray);
  font-family: var(--ads-typography-family-sans);
  font-size: var(--ads-typography-scale-02);
  line-height: 1.5;
  padding-block: var(--ads-size-space-200);
  padding-inline: var(--ads-size-space-300);
  transition:
    border-color 0.25s ease-in-out,
    box-shadow 0.25s ease-in-out;
  width: 100%;
}

.ads-field__control::placeholder,
.ads-field .p-datepicker-input::placeholder {
  color: var(--ads-color-medium-gray);
}

.ads-field__control:focus,
.ads-field .p-select:focus-within,
.ads-field .p-datepicker-input:focus {
  border-color: var(--ads-color-light-blue);
  box-shadow: 0 0 0 var(--ads-size-stroke-focus-ring)
    color-mix(in srgb, var(--ads-color-light-blue), transparent 60%);
  outline: none;
}

.ads-field--invalid .ads-field__control,
.ads-field--invalid .p-select,
.ads-field--invalid .p-datepicker-input {
  border-color: var(--ads-color-danger-500);
}

.ads-field--disabled .ads-field__label {
  color: var(--ads-color-medium-gray);
}

.ads-field__control:disabled,
.ads-field .p-select.p-disabled,
.ads-field .p-datepicker-input:disabled {
  background-color: color-mix(
    in srgb,
    var(--ads-color-light-gray),
    var(--ads-color-white) 50%
  );
  color: var(--ads-color-medium-gray);
  cursor: not-allowed;
}



import type { Meta, StoryObj } from "@storybook/angular";
import { moduleMetadata } from "@storybook/angular";

import { AdsActionMenu } from "./actionMenu/actionMenu";
import { AdsDatepicker } from "./datepicker/datepicker";
import { AdsInput } from "./input/input";
import { AdsSelect } from "./select/select";

const meta: Meta = {
  title: "Components/Forms/Search Example",
  decorators: [
    moduleMetadata({
      imports: [AdsActionMenu, AdsDatepicker, AdsInput, AdsSelect],
    }),
  ],
};

export default meta;
type Story = StoryObj;

export const Search: Story = {
  render: () => ({
    props: {
      crewbases: ["Boston", "New York", "Philadelphia", "Washington"],
      crafts: ["Engineer", "Conductor", "Assistant Conductor"],
      statuses: ["Open", "Awarded", "Closed"],
      actions: [
        { id: "view", label: "View Details" },
        { id: "edit", label: "Edit" },
        { id: "export", label: "Export" },
      ],
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 3rem; padding: 1rem;">
        <div style="max-width: 20rem;">
          <ads-select label="Crewbase" placeholder="Select Crewbase" [options]="crewbases"></ads-select>
        </div>

        <div style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 1.25rem;">
          <ads-input label="Name" placeholder="Name"></ads-input>
          <ads-input label="SAP ID" placeholder="SAP ID"></ads-input>
          <ads-select label="Craft" placeholder="Select Craft" [options]="crafts"></ads-select>
          <ads-datepicker label="Start Date"></ads-datepicker>
          <ads-datepicker label="End Date"></ads-datepicker>
        </div>

        <div style="display: flex; align-items: flex-end; gap: 1.25rem;">
          <ads-action-menu label="Action" [items]="actions"></ads-action-menu>
          <div style="flex: 1;">
            <ads-select label="Crew Base" [options]="crewbases"></ads-select>
          </div>
          <div style="flex: 1;">
            <ads-input label="Bulletin ID" placeholder="Search"></ads-input>
          </div>
          <div style="flex: 1;">
            <ads-select label="Status" [options]="statuses"></ads-select>
          </div>
          <div style="flex: 1.5;">
            <ads-datepicker label="Award Date" mode="range"></ads-datepicker>
          </div>
        </div>
      </div>
    `,
  }),
};





import { signal } from "@angular/core";
import type { ControlValueAccessor } from "@angular/forms";

let nextFieldId = 0;

export function adsFieldId(prefix: string): string {
  nextFieldId += 1;
  return `${prefix}-${nextFieldId}`;
}

export abstract class AdsValueAccessor<T> implements ControlValueAccessor {
  protected readonly innerValue = signal<T | null>(null);
  protected readonly cvaDisabled = signal(false);

  private onChange: (value: T | null) => void = () => {};
  protected onTouched: () => void = () => {};

  writeValue(value: T | null): void {
    this.innerValue.set(value);
  }

  registerOnChange(fn: (value: T | null) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.cvaDisabled.set(isDisabled);
  }

  protected commitValue(value: T | null): void {
    this.innerValue.set(value);
    this.onChange(value);
  }
}
