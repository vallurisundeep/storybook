import type { Meta, StoryObj } from "@storybook/angular";

import { AdsInput } from "./input";

const meta: Meta<AdsInput> = {
  title: "Components/Forms/Input",
  component: AdsInput,
  argTypes: {
    type: {
      control: "select",
      options: ["text", "search", "email", "password", "number", "tel"],
      description: "Native input type",
    },
    disabled: { control: "boolean" },
    invalid: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<AdsInput>;

export const Default: Story = {
  args: {
    label: "Name",
    placeholder: "Name",
  },
};

export const WithoutLabel: Story = {
  args: {
    placeholder: "Search",
  },
};

export const Invalid: Story = {
  args: {
    label: "SAP ID",
    placeholder: "SAP ID",
    invalid: true,
  },
};

export const Disabled: Story = {
  args: {
    label: "SAP ID",
    placeholder: "SAP ID",
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
import { NG_VALUE_ACCESSOR } from "@angular/forms";
import { adsFieldId, AdsValueAccessor } from "../valueAccessor";

export type InputType = "text" | "search" | "email" | "password" | "number" | "tel";

@Component({
  selector: "ads-input",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AdsInput),
      multi: true,
    },
  ],
  template: `
    <div
      class="ads-field ads-input"
      [class.ads-field--invalid]="invalid()"
      [class.ads-field--disabled]="isDisabled()"
    >
      @if (label()) {
        <label class="ads-field__label" [for]="fieldId">{{ label() }}</label>
      }
      <input
        class="ads-field__control"
        [id]="fieldId"
        [type]="type()"
        [value]="innerValue() ?? ''"
        [placeholder]="placeholder()"
        [disabled]="isDisabled()"
        (input)="handleInput($event)"
        (blur)="onTouched()"
      />
    </div>
  `,
  styleUrls: ["../field.css"],
})
export class AdsInput extends AdsValueAccessor<string> {
  /** Label rendered above the input. */
  label = input<string>();

  /** Placeholder text. */
  placeholder = input<string>("");

  /** Native input type. Defaults to 'text'. */
  type = input<InputType>("text");

  /** Disables the input. */
  disabled = input<boolean>(false);

  /** Applies the invalid (error) style. */
  invalid = input<boolean>(false);

  /** Emits the text on every change. */
  valueChange = output<string>();

  protected readonly fieldId = adsFieldId("ads-input");
  protected readonly isDisabled = computed(
    () => this.disabled() || this.cvaDisabled(),
  );

  protected handleInput(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.commitValue(value);
    this.valueChange.emit(value);
  }
}

