export interface FormItem {
  label: string;
  required: boolean;
  value: string;
  inputType?: "text" | "number" | "date" | "email" | "url" | "textarea";
  icon?: string;
  autocomplete?:
    | "given-name"
    | "additional-name"
    | "family-name"
    | "email"
    | "organization"
    | "organization-title"
    | "street-address"
    | "address-line1"
    | "address-line2"
    | "address-line3"
    | "address-level1"
    | "address-level2"
    | "address-level3"
    | "country-name"
    | "postal-code"
    | "bday"
    | "tel"
    | "url";
}
export interface FormInterface {
  [index: string]: FormItem;
}

export interface Contact {
  id: string;
  firstName: string;
  surname: string;
  company?: string | null | undefined;
  jobTitle?: string | null | undefined;
  email1: string;
  email2?: string | null | undefined;
  phoneNumber1: string;
  phoneNumber2?: string | null | undefined;
  country?: string | null | undefined;
  streetAddressLine1?: string | null | undefined;
  streetAddressLine2?: string | null | undefined;
  city?: string | null | undefined;
  state?: string | null | undefined;
  birthday?: string | null | undefined;
  website?: string | null | undefined;
  notes?: string | null | undefined;
}

type SortStringToBooleanFn = (arg1: string, arg2: string) => boolean;
type SortStringToNumberFn = (arg1: string, arg2: string) => number;
type SortNumberFn = (arg1: number, arg2: number) => number;

export interface TableColumn {
  name: string;
  label: string;
  align?: string;
  sortable?: boolean;
  sort?: SortStringToBooleanFn | SortNumberFn | SortStringToNumberFn;
  field: string | ((row: TableColumn) => unknown) | unknown;
  required?: boolean; // Use of `required` is important to avoid breaking QTable
  format?: unknown;
}

export interface VirtualScrollCtx {
  to: number;
  ref: {
    refresh: () => void;
  };
}
