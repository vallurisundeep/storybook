.ads-table table {
  border-collapse: collapse;
  width: 100%;
}

.ads-table .p-datatable-thead > tr > th,
.ads-table .p-datatable-tbody > tr > td {
  padding-block: var(--ads-size-space-200);
  padding-inline: var(--ads-size-space-300);
}

.ads-table--s .p-datatable-thead > tr > th,
.ads-table--s .p-datatable-tbody > tr > td {
  padding-block: var(--ads-size-space-100);
  padding-inline: var(--ads-size-space-200);
}

.ads-table--l .p-datatable-thead > tr > th,
.ads-table--l .p-datatable-tbody > tr > td {
  padding-block: var(--ads-size-space-300);
  padding-inline: var(--ads-size-space-400);
}

.ads-table .p-sortable-column:focus-visible {
  outline: var(--ads-size-stroke-border) solid var(--ads-color-light-blue);
  outline-offset: calc(-1 * var(--ads-size-stroke-border));
}

.ads-table .p-sortable-column-icon,
.ads-table sorticon svg {
  display: inline-block;
  height: 0.875rem;
  vertical-align: middle;
  width: 0.875rem;
}

.ads-table .p-datatable-loading-overlay {
  align-items: center;
  background-color: color-mix(in srgb, var(--ads-color-white), transparent 40%);
  display: flex;
  justify-content: center;
  position: absolute;
  inset: 0;
  z-index: 2;
}

.ads-table .p-datatable {
  position: relative;
}

.ads-table .p-paginator {
  align-items: center;
  color: var(--ads-color-hoffman-blue);
  display: flex;
  flex-wrap: wrap;
  font-family: var(--ads-typography-family-sans);
  font-size: var(--ads-typography-size-02);
  gap: var(--ads-size-space-100);
  justify-content: center;
  padding-block: var(--ads-size-space-200);
  padding-inline: var(--ads-size-space-300);
}

.ads-table .p-paginator button {
  align-items: center;
  background: transparent;
  border: none;
  border-radius: var(--ads-size-radius-100);
  color: var(--ads-color-hoffman-blue);
  cursor: pointer;
  display: inline-flex;
  height: 2rem;
  justify-content: center;
  min-width: 2rem;
  transition: background-color 0.25s ease-in-out;
}

.ads-table .p-paginator button:hover:not(:disabled),
.ads-table .p-paginator button:focus-visible {
  background-color: var(--ads-color-light-gray);
}

.ads-table .p-paginator button:disabled {
  cursor: default;
  opacity: 0.4;
}

.ads-table .p-paginator .p-paginator-page-selected {
  background-color: var(--ads-color-surface-brand);
  color: var(--ads-color-foreground-brand);
}

.ads-table .p-paginator svg {
  height: 1rem;
  width: 1rem;
}



import type { Meta, StoryObj } from "@storybook/angular";

import { AdsTable, TableColumn } from "./table";

const columns: TableColumn[] = [
  { field: "code", header: "Code", sortable: true },
  { field: "name", header: "Name", sortable: true },
  { field: "route", header: "Route" },
  { field: "status", header: "Status" },
];

const trains: Record<string, unknown>[] = [
  { code: "2150", name: "Acela", route: "Boston - Washington", status: "On time" },
  { code: "91", name: "Silver Star", route: "New York - Miami", status: "Delayed" },
  { code: "3", name: "Southwest Chief", route: "Chicago - Los Angeles", status: "On time" },
  { code: "79", name: "Carolinian", route: "New York - Charlotte", status: "Boarding" },
  { code: "422", name: "Texas Eagle", route: "San Antonio - Chicago", status: "On time" },
  { code: "7", name: "Empire Builder", route: "Chicago - Seattle", status: "Delayed" },
  { code: "97", name: "Silver Meteor", route: "New York - Miami", status: "On time" },
  { code: "50", name: "Cardinal", route: "New York - Chicago", status: "On time" },
  { code: "58", name: "City of New Orleans", route: "Chicago - New Orleans", status: "Boarding" },
  { code: "11", name: "Coast Starlight", route: "Seattle - Los Angeles", status: "On time" },
  { code: "48", name: "Lake Shore Limited", route: "Chicago - New York", status: "On time" },
  { code: "89", name: "Palmetto", route: "New York - Savannah", status: "Delayed" },
];

const meta: Meta<AdsTable> = {
  title: "Components/Table",
  component: AdsTable,
  argTypes: {
    size: {
      control: "select",
      options: ["s", "m", "l"],
      description: "Size of the table cells",
    },
    paginator: {
      control: "boolean",
      description: "Enables pagination",
    },
    striped: {
      control: "boolean",
      description: "Alternates the background of even rows",
    },
    loading: {
      control: "boolean",
      description: "Shows the loading overlay",
    },
    emptyMessage: {
      control: "text",
      description: "Message shown when the table has no rows",
    },
  },
};

export default meta;
type Story = StoryObj<AdsTable>;

export const Default: Story = {
  args: {
    value: trains.slice(0, 5),
    columns,
  },
};

export const WithTitle: Story = {
  args: {
    value: trains.slice(0, 5),
    columns,
    title: "Departures",
  },
};

export const Paginated: Story = {
  args: {
    value: trains,
    columns,
    paginator: true,
    rows: 5,
  },
};

export const Sizes: Story = {
  render: (args) => ({
    props: { ...args, value: trains.slice(0, 3), columns },
    template: `
      <div style="display: flex; flex-direction: column; gap: 2rem;">
        <ads-table [value]="value" [columns]="columns" size="s" title="Small"></ads-table>
        <ads-table [value]="value" [columns]="columns" size="m" title="Medium"></ads-table>
        <ads-table [value]="value" [columns]="columns" size="l" title="Large"></ads-table>
      </div>
    `,
  }),
};

export const Loading: Story = {
  args: {
    value: trains.slice(0, 5),
    columns,
    loading: true,
  },
};

export const Empty: Story = {
  args: {
    value: [],
    columns,
    emptyMessage: "No departures scheduled",
  },
};








import { CommonModule } from "@angular/common";
import { Component, input, output, ViewEncapsulation } from "@angular/core";
import { TableModule } from "primeng/table";

export interface TableColumn {
  field: string;
  header: string;
  sortable?: boolean;
}

export type TableSize = "s" | "m" | "l";

@Component({
  selector: "ads-table",
  standalone: true,
  imports: [CommonModule, TableModule],
  encapsulation: ViewEncapsulation.None,
  template: `
    <div
      class="ads-table w-full overflow-hidden border border-light-gray bg-white font-sans"
      [ngClass]="'ads-table--' + size()"
    >
      @if (title()) {
        <div
          class="border-b border-light-gray px-400 py-300 text-lg font-medium text-foreground-secondary"
        >
          {{ title() }}
        </div>
      }

      <p-table
        [value]="value()"
        [columns]="columns()"
        [paginator]="paginator()"
        [rows]="rows()"
        [rowsPerPageOptions]="paginator() ? rowsPerPageOptions() : undefined"
        [dataKey]="dataKey()"
        [loading]="loading()"
        [tableStyle]="{ width: '100%' }"
        (onRowSelect)="onRowSelect.emit($event.data)"
      >
        <ng-template #header let-cols>
          <tr class="bg-surface-brand text-foreground-brand">
            @for (col of cols; track col.field) {
              @if (col.sortable) {
                <th
                  [pSortableColumn]="col.field"
                  class="{{
                    cellPadding
                  }} cursor-pointer select-none text-left text-sm font-medium uppercase tracking-wide"
                >
                  {{ col.header }} <p-sortIcon [field]="col.field" />
                </th>
              } @else {
                <th
                  class="{{
                    cellPadding
                  }} text-left text-sm font-medium uppercase tracking-wide"
                >
                  {{ col.header }}
                </th>
              }
            }
          </tr>
        </ng-template>

        <ng-template #body let-row let-cols="columns">
          <tr
            class="border-b border-light-gray text-foreground-secondary transition-colors last:border-b-0 hover:bg-light-blue/20"
            [class.even:bg-light-gray/40]="striped()"
          >
            @for (col of cols; track col.field) {
              <td class="{{ cellPadding }} text-left text-sm">
                {{ row[col.field] }}
              </td>
            }
          </tr>
        </ng-template>

        <ng-template #emptymessage>
          <tr>
            <td
              [attr.colspan]="columns().length"
              class="px-400 py-600 text-center text-sm text-medium-gray"
            >
              {{ emptyMessage() }}
            </td>
          </tr>
        </ng-template>
      </p-table>
    </div>
  `,
  styleUrls: ["./table.css"],
})
export class AdsTable {
  value = input.required<Record<string, unknown>[]>();

  columns = input.required<TableColumn[]>();

  title = input<string>();

  size = input<TableSize>("m");

  paginator = input<boolean>(false);

  rows = input<number>(10);

  rowsPerPageOptions = input<number[]>([5, 10, 25]);

  striped = input<boolean>(true);

  loading = input<boolean>(false);

  dataKey = input<string>();

  emptyMessage = input<string>("No records found");

  onRowSelect = output<Record<string, unknown>>();

  public get cellPadding(): string {
    switch (this.size()) {
      case "s":
        return "px-200 py-100";
      case "l":
        return "px-400 py-300";
      default:
        return "px-300 py-200";
    }
  }
}




