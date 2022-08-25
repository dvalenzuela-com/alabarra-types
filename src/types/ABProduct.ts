import { DocumentReference } from "firebase/firestore";

/**
 * Status of each product
 */
 export enum ABProductStatus {

    /**
     * Product is active and in stock
     */
    ACTIVE = 'ACTIVE',

    /**
     * Produc is inactive
     */
    INACTIVE = 'INACTIVE'
}

/**
 * Type of option, such as single selection, multiple selection, etc.
 */
export enum ABProductOptionsType {

    /**
     * Single option selection, to be represented by radio buttons
     */
    SINGLE_SELECTION = 'SINGLE_SELECTION',

    /**
     * Multiple option selection, to be represented by checkboxes
     */
    MULTIPLE_SELECTION = 'MULTIPLE_SELECTION'
}

/**
 * Generic container for product options
 */
export interface ABProductOptionsPossibleValues {

    /**
     * Customer-facing name of the possible value
     */
    title: string;

    /**
     * Impact this option has on price. This will be added/substracted to/from the unit price.
     */
    price_adjustment: number;
}

export type ABProductOptionMultipleSelectionSelectedValues = boolean[];
export type ABProductOptionSingleSelectionSelectedValue = string;

export interface ABProductOptionMultipleSelection extends ABProductOption {

    /**
     * Which possible values are checked
     */
    default_values: ABProductOptionMultipleSelectionSelectedValues;

    /**
     * Maximum number of selections. if undefined, unlimited selection is possible
     */
    max_selection?: number;

    /**
     * Minimum number of selections. Cannot be greater than max_selection
     */
    min_selection: number;
}

export interface ABProductOptionSingleSelection extends ABProductOption {

    /**
     * Title of the default value
     */
     default_value: ABProductOptionSingleSelectionSelectedValue;
}

/**
 * Represents something that can be configured for the product
 */
 export interface ABProductOption {

    /**
     * Customer-facing title of the option
     */
    title: string;

    /**
     * Type of option; Single selection, multiple selection, etc.
     */
    type: ABProductOptionsType;

    /**
     * Array of the possible values this option can take
     */
    possible_values: ABProductOptionsPossibleValues[];
}


/**
 * Represents a product that can be ordered
 */
 export interface ABProduct extends ABProductData {

    /**
    * id of the product
    */
    id: string;

    /**
     * path of the product
     */
    path: string;

    /**
     * Date of product creation in the server
     */
    created_at: Date;

    /**
     * Last time the product was modified. Null in case the product was never modified
     */
    last_updated_at: Date | null;
}

/**
 * Represents a product that can be ordered
 */
 export interface ABProductData {

    /**
     * Current status of the product
     */
    status: ABProductStatus;

    /**
     * Title or name of the product
     */
    title: string;

    /**
     * Short description of the product
     */
    description: string;

    /**
     * List price of the product
     */
    price: number;

    /**
     * Ref to the category where the product resides, null otherwise. n:1 relationship
     */
    category: string | null;

    /**
     * Url to the hero image of thep roduct
     */
    image_url: string;

    /**
     * Date of product creation in the server
     */
    created_at: any;

    /**
     * Last time the product was modified. Null in case the product was never modified
     */
    last_updated_at: any;

    /**
     * Possible options to configure the product
     */
    options?: ABProductOption[];
}