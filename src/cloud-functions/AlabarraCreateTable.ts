import { AlabarraResponse } from "./AlabarraResponse";

/**
 * API to create a new table
 */
 export interface AlabarraCreateTableData {

    /**
     * Table name
     */
    table_name: string;
}

/**
 * Represents the result of a call to the Create Order API
 */
export interface AlabarraCreateTableResponse extends AlabarraResponse {

    result: {
        /**
         * The ID of the created table, which is in turn its visible name
         */
        table_id: string
    }
}