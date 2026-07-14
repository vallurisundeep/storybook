.ads-datepicker .p-datepicker {
  display: flex;
  position: relative;
  width: 100%;
}

.ads-datepicker .p-datepicker-input {
  padding-right: calc(var(--ads-size-space-300) * 2 + 1rem);
}

.ads-datepicker .p-datepicker-input-icon-container {
  background: transparent;
  border: none;
  color: var(--ads-color-medium-gray);
  cursor: pointer;
  display: flex;
  padding: 0;
  position: absolute;
  right: var(--ads-size-space-300);
  top: 50%;
  transform: translateY(-50%);
}

.p-datepicker-panel.ads-datepicker-panel {
  min-width: min(100%, 24rem) !important;
  width: 24rem;
  background-color: var(--ads-color-white);
  border: var(--ads-size-stroke-border) solid var(--ads-color-light-gray);
  border-radius: var(--ads-size-radius-200);
  box-shadow: 0 4px 12px color-mix(in srgb, var(--ads-color-black), transparent 88%);
  font-family: var(--ads-typography-family-sans);
  margin-top: var(--ads-size-space-100);
  padding: var(--ads-size-space-300);
}

.ads-datepicker-panel .p-datepicker-header {
  align-items: center;
  border-bottom: var(--ads-size-stroke-border) solid var(--ads-color-light-gray);
  display: flex;
  gap: var(--ads-size-space-200);
  justify-content: space-between;
  padding-bottom: var(--ads-size-space-200);
}

.ads-datepicker-panel .p-datepicker-title {
  display: flex;
  gap: var(--ads-size-space-100);
}

.ads-datepicker-panel .p-datepicker-select-month,
.ads-datepicker-panel .p-datepicker-select-year {
  background: transparent;
  border: none;
  border-radius: var(--ads-size-radius-100);
  color: var(--ads-color-midnight-blue);
  cursor: pointer;
  font-family: inherit;
  font-size: var(--ads-typography-scale-02);
  font-weight: var(--ads-typography-weight-semibold);
  padding: var(--ads-size-space-100);
  transition: background-color 0.25s ease-in-out;
}

.ads-datepicker-panel .p-datepicker-select-month:hover,
.ads-datepicker-panel .p-datepicker-select-year:hover {
  background-color: var(--ads-color-light-gray);
}

.ads-datepicker-panel .p-datepicker-prev-button,
.ads-datepicker-panel .p-datepicker-next-button {
  align-items: center;
  background: transparent;
  border: none;
  border-radius: var(--ads-size-radius-full);
  color: var(--ads-color-anthracite-gray);
  cursor: pointer;
  display: inline-flex;
  height: 2rem;
  justify-content: center;
  transition: background-color 0.25s ease-in-out;
  width: 2rem;
}

.ads-datepicker-panel .p-datepicker-prev-button:hover,
.ads-datepicker-panel .p-datepicker-next-button:hover {
  background-color: var(--ads-color-light-gray);
}

.ads-datepicker-panel .p-datepicker-calendar {
  border-collapse: collapse;
  margin-top: var(--ads-size-space-200);
  width: 100%;
}

.ads-datepicker-panel .p-datepicker-calendar th {
  color: var(--ads-color-medium-gray);
  font-size: var(--ads-typography-scale-01);
  font-weight: var(--ads-typography-weight-medium);
  padding: var(--ads-size-space-100);
  text-align: center;
  text-transform: uppercase;
}

.ads-datepicker-panel .p-datepicker-day-cell {
  padding: var(--ads-size-space-050);
  text-align: center;
}

.ads-datepicker-panel .p-datepicker-day {
  align-items: center;
  border-radius: var(--ads-size-radius-full);
  color: var(--ads-color-anthracite-gray);
  cursor: pointer;
  display: flex;
  font-size: var(--ads-typography-scale-02);
  height: 2.25rem;
  justify-content: center;
  margin-inline: auto;
  transition: background-color 0.25s ease-in-out;
  width: 2.25rem;
}

.ads-datepicker-panel .p-datepicker-day:hover {
  background-color: var(--ads-color-light-gray);
}

.ads-datepicker-panel .p-datepicker-day-selected,
.ads-datepicker-panel .p-datepicker-day-selected:hover {
  background-color: var(--ads-color-surface-brand);
  color: var(--ads-color-foreground-brand);
}

.ads-datepicker-panel .p-datepicker-day-selected-range,
.ads-datepicker-panel .p-datepicker-day-selected-range:hover {
  background-color: color-mix(in srgb, var(--ads-color-light-blue), transparent 70%);
  color: var(--ads-color-anthracite-gray);
}

.ads-datepicker-panel .p-datepicker-today > .p-datepicker-day:not(.p-datepicker-day-selected) {
  box-shadow: inset 0 0 0 var(--ads-size-stroke-border) var(--ads-color-medium-gray);
}

.ads-datepicker-panel .p-datepicker-other-month .p-datepicker-day {
  color: var(--ads-color-medium-gray);
  opacity: 0.6;
}

.ads-datepicker-panel .p-datepicker-month-view,
.ads-datepicker-panel .p-datepicker-year-view {
  display: grid;
  gap: var(--ads-size-space-100);
  grid-template-columns: repeat(3, 1fr);
  margin-top: var(--ads-size-space-200);
}

.ads-datepicker-panel .p-datepicker-month,
.ads-datepicker-panel .p-datepicker-year {
  border-radius: var(--ads-size-radius-100);
  color: var(--ads-color-anthracite-gray);
  cursor: pointer;
  font-size: var(--ads-typography-scale-02);
  padding: var(--ads-size-space-200);
  text-align: center;
  transition: background-color 0.25s ease-in-out;
}

.ads-datepicker-panel .p-datepicker-month:hover,
.ads-datepicker-panel .p-datepicker-year:hover {
  background-color: var(--ads-color-light-gray);
}

.ads-datepicker-panel .p-datepicker-month-selected,
.ads-datepicker-panel .p-datepicker-year-selected {
  background-color: var(--ads-color-surface-brand);
  color: var(--ads-color-foreground-brand);
}



import type { Meta, StoryObj } from "@storybook/angular";

import { AdsDatepicker } from "./datepicker";

const meta: Meta<AdsDatepicker> = {
  title: "Components/Forms/Datepicker",
  component: AdsDatepicker,
  argTypes: {
    mode: {
      control: "select",
      options: ["single", "range"],
      description: "Single date or start/end range selection",
    },
    disabled: { control: "boolean" },
    invalid: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<AdsDatepicker>;

export const Default: Story = {
  args: {
    label: "Start Date",
  },
};

export const Range: Story = {
  args: {
    label: "Award Date",
    mode: "range",
  },
};

export const Disabled: Story = {
  args: {
    label: "End Date",
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
import { DatePickerModule } from "primeng/datepicker";
import { adsFieldId, AdsValueAccessor } from "../valueAccessor";

export type DatepickerMode = "single" | "range";

export type DatepickerValue = Date | Date[] | null;

@Component({
  selector: "ads-datepicker",
  standalone: true,
  imports: [FormsModule, DatePickerModule],
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AdsDatepicker),
      multi: true,
    },
  ],
  template: `
    <div
      class="ads-field ads-datepicker"
      [class.ads-field--invalid]="invalid()"
      [class.ads-field--disabled]="isDisabled()"
      (focusout)="onTouched()"
    >
      @if (label()) {
        <label class="ads-field__label" [for]="fieldId">{{ label() }}</label>
      }
      <p-datepicker
        [inputId]="fieldId"
        [selectionMode]="mode() === 'range' ? 'range' : 'single'"
        dateFormat="mm/dd/yy"
        [placeholder]="effectivePlaceholder()"
        [showIcon]="true"
        iconDisplay="input"
        [readonlyInput]="mode() === 'range'"
        [disabled]="isDisabled()"
        [ngModel]="innerValue()"
        (ngModelChange)="handleChange($event)"
        panelStyleClass="ads-datepicker-panel"
      />
    </div>
  `,
  styleUrls: ["../field.css", "./datepicker.css"],
})
export class AdsDatepicker extends AdsValueAccessor<DatepickerValue> {
  /** Label rendered above the date picker. */
  label = input<string>();

  /** Single date or start/end range selection. Defaults to 'single'. */
  mode = input<DatepickerMode>("single");

  /** Placeholder text. Defaults to 'MM/DD/YYYY', or 'Start Date — End Date' in range mode. */
  placeholder = input<string>();

  /** Disables the date picker. */
  disabled = input<boolean>(false);

  /** Applies the invalid (error) style. */
  invalid = input<boolean>(false);

  /** Emits the selected date, or [start, end] in range mode. */
  valueChange = output<DatepickerValue>();

  protected readonly fieldId = adsFieldId("ads-datepicker");
  protected readonly isDisabled = computed(
    () => this.disabled() || this.cvaDisabled(),
  );
  protected readonly effectivePlaceholder = computed(
    () =>
      this.placeholder() ??
      (this.mode() === "range" ? "Start Date — End Date" : "MM/DD/YYYY"),
  );

  protected handleChange(value: DatepickerValue): void {
    this.commitValue(value);
    this.valueChange.emit(value);
  }
}
