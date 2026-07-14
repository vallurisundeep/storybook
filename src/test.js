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
